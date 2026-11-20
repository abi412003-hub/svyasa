import { motion, useInView, Variants } from "framer-motion";
import { ChevronDown, Search, Filter, User } from "lucide-react";
import { FacultyAvatar, FacultyProfileModal } from "@/components/faculty/FacultyProfileModal";
import { useRef, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";

interface FacultyProfile {
  id: string;
  name: string;
  designation: string;
  qualifications: string;
  department: string;
  photo?: string;
  bio?: string;
  category: string;
  achievements?: string[];
  expertise?: string;
  research?: string;
  publications?: string[];
  linkedin_url?: string;
}

/* ── Variants ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

/* ── Faculty Card ── */
function FacultyCard({ member, onClick, large = false }: { member: FacultyProfile; onClick: () => void; large?: boolean }) {
  if (large) {
    return (
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -6, boxShadow: "0 20px 40px -10px hsla(210,52%,23%,0.15)" }}
        className="bg-white border border-border rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:border-[hsl(var(--saffron))]"
        onClick={onClick}
      >
        <div className="pt-8 pb-6 px-6 flex flex-col items-center text-center">
          <div className="rounded-full overflow-hidden border-4 border-[hsl(var(--cream))] group-hover:border-[hsl(var(--saffron))]/30 transition-colors w-36 h-36 mb-4 shadow-md">
            <FacultyAvatar photo={member.photo} name={member.name} size="fill" />
          </div>
          <h3 className="font-['Playfair_Display',serif] text-lg text-[hsl(var(--navy))] font-bold leading-tight mb-1">{member.name}</h3>
          <p className="text-[hsl(var(--teal))] text-sm font-medium mb-1">{member.designation}</p>
          {member.department && <p className="text-muted-foreground text-xs mb-2">{member.department}</p>}
          <button className="text-xs font-semibold text-[hsl(var(--saffron))] border border-[hsl(var(--saffron))]/40 px-4 py-1.5 rounded-full group-hover:bg-[hsl(var(--saffron))] group-hover:text-white transition-all duration-200">
            View Profile →
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      className="bg-white border border-border rounded-xl p-4 cursor-pointer group transition-all duration-200 hover:border-[hsl(var(--teal))]/50 hover:shadow-md flex items-center gap-4"
      onClick={onClick}
    >
      <div className="rounded-full overflow-hidden border-2 border-border group-hover:border-[hsl(var(--teal))]/40 transition-colors shrink-0">
        <FacultyAvatar photo={member.photo} name={member.name} size="md" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-[hsl(var(--navy))] text-sm leading-tight truncate">{member.name}</h3>
        <p className="text-[hsl(var(--teal))] text-xs mt-0.5">{member.designation}</p>
        {member.department && <p className="text-muted-foreground text-[11px] mt-0.5">{member.department}</p>}
      </div>
      <span className="text-muted-foreground group-hover:text-[hsl(var(--teal))] transition-colors text-lg shrink-0">›</span>
    </motion.div>
  );
}

const CATEGORIES = [
  { key: "Academic Leadership Board", label: "Academic Leadership", sectionLabel: "Section 01" },
  { key: "Faculty and Staff", label: "Faculty & Staff", sectionLabel: "Section 02" },
  { key: "Project Staff", label: "Project Staff", sectionLabel: "Section 03" },
  { key: "Support Staff", label: "Support Staff", sectionLabel: "Section 04" },
];

