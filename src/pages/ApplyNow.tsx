import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import {
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileCheck2,
  GraduationCap,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  UserPlus,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendForm } from "@/lib/sendForm";
import { useApplyCatalog } from "@/hooks/useSupabaseCourses";
import { getStaticCategoryForCourse } from "@/data/academicsContent";
import type { Category, Course } from "@/data/courses";
import gccCampusImage from "@/assets/gcc-campus.jpg";
import prashantiAerial from "@/assets/prashanti-kutiram-aerial.webp";

type CampusSlug = "global-city-campus" | "prashanti-campus";

const CAMPUSES: Record<
  CampusSlug,
  {
    key: Course["campusType"];
    formType: "apply-gcc" | "apply-prashanti";
    name: string;
    short: string;
    tagline: string;
    image: string;
    address: string;
    phones: string[];
    email: string;
  }
> = {
  "global-city-campus": {
    key: "gcc",
    formType: "apply-gcc",
    name: "S-VYASA Global City Campus",
    short: "Global City Campus",
    tagline: "Technology, Management & Innovation in the heart of Bengaluru",
    image: gccCampusImage,
    address: "Sattva Global City, Mysore Road, Rajarajeshwari Nagar, Bengaluru, Karnataka – 560059",
    phones: ["+91-9070907066", "+91-9070907099"],
    email: "info@svyasa.edu.in",
  },
  "prashanti-campus": {
    key: "prashanti",
    formType: "apply-prashanti",
    name: "Prashanti Kutiram Campus",
    short: "Prashanti Campus",
    tagline: "Yoga, Wellness, Health Sciences & Research on a serene green campus in Bengaluru",
    image: prashantiAerial,
    address: "Prashanti Kutiram, Vivekananda Road, Kalluballu Post, Jigani, Anekal, Bengaluru – 560105",
    phones: ["+91-8762996815", "+91-7022024777"],
    email: "admissions@svyasa.org",
  },
};

// ── Official form options ─────────────────────────────────────────────

const STATES = [
  "Andaman and Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh",
  "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Outside India",
];

const COUNTRY_CODES = [
  "India (+91)", "Australia (+61)", "Bangladesh (+880)", "Bhutan (+975)", "Canada (+1)", "France (+33)",
  "Germany (+49)", "Japan (+81)", "Kuwait (+965)", "Malaysia (+60)", "Mauritius (+230)", "Nepal (+977)",
  "New Zealand (+64)", "Oman (+968)", "Qatar (+974)", "Russia (+7)", "Saudi Arabia (+966)", "Singapore (+65)",
  "South Africa (+27)", "Sri Lanka (+94)", "United Arab Emirates (+971)", "United Kingdom (+44)",
  "United States of America (+1)",
];

type DegreeType = "ug" | "pg" | "yoga" | "doctoral" | "distance";

const DEGREE_TYPES: { id: DegreeType; label: string }[] = [
  { id: "ug", label: "Under Graduation" },
  { id: "pg", label: "Post Graduation" },
  { id: "yoga", label: "Yoga Programmes" },
  { id: "doctoral", label: "Doctoral (Ph.D / D.Sc. / D.Litt.)" },
  { id: "distance", label: "Distance Learning (Yoga)" },
];

/** Broad listing pages that only repeat other categories' courses. */
const AGGREGATE_CATEGORIES = new Set(["undergraduate", "postgraduate"]);

const degreeTypeFor = (course: Course, category: Category): DegreeType => {
  if (category.slug === "distance-learning" || category.level === "diploma") return "distance";
  if (category.slug === "yoga-programmes" || category.level === "certificate") return "yoga";
  if (/^(phd|dsc)/.test(course.slug) || category.level === "doctoral") return "doctoral";
  if (/^(master|mba|mca|msc|mtech|mpt)/.test(course.slug) || category.level === "postgraduate") return "pg";
  return "ug";
};

