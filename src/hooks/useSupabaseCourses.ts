import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Course, Category, CourseHighlight, CareerPath } from "@/data/courses";

// Transform DB overview [{heading, body}] to string[]
function mapOverview(raw: any): string[] {
  if (!Array.isArray(raw)) return [];
  // If already string[], return as-is
  if (raw.length > 0 && typeof raw[0] === "string") return raw;
  // If [{heading, body}], extract body text and split by newlines
  return raw.flatMap((item: any) => {
    if (typeof item === "string") return [item];
    const body = item?.body || "";
    return body.split("\n").filter((s: string) => s.trim());
  });
}

// Transform DB fee to {registration, yearlyFees}
function mapFee(raw: any): { registration: string; yearlyFees: { year: string; amount: string }[] } {
  if (!raw) return { registration: "", yearlyFees: [] };
  if (raw.yearlyFees) return raw; // already in expected format
  
  // If raw_table exists, parse the structured fee table
  if (raw.raw_table && typeof raw.raw_table === "string") {
    return parseFeeTable(raw.raw_table, raw.amount);
  }
  
  const amountStr: string = raw.amount || "";
  
  // If amount is a plain number (e.g. "300000"), format it as per-year fee
  if (/^\d+$/.test(amountStr.trim())) {
    const num = parseInt(amountStr, 10);
    const formatted = `₹${num.toLocaleString("en-IN")}`;
    return { registration: "", yearlyFees: [{ year: "Per Year", amount: formatted }] };
  }
  
  // Split on pattern like ", 2nd Year" or ", 3rd Year" or ", Internship"
  const entries = amountStr.match(/[^,]+(?:,\s*(?!\s*(?:\d+(?:st|nd|rd|th)\s+Year|Internship|Registration))[^,]*)*/gi) || [];
  
  const yearlyFees = entries.map((entry: string) => {
    const trimmed = entry.trim();
    const colonIdx = trimmed.indexOf(":");
    if (colonIdx === -1) return { year: trimmed, amount: trimmed };
    return {
      year: trimmed.substring(0, colonIdx).trim(),
      amount: trimmed.substring(colonIdx + 1).trim(),
    };
  }).filter(f => f.year);
  
  return { registration: raw.registration || "", yearlyFees };
}

// Parse Contentful fee table text into structured data
function parseFeeTable(tableText: string, fallbackAmount?: string): { registration: string; yearlyFees: { year: string; amount: string }[] } {
  const yearlyFees: { year: string; amount: string }[] = [];
  let registration = "";
  
  const lines = tableText.split("\n");
  for (const line of lines) {
    // Match patterns like "1st Year | 3,00,000" or "2nd Year | 3,00,000"
    const yearMatch = line.match(/(\d+(?:st|nd|rd|th)\s+Year)\s*\|\s*([\d,]+)/i);
    if (yearMatch) {
      const amt = parseInt(yearMatch[2].replace(/,/g, ""), 10);
      yearlyFees.push({ year: yearMatch[1], amount: `₹${amt.toLocaleString("en-IN")}` });
      continue;
    }
    // Match "Total | amount"  
    const totalMatch = line.match(/Total\s*\|\s*([\d,]+)/i);
    if (totalMatch && yearlyFees.length === 0) {
      const amt = parseInt(totalMatch[1].replace(/,/g, ""), 10);
      yearlyFees.push({ year: "Total", amount: `₹${amt.toLocaleString("en-IN")}` });
    }
    // Match registration fee
    const regMatch = line.match(/Registration Fee[^|]*\|\s*([\d,]+)/i) || line.match(/Registration Fee[^-]*-\s*INR\s*([\d,]+)/i);
    if (regMatch) {
      const amt = parseInt(regMatch[1].replace(/,/g, ""), 10);
      registration = `₹${amt.toLocaleString("en-IN")}`;
    }
  }
  
  // Fallback if no yearly fees found
  if (yearlyFees.length === 0 && fallbackAmount) {
    const num = parseInt(String(fallbackAmount).replace(/,/g, ""), 10);
    if (!isNaN(num) && num > 0) {
      yearlyFees.push({ year: "Per Year", amount: `₹${num.toLocaleString("en-IN")}` });
    }
  }
  
  return { registration, yearlyFees };
}

// Transform DB eligibility {criteria: "..."} to full shape
function mapEligibility(raw: any): Course["eligibility"] {
  if (!raw) return { primary: "", minMarks: null, extras: [], quizQuestions: [] };
  if (raw.quizQuestions) return raw; // already in expected format
  return {
    primary: raw.criteria || raw.primary || "",
    minMarks: raw.minMarks || raw.min_marks || null,
    extras: raw.extras || [],
    quizQuestions: raw.quizQuestions || raw.quiz_questions || [],
  };
}

// Transform highlights: handle both structured [{icon, title, ...}] and raw string arrays
function mapHighlights(raw: any): CourseHighlight[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter((item: any) => typeof item === "object" && item !== null && item.title).map((item: any, i: number) => ({
    number: item.number || String(i + 1).padStart(2, "0"),
    icon: item.icon || "sparkles",
    title: item.title || "",
    description: item.description || "",
  }));
}

