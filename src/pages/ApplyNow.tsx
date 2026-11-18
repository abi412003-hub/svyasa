import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import {
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { programs, type Program } from "@/components/admissions/programsData";
import { sendForm } from "@/lib/sendForm";
import gccCampusImage from "@/assets/gcc-campus.jpg";
import prashantiAerial from "@/assets/prashanti-kutiram-aerial.webp";

type CampusSlug = "global-city-campus" | "prashanti-campus";

const CAMPUSES: Record<
  CampusSlug,
  {
    key: Program["campus"];
    formType: "apply-gcc" | "apply-prashanti";
    name: string;
    short: string;
    tagline: string;
    image: string;
    address: string;
    phones: string[];
    email: string;
    highlights: string[];
  }
> = {
  "global-city-campus": {
    key: "global",
    formType: "apply-gcc",
    name: "S-VYASA Global City Campus",
    short: "Global City Campus",
    tagline: "Technology, Management & Innovation in the heart of Bengaluru",
    image: gccCampusImage,
    address: "Sattva Global City, Mysore Road, Rajarajeshwari Nagar, Bengaluru, Karnataka – 560059",
    phones: ["+91-9070907066", "+91-9070907099"],
    email: "info@svyasa.edu.in",
    highlights: [
      "Industry-aligned BCA, BBA, B.Com, B.Tech, MCA & MBA programmes",
      "Specialisations in AI, cybersecurity, cloud, analytics and more",
      "Edtech and industry partnerships with live projects",
      "Yoga and wellness woven into everyday campus life",
    ],
  },
  "prashanti-campus": {
    key: "prashanti",
    formType: "apply-prashanti",
    name: "Prashanti Kutiram Campus",
    short: "Prashanti Campus",
    tagline: "Yoga, Wellness & Research on a serene green campus in Bengaluru",
    image: prashantiAerial,
    address: "Prashanti Kutiram, Vivekananda Road, Kalluballu Post, Jigani, Anekal, Bengaluru – 560105",
    phones: ["+91-8762996815", "+91-7676749929"],
    email: "admissions@svyasa.org",
    highlights: [
      "B.Sc. & M.Sc. Yoga Therapy, BNYS, BPT, MD Yoga and Ph.D. programmes",
      "Gurukula-style residential learning with daily yoga practice",
      "Research labs in physiology, neuroscience and yoga therapy",
      "Integrated with the Arogyadhama holistic health centre",
    ],
  },
};

const LEVEL_LABELS: Record<Program["level"], string> = {
  undergraduate: "Undergraduate (UG)",
  postgraduate: "Postgraduate (PG)",
  phd: "Doctoral (Ph.D.)",
  certificate: "Certificate Course",
  distance: "Distance Mode",
};

const QUALIFICATIONS = ["10th / SSLC", "12th / PUC / Pre-University", "Diploma", "Bachelor's Degree", "Master's Degree", "Other"];
const GENDERS = ["Female", "Male", "Other", "Prefer not to say"];

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{9,18}$/, "Please enter a valid phone number"),
  dateOfBirth: z.string().min(1, "Please enter your date of birth"),
  gender: z.string().min(1, "Please select an option"),
  city: z.string().trim().min(2, "Please enter your city").max(80),
  state: z.string().trim().min(2, "Please enter your state").max(80),
  level: z.string().min(1, "Please choose a programme level"),
  program: z.string().min(1, "Please choose a programme"),
  qualification: z.string().min(1, "Please select your highest qualification"),
  board: z.string().trim().max(150).optional(),
  score: z.string().trim().max(20).optional(),
  passingYear: z
    .string()
    .trim()
    .regex(/^(19|20)\d{2}$/, "Enter a 4-digit year")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().max(1500).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept to continue" }) }),
});

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  city: string;
  state: string;
  level: string;
  program: string;
  qualification: string;
  board: string;
  score: string;
  passingYear: string;
  message: string;
  consent: boolean;
};

const emptyForm: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  city: "",
  state: "",
  level: "",
  program: "",
  qualification: "",
  board: "",
  score: "",
  passingYear: "",
  message: "",
  consent: false,
};

const selectClass =
  "mt-1.5 flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50";