const STEPS = [
  { icon: UserPlus, title: "Register", text: "Submit this form with your basic details to start your admission journey." },
  { icon: ClipboardList, title: "Apply", text: "Our admissions team shares the full application — fill in academic and personal details carefully." },
  { icon: CreditCard, title: "Pay Fee", text: "Pay the application fee securely so your form is considered for processing." },
  { icon: FileCheck2, title: "Document Verification & Token Fee", text: "Get your documents verified and pay the token fee to confirm your interest." },
  { icon: BadgeCheck, title: "Final Admission", text: "Receive official confirmation — your seat is secured." },
];

const INSTRUCTIONS = [
  "Read each step carefully before moving to the next.",
  "Ensure all details entered are accurate and complete.",
  "Keep scanned copies of required documents ready.",
  "Complete fee payments promptly to avoid delays.",
  "Regularly check your registered email / SMS for updates.",
  "Reach out to the admissions team if you face any issues.",
  "Admission is confirmed only after token fee payment and official confirmation.",
];

// ── Form state & validation ───────────────────────────────────────────

const schema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name").max(100),
    email: z.string().trim().email("Please enter a valid email address").max(255),
    countryCode: z.string().min(1, "Select a country code"),
    mobile: z.string().trim().regex(/^\d{6,15}$/, "Enter digits only (6–15)"),
    state: z.string().min(1, "Please select your state"),
    city: z.string().trim().min(2, "Please enter your city").max(80),
    degreeType: z.string().min(1, "Please select a degree type"),
    program: z.string().min(1, "Please select a programme"),
    course: z.string().min(1, "Please select a course"),
    institute: z.string().trim().max(150).optional(),
    consent: z.literal(true, { errorMap: () => ({ message: "Please accept to continue" }) }),
  })
  .refine((v) => !v.countryCode.includes("(+91)") || /^[6-9]\d{9}$/.test(v.mobile), {
    path: ["mobile"],
    message: "Enter a valid 10-digit Indian mobile number",
  });

type FormValues = {
  name: string;
  email: string;
  countryCode: string;
  mobile: string;
  state: string;
  city: string;
  degreeType: string;
  program: string;
  course: string;
  institute: string;
  consent: boolean;
};

const emptyForm: FormValues = {
  name: "",
  email: "",
  countryCode: "India (+91)",
  mobile: "",
  state: "",
  city: "",
  degreeType: "",
  program: "",
  course: "",
  institute: "",
  consent: false,
};

const selectClass =
  "mt-1.5 flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

