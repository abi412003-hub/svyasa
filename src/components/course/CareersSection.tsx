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
    case "high": return "bg-green-500/90 text-white";
    case "growing": return "bg-accent/90 text-secondary";
    default: return "bg-white/20 text-white/80";
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
  const [hoveredCareer, setHoveredCareer] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  const careers = course.careers.slice(0, 8);
  const angleStep = 360 / careers.length;

  return (
    <section ref={sectionRef} id="careers" className="py-16 md:py-20 bg-secondary overflow-hidden">
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
          {/* Ambient glow rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] rounded-full border border-white/[0.06]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] rounded-full border border-white/[0.04]"
          />

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {/* Orbit ring */}
            <motion.circle
              cx="200"
              cy="200"
              r="140"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeDasharray="3 6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.2 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            />
            {careers.map((_, index) => {
              const angle = (angleStep * index - 90) * (Math.PI / 180);
              const endX = 200 + Math.cos(angle) * 140;
              const endY = 200 + Math.sin(angle) * 140;
              const isActive = hoveredCareer === index || selectedCareer === index;
              return (
                <motion.line
                  key={index}
                  x1="200"
                  y1="200"
                  x2={endX}
                  y2={endY}
                  stroke="hsl(var(--primary))"
                  strokeWidth={isActive ? 2.5 : 1.5}
                  strokeDasharray={isActive ? "none" : "4 6"}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? {
                    pathLength: 1,
                    opacity: isActive ? 0.9 : 0.35,
                  } : {}}
                  transition={{
                    pathLength: { duration: 0.8, delay: 0.5 + index * 0.1, ease: "easeOut" },
                    opacity: { duration: 0.3 },
                  }}
                />
              );
            })}
          </svg>

          {/* Center Node */}
          <motion.div
            initial={shouldReduceMotion ? {} : { scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            {/* Pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-2 border-primary"
            />
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-secondary via-secondary to-secondary/80 border-2 border-primary/60 flex items-center justify-center text-white text-center text-sm font-semibold shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)]">
              {course.shortTitle}
            </div>
          </motion.div>

          {/* Career Nodes */}
          {careers.map((career, index) => {
            const angle = (angleStep * index - 90) * (Math.PI / 180);
            const x = 50 + Math.cos(angle) * 35;
            const y = 50 + Math.sin(angle) * 35;
            const IconComponent = getIconComponent(career.icon);
            const isActive = hoveredCareer === index || selectedCareer === index;

            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.6 + index * 0.08,
                }}
                className="absolute cursor-pointer group"
                style={{ left: `${x}%`, top: `${y}%` }}
                onClick={() => setSelectedCareer(selectedCareer === index ? null : index)}
                onMouseEnter={() => setHoveredCareer(index)}
                onMouseLeave={() => setHoveredCareer(null)}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  {/* Hover glow ring */}
                  <motion.div
                    animate={isActive ? { scale: 1.35, opacity: 0.5 } : { scale: 1, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-primary/20 blur-sm"
                  />
                  <motion.div
                    animate={isActive ? { scale: 1.12 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300 border ${
                      isActive
                        ? "bg-primary/30 border-primary/60 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                        : "bg-white/8 border-white/15 hover:border-white/30"
                    }`}
                  >
                    <IconComponent className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-accent" : "text-white/80"}`} />
                  </motion.div>
                  <motion.div
                    animate={isActive ? { y: -2, opacity: 1 } : { y: 0, opacity: 0.85 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 text-center w-28"
                  >
                    <p className={`text-xs font-medium leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-white/75"}`}>
                      {career.title}
                    </p>
                    <span className={`inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium backdrop-blur-sm ${getDemandColor(career.demand)}`}>
                      {getDemandLabel(career.demand)}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Detail Card */}
          <AnimatePresence>
            {selectedCareer !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-6 max-w-xs w-72 border border-white/50"
              >
                <button
                  onClick={() => setSelectedCareer(null)}
                  className="absolute top-3 right-3 w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-3 mb-3">
                  {(() => {
                    const Icon = getIconComponent(careers[selectedCareer].icon);
                    return (
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    );
                  })()}
                  <h4 className="font-semibold text-foreground">
                    {careers[selectedCareer].title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {careers[selectedCareer].description}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getDemandColor(careers[selectedCareer].demand)}`}>
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
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-xl overflow-hidden transition-colors duration-300 border ${
                  isExpanded ? "bg-white/15 border-white/20" : "bg-white/8 border-transparent"
                }`}
              >
                <button
                  onClick={() => setExpandedMobile(isExpanded ? null : index)}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isExpanded ? "bg-primary/30" : "bg-white/10"
                    }`}>
                      <IconComponent className={`w-5 h-5 transition-colors duration-300 ${isExpanded ? "text-accent" : "text-white"}`} />
                    </div>
                    <span className="text-white font-medium text-left">{career.title}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${getDemandColor(career.demand)}`}>
                      {getDemandLabel(career.demand)}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-cream/80 text-sm px-4 pb-4 pl-[4.25rem] leading-relaxed">
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