// Transform careers: handle both structured [{icon, title, ...}] and raw string arrays
function mapCareers(raw: any): CareerPath[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter((item: any) => typeof item === "object" && item !== null && item.title).map((item: any) => ({
    icon: item.icon || "briefcase",
    title: item.title || "",
    description: item.description || "",
    demand: item.demand || "growing",
  }));
}

// Map Supabase snake_case row to camelCase Course interface
function mapCourseRow(row: any): Course {
  return {
    slug: row.slug,
    title: row.title,
    shortTitle: row.short_title,
    degree: row.degree || "",
    duration: row.duration || "",
    campus: row.campus || "",
    campusType: row.campus_type || "gcc",
    category: row.category || "",
    bannerImage: row.banner_image || "",
    hookLine: row.hook_line || "",
    overview: mapOverview(row.overview),
    statCallout: row.stat_callout || null,
    eligibility: mapEligibility(row.eligibility),
    highlights: mapHighlights(row.highlights),
    careers: mapCareers(row.careers),
    relatedPrograms: Array.isArray(row.related_programs) ? row.related_programs : [],
    fee: mapFee(row.fee),
    applyLink: row.apply_link || "",
    brochureLink: row.brochure_link || null,
    domainTheme: row.domain_theme || "tech",
  };
}

// Map Supabase row to Category interface
function mapCategoryRow(row: any): Category {
  return {
    slug: row.slug,
    title: row.title,
    shortTitle: row.short_title,
    subtitle: row.subtitle || "",
    bannerImage: row.banner_image || "",
    level: row.level || "undergraduate",
    campusType: row.campus_type || "gcc",
    programSlugs: Array.isArray(row.program_slugs) ? row.program_slugs : [],
    whyStudy: Array.isArray(row.why_study) ? row.why_study : [],
    domainTheme: row.domain_theme || "tech",
  };
}

export function useCourseBySlug(slug: string | undefined) {
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) { setIsLoading(false); return; }
    setIsLoading(true);
    
    supabase
      .from("courses")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) console.error("Course fetch error:", error);
        setCourse(data ? mapCourseRow(data) : null);
        setIsLoading(false);
      });
  }, [slug]);

  return { course, isLoading };
}

export function useCategoryBySlug(slug: string | undefined) {
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) { setIsLoading(false); return; }
    setIsLoading(true);

    supabase
      .from("categories")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) console.error("Category fetch error:", error);
        setCategory(data ? mapCategoryRow(data) : null);
        setIsLoading(false);
      });
  }, [slug]);

  return { category, isLoading };
}

// Find the category whose program_slugs contains the given course slug
export function useCategoryForCourse(courseSlug: string | undefined) {
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!courseSlug) { setIsLoading(false); return; }
    setIsLoading(true);

    supabase
      .from("categories")
      .select("*")
      .eq("is_published", true)
      .contains("program_slugs", JSON.stringify([courseSlug]))
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) console.error("Category for course error:", error);
        setCategory(data ? mapCategoryRow(data) : null);
        setIsLoading(false);
      });
  }, [courseSlug]);

  return { category, isLoading };
}

export function useCoursesByCategory(categorySlug: string | undefined) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!categorySlug) { setIsLoading(false); return; }
    setIsLoading(true);

    supabase
      .from("courses")
      .select("*")
      .eq("category", categorySlug)
      .eq("is_published", true)
      .then(({ data, error }) => {
        if (error) console.error("Courses by category error:", error);
        setCourses((data || []).map(mapCourseRow));
        setIsLoading(false);
      });
  }, [categorySlug]);

  return { courses, isLoading };
}

export function useRelatedCourses(slug: string | undefined, category: string | undefined, relatedSlugs: string[], limit = 3) {
  const [relatedCourses, setRelatedCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (!slug || !category) return;

    const fetchRelated = async () => {
      let results: Course[] = [];

      // First, fetch explicitly related programs
      if (relatedSlugs.length > 0) {
        const { data } = await supabase
          .from("courses")
          .select("*")
          .in("slug", relatedSlugs)
          .eq("is_published", true);
        if (data) results = data.map(mapCourseRow);
      }

      // If not enough, fill from same category
      if (results.length < limit) {
        const excludeSlugs = [slug, ...relatedSlugs];
        const { data } = await supabase
          .from("courses")
          .select("*")
          .eq("category", category)
          .eq("is_published", true)
          .not("slug", "in", `(${excludeSlugs.join(",")})`)
          .limit(limit - results.length);
        if (data) results = [...results, ...data.map(mapCourseRow)];
      }

      setRelatedCourses(results.slice(0, limit));
    };

    fetchRelated();
  }, [slug, category, relatedSlugs.join(","), limit]);

  return relatedCourses;
}

export function useAllCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("categories")
      .select("*")
      .eq("is_published", true)
      .then(({ data, error }) => {
        if (error) console.error("Categories fetch error:", error);
        setCategories((data || []).map(mapCategoryRow));
        setIsLoading(false);
      });
  }, []);

  return { categories, isLoading };
}