const ApplyNow = () => {
  const { campus } = useParams<{ campus: string }>();
  const [searchParams] = useSearchParams();
  const info = CAMPUSES[campus as CampusSlug];
  const { categories, courses, isLoading } = useApplyCatalog();

  // Options for this campus: degree type → programme (category) → course.
  const options = useMemo(() => {
    const courseBySlug = new Map(courses.map((c) => [c.slug, c]));
    const rows: { degreeType: DegreeType; category: Category; course: Course }[] = [];
    if (!info) return rows;
    for (const category of categories) {
      if (AGGREGATE_CATEGORIES.has(category.slug)) continue;
      for (const slug of category.programSlugs) {
        const course = courseBySlug.get(slug);
        if (!course || course.campusType !== info.key) continue;
        rows.push({ degreeType: degreeTypeFor(course, category), category, course });
      }
    }
    return rows;
  }, [categories, courses, info]);

  const [form, setForm] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    if (info) document.title = `Apply Now – ${info.name} | S-VYASA University`;
  }, [info]);

  const preCourseSlug = searchParams.get("course");
  const preCategorySlug = searchParams.get("category");

  // Preselect from ?course=<slug> or ?category=<slug> once the catalogue has loaded.
  useEffect(() => {
    if (isLoading) return;
    let pre: Partial<FormValues> = {};
    if (preCourseSlug) {
      const course = courses.find((c) => c.slug === preCourseSlug);
      const preferred = course ? getStaticCategoryForCourse(course.slug, course.category) : undefined;
      const row =
        options.find((r) => r.course.slug === preCourseSlug && r.category.slug === preferred?.slug) ??
        options.find((r) => r.course.slug === preCourseSlug && r.category.slug === course?.category) ??
        options.find((r) => r.course.slug === preCourseSlug);
      if (row) pre = { degreeType: row.degreeType, program: row.category.slug, course: row.course.slug };
    } else if (preCategorySlug) {
      const row = options.find((r) => r.category.slug === preCategorySlug);
      if (row) pre = { degreeType: row.degreeType, program: row.category.slug };
    }
    setForm((f) => ({ ...f, degreeType: "", program: "", course: "", ...pre }));
    setErrors({});
    setStatus("idle");
  }, [isLoading, options, courses, preCourseSlug, preCategorySlug]);

  if (!info) return <Navigate to="/apply/global-city-campus" replace />;

  const degreeOptions = DEGREE_TYPES.filter((d) => options.some((r) => r.degreeType === d.id));
  const programOptions = Array.from(
    new Map(
      options.filter((r) => r.degreeType === form.degreeType).map((r) => [r.category.slug, r.category] as const),
    ).values(),
  );
  const courseOptions = options.filter((r) => r.degreeType === form.degreeType && r.category.slug === form.program);

  const selectedRow = options.find(
    (r) => r.degreeType === form.degreeType && r.category.slug === form.program && r.course.slug === form.course,
  );

  const update = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setForm((f) => {
      const next = { ...f, [field]: value };
      if (field === "degreeType") Object.assign(next, { program: "", course: "" });
      if (field === "program") Object.assign(next, { course: "" });
      return next;
    });
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Partial<Record<keyof FormValues, string>> = {};
      parsed.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormValues;
        if (key && !next[key]) next[key] = err.message;
      });
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      document.getElementById(`apply-${Object.keys(next)[0]}`)?.focus();
      return;
    }

    const honeypot = (e.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value;
    const dialCode = form.countryCode.match(/\(([^)]+)\)/)?.[1] ?? "";
    setStatus("sending");
    try {
      await sendForm(
        info.formType,
        {
          name: form.name,
          email: form.email,
          mobileNumber: `${dialCode} ${form.mobile}`.trim(),
          state: form.state,
          city: form.city,
          campus: info.name,
          degreeType: DEGREE_TYPES.find((d) => d.id === form.degreeType)?.label ?? form.degreeType,
          programName: selectedRow?.category.title ?? form.program,
          courseName: selectedRow?.course.title ?? form.course,
          courseDuration: selectedRow?.course.duration,
          instituteName: form.institute,
          coursePage: selectedRow ? `${window.location.origin}/courses/${selectedRow.course.slug}` : undefined,
        },
        honeypot,
      );
      setStatus("sent");
      document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      setStatus("idle");
      toast.error(err instanceof Error ? err.message : "Could not submit your application.");
    }
  };

  const fieldError = (field: keyof FormValues) =>
    errors[field] ? (
      <p id={`apply-${field}-error`} className="text-destructive text-xs mt-1">
        {errors[field]}
      </p>
    ) : null;

  const aria = (field: keyof FormValues) => ({
    id: `apply-${field}`,
    "aria-invalid": !!errors[field],
    "aria-describedby": errors[field] ? `apply-${field}-error` : undefined,
  });

  const required = <span className="text-destructive">*</span>;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[340px] md:min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${info.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        <div className="relative container mx-auto px-4 py-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-3"
          >
            Admission Open · 2026–27
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading text-white max-w-3xl leading-tight"
          >
            Apply to {info.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-base md:text-lg mt-4 max-w-2xl"
          >
            {info.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex flex-wrap gap-2 bg-white/10 backdrop-blur-sm p-1.5 rounded-2xl sm:rounded-full"
            aria-label="Choose campus"
          >
            {(Object.keys(CAMPUSES) as CampusSlug[]).map((slug) => (
              <Link
                key={slug}
                to={`/apply/${slug}#apply-form`}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  slug === campus ? "bg-white text-navy" : "text-white/85 hover:text-white"
                }`}
                aria-current={slug === campus ? "page" : undefined}
              >
                {CAMPUSES[slug].short}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="bg-white border-b border-border">
        <Breadcrumb items={[{ label: "Admissions", href: "/admissions" }, { label: `Apply – ${info.short}` }]} />
      </div>

      <section className="py-14 md:py-20 bg-cream/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
            {/* Registration form */}
            <motion.div
              id="apply-form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl border border-border p-6 md:p-10 scroll-mt-28"
            >
              {status === "sent" ? (
                <div className="text-center py-10" role="status">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h2 className="font-heading text-3xl text-navy mb-3">Registration received</h2>
                  <p className="text-muted-foreground max-w-md mx-auto mb-2">
                    Thank you, {form.name.split(" ")[0]}. Your application
                    {selectedRow ? ` for ${selectedRow.course.title}` : ""} at {info.name} has been sent to the S-VYASA
                    admissions team.
                  </p>
                  <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    They will contact you on {form.email} with the next steps.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button
                      className="rounded-full px-6"
                      onClick={() => {
                        setForm(emptyForm);
                        setStatus("idle");
                      }}
                    >
                      Submit another application
                    </Button>
                    <Button asChild variant="outline" className="rounded-full px-6">
                      <Link to="/">Back to Home</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Admission Open</p>
                    <h2 className="font-heading text-3xl text-navy mt-1">Register</h2>
                    <div className="w-16 h-1 bg-gold mt-2 mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Fields marked {required} are required. Applying to{" "}
                      <span className="font-semibold text-navy">{info.name}</span>.
                    </p>
                    {selectedRow && (
                      <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-semibold">
                        <GraduationCap className="w-4 h-4" /> {selectedRow.course.title}
                      </p>
                    )}
                  </div>

                  {/* Honeypot: hidden from people, filled in by spam bots */}
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                  <div>
                    <Label htmlFor="apply-name">Name {required}</Label>
                    <Input
                      {...aria("name")}
                      autoComplete="name"
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="mt-1.5 h-11"
                      placeholder="Enter your full name"
                    />
                    {fieldError("name")}
                  </div>

                  <div>
                    <Label htmlFor="apply-email">Email Address {required}</Label>
                    <Input
                      {...aria("email")}
                      type="email"
                      autoComplete="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="mt-1.5 h-11"
                      placeholder="you@example.com"
                    />
                    {fieldError("email")}
                  </div>

                  <div>
                    <Label htmlFor="apply-mobile">Mobile Number {required}</Label>
                    <div className="grid grid-cols-[minmax(0,10rem)_minmax(0,1fr)] gap-3">
                      <select
                        id="apply-countryCode"
                        aria-label="Country code"
                        value={form.countryCode}
                        onChange={(e) => update("countryCode", e.target.value)}
                        className={selectClass}
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                      <Input
                        {...aria("mobile")}
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        maxLength={15}
                        value={form.mobile}
                        onChange={(e) => update("mobile", e.target.value.replace(/\D/g, ""))}
                        className="mt-1.5 h-11"
                        placeholder="9876543210"
                      />
                    </div>
                    {fieldError("mobile")}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="apply-state">Select State {required}</Label>
                      <select
                        {...aria("state")}
                        autoComplete="address-level1"
                        value={form.state}
                        onChange={(e) => update("state", e.target.value)}
                        className={selectClass}
                      >
                        <option value="">Select State</option>
                        {STATES.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                      {fieldError("state")}
                    </div>
                    <div>
                      <Label htmlFor="apply-city">City {required}</Label>
                      <Input
                        {...aria("city")}
                        autoComplete="address-level2"
                        maxLength={80}
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                        className="mt-1.5 h-11"
                        placeholder="Enter your city"
                      />
                      {fieldError("city")}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="apply-degreeType">Select Degree Type {required}</Label>
                    <select
                      {...aria("degreeType")}
                      value={form.degreeType}
                      onChange={(e) => update("degreeType", e.target.value)}
                      disabled={isLoading}
                      className={selectClass}
                    >
                      <option value="">{isLoading ? "Loading programmes…" : "Select Degree Type"}</option>
                      {degreeOptions.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.label}
                        </option>
                      ))}
                    </select>
                    {fieldError("degreeType")}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="apply-program">Select Program Name {required}</Label>
                      <select
                        {...aria("program")}
                        value={form.program}
                        onChange={(e) => update("program", e.target.value)}
                        disabled={!form.degreeType}
                        className={selectClass}
                      >
                        <option value="">{form.degreeType ? "Select Program Name" : "Choose a degree type first"}</option>
                        {programOptions.map((c) => (
                          <option key={c.slug} value={c.slug}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                      {fieldError("program")}
                    </div>
                    <div>
                      <Label htmlFor="apply-course">Select Course Name {required}</Label>
                      <select
                        {...aria("course")}
                        value={form.course}
                        onChange={(e) => update("course", e.target.value)}
                        disabled={!form.program}
                        className={selectClass}
                      >
                        <option value="">{form.program ? "Select Course Name" : "Choose a programme first"}</option>
                        {courseOptions.map((r) => (
                          <option key={r.course.slug} value={r.course.slug}>
                            {r.course.title}
                          </option>
                        ))}
                      </select>
                      {fieldError("course")}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="apply-institute">Institute Name</Label>
                    <Input
                      {...aria("institute")}
                      maxLength={150}
                      value={form.institute}
                      onChange={(e) => update("institute", e.target.value)}
                      className="mt-1.5 h-11"
                      placeholder="Your current / last school or college"
                    />
                  </div>

                  <div>
                    <label htmlFor="apply-consent" className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                      <input
                        id="apply-consent"
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => update("consent", e.target.checked)}
                        aria-invalid={!!errors.consent}
                        aria-describedby={errors.consent ? "apply-consent-error" : undefined}
                        className="mt-0.5 w-4 h-4 accent-[hsl(var(--primary))]"
                      />
                      <span>
                        I agree to receive information by signing up on S-VYASA (Deemed to be University). {required}
                      </span>
                    </label>
                    {fieldError("consent")}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "sending"}
                    className="w-full rounded-full py-6 text-base font-semibold bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Submitting…
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Register
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Your details go straight to the S-VYASA admissions team.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Steps, instructions and contact */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:sticky lg:top-28"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-border p-6">
                <h2 className="font-heading text-xl text-navy">Steps to Follow</h2>
                <div className="w-12 h-0.5 bg-gold mt-1 mb-5" />
                <ol className="space-y-4">
                  {STEPS.map(({ icon: Icon, title, text }, i) => (
                    <li key={title} className="flex gap-3">
                      <div className="relative shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-navy text-sm uppercase tracking-wide">{title}</p>
                        <p className="text-sm text-muted-foreground">{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-border p-6">
                <h2 className="font-heading text-xl text-navy">Instructions</h2>
                <div className="w-12 h-0.5 bg-gold mt-1 mb-4" />
                <ol className="space-y-2.5 text-sm text-muted-foreground">
                  {INSTRUCTIONS.map((line, i) => (
                    <li key={line} className="flex gap-3">
                      <span className="shrink-0 font-semibold text-primary tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      {line}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
                <div className="relative h-32">
                  <img src={info.image} alt={info.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/75 to-transparent" />
                  <p className="absolute bottom-3 left-4 right-4 text-white font-heading text-lg">{info.name}</p>
                </div>
                <div className="p-6 space-y-3 text-sm">
                  <p className="flex gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {info.address}
                  </p>
                  <div className="flex gap-3">
                    <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      {info.phones.map((p) => (
                        <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="text-navy hover:text-primary">
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="flex gap-3">
                    <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <a href={`mailto:${info.email}`} className="text-navy hover:text-primary">
                      {info.email}
                    </a>
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplyNow;
