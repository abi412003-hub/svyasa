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
      return { bg: "bg-emerald-500/20 border border-emerald-500/30", text: "text-emerald-300", dot: "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]", label: "High Demand" };
    case "growing":
      return { bg: "bg-amber-500/20 border border-amber-500/30", text: "text-amber-300", dot: "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)]", label: "Growing" };
    default:
      return { bg: "bg-slate-400/15 border border-slate-400/20", text: "text-slate-300", dot: "bg-slate-400", label: "Stable" };
  }
};

const CareersSection = ({ course }: CareersSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const careers = course.careers.slice(0, 10);
  const isBCA = course.slug.startsWith("bca-");

  return (
    <section ref={sectionRef} id="careers" className="py-24 md:py-32 relative overflow-hidden">
      {/* Deep dark gradient background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(160deg, hsl(210 50% 10%) 0%, hsl(215 55% 8%) 40%, hsl(220 60% 6%) 100%)"
      }} />
      
      {/* Subtle warm glow top-right */}
      <div className="absolute top-[5%] right-[15%] w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[150px]"
        style={{ background: "radial-gradient(circle, hsl(25 84% 55%), transparent)" }}
      />
      {/* Cool accent bottom-left */}
      <div className="absolute bottom-[5%] left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[130px]"
        style={{ background: "radial-gradient(circle, hsl(200 70% 50%), transparent)" }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-14 h-[3px] mx-auto mb-7 origin-center rounded-full"
            style={{ background: "linear-gradient(90deg, hsl(25 84% 50%), hsl(42 65% 55%))" }}
          />
          <h2 className="font-heading text-3xl md:text-[2.75rem] lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
            Where This Degree{" "}
            <span className="bg-gradient-to-r from-[hsl(42,65%,55%)] to-[hsl(25,84%,55%)] bg-clip-text text-transparent">
              Takes You
            </span>
          </h2>
          <p className="text-white/35 text-base md:text-lg font-light tracking-wide">
            Career paths our graduates pursue across industries
          </p>
        </motion.div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
          {careers.map((career, index) => {
            const IconComponent = getIconComponent(career.icon);
            const demand = getDemandStyles(career.demand);
            const isExpanded = expandedCard === index;

            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30, scale: 0.97 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
                className="group cursor-pointer"
              >
                <div className={`relative h-full rounded-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm ${
                  isExpanded
                    ? "bg-white/[0.1] shadow-2xl shadow-black/30 scale-[1.02]"
                    : "bg-white/[0.04] hover:bg-white/[0.08] hover:shadow-xl hover:shadow-black/20"
                }`}>
                  {/* Glass border */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    isExpanded
                      ? "border border-white/[0.15]"
                      : "border border-white/[0.06] group-hover:border-white/[0.12]"
                  }`} />
                  
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-4 right-4 h-[1px] transition-opacity duration-500 ${
                    isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  }`} style={{ background: "linear-gradient(90deg, transparent, hsl(42 65% 55% / 0.6), transparent)" }} />

                  <div className="relative p-6 md:p-7">
                    {/* Icon & Demand Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isExpanded 
                          ? "bg-white/[0.12] shadow-lg shadow-white/5" 
                          : "bg-white/[0.05] group-hover:bg-white/[0.1]"
                      }`}>
                        <IconComponent className={`w-5 h-5 transition-colors duration-300 ${
                          isExpanded ? "text-white/80" : "text-white/40 group-hover:text-white/60"
                        }`} />
                      </div>
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${demand.bg}`}>
                        <span className={`w-[6px] h-[6px] rounded-full ${demand.dot}`} />
                        <span className={`text-xs font-bold uppercase tracking-widest ${demand.text}`}>
                          {demand.label}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`font-bold text-lg md:text-xl leading-snug mb-1 transition-colors duration-300 ${
                      isExpanded ? "text-white" : "text-white group-hover:text-white"
                    }`}>
                      {career.title}
                    </h3>

                    {/* Learn more hint */}
                    <div className={`flex items-center gap-1 transition-all duration-300 ${isExpanded ? "opacity-0 h-0 mt-0" : "opacity-100 mt-2"}`}>
                      <span className="text-sm text-white/50 font-medium tracking-wide">Learn more</span>
                      <ChevronRight className="w-3 h-3 text-white/50 group-hover:translate-x-0.5 group-hover:text-white/70 transition-all" />
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/60 text-base leading-relaxed mt-4 pt-4 border-t border-white/[0.08]">
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
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center mt-20 gap-7"
        >
          <div className="flex items-center gap-2.5 text-white/25">
            <TrendingUp className="w-4 h-4" />
            <p className="text-sm italic font-light tracking-wide">
              Graduates are well-equipped for dynamic, high-impact roles
            </p>
          </div>
          <Button
            asChild
            className="relative overflow-hidden bg-gradient-to-r from-[hsl(42,65%,50%)] to-[hsl(35,70%,45%)] hover:from-[hsl(42,65%,55%)] hover:to-[hsl(35,70%,50%)] text-secondary font-bold rounded-xl px-10 py-3.5 group shadow-lg shadow-[hsl(42,65%,50%)/0.25] hover:shadow-xl hover:shadow-[hsl(42,65%,50%)/0.35] hover:scale-[1.03] transition-all duration-300"
          >
            <Link to="/admissions" className="flex items-center gap-2.5 text-[15px]">
              Explore Placements
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
