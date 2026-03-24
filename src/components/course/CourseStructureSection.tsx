import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { BookOpen, ChevronRight } from "lucide-react";

interface Semester {
  semester: string;
  title: string;
  subjects: string[];
}

interface CourseStructureSectionProps {
  learningJourney: Semester[];
}

const semesterColors = [
  { bg: "from-primary/10 to-primary/5", border: "border-primary/20", dot: "bg-primary", badge: "bg-primary/10 text-primary" },
  { bg: "from-accent/10 to-accent/5", border: "border-accent/20", dot: "bg-accent", badge: "bg-accent/10 text-accent" },
  { bg: "from-emerald-500/10 to-emerald-500/5", border: "border-emerald-500/20", dot: "bg-emerald-500", badge: "bg-emerald-500/10 text-emerald-600" },
  { bg: "from-violet-500/10 to-violet-500/5", border: "border-violet-500/20", dot: "bg-violet-500", badge: "bg-violet-500/10 text-violet-600" },
];

const CourseStructureSection = ({ learningJourney }: CourseStructureSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  if (!learningJourney || learningJourney.length === 0) return null;

  return (
    <section ref={sectionRef} id="course-structure" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent)" }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm uppercase tracking-[4px] font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CURRICULUM
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" }}
            />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Course Structure
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            A carefully designed semester-wise curriculum that progressively builds expertise from fundamentals to advanced specialization.
          </p>
        </motion.div>

        {/* Semester Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {learningJourney.map((sem, idx) => {
            const color = semesterColors[idx % semesterColors.length];
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className={`rounded-2xl border ${color.border} bg-gradient-to-br ${color.bg} p-6 md:p-8 hover:shadow-lg transition-shadow`}
              >
                {/* Semester Badge */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${color.badge}`}>
                    {sem.semester}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-foreground mb-5 leading-snug">
                  {sem.title}
                </h3>

                {/* Subjects */}
                <ul className="space-y-2.5">
                  {sem.subjects.map((subject, sIdx) => (
                    <motion.li
                      key={sIdx}
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 + sIdx * 0.03 }}
                      className="flex items-start gap-3 group"
                    >
                      <ChevronRight className={`w-4 h-4 mt-0.5 shrink-0 ${color.dot.replace("bg-", "text-")} opacity-60 group-hover:opacity-100 transition-opacity`} />
                      <span className="text-sm text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors">
                        {subject}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseStructureSection;
