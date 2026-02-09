import { useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
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

const getDemandColor = (demand: string) => {
  switch (demand) {
    case "high": return "bg-green-500 text-white";
    case "growing": return "bg-accent text-secondary";
    default: return "bg-muted text-muted-foreground";
  }
};

const getDemandLabel = (demand: string) => {
  switch (demand) {
    case "high": return "High Demand";
    case "growing": return "Growing";
    default: return "Stable";
  }
};

const CareersSection = ({ course }: CareersSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedCareer, setSelectedCareer] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  const careers = course.careers.slice(0, 8);
  const angleStep = 360 / careers.length;

  return (
    <section ref={sectionRef} id="careers" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8 }}
              className="h-0.5 bg-accent"
            />
            <span className="text-accent text-sm uppercase tracking-[3px] font-medium">
              YOUR FUTURE
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8 }}
              className="h-0.5 bg-accent"
            />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
            Where This Degree Takes You
          </h2>
        </motion.div>

        {/* Desktop: Radial Visualization */}
        <div className="hidden lg:block relative max-w-3xl mx-auto aspect-square">
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {careers.map((_, index) => {
              const angle = (angleStep * index - 90) * (Math.PI / 180);
              const endX = 200 + Math.cos(angle) * 140;
              const endY = 200 + Math.sin(angle) * 140;
              return (
                <motion.line
                  key={index}
                  x1="200"
                  y1="200"
                  x2={endX}
                  y2={endY}
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                />
              );
            })}
          </svg>

          {/* Center Node */}
          <motion.div
            initial={shouldReduceMotion ? {} : { scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-secondary border-3 border-primary flex items-center justify-center text-white text-center text-sm font-semibold pulse-glow"
          >
            {course.shortTitle}
          </motion.div>

          {/* Career Nodes */}
          {careers.map((career, index) => {
            const angle = (angleStep * index - 90) * (Math.PI / 180);
            const x = 50 + Math.cos(angle) * 35; // percentage
            const y = 50 + Math.sin(angle) * 35;
            const IconComponent = getIconComponent(career.icon);

            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", delay: 0.6 + index * 0.12 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${x}%`, top: `${y}%` }}
                onClick={() => setSelectedCareer(selectedCareer === index ? null : index)}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all group-hover:scale-110">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-center w-24">
                  <p className="text-white text-xs font-medium leading-tight">{career.title}</p>
                  <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] ${getDemandColor(career.demand)}`}>
                    {getDemandLabel(career.demand)}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Tooltip */}
          <AnimatePresence>
            {selectedCareer !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-xl shadow-2xl p-6 max-w-xs"
              >
                <button
                  onClick={() => setSelectedCareer(null)}
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
                <h4 className="font-semibold text-foreground mb-2">
                  {careers[selectedCareer].title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {careers[selectedCareer].description}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs ${getDemandColor(careers[selectedCareer].demand)}`}>
                  {getDemandLabel(careers[selectedCareer].demand)}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile: Accordion */}
        <div className="lg:hidden space-y-3">
          {careers.map((career, index) => {
            const IconComponent = getIconComponent(career.icon);
            const isExpanded = expandedMobile === index;

            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedMobile(isExpanded ? null : index)}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{career.title}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${getDemandColor(career.demand)}`}>
                      {getDemandLabel(career.demand)}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-white transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4"
                    >
                      <p className="text-cream/80 text-sm">
                        {career.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-cream/80 italic mb-6">
            Graduates are well-equipped for dynamic and high-impact roles in their field.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-secondary rounded-xl"
          >
            <Link to="/admissions">Explore Placements</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
