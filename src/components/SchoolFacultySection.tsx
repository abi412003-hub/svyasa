import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Users } from "lucide-react";
import { FacultyAvatar, FacultyProfileModal } from "@/components/faculty/FacultyProfileModal";
import type { FacultyMember } from "@/data/divisionsData";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

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
                  <FacultyAvatar photo={member.photo} name={member.name} size="fill" />
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

      {selected && (
        <FacultyProfileModal
          member={{ ...selected, groupLabel: "Faculty" }}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
};

export default SchoolFacultySection;
