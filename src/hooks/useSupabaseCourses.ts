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
function mapFee(raw: any): Course["fee"] {
  if (!raw) return { registration: "", yearlyFees: [] };
  if (raw.yearlyFees) return raw; // already in expected format
  
  // If raw_table exists, parse the structured fee table
  if (raw.raw_table && typeof raw.raw_table === "string") {
    const result = parseFeeTable(raw.raw_table, raw.amount);
    result.applicationFee = raw.application_fee || raw.applicationFee || undefined;
    result.perks = raw.perks || undefined;
    return result;
  }
  
  const amountStr: string = raw.amount || "";
  
  if (/^\d+$/.test(amountStr.trim())) {
    const num = parseInt(amountStr, 10);
    const formatted = `₹${num.toLocaleString("en-IN")}`;
    return { registration: "", yearlyFees: [{ year: "Per Year", amount: formatted }] };
  }
  
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

// Parse Contentful fee table text into structured data with full multi-column support
function parseFeeTable(tableText: string, fallbackAmount?: string): Course["fee"] {
  const yearlyFees: { year: string; amount: string }[] = [];
  let registration = "";
  
  const lines = tableText.split("\n").filter(l => l.trim());
  
  // Try to parse full multi-column table
  // Detect header line (contains "Particulars" or multiple | separators on first meaningful line)
  const headerLine = lines.find(l => l.includes("Particulars") || l.includes("Sl No"));
  let fullTable: { headers: string[]; rows: string[][]; totalRow?: string[] } | undefined;
  
  if (headerLine) {
    const headers = headerLine.split("|").map(h => h.trim()).filter(Boolean);
    const dataRows: string[][] = [];
    let totalRow: string[] | undefined;
    
    for (const line of lines) {
      if (line === headerLine) continue;
      const cells = line.split("|").map(c => c.trim()).filter(Boolean);
      if (cells.length < 2) continue;
      
      // Check if this is a total row
      if (cells.some(c => /^total$/i.test(c.replace(/\*/g, "").trim()))) {
        totalRow = cells;
      } else if (cells[0] && /^\d+$/.test(cells[0])) {
        dataRows.push(cells);
      }
    }
    
    if (dataRows.length > 0) {
      fullTable = { headers, rows: dataRows, totalRow };
    }
  }
  
  // Also extract simple yearly fees for fallback display
  for (const line of lines) {
    const yearMatch = line.match(/(\d+(?:st|nd|rd|th)\s+Year)\s*\|\s*([\d,]+)/i);
    if (yearMatch) {
      const amt = parseInt(yearMatch[2].replace(/,/g, ""), 10);
      yearlyFees.push({ year: yearMatch[1], amount: `₹${amt.toLocaleString("en-IN")}` });
      continue;
    }
    // Match installment patterns
    const installMatch = line.match(/(\d+)\s*\|\s*(.+?)\s*\|\s*([\d,]+)/);
    if (installMatch && !line.toLowerCase().includes("registration")) {
      const label = installMatch[2].trim();
      const amt = parseInt(installMatch[3].replace(/,/g, ""), 10);
      yearlyFees.push({ year: label, amount: `₹${amt.toLocaleString("en-IN")}` });
    }
    // Match registration fee
    const regMatch = line.match(/Registration Fee[^|]*\|\s*([\d,]+)/i);
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
  
  return { registration, yearlyFees, fullTable };
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

// Parse markdown-formatted string like "### __Title:\n\nDescription" into {title, description}
function parseMarkdownEntry(text: string): { title: string; description: string } | null {
  if (typeof text !== "string") return null;
  const match = text.match(/###\s*(?:__)?(.+?)(?::)?\s*\n+([\s\S]*)/);
  if (match) return { title: match[1].trim(), description: match[2].trim() };
  return null;
}

// Split a single markdown string containing multiple ### entries into individual items
function splitMarkdownEntries(text: string): string[] {
  const parts = text.split(/(?=###\s)/).filter(s => s.trim());
  return parts.length > 1 ? parts : [text];
}

// Expand raw array: if a single string contains multiple ### entries, split them
function expandRawArray(raw: any[]): any[] {
  const expanded: any[] = [];
  for (const item of raw) {
    if (typeof item === "string" && (item.match(/###/g) || []).length > 1) {
      expanded.push(...splitMarkdownEntries(item));
    } else {
      expanded.push(item);
    }
  }
  return expanded;
}

// Transform highlights: handle structured objects, markdown strings, or plain strings
function mapHighlights(raw: any): CourseHighlight[] {
  if (!Array.isArray(raw)) return [];
  const items = expandRawArray(raw);
  return items.map((item: any, i: number) => {
    if (typeof item === "object" && item !== null && item.title) {
      return {
        number: item.number || String(i + 1).padStart(2, "0"),
        icon: item.icon || "sparkles",
        title: item.title,
        description: item.description || "",
      };
    }
    if (typeof item === "string") {
      const parsed = parseMarkdownEntry(item);
      if (parsed) return { number: String(i + 1).padStart(2, "0"), icon: "sparkles", ...parsed };
    }
    return null;
  }).filter(Boolean) as CourseHighlight[];
}

// Transform careers: handle structured objects, markdown strings, or plain strings
function mapCareers(raw: any): CareerPath[] {
  if (!Array.isArray(raw)) return [];
  const items = expandRawArray(raw);
  return items.map((item: any) => {
    if (typeof item === "object" && item !== null && item.title) {
      return {
        icon: item.icon || "briefcase",
        title: item.title,
        description: item.description || "",
        demand: item.demand || "growing",
      };
    }
    if (typeof item === "string") {
      const parsed = parseMarkdownEntry(item);
      if (parsed) return { icon: "briefcase", ...parsed, demand: "growing" as const };
    }
    return null;
  }).filter(Boolean) as CareerPath[];
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
    learningJourney: Array.isArray(row.learning_journey) && row.learning_journey.length > 0 ? row.learning_journey : undefined,
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
// Falls back to matching by the course's category field if not found in program_slugs
export function useCategoryForCourse(courseSlug: string | undefined, courseCategorySlug?: string) {
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!courseSlug) { setIsLoading(false); return; }
    setIsLoading(true);

    const fetchCategory = async () => {
      // First try: find category whose program_slugs contains this course slug
      const { data: bySlug, error: err1 } = await supabase
        .from("categories")
        .select("*")
        .eq("is_published", true)
        .contains("program_slugs", JSON.stringify([courseSlug]))
        .maybeSingle();

      if (bySlug) {
        setCategory(mapCategoryRow(bySlug));
        setIsLoading(false);
        return;
      }

      // Fallback: find any category matching the course's category field
      if (courseCategorySlug) {
        const { data: byCat } = await supabase
          .from("categories")
          .select("*")
          .eq("is_published", true)
          .eq("level", courseCategorySlug === "bachelors" ? "undergraduate" : "postgraduate")
          .limit(1)
          .maybeSingle();

        if (byCat) {
          setCategory(mapCategoryRow(byCat));
          setIsLoading(false);
          return;
        }
      }

      if (err1) console.error("Category for course error:", err1);
      setCategory(null);
      setIsLoading(false);
    };

    fetchCategory();
  }, [courseSlug, courseCategorySlug]);

  return { category, isLoading };
}

export function useCoursesByCategory(categorySlug: string | undefined) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!categorySlug) { setIsLoading(false); return; }
    setIsLoading(true);

    const fetchCourses = async () => {
      // First try: direct match on courses.category
      const { data: direct } = await supabase
        .from("courses")
        .select("*")
        .eq("category", categorySlug)
        .eq("is_published", true);

      if (direct && direct.length > 0) {
        setCourses(direct.map(mapCourseRow));
        setIsLoading(false);
        return;
      }

      // Fallback: look up the category's program_slugs and fetch by slug
      const { data: cat } = await supabase
        .from("categories")
        .select("program_slugs")
        .eq("slug", categorySlug)
        .maybeSingle();

      if (cat?.program_slugs && Array.isArray(cat.program_slugs) && cat.program_slugs.length > 0) {
        const { data: bySlug, error } = await supabase
          .from("courses")
          .select("*")
          .in("slug", cat.program_slugs as string[])
          .eq("is_published", true);
        if (error) console.error("Courses by category slugs error:", error);
        setCourses((bySlug || []).map(mapCourseRow));
      } else {
        setCourses([]);
      }
      setIsLoading(false);
    };

    fetchCourses();
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
