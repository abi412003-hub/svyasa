import { useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import { ChevronRight, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import { Course } from "@/data/courses";

interface CareersSectionProps {
  course: Course;
}

const getIconComponent = (iconName: string) => {
  const formattedName = iconName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return (LucideIcons as any)[formattedName] || LucideIcons.Briefcase;
};

const getDemandStyles = (demand: string) => {
  switch (demand) {
    case "high":
      return { bg: "bg-emerald-500/15", text: "text-emerald-400", dot: "bg-emerald-400", label: "High Demand" };
    case "growing":
      return { bg: "bg-amber-500/15", text: "text-amber-400", dot: "bg-amber-400", label: "Growing" };
    default:
      return { bg: "bg-white/10", text: "text-white/60", dot: "bg-white/40", label: "Stable" };
  }
};

const CareersSection = ({ course }: CareersSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const careers = course.careers.slice(0, 8);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: shouldReduceMotion ? {} : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section ref={sectionRef} id="careers" className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-12 h-1 bg-accent mx-auto mb-6 origin-left rounded-full"
          />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Where This Degree Takes You
          </h2>
          <p className="text-white/50 text-lg">
            Career paths our graduates pursue across industries
          </p>
        </motion.div>

        {/* Career Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {careers.map((career, index) => {
            const IconComponent = getIconComponent(career.icon);
            const demand = getDemandStyles(career.demand);
            const isExpanded = expandedCard === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
                className="group cursor-pointer"
              >
                <div className={`relative h-full rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-white/[0.12] border-white/20 shadow-lg shadow-black/20"
                    : "bg-white/[0.05] border-white/[0.08] hover:bg-white/[0.09] hover:border-white/15"
                }`}>
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 bg-gradient-to-r from-primary via-accent to-primary ${
                    isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  }`} />

                  <div className="p-5">
                    {/* Icon + Demand row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isExpanded ? "bg-primary/20" : "bg-white/[0.06] group-hover:bg-white/10"
                      }`}>
                        <IconComponent className={`w-5 h-5 transition-colors duration-300 ${
                          isExpanded ? "text-accent" : "text-white/60 group-hover:text-white/80"
                        }`} />
                      </div>
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${demand.bg}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${demand.dot}`} />
                        <span className={`text-[10px] font-semibold uppercase tracking-wider ${demand.text}`}>
                          {demand.label}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-[15px] leading-snug mb-1 group-hover:text-white/95 transition-colors">
                      {career.title}
                    </h3>

                    {/* Expand indicator */}
                    <div className={`flex items-center gap-1 mt-3 transition-all duration-300 ${
                      isExpanded ? "opacity-0 h-0" : "opacity-60"
                    }`}>
                      <span className="text-[11px] text-white/40 font-medium">Learn more</span>
                      <ChevronRight className="w-3 h-3 text-white/40 group-hover:translate-x-0.5 transition-transform" />
                    </div>

                    {/* Expanded description */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/55 text-sm leading-relaxed mt-3 pt-3 border-t border-white/[0.08]">
                            {career.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col items-center mt-14 gap-5"
        >
          <div className="flex items-center gap-2 text-white/40">
            <TrendingUp className="w-4 h-4" />
            <p className="text-sm italic">
              Graduates are well-equipped for dynamic, high-impact roles
            </p>
          </div>
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-secondary font-semibold rounded-xl px-6 group"
          >
            <Link to="/admissions" className="flex items-center gap-2">
              Explore Placements
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
