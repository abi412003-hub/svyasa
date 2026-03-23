import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Plus, X, Upload, Image as ImageIcon } from "lucide-react";

const DEPARTMENTS = [
  "Department of Life Sciences",
  "Department of Yoga",
  "Department of Naturopathy",
  "Department of Ayurveda",
  "Department of Physiotherapy",
  "Department of Allied Health",
  "Department of Management",
  "Department of Humanities",
  "Department of Physical Sciences",
  "Anvesana Research Labs",
  "School of Yogic Sciences",
  "School of Yoga and Naturopathic Medicine",
  "School of Physiotherapy",
  "School of Allied and Healthcare Profession",
  "School of Management & Commerce",
  "School of Humanities & Liberal Arts",
  "School of Indian Knowledge Systems",
  "School of Engineering & Technology",
  "School of Agriculture & Sustainability",
];

const CATEGORIES = [
  "Academic Leadership Board",
  "Faculty and Staff",
  "Project Staff",
  "Support Staff",
  "Visiting Faculty",
];

interface FacultyForm {
  name: string;
  slug: string;
  designation: string;
  department: string;
  faculty_category: string;
  qualifications: string;
  bio: string;
  photo_url: string;
  email: string;
  phone: string;
  google_scholar_url: string;
  orcid_id: string;
  linkedin_url: string;
  achievements: string;
  publications: string;
  research: string;
  responsibility: string;
  research_interests: string[];
  area_of_expertise: string[];
  display_order: number;
  is_published: boolean;
  contentful_id: string;
}

const emptyForm: FacultyForm = {
  name: "", slug: "", designation: "", department: "", faculty_category: "Faculty and Staff",
  qualifications: "", bio: "", photo_url: "", email: "", phone: "",
  google_scholar_url: "", orcid_id: "", linkedin_url: "", achievements: "", publications: "",
  research: "", responsibility: "", research_interests: [], area_of_expertise: [],
  display_order: 999, is_published: true, contentful_id: "",
};

