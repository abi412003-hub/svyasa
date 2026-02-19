import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Users, X, Star, FlaskConical } from "lucide-react";
import type { FacultyMember } from "@/data/divisionsData";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

function avatarUrl(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1a3d6b&color=fff&size=160&bold=true`;
}

function Avatar({ photo, name }: { photo?: string; name: string }) {
  const [err, setErr] = useState(false);
  return (
    <img
      src={(!photo || err) ? avatarUrl(name) : photo}
      alt={name}
      className="w-full h-full object-cover"
      onError={() => setErr(true)}
    />
  );
}

function FacultyDrawer({ member, onClose }: { member: FacultyMember; onClose: () => void }) {
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
          className="relative bg-card h-full w-full max-w-md overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 px-8 pt-8 pb-6 bg-secondary">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors p-1"
            >
              <X size={22} />
            </button>
            <div className="flex items-center gap-5">
              <div className="rounded-full overflow-hidden border-2 border-white/20 w-20 h-20 shrink-0">
                <Avatar photo={member.photo} name={member.name} />
              </div>
              <div>
                <h2 className="text-secondary-foreground font-heading text-xl font-bold leading-snug mb-1">
                  {member.name}
                </h2>
                <p className="text-secondary-foreground/70 text-sm">{member.designation}</p>
              </div>
            </div>
            {member.qualifications && (
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-secondary-foreground/80 text-xs px-3 py-1.5 rounded-full border border-white/20">
                  <Star size={11} /> {member.qualifications}
                </span>
              </div>
            )}
          </div>

          {/* Body */}
          <div className="px-8 py-8 space-y-6">
            {member.expertise && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical className="text-primary" size={18} />
                  <h3 className="font-semibold text-foreground text-base">Area of Expertise</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.expertise}</p>
              </div>
            )}
            {!member.expertise && (
              <div className="text-center py-12 text-muted-foreground">
                <Users className="mx-auto mb-3 opacity-30" size={40} />
                <p className="text-sm">Full profile details coming soon.</p>
              </div>
            )}
          </div>
        </motion.aside>
      </motion.div>
    </AnimatePresence>
  );
}

interface SchoolFacultySectionProps {
  faculty: FacultyMember[];
  divisionColor: string;
}

const SchoolFacultySection = ({ faculty, divisionColor }: SchoolFacultySectionProps) => {
  const [selected, setSelected] = useState<FacultyMember | null>(null);

  if (!faculty || faculty.length === 0) return null;

  return (
    <>
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" /> Faculty
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            {faculty.length} faculty member{faculty.length !== 1 ? "s" : ""} in this school
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {faculty.map((member, i) => (
              <motion.div
                key={member.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                onClick={() => setSelected(member)}
                className="bg-card border border-border rounded-xl p-5 cursor-pointer group hover:border-primary/40 hover:shadow-md transition-all duration-200 flex items-center gap-4"
              >
                <div className={`w-14 h-14 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary/30 transition-colors shrink-0 ring-2 ring-border`}>
                  <Avatar photo={member.photo} name={member.name} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm leading-tight truncate">{member.name}</h3>
                  <p className="text-primary text-xs mt-1 leading-snug">{member.designation}</p>
                  {member.qualifications && (
                    <p className="text-muted-foreground text-xs mt-1 truncate">{member.qualifications}</p>
                  )}
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors text-lg shrink-0">›</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selected && <FacultyDrawer member={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

export default SchoolFacultySection;
