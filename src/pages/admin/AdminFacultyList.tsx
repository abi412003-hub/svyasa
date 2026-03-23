import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit2, Trash2, Users, FlaskConical, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DEPARTMENT_GROUPS = [
  { key: "all", label: "All Faculty", icon: Users },
  { key: "research", label: "Research", icon: FlaskConical },
  { key: "school", label: "Schools / Divisions", icon: GraduationCap },
];

export default function AdminFacultyList() {
  const [faculty, setFaculty] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const { toast } = useToast();

  const fetchFaculty = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("faculty_profiles")
      .select("*")
      .order("display_order", { ascending: true });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setFaculty(data || []);
    }
    setLoading(false);
  };

  useEffect(() => { fetchFaculty(); }, []);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    const { error } = await supabase.from("faculty_profiles").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Deleted", description: `${name} removed.` });
      setFaculty((prev) => prev.filter((f) => f.id !== id));
    }
  };

  const isResearch = (f: any) => {
    const dept = (f.department || "").toLowerCase();
    return dept.includes("life sciences") || dept.includes("research") || dept.includes("anvesana");
  };

  const filtered = faculty.filter((f) => {
    const matchesSearch =
      !search ||
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      (f.department || "").toLowerCase().includes(search.toLowerCase());
    if (!matchesSearch) return false;
    if (filter === "research") return isResearch(f);
    if (filter === "school") return !isResearch(f);
    return true;
  });

  const departments = [...new Set(filtered.map((f) => f.department || "Uncategorized"))].sort();

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Faculty Profiles</h1>
          <p className="text-slate-400 text-sm mt-1">{faculty.length} profiles • Research & Schools</p>
        </div>
        <Link to="/admin/faculty/new">
          <Button className="bg-amber-500 hover:bg-amber-600 text-black gap-2">
            <Plus size={16} /> Add Faculty
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <Input
            placeholder="Search by name or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-slate-800 border-slate-700 text-white"
          />
        </div>
        <div className="flex gap-1 bg-slate-800 rounded-lg p-1">
          {DEPARTMENT_GROUPS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                filter === key
                  ? "bg-amber-500/20 text-amber-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-500">Loading...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-500">No faculty found.</div>
      ) : (
        departments.map((dept) => {
          const members = filtered.filter((f) => (f.department || "Uncategorized") === dept);
          if (members.length === 0) return null;
          return (
            <div key={dept} className="mb-8">
              <h2 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                {dept}
                <Badge variant="secondary" className="text-[10px]">{members.length}</Badge>
              </h2>
              <div className="grid gap-2">
                {members.map((f) => (
                  <div
                    key={f.id}
                    className="flex items-center gap-4 bg-slate-800/60 border border-white/5 rounded-lg px-4 py-3 hover:bg-slate-800 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden flex-shrink-0">
                      {f.photo_url ? (
                        <img src={f.photo_url} alt={f.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm font-bold">
                          {f.name?.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{f.name}</p>
                      <p className="text-slate-400 text-xs truncate">{f.designation} • {f.faculty_category}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-[10px] ${f.is_published ? "border-green-500/30 text-green-400" : "border-red-500/30 text-red-400"}`}
                    >
                      {f.is_published ? "Published" : "Draft"}
                    </Badge>
                    <div className="flex gap-1">
                      <Link to={`/admin/faculty/${f.id}`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-amber-400">
                          <Edit2 size={14} />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-red-400"
                        onClick={() => handleDelete(f.id, f.name)}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
