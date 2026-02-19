import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Trash2, Plus, X } from "lucide-react";

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
}

const EMPTY: CourseForm = {
  slug: "", title: "", short_title: "", degree: "", duration: "",
  campus: "", campus_type: "gcc", category: "", banner_image: "",
  hook_line: "", overview: [""], apply_link: "", brochure_link: "",
  domain_theme: "tech", is_published: true,
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
    const fetch = async () => {
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
      });
      setLoading(false);
    };
    fetch();
  }, [id, isNew, toast]);

  const set = (k: keyof CourseForm, v: unknown) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSave = async () => {
    if (!form.slug || !form.title) {
      toast({ title: "Validation", description: "Slug and title are required.", variant: "destructive" });
      return;
    }
    setSaving(true);
    const payload = { ...form, overview: form.overview.filter(l => l.trim()), brochure_link: form.brochure_link || null };
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
      <div className="flex items-center justify-between mb-8">
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
        {/* Basic Info */}
        <section className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Basic Information</h2>
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
        </section>

        {/* Classification */}
        <section className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Classification</h2>
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
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gcc">Global City Campus</SelectItem>
                  <SelectItem value="prashanti">Prashanti Kutiram</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-slate-300 text-sm mb-1.5 block">Domain Theme</Label>
              <Select value={form.domain_theme} onValueChange={v => set("domain_theme", v)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
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
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Overview Paragraphs</h2>
            <Button variant="ghost" size="sm" onClick={() => set("overview", [...form.overview, ""])} className="gap-1.5 text-slate-400 hover:text-white text-xs">
              <Plus size={12} /> Add paragraph
            </Button>
          </div>
          <div className="space-y-3">
            {form.overview.map((para, i) => (
              <div key={i} className="flex gap-2">
                <Textarea
                  value={para}
                  onChange={e => {
                    const updated = [...form.overview];
                    updated[i] = e.target.value;
                    set("overview", updated);
                  }}
                  rows={3}
                  placeholder={`Paragraph ${i + 1}…`}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-slate-500 resize-none text-sm"
                />
                {form.overview.length > 1 && (
                  <button onClick={() => set("overview", form.overview.filter((_, j) => j !== i))} className="text-slate-500 hover:text-red-400 transition-colors self-start mt-2">
                    <X size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

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

export default AdminCourseEditor;
