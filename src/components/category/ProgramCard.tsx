import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Cpu, Briefcase, Flower2, HeartPulse, FlaskConical } from "lucide-react";
import { Course } from "@/data/courses";
import * as LucideIcons from "lucide-react";

interface ProgramCardProps {
  course: Course;
  index: number;
}

const getDomainIcon = (theme: Course["domainTheme"]) => {
  switch (theme) {
    case "tech": return Cpu;
    case "business": return Briefcase;
    case "yoga": return Flower2;
    case "health": return HeartPulse;
    case "research": return FlaskConical;
    default: return Cpu;
  }
};

const getDomainGradient = (theme: Course["domainTheme"]) => {
  switch (theme) {
    case "tech": return "from-secondary to-primary";
    case "business": return "from-secondary to-accent";
    case "yoga": return "from-emerald-600 to-primary";
    case "health": return "from-teal-500 to-primary";
    case "research": return "from-purple-700 to-primary";
    default: return "from-secondary to-primary";
  }
};

const getDomainIconBg = (theme: Course["domainTheme"]) => {
  switch (theme) {
    case "tech": return "bg-gradient-to-br from-secondary/20 to-primary/20";
    case "business": return "bg-gradient-to-br from-secondary/20 to-accent/20";
    case "yoga": return "bg-gradient-to-br from-emerald-600/20 to-primary/20";
    case "health": return "bg-gradient-to-br from-teal-500/20 to-primary/20";
    case "research": return "bg-gradient-to-br from-purple-700/20 to-primary/20";
    default: return "bg-gradient-to-br from-secondary/20 to-primary/20";
  }
};

// Helper to get Lucide icon component by name
const getIconComponent = (iconName: string) => {
  const formattedName = iconName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return (LucideIcons as any)[formattedName] || LucideIcons.Star;
};

const ProgramCard = ({ course, index }: ProgramCardProps) => {
  const DomainIcon = getDomainIcon(course.domainTheme);
  const gradientClass = getDomainGradient(course.domainTheme);
  const iconBgClass = getDomainIconBg(course.domainTheme);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
    >
      <Link
        to={`/courses/${course.slug}`}
        className="group block bg-card rounded-2xl shadow-md border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      >
        {/* Top Gradient Accent Bar */}
        <div className={`h-1.5 bg-gradient-to-r ${gradientClass} group-hover:h-2.5 transition-all duration-300`} />

        {/* Shimmer overlay on hover */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="p-6">
            {/* Top Row: Duration + Domain Icon */}
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                {course.duration}
              </span>
              <div className={`w-12 h-12 rounded-full ${iconBgClass} flex items-center justify-center`}>
                <DomainIcon className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Program Title */}
            <h3 className="font-body font-semibold text-foreground text-[17px] leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {course.title}
            </h3>

            {/* Campus Badge */}
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span className="truncate">{course.campusType === "gcc" ? "Global City Campus" : "Prashanti Kutiram"}</span>
            </div>

            {/* Hook Line */}
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {course.hookLine}
            </p>

            {/* Mini Highlights */}
            <div className="flex flex-wrap gap-2 mb-4">
              {course.highlights.slice(0, 3).map((highlight, i) => {
                const HighlightIcon = getIconComponent(highlight.icon);
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-cream px-2.5 py-1 rounded-lg"
                  >
                    <HighlightIcon className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground truncate max-w-[100px]">
                      {highlight.title.length > 15 ? highlight.title.slice(0, 15) + "..." : highlight.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-4" />

            {/* CTA */}
            <div className="flex items-center justify-between">
              <span className="text-primary font-medium text-sm group-hover:underline">
                Explore Program
              </span>
              <ArrowRight className="w-4.5 h-4.5 text-primary group-hover:translate-x-1.5 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProgramCard;