export default function AdminFacultyEditor() {
  const { id } = useParams();
  const isNew = id === "new";
  const navigate = useNavigate();
  const { toast } = useToast();
  const [form, setForm] = useState<FacultyForm>({ ...emptyForm });
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [newInterest, setNewInterest] = useState("");
  const [newExpertise, setNewExpertise] = useState("");

  useEffect(() => {
    if (isNew) return;
    (async () => {
      const { data, error } = await supabase.from("faculty_profiles").select("*").eq("id", id).single();
      if (error || !data) { navigate("/admin/faculty"); return; }
      setForm({
        name: data.name || "",
        slug: data.slug || "",
        designation: data.designation || "",
        department: data.department || "",
        faculty_category: data.faculty_category || "Faculty and Staff",
        qualifications: data.qualifications || "",
        bio: data.bio || "",
        photo_url: data.photo_url || "",
        email: data.email || "",
        phone: data.phone || "",
        google_scholar_url: data.google_scholar_url || "",
        orcid_id: data.orcid_id || "",
        linkedin_url: (data as any).linkedin_url || "",
        achievements: data.achievements || "",
        publications: data.publications || "",
        research: data.research || "",
        responsibility: data.responsibility || "",
        research_interests: Array.isArray(data.research_interests) ? data.research_interests as string[] : [],
        area_of_expertise: Array.isArray(data.area_of_expertise) ? data.area_of_expertise as string[] : [],
        display_order: data.display_order ?? 999,
        is_published: data.is_published ?? true,
        contentful_id: data.contentful_id || "",
      });
      setLoading(false);
    })();
  }, [id, isNew, navigate]);

  const generateSlug = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const set = (key: keyof FacultyForm, val: any) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSave = async () => {
    if (!form.name || !form.slug) {
      toast({ title: "Name and slug required", variant: "destructive" });
      return;
    }
    setSaving(true);
    const payload = {
      name: form.name,
      slug: form.slug,
      designation: form.designation,
      department: form.department,
      faculty_category: form.faculty_category,
      qualifications: form.qualifications,
      bio: form.bio,
      photo_url: form.photo_url,
      email: form.email,
      phone: form.phone,
      google_scholar_url: form.google_scholar_url,
      orcid_id: form.orcid_id,
      linkedin_url: form.linkedin_url,
      achievements: form.achievements,
      publications: form.publications,
      research: form.research,
      responsibility: form.responsibility,
      research_interests: form.research_interests,
      area_of_expertise: form.area_of_expertise,
      display_order: form.display_order,
      is_published: form.is_published,
      contentful_id: form.contentful_id || `local-${form.slug}`,
    };

    let error;
    if (isNew) {
      ({ error } = await supabase.from("faculty_profiles").insert(payload));
    } else {
      ({ error } = await supabase.from("faculty_profiles").update(payload).eq("id", id));
    }
    setSaving(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: isNew ? "Faculty created" : "Faculty updated" });
      navigate("/admin/faculty");
    }
  };

  const addTag = (field: "research_interests" | "area_of_expertise", value: string) => {
    if (!value.trim()) return;
    setForm((p) => ({ ...p, [field]: [...(p[field] as string[]), value.trim()] }));
    if (field === "research_interests") setNewInterest("");
    else setNewExpertise("");
  };

  const removeTag = (field: "research_interests" | "area_of_expertise", idx: number) => {
    setForm((p) => ({ ...p, [field]: (p[field] as string[]).filter((_, i) => i !== idx) }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/admin/faculty">
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
            <ArrowLeft size={18} />
          </Button>
        </Link>
        <h1 className="text-xl font-bold text-white">{isNew ? "Add Faculty" : `Edit: ${form.name}`}</h1>
      </div>

      <div className="space-y-8">
        {/* Basic Info */}
        <Section title="Basic Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Full Name *">
              <Input value={form.name} onChange={(e) => { set("name", e.target.value); if (isNew) set("slug", generateSlug(e.target.value)); }} className="bg-slate-800 border-slate-700 text-white" />
            </Field>
            <Field label="Slug *">
              <Input value={form.slug} onChange={(e) => set("slug", e.target.value)} className="bg-slate-800 border-slate-700 text-white" />
            </Field>
            <Field label="Designation">
              <Input value={form.designation} onChange={(e) => set("designation", e.target.value)} className="bg-slate-800 border-slate-700 text-white" />
            </Field>
            <Field label="Qualifications">
              <Input value={form.qualifications} onChange={(e) => set("qualifications", e.target.value)} className="bg-slate-800 border-slate-700 text-white" />
            </Field>
            <Field label="Department / School">
              <Select value={form.department} onValueChange={(v) => set("department", v)}>
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {DEPARTMENTS.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Category">
              <Select value={form.faculty_category} onValueChange={(v) => set("faculty_category", v)}>
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Display Order">
              <Input type="number" value={form.display_order} onChange={(e) => set("display_order", parseInt(e.target.value) || 999)} className="bg-slate-800 border-slate-700 text-white" />
            </Field>
            <Field label="Photo URL">
              <Input value={form.photo_url} onChange={(e) => set("photo_url", e.target.value)} className="bg-slate-800 border-slate-700 text-white" placeholder="https://..." />
            </Field>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Switch checked={form.is_published} onCheckedChange={(v) => set("is_published", v)} />
            <Label className="text-slate-300 text-sm">Published</Label>
          </div>
        </Section>

        {/* Contact */}
        <Section title="Contact & Links">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Email">
              <Input value={form.email} onChange={(e) => set("email", e.target.value)} className="bg-slate-800 border-slate-700 text-white" />
            </Field>
            <Field label="Phone">
              <Input value={form.phone} onChange={(e) => set("phone", e.target.value)} className="bg-slate-800 border-slate-700 text-white" />
            </Field>
            <Field label="Google Scholar URL">
              <Input value={form.google_scholar_url} onChange={(e) => set("google_scholar_url", e.target.value)} className="bg-slate-800 border-slate-700 text-white" />
            </Field>
            <Field label="ORCID ID">
              <Input value={form.orcid_id} onChange={(e) => set("orcid_id", e.target.value)} className="bg-slate-800 border-slate-700 text-white" />
            </Field>
            <Field label="LinkedIn URL">
              <Input value={form.linkedin_url} onChange={(e) => set("linkedin_url", e.target.value)} className="bg-slate-800 border-slate-700 text-white" placeholder="https://linkedin.com/in/..." />
            </Field>
          </div>
        </Section>

        {/* Bio & Research */}
        <Section title="Bio & Research">
          <Field label="Bio / About">
            <Textarea value={form.bio} onChange={(e) => set("bio", e.target.value)} rows={4} className="bg-slate-800 border-slate-700 text-white" />
          </Field>
          <Field label="Research Summary">
            <Textarea value={form.research} onChange={(e) => set("research", e.target.value)} rows={3} className="bg-slate-800 border-slate-700 text-white" />
          </Field>
          <Field label="Responsibility">
            <Input value={form.responsibility} onChange={(e) => set("responsibility", e.target.value)} className="bg-slate-800 border-slate-700 text-white" />
          </Field>
        </Section>

        {/* Research Interests */}
        <Section title="Research Interests">
          <div className="flex flex-wrap gap-2 mb-3">
            {form.research_interests.map((t, i) => (
              <span key={i} className="bg-slate-700 text-slate-200 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                {t}
                <button onClick={() => removeTag("research_interests", i)} className="text-slate-400 hover:text-red-400"><X size={12} /></button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Input value={newInterest} onChange={(e) => setNewInterest(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag("research_interests", newInterest))} placeholder="Add research interest" className="bg-slate-800 border-slate-700 text-white max-w-xs" />
            <Button variant="outline" size="sm" onClick={() => addTag("research_interests", newInterest)} className="border-slate-700 text-slate-300"><Plus size={14} /></Button>
          </div>
        </Section>

        {/* Area of Expertise */}
        <Section title="Area of Expertise">
          <div className="flex flex-wrap gap-2 mb-3">
            {form.area_of_expertise.map((t, i) => (
              <span key={i} className="bg-slate-700 text-slate-200 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                {t}
                <button onClick={() => removeTag("area_of_expertise", i)} className="text-slate-400 hover:text-red-400"><X size={12} /></button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Input value={newExpertise} onChange={(e) => setNewExpertise(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag("area_of_expertise", newExpertise))} placeholder="Add expertise" className="bg-slate-800 border-slate-700 text-white max-w-xs" />
            <Button variant="outline" size="sm" onClick={() => addTag("area_of_expertise", newExpertise)} className="border-slate-700 text-slate-300"><Plus size={14} /></Button>
          </div>
        </Section>

        {/* Achievements & Publications */}
        <Section title="Achievements & Publications">
          <Field label="Achievements (one per line)">
            <Textarea value={form.achievements} onChange={(e) => set("achievements", e.target.value)} rows={4} className="bg-slate-800 border-slate-700 text-white" />
          </Field>
          <Field label="Publications (one per line)">
            <Textarea value={form.publications} onChange={(e) => set("publications", e.target.value)} rows={4} className="bg-slate-800 border-slate-700 text-white" />
          </Field>
        </Section>

        {/* Save */}
        <div className="flex gap-3 pt-4 border-t border-white/5">
          <Button onClick={handleSave} disabled={saving} className="bg-amber-500 hover:bg-amber-600 text-black gap-2">
            <Save size={16} /> {saving ? "Saving..." : isNew ? "Create" : "Save Changes"}
          </Button>
          <Link to="/admin/faculty">
            <Button variant="outline" className="border-slate-700 text-slate-300">Cancel</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-slate-900/50 border border-white/5 rounded-xl p-5 space-y-4">
      <h2 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">{title}</h2>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-slate-400 text-xs">{label}</Label>
      {children}
    </div>
  );
}
