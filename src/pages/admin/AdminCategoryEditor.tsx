import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Trash2, Plus, X } from "lucide-react";

interface CatForm {
  slug: string; title: string; short_title: string; subtitle: string;
  banner_image: string; level: string; campus_type: string;
  program_slugs: string[]; domain_theme: string; is_published: boolean;
}

const EMPTY: CatForm = {
  slug: "", title: "", short_title: "", subtitle: "", banner_image: "",
  level: "undergraduate", campus_type: "gcc", program_slugs: [""],
  domain_theme: "tech", is_published: true,
};

const AdminCategoryEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isNew = id === "new";
  const navigate = useNavigate();
  const { toast } = useToast();
  const [form, setForm] = useState<CatForm>(EMPTY);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isNew) return;
    const fetch = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data, error } = await (supabase.from("categories") as any).select("*").eq("id", id).single();
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      setForm({
        slug: data.slug ?? "", title: data.title ?? "", short_title: data.short_title ?? "",
        subtitle: data.subtitle ?? "", banner_image: data.banner_image ?? "",
        level: data.level ?? "undergraduate", campus_type: data.campus_type ?? "gcc",
        program_slugs: Array.isArray(data.program_slugs) && data.program_slugs.length > 0 ? data.program_slugs as string[] : [""],
        domain_theme: data.domain_theme ?? "tech", is_published: data.is_published ?? true,
      });
      setLoading(false);
    };
    fetch();
  }, [id, isNew, toast]);

  const set = (k: keyof CatForm, v: unknown) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSave = async () => {
    if (!form.slug || !form.title) {
      toast({ title: "Validation", description: "Slug and title are required.", variant: "destructive" }); return;
    }
    setSaving(true);
    const payload = { ...form, program_slugs: form.program_slugs.filter(s => s.trim()) };
    let error;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db = supabase.from("categories") as any;
    if (isNew) ({ error } = await db.insert(payload));
    else ({ error } = await db.update(payload).eq("id", id));
    setSaving(false);
    if (error) { toast({ title: "Save failed", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Saved!" });
    navigate("/admin/categories");
  };

  const handleDelete = async () => {
    if (!confirm("Delete this category?")) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase.from("categories") as any).delete().eq("id", id);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Deleted" });
    navigate("/admin/categories");
  };

  if (loading) return (
    <div className="flex items-center justify-center h-full min-h-screen bg-gray-50">
      <div className="w-7 h-7 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Link to="/admin/categories" className="text-gray-400 hover:text-gray-700 transition-colors">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{isNew ? "Add Category" : "Edit Category"}</h1>
            {!isNew && <p className="text-gray-400 text-xs mt-0.5">{form.slug}</p>}
          </div>
        </div>
        <div className="flex gap-3">
          {!isNew && (
            <Button variant="ghost" onClick={handleDelete} className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-50">
              <Trash2 size={14} /> Delete
            </Button>
          )}
          <Button onClick={handleSave} disabled={saving} className="gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold">
            <Save size={14} /> {saving ? "Saving…" : "Save"}
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <section className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">Basic Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Slug *" value={form.slug} onChange={v => set("slug", v)} placeholder="bca" hint="/programs/slug" />
            <Field label="Short Title *" value={form.short_title} onChange={v => set("short_title", v)} placeholder="BCA" />
          </div>
          <Field label="Full Title *" value={form.title} onChange={v => set("title", v)} placeholder="Bachelor of Computer Applications" />
          <Field label="Subtitle" value={form.subtitle} onChange={v => set("subtitle", v)} placeholder="6 Cutting-Edge Specializations…" />
          <Field label="Banner Image URL" value={form.banner_image} onChange={v => set("banner_image", v)} placeholder="https://…" />
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">Classification</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label className="text-gray-600 text-sm mb-1.5 block">Level</Label>
              <Select value={form.level} onValueChange={v => set("level", v)}>
                <SelectTrigger className="bg-gray-50 border-gray-300 text-gray-900"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["undergraduate","postgraduate","doctoral","certificate","diploma"].map(l => (
                    <SelectItem key={l} value={l}>{l}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-gray-600 text-sm mb-1.5 block">Campus Type</Label>
              <Select value={form.campus_type} onValueChange={v => set("campus_type", v)}>
                <SelectTrigger className="bg-gray-50 border-gray-300 text-gray-900"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="gcc">Global City Campus</SelectItem>
                  <SelectItem value="prashanti">Prashanti Kutiram</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-gray-600 text-sm mb-1.5 block">Domain Theme</Label>
              <Select value={form.domain_theme} onValueChange={v => set("domain_theme", v)}>
                <SelectTrigger className="bg-gray-50 border-gray-300 text-gray-900"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["tech","business","yoga","health","research","arts"].map(t => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label className="text-gray-600 text-sm mb-1.5 block">Status</Label>
            <Select value={form.is_published ? "published" : "draft"} onValueChange={v => set("is_published", v === "published")}>
              <SelectTrigger className="bg-gray-50 border-gray-300 text-gray-900 w-40"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Programme Slugs</h2>
            <Button variant="ghost" size="sm" onClick={() => set("program_slugs", [...form.program_slugs, ""])}
              className="gap-1.5 text-gray-500 hover:text-gray-900 text-xs">
              <Plus size={12} /> Add
            </Button>
          </div>
          <div className="space-y-2">
            {form.program_slugs.map((slug, i) => (
              <div key={i} className="flex gap-2">
                <Input value={slug} onChange={e => {
                  const updated = [...form.program_slugs]; updated[i] = e.target.value;
                  set("program_slugs", updated);
                }} placeholder="course-slug" className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 text-sm" />
                {form.program_slugs.length > 1 && (
                  <button onClick={() => set("program_slugs", form.program_slugs.filter((_, j) => j !== i))}
                    className="text-gray-400 hover:text-red-500 transition-colors">
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
    <Label className="text-gray-600 text-sm mb-1.5 block">{label}</Label>
    <Input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-amber-500" />
    {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
  </div>
);

export default AdminCategoryEditor;
