import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Course } from "@/data/courses";

interface RelatedProgramsProps {
  relatedCourses: Course[];
}

const RelatedPrograms = ({ relatedCourses }: RelatedProgramsProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  if (relatedCourses.length === 0) return null;

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-10"
        >
          Explore Related Programs
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {relatedCourses.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/courses/${course.slug}`}
                className="block bg-white/10 hover:bg-white/15 rounded-xl p-5 border border-white/10 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white leading-snug line-clamp-2 flex-1 pr-2">
                    {course.shortTitle}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-primary/80 text-white text-xs px-2.5 py-1 rounded-full">
                    {course.duration}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-cream/70 text-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{course.campusType === "gcc" ? "Global City Campus" : "Prashanti Kutiram"}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPrograms;
