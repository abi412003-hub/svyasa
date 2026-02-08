import { motion } from "framer-motion";
import { MapPin, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Program } from "./programsData";

interface ProgramCardProps {
  program: Program;
  index: number;
}

const ProgramCard = ({ program, index }: ProgramCardProps) => {
  const getLevelLabel = (level: string) => {
    switch (level) {
      case "undergraduate":
        return "UG Degree";
      case "postgraduate":
        return "PG Degree";
      case "phd":
        return "Doctoral";
      case "certificate":
        return "Certificate";
      case "distance":
        return "Distance Learning";
      default:
        return level;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      layout
    >
      <Link
        to={program.href}
        className="group block bg-white rounded-xl p-5 shadow-md border border-border 
                   hover:-translate-y-2 hover:shadow-xl transition-all duration-300
                   relative overflow-hidden"
      >
        {/* Left border animation */}
        <motion.div
          className="absolute left-0 top-0 w-1 bg-primary"
          initial={{ height: 0 }}
          whileHover={{ height: "100%" }}
          transition={{ duration: 0.3 }}
        />

        <h3 className="font-semibold text-navy group-hover:text-primary transition-colors pr-6 mb-3 line-clamp-2">
          {program.name}
        </h3>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
            <Clock className="w-3 h-3" />
            {program.duration}
          </span>
          <span className="px-2 py-1 bg-gold/20 text-gold-dark text-xs rounded-full">
            {getLevelLabel(program.level)}
          </span>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <MapPin className="w-3 h-3" />
          <span>{program.campus === "global" ? "Bangalore" : "Prashanti Kutiram"}</span>
        </div>

        {/* Arrow icon */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <ArrowRight className="w-5 h-5 text-primary" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProgramCard;
