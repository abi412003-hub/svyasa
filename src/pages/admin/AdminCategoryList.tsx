import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { categories as staticCategories } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Plus, Search, Pencil, Eye, EyeOff, Upload, ExternalLink } from "lucide-react";

interface DBCategory {
  id: string; slug: string; title: string; short_title: string;
  level: string; campus_type: string; domain_theme: string;
  is_published: boolean; updated_at: string;
}

const AdminCategoryList = () => {
  const [categories, setCategories] = useState<DBCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [search, setSearch] = useState("");
  const { toast } = useToast();

  const fetchCategories = async () => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, error } = await (supabase.from("categories") as any)
      .select("id,slug,title,short_title,level,campus_type,domain_theme,is_published,updated_at")
      .order("title");
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else setCategories(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleSeed = async () => {
    setSeeding(true);
    let ok = 0, fail = 0;
    for (const c of staticCategories) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { error } = await (supabase.from("categories") as any).upsert({
        slug: c.slug, title: c.title, short_title: c.shortTitle,
        subtitle: c.subtitle, banner_image: c.bannerImage ?? "",
        level: c.level, campus_type: c.campusType,
        program_slugs: c.programSlugs, why_study: c.whyStudy,
        domain_theme: c.domainTheme, is_published: true,
      }, { onConflict: "slug" });
      if (error) fail++; else ok++;
    }
    toast({ title: "Seed complete", description: `${ok} imported, ${fail} failed.` });
    await fetchCategories();
    setSeeding(false);
  };

  const togglePublished = async (id: string, current: boolean) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase.from("categories") as any).update({ is_published: !current }).eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else setCategories(prev => prev.map(c => c.id === id ? { ...c, is_published: !current } : c));
  };

  const filtered = categories.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.slug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-500 text-sm mt-0.5">{categories.length} programme categories</p>
        </div>
        <div className="flex gap-3">
          {categories.length === 0 && (
            <Button onClick={handleSeed} disabled={seeding} variant="outline"
              className="gap-2 border-amber-300 text-amber-700 hover:bg-amber-50">
              <Upload size={14} /> {seeding ? "Importing…" : "Import from Static Data"}
            </Button>
          )}
          <Link to="/admin/categories/new">
            <Button className="gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold">
              <Plus size={14} /> Add Category
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative mb-6">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search categories…"
          className="pl-9 bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-amber-500" />
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-48">
          <div className="w-7 h-7 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider bg-gray-50">
                <th className="text-left px-5 py-3">Category</th>
                <th className="text-left px-5 py-3 hidden md:table-cell">Level</th>
                <th className="text-left px-5 py-3 hidden lg:table-cell">Campus</th>
                <th className="text-left px-5 py-3">Status</th>
                <th className="text-right px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr><td colSpan={5} className="text-center py-12 text-gray-400">
                  {categories.length === 0 ? 'No categories yet. Click "Import from Static Data" to populate.' : "No results."}
                </td></tr>
              ) : filtered.map(c => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="text-gray-900 font-medium">{c.short_title}</div>
                    <div className="text-gray-400 text-xs mt-0.5">/programs/{c.slug}</div>
                  </td>
                  <td className="px-5 py-3.5 hidden md:table-cell">
                    <span className="text-gray-600 capitalize">{c.level}</span>
                  </td>
                  <td className="px-5 py-3.5 hidden lg:table-cell">
                    <span className="text-gray-500 text-xs">
                      {c.campus_type === "gcc" ? "Global City" : c.campus_type === "prashanti" ? "Prashanti" : "Both"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${
                      c.is_published ? "bg-green-50 text-green-600 border-green-200" : "bg-gray-100 text-gray-500 border-gray-200"
                    }`}>{c.is_published ? "Published" : "Draft"}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center justify-end gap-2">
                      <a href={`/programs/${c.slug}`} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors" title="Preview">
                        <ExternalLink size={14} />
                      </a>
                      <button onClick={() => togglePublished(c.id, c.is_published)}
                        className="p-1.5 text-gray-400 hover:text-amber-600 transition-colors"
                        title={c.is_published ? "Unpublish" : "Publish"}>
                        {c.is_published ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                      <Link to={`/admin/categories/${c.id}`}
                        className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors" title="Edit">
                        <Pencil size={14} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminCategoryList;