export default function Faculty() {
  const [selected, setSelected] = useState<FacultyProfile | null>(null);
  const [allFaculty, setAllFaculty] = useState<FacultyProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("all");

  useEffect(() => {
    async function fetchFaculty() {
      const { data } = await supabase
        .from("faculty_profiles")
        .select("*")
        .eq("is_published", true)
        .order("display_order", { ascending: true });

      if (data) {
        setAllFaculty(
          data.map((d) => ({
            id: d.id,
            name: d.name,
            designation: d.designation || "",
            qualifications: d.qualifications || "",
            department: d.department || "",
            photo: d.photo_url || undefined,
            bio: d.bio || undefined,
            category: d.faculty_category || "Faculty and Staff",
            achievements: d.achievements ? d.achievements.split("\n").filter(Boolean) : undefined,
            expertise: (d.area_of_expertise as string[] | null)?.join(", ") || undefined,
            research: d.research || undefined,
            publications: d.publications ? d.publications.split("\n").filter(Boolean) : undefined,
            linkedin_url: d.linkedin_url || undefined,
          }))
        );
      }
      setLoading(false);
    }
    fetchFaculty();
  }, []);

  const departments = useMemo(() => {
    const depts = new Set(allFaculty.map(f => f.department).filter(Boolean));
    return Array.from(depts).sort();
  }, [allFaculty]);

  const filtered = useMemo(() => {
    let list = allFaculty;
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(f => f.name.toLowerCase().includes(q) || f.designation.toLowerCase().includes(q) || f.department.toLowerCase().includes(q));
    }
    if (deptFilter !== "all") {
      list = list.filter(f => f.department === deptFilter);
    }
    return list;
  }, [allFaculty, search, deptFilter]);

  const grouped = useMemo(() => {
    return CATEGORIES.map(cat => ({
      ...cat,
      members: filtered.filter(f => f.category === cat.key),
    })).filter(g => g.members.length > 0);
  }, [filtered]);

  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center h-[45vh] sm:h-[38vh] overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(210 52% 23%) 50%, hsl(180 45% 25%) 100%)" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute top-6 left-6 md:left-8 flex items-center gap-2 text-white/60 text-xs z-10">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/40">Faculty</span>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[hsl(var(--saffron-light))] text-sm font-semibold uppercase tracking-widest mb-3">
            S-VYASA University
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-['Playfair_Display',serif] text-4xl md:text-6xl text-white font-bold mb-4">
            Our Faculty
          </motion.h1>
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mx-auto h-[2px] w-16 bg-[hsl(var(--saffron))]" />
        </div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40">
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Stats bar */}
      <div className="bg-[hsl(var(--navy))] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap gap-8 items-center justify-center">
          {CATEGORIES.map(cat => {
            const count = allFaculty.filter(f => f.category === cat.key).length;
            return count > 0 ? (
              <div key={cat.key} className="text-center">
                <p className="text-[hsl(var(--saffron))] font-['DM_Mono',monospace] text-2xl font-bold">{count}</p>
                <p className="text-white/60 text-xs">{cat.label}</p>
              </div>
            ) : null;
          })}
          <div className="text-center">
            <p className="text-[hsl(var(--saffron))] font-['DM_Mono',monospace] text-2xl font-bold">{allFaculty.length}</p>
            <p className="text-white/60 text-xs">Total Members</p>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-[hsl(var(--cream))]/50 border-b border-border py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search faculty by name, designation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-white"
            />
          </div>
          <div className="relative">
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-md border border-input bg-white text-sm text-foreground min-w-[200px]"
            >
              <option value="all">All Departments</option>
              {departments.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        {loading ? (
          <div className="text-center py-20">
            <div className="w-8 h-8 border-2 border-[hsl(var(--saffron))] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">Loading faculty...</p>
          </div>
        ) : grouped.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <User className="mx-auto mb-3 opacity-30" size={40} />
            <p>No faculty found matching your search.</p>
          </div>
        ) : (
          grouped.map((group, gi) => (
            <motion.div key={group.key} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}>
              <motion.div variants={fadeUp}>
                <div className="flex flex-col sm:flex-row sm:items-end gap-3 mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
                      <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">{group.sectionLabel}</span>
                    </div>
                    <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-[hsl(var(--navy))] font-bold">{group.label}</h2>
                  </div>
                  <span className="inline-flex items-center bg-[hsl(var(--cream))] text-[hsl(var(--navy))] text-sm font-semibold px-3 py-1 rounded-full border border-border">
                    {group.members.length} Members
                  </span>
                </div>
              </motion.div>

              {group.key === "Academic Leadership Board" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {group.members.map(m => <FacultyCard key={m.id} member={m} onClick={() => setSelected(m)} large />)}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.members.map(m => <FacultyCard key={m.id} member={m} onClick={() => setSelected(m)} />)}
                </div>
              )}

              {gi < grouped.length - 1 && <div className="border-t border-dashed border-border mt-14" />}
            </motion.div>
          ))
        )}
      </div>

      {selected && (
        <FacultyProfileModal
          member={{ ...selected, groupLabel: selected.category || "Faculty" }}
          onClose={() => setSelected(null)}
        />
      )}
    </Layout>
  );
}
