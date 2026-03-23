import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Trash2, Plus, X, GripVertical } from "lucide-react";

interface QuizQuestion { question: string; yesIsCorrect: boolean; }
interface YearlyFee { year: string; amount: string; }
interface Highlight { number: string; icon: string; title: string; description: string; }
interface CareerPath { icon: string; title: string; description: string; demand: string; }
interface LearningStep { year: string; title: string; description: string; }
interface Testimonial { name: string; program: string; quote: string; image?: string; }

interface CourseForm {
  slug: string;
  title: string;
  short_title: string;
  degree: string;
  duration: string;
  campus: string;
  campus_type: string;
  category: string;
  banner_image: string;
  hook_line: string;
  overview: string[];
  apply_link: string;
  brochure_link: string;
  domain_theme: string;
  is_published: boolean;
  // Quick Facts
  stat_callout: { text: string; source: string } | null;
  highlights: Highlight[];
  // Quote
  quote: { text: string; author: string; role: string } | null;
  // Learning Journey
  learning_journey: LearningStep[];
  // Eligibility
  eligibility: {
    primary: string;
    minMarks: string;
    extras: string[];
    quizQuestions: QuizQuestion[];
  };
  // Careers
  careers: CareerPath[];
  // Testimonials
  testimonials: Testimonial[];
  // Fee
  fee: {
    registration: string;
    yearlyFees: YearlyFee[];
  };
}

const EMPTY: CourseForm = {
  slug: "", title: "", short_title: "", degree: "", duration: "",
  campus: "", campus_type: "gcc", category: "", banner_image: "",
  hook_line: "", overview: [""], apply_link: "", brochure_link: "",
  domain_theme: "tech", is_published: true,
  stat_callout: null,
  highlights: [],
  quote: null,
  learning_journey: [],
  eligibility: { primary: "", minMarks: "", extras: [""], quizQuestions: [] },
  careers: [],
  testimonials: [],
  fee: { registration: "", yearlyFees: [{ year: "Year 1", amount: "" }] },
};

const AdminCourseEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isNew = id === "new";
  const navigate = useNavigate();
  const { toast } = useToast();
  const [form, setForm] = useState<CourseForm>(EMPTY);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isNew) return;
    const fetchData = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data, error } = await (supabase.from("courses") as any).select("*").eq("id", id).single();
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      setForm({
        slug: data.slug ?? "",
        title: data.title ?? "",
        short_title: data.short_title ?? "",
        degree: data.degree ?? "",
        duration: data.duration ?? "",
        campus: data.campus ?? "",
        campus_type: data.campus_type ?? "gcc",
        category: data.category ?? "",
        banner_image: data.banner_image ?? "",
        hook_line: data.hook_line ?? "",
        overview: Array.isArray(data.overview) && data.overview.length > 0 ? data.overview as string[] : [""],
        apply_link: data.apply_link ?? "",
        brochure_link: data.brochure_link ?? "",
        domain_theme: data.domain_theme ?? "tech",
        is_published: data.is_published ?? true,
        stat_callout: data.stat_callout ?? null,
        highlights: Array.isArray(data.highlights) ? data.highlights as Highlight[] : [],
        quote: data.quote ?? null,
        learning_journey: Array.isArray(data.learning_journey) ? data.learning_journey as LearningStep[] : [],
        eligibility: data.eligibility && typeof data.eligibility === "object" ? {
          primary: (data.eligibility as any).primary ?? "",
          minMarks: (data.eligibility as any).minMarks ?? "",
          extras: Array.isArray((data.eligibility as any).extras) ? (data.eligibility as any).extras : [""],
          quizQuestions: Array.isArray((data.eligibility as any).quizQuestions) ? (data.eligibility as any).quizQuestions : [],
        } : EMPTY.eligibility,
        careers: Array.isArray(data.careers) ? data.careers as CareerPath[] : [],
        testimonials: Array.isArray(data.testimonials) ? data.testimonials as Testimonial[] : [],
        fee: data.fee && typeof data.fee === "object" ? {
          registration: (data.fee as any).registration ?? "",
          yearlyFees: Array.isArray((data.fee as any).yearlyFees) ? (data.fee as any).yearlyFees : [{ year: "Year 1", amount: "" }],
        } : EMPTY.fee,
      });
      setLoading(false);
    };
    fetchData();
  }, [id, isNew, toast]);

  const set = (k: keyof CourseForm, v: unknown) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSave = async () => {
    if (!form.slug || !form.title) {
      toast({ title: "Validation", description: "Slug and title are required.", variant: "destructive" });
      return;
    }
    setSaving(true);
    const payload = {
      ...form,
      overview: form.overview.filter(l => l.trim()),
      brochure_link: form.brochure_link || null,
      highlights: form.highlights.filter(h => h.title.trim()),
      careers: form.careers.filter(c => c.title.trim()),
      learning_journey: form.learning_journey.filter(s => s.title.trim()),
      testimonials: form.testimonials.filter(t => t.name.trim()),
      eligibility: {
        ...form.eligibility,
        extras: form.eligibility.extras.filter(e => e.trim()),
      },
      fee: {
        registration: form.fee.registration,
        yearlyFees: form.fee.yearlyFees.filter(f => f.amount.trim()),
      },
    };
    let error;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db = supabase.from("courses") as any;
    if (isNew) {
      ({ error } = await db.insert(payload));
    } else {
      ({ error } = await db.update(payload).eq("id", id));
    }
    setSaving(false);
    if (error) { toast({ title: "Save failed", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Saved!", description: `${form.title} has been saved.` });
    navigate("/admin/courses");
  };

  const handleDelete = async () => {
    if (!confirm("Delete this course? This cannot be undone.")) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase.from("courses") as any).delete().eq("id", id);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Deleted" });
    navigate("/admin/courses");
  };

  if (loading) return (
    <div className="flex items-center justify-center h-full min-h-screen bg-slate-950">
      <div className="w-7 h-7 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 sticky top-0 z-10 bg-slate-950/90 backdrop-blur-sm py-4 -mx-8 px-8">
        <div className="flex items-center gap-3">
          <Link to="/admin/courses" className="text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-white">{isNew ? "Add Course" : "Edit Course"}</h1>
            {!isNew && <p className="text-slate-500 text-xs mt-0.5">{form.slug}</p>}
          </div>
        </div>
        <div className="flex gap-3">
          {!isNew && (
            <Button variant="ghost" onClick={handleDelete} className="gap-2 text-red-400 hover:text-red-300 hover:bg-red-400/10">
              <Trash2 size={14} /> Delete
            </Button>
          )}
          <Button onClick={handleSave} disabled={saving} className="gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold">
            <Save size={14} /> {saving ? "Saving…" : "Save"}
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* ─── Basic Info ─── */}
        <Section title="Basic Information">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Slug *" value={form.slug} onChange={v => set("slug", v)} placeholder="bca-cybersecurity" hint="Used in URL: /courses/slug" />
            <Field label="Short Title *" value={form.short_title} onChange={v => set("short_title", v)} placeholder="BCA Cybersecurity" />
          </div>
          <Field label="Full Title *" value={form.title} onChange={v => set("title", v)} placeholder="BCA with Cybersecurity, Ethical Hacking & Digital Forensics" />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Degree" value={form.degree} onChange={v => set("degree", v)} placeholder="Bachelor of Computer Applications" />
            <Field label="Duration" value={form.duration} onChange={v => set("duration", v)} placeholder="3 Years" />
          </div>
          <Field label="Hook Line" value={form.hook_line} onChange={v => set("hook_line", v)} placeholder="One line that sells the course…" />
          <Field label="Banner Image URL" value={form.banner_image} onChange={v => set("banner_image", v)} placeholder="https://… or /img/banner/…" />
          <Field label="Apply Link" value={form.apply_link} onChange={v => set("apply_link", v)} placeholder="https://admissions.svyasa.edu.in/…" />
          <Field label="Brochure Link" value={form.brochure_link} onChange={v => set("brochure_link", v)} placeholder="https://… (optional)" />
        </Section>

        {/* ─── Classification ─── */}
        <Section title="Classification">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-slate-300 text-sm mb-1.5 block">Category Slug</Label>
              <Input value={form.category} onChange={e => set("category", e.target.value)} placeholder="bca" className="bg-white/10 border-white/20 text-white placeholder:text-slate-500" />
            </div>
            <div>
              <Label className="text-slate-300 text-sm mb-1.5 block">Campus</Label>
              <Input value={form.campus} onChange={e => set("campus", e.target.value)} placeholder="Global City Campus" className="bg-white/10 border-white/20 text-white placeholder:text-slate-500" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label className="text-slate-300 text-sm mb-1.5 block">Campus Type</Label>
              <Select value={form.campus_type} onValueChange={v => set("campus_type", v)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="gcc">Global City Campus</SelectItem>
                  <SelectItem value="prashanti">Prashanti Kutiram</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-slate-300 text-sm mb-1.5 block">Domain Theme</Label>
              <Select value={form.domain_theme} onValueChange={v => set("domain_theme", v)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["tech","business","yoga","health","research","arts"].map(t => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-slate-300 text-sm mb-1.5 block">Status</Label>
              <Select value={form.is_published ? "published" : "draft"} onValueChange={v => set("is_published", v === "published")}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Section>

        {/* ─── Overview ─── */}
        <Section title="Overview Paragraphs" action={<AddBtn onClick={() => set("overview", [...form.overview, ""])} label="Add paragraph" />}>
          <div className="space-y-3">
            {form.overview.map((para, i) => (
              <div key={i} className="flex gap-2">
                <Textarea value={para} onChange={e => { const u = [...form.overview]; u[i] = e.target.value; set("overview", u); }}
                  rows={3} placeholder={`Paragraph ${i + 1}…`}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-slate-500 resize-none text-sm" />
                {form.overview.length > 1 && <RemoveBtn onClick={() => set("overview", form.overview.filter((_, j) => j !== i))} />}
              </div>
            ))}
          </div>
        </Section>

        {/* ─── 1. Quick Facts (stat_callout + highlights) ─── */}
        <Section title="Quick Facts / Highlights" action={
          <AddBtn onClick={() => set("highlights", [...form.highlights, { number: "", icon: "Star", title: "", description: "" }])} label="Add highlight" />
        }>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4 space-y-3">
              <p className="text-xs text-slate-400 uppercase tracking-wider">Stat Callout (optional)</p>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Stat Text" value={form.stat_callout?.text ?? ""} onChange={v => set("stat_callout", v || form.stat_callout?.source ? { text: v, source: form.stat_callout?.source ?? "" } : null)} placeholder="95% placement rate" />
                <Field label="Source" value={form.stat_callout?.source ?? ""} onChange={v => set("stat_callout", v || form.stat_callout?.text ? { text: form.stat_callout?.text ?? "", source: v } : null)} placeholder="NIRF 2024" />
              </div>
            </div>
            {form.highlights.map((h, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Highlight {i + 1}</span>
                  <RemoveBtn onClick={() => set("highlights", form.highlights.filter((_, j) => j !== i))} />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Field label="Number" value={h.number} onChange={v => { const u = [...form.highlights]; u[i] = { ...u[i], number: v }; set("highlights", u); }} placeholder="25+" />
                  <Field label="Icon (Lucide)" value={h.icon} onChange={v => { const u = [...form.highlights]; u[i] = { ...u[i], icon: v }; set("highlights", u); }} placeholder="Users" />
                  <Field label="Title" value={h.title} onChange={v => { const u = [...form.highlights]; u[i] = { ...u[i], title: v }; set("highlights", u); }} placeholder="Industry Partners" />
                </div>
                <Field label="Description" value={h.description} onChange={v => { const u = [...form.highlights]; u[i] = { ...u[i], description: v }; set("highlights", u); }} placeholder="Collaborations with top companies" />
              </div>
            ))}
          </div>
        </Section>

        {/* ─── 2. Quote ─── */}
        <Section title="Quote">
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
                <input type="checkbox" checked={form.quote !== null}
                  onChange={e => set("quote", e.target.checked ? { text: "", author: "", role: "" } : null)}
                  className="rounded border-white/20" />
                Enable quote section
              </label>
            </div>
            {form.quote && (
              <>
                <div>
                  <Label className="text-slate-300 text-sm mb-1.5 block">Quote Text</Label>
                  <Textarea value={form.quote.text} onChange={e => set("quote", { ...form.quote!, text: e.target.value })}
                    rows={3} placeholder="An inspiring quote about this program…"
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 resize-none text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Author Name" value={form.quote.author} onChange={v => set("quote", { ...form.quote!, author: v })} placeholder="Dr. H.R. Nagendra" />
                  <Field label="Author Role" value={form.quote.role} onChange={v => set("quote", { ...form.quote!, role: v })} placeholder="Chancellor, S-VYASA" />
                </div>
              </>
            )}
          </div>
        </Section>

        {/* ─── 3. Learning Journey ─── */}
        <Section title="Your Learning Journey" action={
          <AddBtn onClick={() => set("learning_journey", [...form.learning_journey, { year: "", title: "", description: "" }])} label="Add step" />
        }>
          <div className="space-y-3">
            {form.learning_journey.length === 0 && <p className="text-slate-500 text-sm">No learning journey steps added yet.</p>}
            {form.learning_journey.map((step, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400 flex items-center gap-1"><GripVertical size={12} /> Step {i + 1}</span>
                  <RemoveBtn onClick={() => set("learning_journey", form.learning_journey.filter((_, j) => j !== i))} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Year / Phase" value={step.year} onChange={v => { const u = [...form.learning_journey]; u[i] = { ...u[i], year: v }; set("learning_journey", u); }} placeholder="Year 1" />
                  <Field label="Title" value={step.title} onChange={v => { const u = [...form.learning_journey]; u[i] = { ...u[i], title: v }; set("learning_journey", u); }} placeholder="Foundation Studies" />
                </div>
                <div>
                  <Label className="text-slate-300 text-sm mb-1.5 block">Description</Label>
                  <Textarea value={step.description} onChange={e => { const u = [...form.learning_journey]; u[i] = { ...u[i], description: e.target.value }; set("learning_journey", u); }}
                    rows={2} placeholder="Core subjects, labs, and foundational skills…"
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 resize-none text-sm" />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── 4. Eligibility Criteria ─── */}
        <Section title="Eligibility Criteria">
          <div className="space-y-4">
            <Field label="Primary Requirement" value={form.eligibility.primary} onChange={v => set("eligibility", { ...form.eligibility, primary: v })} placeholder="10+2 with PCM from a recognized board" />
            <Field label="Minimum Marks" value={form.eligibility.minMarks} onChange={v => set("eligibility", { ...form.eligibility, minMarks: v })} placeholder="50% aggregate (45% for reserved categories)" />
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label className="text-slate-300 text-sm">Additional Requirements</Label>
                <AddBtn onClick={() => set("eligibility", { ...form.eligibility, extras: [...form.eligibility.extras, ""] })} label="Add" />
              </div>
              {form.eligibility.extras.map((ex, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <Input value={ex} onChange={e => { const u = [...form.eligibility.extras]; u[i] = e.target.value; set("eligibility", { ...form.eligibility, extras: u }); }}
                    placeholder="e.g. Valid entrance exam score"
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 text-sm" />
                  {form.eligibility.extras.length > 1 && <RemoveBtn onClick={() => set("eligibility", { ...form.eligibility, extras: form.eligibility.extras.filter((_, j) => j !== i) })} />}
                </div>
              ))}
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label className="text-slate-300 text-sm">Quiz Questions (Am I Eligible?)</Label>
                <AddBtn onClick={() => set("eligibility", { ...form.eligibility, quizQuestions: [...form.eligibility.quizQuestions, { question: "", yesIsCorrect: true }] })} label="Add question" />
              </div>
              {form.eligibility.quizQuestions.map((q, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3 mb-2 flex gap-3 items-start">
                  <div className="flex-1">
                    <Input value={q.question} onChange={e => { const u = [...form.eligibility.quizQuestions]; u[i] = { ...u[i], question: e.target.value }; set("eligibility", { ...form.eligibility, quizQuestions: u }); }}
                      placeholder="Have you completed 10+2?"
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 text-sm mb-1" />
                    <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
                      <input type="checkbox" checked={q.yesIsCorrect}
                        onChange={e => { const u = [...form.eligibility.quizQuestions]; u[i] = { ...u[i], yesIsCorrect: e.target.checked }; set("eligibility", { ...form.eligibility, quizQuestions: u }); }}
                        className="rounded border-white/20" />
                      "Yes" is the correct answer
                    </label>
                  </div>
                  <RemoveBtn onClick={() => set("eligibility", { ...form.eligibility, quizQuestions: form.eligibility.quizQuestions.filter((_, j) => j !== i) })} />
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ─── 5. Where This Degree Takes You (Careers) ─── */}
        <Section title="Where This Degree Takes You" action={
          <AddBtn onClick={() => set("careers", [...form.careers, { icon: "Briefcase", title: "", description: "", demand: "growing" }])} label="Add career" />
        }>
          <div className="space-y-3">
            {form.careers.length === 0 && <p className="text-slate-500 text-sm">No career paths added yet.</p>}
            {form.careers.map((c, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Career {i + 1}</span>
                  <RemoveBtn onClick={() => set("careers", form.careers.filter((_, j) => j !== i))} />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Field label="Icon (Lucide)" value={c.icon} onChange={v => { const u = [...form.careers]; u[i] = { ...u[i], icon: v }; set("careers", u); }} placeholder="Briefcase" />
                  <Field label="Title" value={c.title} onChange={v => { const u = [...form.careers]; u[i] = { ...u[i], title: v }; set("careers", u); }} placeholder="Data Scientist" />
                  <div>
                    <Label className="text-slate-300 text-sm mb-1.5 block">Demand</Label>
                    <Select value={c.demand} onValueChange={v => { const u = [...form.careers]; u[i] = { ...u[i], demand: v }; set("careers", u); }}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="growing">Growing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Field label="Description" value={c.description} onChange={v => { const u = [...form.careers]; u[i] = { ...u[i], description: v }; set("careers", u); }} placeholder="Analyze complex datasets to drive business decisions…" />
              </div>
            ))}
          </div>
        </Section>

        {/* ─── 6. Student Voices (Testimonials) ─── */}
        <Section title="Student Voices" action={
          <AddBtn onClick={() => set("testimonials", [...form.testimonials, { name: "", program: "", quote: "", image: "" }])} label="Add testimonial" />
        }>
          <div className="space-y-3">
            {form.testimonials.length === 0 && <p className="text-slate-500 text-sm">No testimonials added yet.</p>}
            {form.testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Testimonial {i + 1}</span>
                  <RemoveBtn onClick={() => set("testimonials", form.testimonials.filter((_, j) => j !== i))} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Student Name" value={t.name} onChange={v => { const u = [...form.testimonials]; u[i] = { ...u[i], name: v }; set("testimonials", u); }} placeholder="Priya Sharma" />
                  <Field label="Program" value={t.program} onChange={v => { const u = [...form.testimonials]; u[i] = { ...u[i], program: v }; set("testimonials", u); }} placeholder="BCA 2024 Batch" />
                </div>
                <div>
                  <Label className="text-slate-300 text-sm mb-1.5 block">Quote</Label>
                  <Textarea value={t.quote} onChange={e => { const u = [...form.testimonials]; u[i] = { ...u[i], quote: e.target.value }; set("testimonials", u); }}
                    rows={3} placeholder="What the student says about the program…"
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 resize-none text-sm" />
                </div>
                <Field label="Photo URL (optional)" value={t.image ?? ""} onChange={v => { const u = [...form.testimonials]; u[i] = { ...u[i], image: v }; set("testimonials", u); }} placeholder="https://…" />
              </div>
            ))}
          </div>
        </Section>

        {/* ─── 7. Program Fee ─── */}
        <Section title="Program Fee" action={
          <AddBtn onClick={() => set("fee", { ...form.fee, yearlyFees: [...form.fee.yearlyFees, { year: `Year ${form.fee.yearlyFees.length + 1}`, amount: "" }] })} label="Add year" />
        }>
          <div className="space-y-4">
            <Field label="Registration Fee" value={form.fee.registration} onChange={v => set("fee", { ...form.fee, registration: v })} placeholder="₹5,000 (non-refundable)" />
            {form.fee.yearlyFees.map((f, i) => (
              <div key={i} className="flex gap-3 items-end">
                <div className="flex-1">
                  <Field label={`Year Label`} value={f.year} onChange={v => { const u = [...form.fee.yearlyFees]; u[i] = { ...u[i], year: v }; set("fee", { ...form.fee, yearlyFees: u }); }} placeholder="Year 1" />
                </div>
                <div className="flex-1">
                  <Field label="Amount" value={f.amount} onChange={v => { const u = [...form.fee.yearlyFees]; u[i] = { ...u[i], amount: v }; set("fee", { ...form.fee, yearlyFees: u }); }} placeholder="₹1,20,000" />
                </div>
                {form.fee.yearlyFees.length > 1 && <RemoveBtn onClick={() => set("fee", { ...form.fee, yearlyFees: form.fee.yearlyFees.filter((_, j) => j !== i) })} />}
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Bottom save */}
      <div className="mt-8 flex justify-end">
        <Button onClick={handleSave} disabled={saving} className="gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8">
          <Save size={14} /> {saving ? "Saving…" : "Save Course"}
        </Button>
      </div>
    </div>
  );
};

/* ── Reusable sub-components ── */

const Section = ({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) => (
  <section className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{title}</h2>
      {action}
    </div>
    {children}
  </section>
);

const Field = ({ label, value, onChange, placeholder, hint }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; hint?: string;
}) => (
  <div>
    <Label className="text-slate-300 text-sm mb-1.5 block">{label}</Label>
    <Input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 focus:border-amber-400" />
    {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
  </div>
);

const AddBtn = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <Button variant="ghost" size="sm" onClick={onClick} className="gap-1.5 text-slate-400 hover:text-white text-xs">
    <Plus size={12} /> {label}
  </Button>
);

const RemoveBtn = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} className="text-slate-500 hover:text-red-400 transition-colors self-start mt-2">
    <X size={14} />
  </button>
);

export default AdminCourseEditor;
