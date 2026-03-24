import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Award, BookOpen, FlaskConical, Star, User, Linkedin } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ResearchSubNav from "@/components/research/ResearchSubNav";
import { supabase } from "@/integrations/supabase/client";

export interface FacultyProfile {
  id: string;
  name: string;
  designation: string;
  qualifications: string;
  photo?: string;
  bio?: string;
  section: "leadership" | "staff" | "project";
  achievements?: string[];
  expertise?: string;
  research?: string;
  publications?: string[];
  linkedin_url?: string;
}

function mapCategoryToSection(cat: string): "leadership" | "staff" | "project" {
  if (cat === "Academic Leadership Board") return "leadership";
  if (cat === "Project Staff") return "project";
  return "staff";
}

/* ── Variants ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── Helpers ── */
function avatarUrl(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1a3d6b&color=fff&size=160&bold=true`;
}

/* ── Faculty Avatar ── */
function FacultyAvatar({ photo, name, size = "lg" }: { photo?: string; name: string; size?: "sm" | "md" | "lg" | "xl" | "2xl" }) {
  const [err, setErr] = useState(false);
  const sizeClass = { sm: "w-16 h-16", md: "w-24 h-24", lg: "w-32 h-32", xl: "w-40 h-40", "2xl": "w-48 h-48" }[size];
  const src = (!photo || err) ? avatarUrl(name) : photo;
  return (
    <img
      src={src}
      alt={name}
      className={`${sizeClass} rounded-full object-cover border-2 border-border`}
      onError={() => setErr(true)}
    />
  );
}

/* ── Faculty Modal ── */
function FacultyModal({ member, onClose }: { member: FacultyProfile; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-end"
        onClick={onClose}
      >
        <motion.aside
          key="drawer"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="relative bg-white h-full w-full max-w-xl overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="sticky top-0 z-10 px-8 pt-8 pb-6"
            style={{ background: "linear-gradient(160deg, hsl(210 60% 12%), hsl(180 45% 22%))" }}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-1"
            >
              <X size={22} />
            </button>
            <div className="flex items-center gap-5">
              <div className="rounded-full overflow-hidden border-2 border-white/30 w-20 h-20 shrink-0">
                <FacultyAvatar photo={member.photo} name={member.name} size="lg" />
              </div>
              <div>
                <p className="text-[hsl(var(--saffron-light))] text-xs font-semibold uppercase tracking-widest mb-1">
                  {member.section === "leadership" ? "Academic Leadership" : member.section === "project" ? "Project Staff" : "Faculty & Staff"}
                </p>
                <h2 className="text-white font-['Playfair_Display',serif] text-xl font-bold leading-snug mb-1">
                  {member.name}
                </h2>
                <p className="text-white/70 text-sm">{member.designation}</p>
                {member.linkedin_url && (
                  <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-xs mt-1 transition-colors">
                    <Linkedin size={12} /> LinkedIn
                  </a>
                )}
              </div>
            </div>
            {member.qualifications && (
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full border border-white/20">
                  <Star size={11} />
                  {member.qualifications}
                </span>
              </div>
            )}
          </div>

          {/* Body */}
          <div className="px-8 py-8 space-y-8">
            {member.achievements && member.achievements.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-[hsl(var(--saffron))]" size={18} />
                  <h3 className="font-semibold text-[hsl(var(--navy))] text-base">Achievements</h3>
                </div>
                <ul className="space-y-2.5">
                  {member.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--saffron))] shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {member.expertise && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical className="text-[hsl(var(--teal))]" size={18} />
                  <h3 className="font-semibold text-[hsl(var(--navy))] text-base">Area of Expertise</h3>
                </div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{member.expertise}</p>
              </div>
            )}

            {member.research && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical className="text-[hsl(var(--navy))]" size={18} />
                  <h3 className="font-semibold text-[hsl(var(--navy))] text-base">Research</h3>
                </div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{member.research}</p>
              </div>
            )}

            {member.publications && member.publications.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="text-[hsl(var(--teal))]" size={18} />
                  <h3 className="font-semibold text-[hsl(var(--navy))] text-base">Publications</h3>
                </div>
                <ul className="space-y-3">
                  {member.publications.map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed border-l-2 border-[hsl(var(--teal))]/30 pl-3">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!member.achievements && !member.expertise && !member.research && !member.publications && (
              <div className="text-center py-12 text-[hsl(var(--muted-foreground))]">
                <User className="mx-auto mb-3 opacity-30" size={40} />
                <p className="text-sm">Full profile details coming soon.</p>
              </div>
            )}
          </div>
        </motion.aside>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Leadership Card (large) ── */
function LeadershipCard({ member, onClick }: { member: FacultyProfile; onClick: () => void }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, boxShadow: "0 20px 40px -10px hsla(210,52%,23%,0.15)" }}
      className="bg-white border border-border rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:border-[hsl(var(--saffron))]"
      onClick={onClick}
    >
      <div className="pt-10 pb-6 px-6 flex flex-col items-center text-center">
        <div className="rounded-full overflow-hidden border-4 border-[hsl(var(--cream))] group-hover:border-[hsl(var(--saffron))]/30 transition-colors w-40 h-40 mb-5 shadow-md">
          <FacultyAvatar photo={member.photo} name={member.name} size="xl" />
        </div>
        <h3 className="font-['Playfair_Display',serif] text-xl text-[hsl(var(--navy))] font-bold leading-tight mb-1.5">
          {member.name}
        </h3>
        <p className="text-[hsl(var(--teal))] text-sm font-medium mb-3">{member.designation}</p>
        {member.qualifications && (
          <p className="text-[hsl(var(--muted-foreground))] text-xs mb-5 leading-snug">{member.qualifications}</p>
        )}
        <button className="text-xs font-semibold text-[hsl(var(--saffron))] border border-[hsl(var(--saffron))]/40 px-4 py-1.5 rounded-full group-hover:bg-[hsl(var(--saffron))] group-hover:text-white transition-all duration-200">
          View Profile →
        </button>
      </div>
    </motion.div>
  );
}

/* ── Staff Card (standard) ── */
function StaffCard({ member, onClick, minimal = false }: { member: FacultyProfile; onClick: () => void; minimal?: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="bg-white border border-border rounded-xl p-6 cursor-pointer group transition-all duration-200 hover:border-[hsl(var(--teal))]/50 hover:shadow-md flex items-center gap-5"
      onClick={onClick}
    >
      <div className="rounded-full overflow-hidden border-2 border-border group-hover:border-[hsl(var(--teal))]/40 transition-colors shrink-0">
        <FacultyAvatar photo={member.photo} name={member.name} size={minimal ? "md" : "lg"} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-[hsl(var(--navy))] text-base leading-tight truncate">{member.name}</h3>
        <p className="text-[hsl(var(--teal))] text-sm mt-1">{member.designation}</p>
        {!minimal && member.qualifications && (
          <p className="text-[hsl(var(--muted-foreground))] text-xs mt-1.5 leading-snug line-clamp-1">{member.qualifications}</p>
        )}
      </div>
      <span className="text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--teal))] transition-colors text-xl leading-none shrink-0">›</span>
    </motion.div>
  );
}

/* ── Section Heading ── */
function SectionHeading({ label, title, count }: { label: string; title: string; count: number }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end gap-3 mb-10">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
          <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">{label}</span>
        </div>
        <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-[hsl(var(--navy))] font-bold">{title}</h2>
      </div>
      <span className="inline-flex items-center bg-[hsl(var(--cream))] text-[hsl(var(--navy))] text-sm font-semibold px-3 py-1 rounded-full border border-border">
        {count} Members
      </span>
    </div>
  );
}

/* ── Page ── */
export default function ResearchFaculty() {
  const [selected, setSelected] = useState<FacultyProfile | null>(null);
  const [allFaculty, setAllFaculty] = useState<FacultyProfile[]>([]);

  useEffect(() => {
    async function fetchFaculty() {
      const { data } = await supabase
        .from("faculty_profiles")
        .select("*")
        .eq("is_published", true)
        .in("department", ["Anvesana Research Labs", "Department of Life Sciences"])
        .order("display_order", { ascending: true });

      if (data) {
        setAllFaculty(
          data.map((d) => ({
            id: d.id,
            name: d.name,
            designation: d.designation || "",
            qualifications: d.qualifications || "",
            photo: d.photo_url || undefined,
            bio: d.bio || undefined,
            section: mapCategoryToSection(d.faculty_category || ""),
            achievements: d.achievements ? d.achievements.split("\n").filter(Boolean) : undefined,
            expertise: (d.area_of_expertise as string[] | null)?.join(", ") || undefined,
            research: d.research || undefined,
            publications: d.publications ? d.publications.split("\n").filter(Boolean) : undefined,
            linkedin_url: d.linkedin_url || undefined,
          }))
        );
      }
    }
    fetchFaculty();
  }, []);

  const leadership = allFaculty.filter((f) => f.section === "leadership");
  const staff = allFaculty.filter((f) => f.section === "staff");
  const project = allFaculty.filter((f) => f.section === "project");

  const sec1Ref = useRef<HTMLDivElement>(null);
  const sec2Ref = useRef<HTMLDivElement>(null);
  const sec3Ref = useRef<HTMLDivElement>(null);
  const sec1In = useInView(sec1Ref, { once: true, margin: "-80px" });
  const sec2In = useInView(sec2Ref, { once: true, margin: "-80px" });
  const sec3In = useInView(sec3Ref, { once: true, margin: "-80px" });

  return (
    <Layout>
      <ResearchSubNav />
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center h-[45vh] sm:h-[38vh] overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(210 52% 23%) 50%, hsl(180 45% 25%) 100%)" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute top-6 left-6 md:left-8 flex items-center gap-2 text-white/60 text-xs z-10">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/research" className="hover:text-white transition-colors">Research</Link>
          <span>/</span>
          <span className="text-white/40">Research Faculty</span>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[hsl(var(--saffron-light))] text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Anvesana Research
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-['Playfair_Display',serif] text-4xl md:text-6xl text-white font-bold mb-4"
          >
            Research Faculty
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto h-[2px] w-16 bg-[hsl(var(--saffron))]"
          />
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Stats bar */}
      <div className="bg-[hsl(var(--navy))] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap gap-8 items-center justify-center sm:justify-start">
          {[
            { n: leadership.length, label: "Academic Leadership" },
            { n: staff.length, label: "Faculty & Staff" },
            { n: project.length, label: "Project Staff" },
            { n: allFaculty.length, label: "Total Members" },
          ].map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-[hsl(var(--saffron))] font-['DM_Mono',monospace] text-2xl font-bold">{s.n}</p>
              <p className="text-white/60 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="py-16 max-w-7xl mx-auto px-6 lg:px-10 space-y-20">

        {/* Section 1: Leadership */}
        <motion.div
          ref={sec1Ref}
          initial="hidden"
          animate={sec1In ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading label="Section 01" title="Academic Leadership Board" count={leadership.length} />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((m) => (
              <LeadershipCard key={m.id} member={m} onClick={() => setSelected(m)} />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dashed border-border" />

        {/* Section 2: Faculty & Staff */}
        <motion.div
          ref={sec2Ref}
          initial="hidden"
          animate={sec2In ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading label="Section 02" title="Faculty and Staff" count={staff.length} />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {staff.map((m) => (
              <StaffCard
                key={m.id}
                member={m}
                onClick={() => setSelected(m)}
                minimal={!m.achievements && !m.research && !m.expertise}
              />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dashed border-border" />

        {/* Section 3: Project Staff */}
        <motion.div
          ref={sec3Ref}
          initial="hidden"
          animate={sec3In ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading label="Section 03" title="Project Staff" count={project.length} />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.map((m) => (
              <StaffCard key={m.id} member={m} onClick={() => setSelected(m)} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(210 52% 23%) 60%, hsl(180 45% 25%) 100%)" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-2xl mx-auto px-6"
        >
          <motion.h2 variants={fadeUp} className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-white font-bold mb-4">
            Collaborate with Our Researchers
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/75 text-lg mb-8">
            Partner with world-class scientists and yogic scholars to advance integrative health research.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/research/facility"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--saffron))] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[hsl(var(--saffron-dark))] transition-colors"
            >
              Explore Research Labs →
            </Link>
            <Link
              to="/research/ongoing-projects"
              className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              View Ongoing Projects →
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Modal */}
      {selected && <FacultyModal member={selected} onClose={() => setSelected(null)} />}
    </Layout>
  );
}
