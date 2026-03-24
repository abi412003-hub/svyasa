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

  return (
    <section ref={sectionRef} id="careers" className="py-20 md:py-28 relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-[hsl(210,60%,12%)]" />
      
      {/* Mesh gradient orbs */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(25 84% 50%), transparent)" }}
      />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(42 65% 55%), transparent)" }}
      />
      
      {/* Dot pattern */}
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
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-16 h-1 mx-auto mb-8 origin-center rounded-full"
            style={{ background: "linear-gradient(90deg, hsl(25 84% 50%), hsl(42 65% 55%))" }}
          />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5">
            Where This Degree <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">Takes You</span>
          </h2>
          <p className="text-white/40 text-lg">
            Career paths our graduates pursue across industries
          </p>
        </motion.div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {careers.map((career, index) => {
            const IconComponent = getIconComponent(career.icon);
            const demand = getDemandStyles(career.demand);
            const isExpanded = expandedCard === index;

            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
                className="group cursor-pointer"
              >
                <div className={`relative h-full rounded-2xl transition-all duration-500 overflow-hidden ${
                  isExpanded
                    ? "bg-white/[0.12] shadow-xl shadow-black/20"
                    : "bg-white/[0.04] hover:bg-white/[0.08]"
                }`}>
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-500" />
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500 ${
                    isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`} style={{ background: "linear-gradient(90deg, hsl(25 84% 50%), hsl(42 65% 55%), hsl(25 84% 50%))" }} />

                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isExpanded ? "bg-gradient-to-br from-primary/30 to-accent/20" : "bg-white/[0.06] group-hover:bg-white/10"
                      }`}>
                        <IconComponent className={`w-6 h-6 transition-colors duration-300 ${
                          isExpanded ? "text-accent" : "text-white/50 group-hover:text-white/70"
                        }`} />
                      </div>
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${demand.bg}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${demand.dot}`} />
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${demand.text}`}>
                          {demand.label}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-white font-bold text-[15px] leading-snug mb-2">{career.title}</h3>

                    <div className={`flex items-center gap-1 transition-all duration-300 ${isExpanded ? "opacity-0 h-0" : "opacity-50 mt-2"}`}>
                      <span className="text-[11px] text-white/40 font-medium">Learn more</span>
                      <ChevronRight className="w-3 h-3 text-white/40 group-hover:translate-x-0.5 transition-transform" />
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/50 text-sm leading-relaxed mt-3 pt-3 border-t border-white/[0.08]">
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
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col items-center mt-16 gap-6"
        >
          <div className="flex items-center gap-2 text-white/30">
            <TrendingUp className="w-4 h-4" />
            <p className="text-sm italic">Graduates are well-equipped for dynamic, high-impact roles</p>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-accent to-gold hover:from-accent/90 hover:to-gold/90 text-secondary font-bold rounded-2xl px-8 py-3 group shadow-lg shadow-accent/20 hover:scale-105 transition-all"
          >
            <Link to="/admissions" className="flex items-center gap-2">
              Explore Placements
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