const ApplyNow = () => {
  const { campus } = useParams<{ campus: string }>();
  const [searchParams] = useSearchParams();
  const info = CAMPUSES[campus as CampusSlug];

  const campusPrograms = useMemo(() => (info ? programs.filter((p) => p.campus === info.key) : []), [info]);
  const levels = useMemo(
    () => (Object.keys(LEVEL_LABELS) as Program["level"][]).filter((l) => campusPrograms.some((p) => p.level === l)),
    [campusPrograms],
  );

  const [form, setForm] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  // Reset when switching campus; preselect a programme from ?program=<id>.
  useEffect(() => {
    const pre = campusPrograms.find((p) => p.id === searchParams.get("program"));
    setForm({ ...emptyForm, level: pre?.level ?? "", program: pre?.name ?? "" });
    setErrors({});
    setStatus("idle");
  }, [campusPrograms, searchParams]);

  if (!info) return <Navigate to="/apply/global-city-campus" replace />;

  const programOptions = campusPrograms.filter((p) => p.level === form.level);
  const otherSlug: CampusSlug = campus === "global-city-campus" ? "prashanti-campus" : "global-city-campus";

  const update = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setForm((f) => ({ ...f, [field]: value, ...(field === "level" ? { program: "" } : {}) }));
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
    setStatus("sending");
    try {
      await sendForm(
        info.formType,
        {
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          dateOfBirth: form.dateOfBirth,
          gender: form.gender,
          city: form.city,
          state: form.state,
          campus: info.name,
          programmeLevel: LEVEL_LABELS[form.level as Program["level"]] ?? form.level,
          programme: form.program,
          highestQualification: form.qualification,
          boardOrUniversity: form.board,
          percentageOrCgpa: form.score,
          yearOfPassing: form.passingYear,
          message: form.message,
        },
        honeypot,
      );
      setStatus("sent");
      window.scrollTo({ top: document.getElementById("application-form")?.offsetTop ?? 0, behavior: "smooth" });
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

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[380px] md:min-h-[440px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${info.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        <div className="relative container mx-auto px-4 py-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-3"
          >
            Admissions Open · 2026–27
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
            role="tablist"
            aria-label="Choose campus"
          >
            {(Object.keys(CAMPUSES) as CampusSlug[]).map((slug) => (
              <Link
                key={slug}
                to={`/apply/${slug}`}
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
        <Breadcrumb
          items={[
            { label: "Admissions", href: "/admissions" },
            { label: `Apply – ${info.short}` },
          ]}
        />
      </div>

      <section id="application-form" className="py-14 md:py-20 bg-cream/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
            {/* Campus summary */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:sticky lg:top-28"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
                <div className="relative h-44">
                  <img src={info.image} alt={info.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <p className="absolute bottom-3 left-4 right-4 text-white font-heading text-xl">{info.name}</p>
                </div>
                <div className="p-6 space-y-4 text-sm">
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

              <div className="bg-white rounded-2xl shadow-lg border border-border p-6">
                <h2 className="font-heading text-xl text-navy mb-1">Why {info.short}?</h2>
                <div className="w-12 h-0.5 bg-gold mb-4" />
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {info.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-3 mt-6 text-center">
                  {[
                    { icon: Award, label: "NAAC A+" },
                    { icon: ShieldCheck, label: "UGC Deemed" },
                    { icon: BookOpen, label: `${campusPrograms.length} Programmes` },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="rounded-xl bg-muted/60 p-3">
                      <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                      <p className="text-[11px] font-semibold text-navy leading-tight">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-muted-foreground px-1">
                Looking for the other campus?{" "}
                <Link to={`/apply/${otherSlug}`} className="text-primary font-semibold hover:underline">
                  Apply to {CAMPUSES[otherSlug].short}
                </Link>
              </p>
            </motion.aside>

            {/* Application form */}
            <motion.div
              id="apply-form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl border border-border p-6 md:p-10 scroll-mt-24 order-first lg:order-none"
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
                  <h2 className="font-heading text-3xl text-navy mb-3">Application received</h2>
                  <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    Thank you for applying to {info.name}. Our admissions team will contact you shortly on the email and
                    phone number you provided.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button className="rounded-full px-6" onClick={() => setStatus("idle")}>
                      Submit another application
                    </Button>
                    <Button asChild variant="outline" className="rounded-full px-6">
                      <Link to="/">Back to Home</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-10">
                  <div>
                    <h2 className="font-heading text-3xl text-navy">Application Form</h2>
                    <div className="w-16 h-1 bg-gold mt-2 mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Fields marked <span className="text-destructive">*</span> are required. It takes about 3 minutes.
                    </p>
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                        Applying to
                      </p>
                      <div className="inline-flex flex-wrap gap-1 rounded-2xl sm:rounded-full bg-muted p-1" aria-label="Choose campus">
                        {(Object.keys(CAMPUSES) as CampusSlug[]).map((slug) => (
                          <Link
                            key={slug}
                            to={`/apply/${slug}#apply-form`}
                            replace
                            aria-current={slug === campus ? "page" : undefined}
                            className={`no-scale px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                              slug === campus ? "bg-primary text-white shadow" : "text-muted-foreground hover:text-navy"
                            }`}
                          >
                            {CAMPUSES[slug].short}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Honeypot: hidden from people, filled in by spam bots */}
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                  <fieldset className="space-y-5">
                    <legend className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center">1</span>
                      Personal details
                    </legend>
                    <div>
                      <Label htmlFor="apply-fullName">
                        Full name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        {...aria("fullName")}
                        autoComplete="name"
                        maxLength={100}
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        className="mt-1.5 h-11"
                        placeholder="As per your mark sheet"
                      />
                      {fieldError("fullName")}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="apply-email">
                          Email <span className="text-destructive">*</span>
                        </Label>
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
                        <Label htmlFor="apply-phone">
                          Mobile number <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          {...aria("phone")}
                          type="tel"
                          autoComplete="tel"
                          maxLength={20}
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          className="mt-1.5 h-11"
                          placeholder="+91 98765 43210"
                        />
                        {fieldError("phone")}
                      </div>
                      <div>
                        <Label htmlFor="apply-dateOfBirth">
                          Date of birth <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          {...aria("dateOfBirth")}
                          type="date"
                          autoComplete="bday"
                          max={new Date().toISOString().slice(0, 10)}
                          value={form.dateOfBirth}
                          onChange={(e) => update("dateOfBirth", e.target.value)}
                          className="mt-1.5 h-11"
                        />
                        {fieldError("dateOfBirth")}
                      </div>
                      <div>
                        <Label htmlFor="apply-gender">
                          Gender <span className="text-destructive">*</span>
                        </Label>
                        <select
                          {...aria("gender")}
                          value={form.gender}
                          onChange={(e) => update("gender", e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Select</option>
                          {GENDERS.map((g) => (
                            <option key={g}>{g}</option>
                          ))}
                        </select>
                        {fieldError("gender")}
                      </div>
                      <div>
                        <Label htmlFor="apply-city">
                          City <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          {...aria("city")}
                          autoComplete="address-level2"
                          maxLength={80}
                          value={form.city}
                          onChange={(e) => update("city", e.target.value)}
                          className="mt-1.5 h-11"
                        />
                        {fieldError("city")}
                      </div>
                      <div>
                        <Label htmlFor="apply-state">
                          State <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          {...aria("state")}
                          autoComplete="address-level1"
                          maxLength={80}
                          value={form.state}
                          onChange={(e) => update("state", e.target.value)}
                          className="mt-1.5 h-11"
                        />
                        {fieldError("state")}
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="space-y-5">
                    <legend className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center">2</span>
                      Programme
                    </legend>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="apply-level">
                          Programme level <span className="text-destructive">*</span>
                        </Label>
                        <select
                          {...aria("level")}
                          value={form.level}
                          onChange={(e) => update("level", e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Select level</option>
                          {levels.map((l) => (
                            <option key={l} value={l}>
                              {LEVEL_LABELS[l]}
                            </option>
                          ))}
                        </select>
                        {fieldError("level")}
                      </div>
                      <div>
                        <Label htmlFor="apply-program">
                          Programme <span className="text-destructive">*</span>
                        </Label>
                        <select
                          {...aria("program")}
                          value={form.program}
                          onChange={(e) => update("program", e.target.value)}
                          disabled={!form.level}
                          className={selectClass}
                        >
                          <option value="">{form.level ? "Select programme" : "Choose a level first"}</option>
                          {programOptions.map((p) => (
                            <option key={p.id} value={p.name}>
                              {p.name}
                            </option>
                          ))}
                        </select>
                        {fieldError("program")}
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="space-y-5">
                    <legend className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center">3</span>
                      Academic background
                    </legend>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="apply-qualification">
                          Highest qualification <span className="text-destructive">*</span>
                        </Label>
                        <select
                          {...aria("qualification")}
                          value={form.qualification}
                          onChange={(e) => update("qualification", e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Select</option>
                          {QUALIFICATIONS.map((q) => (
                            <option key={q}>{q}</option>
                          ))}
                        </select>
                        {fieldError("qualification")}
                      </div>
                      <div>
                        <Label htmlFor="apply-board">Board / University</Label>
                        <Input
                          {...aria("board")}
                          maxLength={150}
                          value={form.board}
                          onChange={(e) => update("board", e.target.value)}
                          className="mt-1.5 h-11"
                        />
                      </div>
                      <div>
                        <Label htmlFor="apply-score">Percentage / CGPA</Label>
                        <Input
                          {...aria("score")}
                          maxLength={20}
                          inputMode="decimal"
                          value={form.score}
                          onChange={(e) => update("score", e.target.value)}
                          className="mt-1.5 h-11"
                          placeholder="e.g. 82% or 8.4"
                        />
                      </div>
                      <div>
                        <Label htmlFor="apply-passingYear">Year of passing</Label>
                        <Input
                          {...aria("passingYear")}
                          inputMode="numeric"
                          maxLength={4}
                          value={form.passingYear}
                          onChange={(e) => update("passingYear", e.target.value)}
                          className="mt-1.5 h-11"
                          placeholder="2026"
                        />
                        {fieldError("passingYear")}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="apply-message">Anything you'd like us to know?</Label>
                      <Textarea
                        {...aria("message")}
                        rows={4}
                        maxLength={1500}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className="mt-1.5"
                        placeholder="Questions about fees, hostel, scholarships…"
                      />
                    </div>
                  </fieldset>

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
                        I confirm the details above are correct and agree to be contacted by S-VYASA about my application.
                        <span className="text-destructive"> *</span>
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
                        <Send className="w-5 h-5" /> Submit Application
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5">
                    <GraduationCap className="w-4 h-4" /> Your details go straight to the S-VYASA admissions team.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplyNow;
