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
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-cream" />
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(25 84% 50%), transparent)" }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 1 }}
            className="h-[2px] rounded-full mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, hsl(25 84% 50%), hsl(42 65% 55%))" }}
          />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Explore Related Programs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {relatedCourses.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/courses/${course.slug}`}
                className="block group"
              >
                <div className="relative rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500">
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 border border-border/50 group-hover:border-transparent rounded-3xl transition-colors duration-500" />
                  <div className="absolute inset-[1px] bg-card rounded-3xl" />
                  
                  <div className="relative p-7">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-bold text-foreground leading-snug line-clamp-2 flex-1 pr-3 text-lg group-hover:text-primary transition-colors">
                        {course.shortTitle}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary">
                        {course.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{course.campusType === "gcc" ? "Global City Campus" : "Prashanti Kutiram"}</span>
                    </div>
                  </div>
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
