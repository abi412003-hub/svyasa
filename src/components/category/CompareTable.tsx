import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import { ChevronDown, Layers, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Course } from "@/data/courses";

interface CompareTableProps {
  courses: Course[];
}

const CompareTable = ({ courses }: CompareTableProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Toggle Header */}
        <motion.button
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 md:p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <Layers className="w-6 h-6 text-primary" />
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
              Compare All Programs
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>
        </motion.button>

        {/* Table Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 bg-card rounded-2xl border border-border overflow-hidden">
                {/* Scrollable Table Container */}
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    {/* Header */}
                    <thead className="bg-secondary text-white sticky top-0 z-10">
                      <tr>
                        <th className="px-4 py-4 text-left font-medium text-sm sticky left-0 bg-secondary z-20 min-w-[200px]">
                          Program Name
                        </th>
                        <th className="px-4 py-4 text-left font-medium text-sm min-w-[100px]">
                          Duration
                        </th>
                        <th className="px-4 py-4 text-left font-medium text-sm min-w-[150px]">
                          Eligibility
                        </th>
                        <th className="px-4 py-4 text-left font-medium text-sm min-w-[200px]">
                          Key Highlights
                        </th>
                        <th className="px-4 py-4 text-left font-medium text-sm min-w-[200px]">
                          Top Careers
                        </th>
                        <th className="px-4 py-4 text-center font-medium text-sm min-w-[100px]">
                          Action
                        </th>
                      </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                      {courses.map((course, index) => (
                        <tr
                          key={course.slug}
                          className={`border-b border-border hover:bg-cream/50 transition-colors ${
                            index % 2 === 0 ? "bg-background" : "bg-cream/30"
                          }`}
                        >
                          {/* Program Name - Sticky */}
                          <td className={`px-4 py-4 font-medium text-secondary sticky left-0 z-10 ${
                            index % 2 === 0 ? "bg-background" : "bg-cream/30"
                          }`}>
                            <Link
                              to={`/courses/${course.slug}`}
                              className="hover:text-primary transition-colors"
                            >
                              {course.shortTitle}
                            </Link>
                          </td>

                          {/* Duration */}
                          <td className="px-4 py-4 text-sm text-muted-foreground">
                            {course.duration}
                          </td>

                          {/* Eligibility */}
                          <td className="px-4 py-4 text-sm text-muted-foreground">
                            {course.eligibility.primary.length > 50 
                              ? course.eligibility.primary.slice(0, 50) + "..."
                              : course.eligibility.primary
                            }
                          </td>

                          {/* Key Highlights */}
                          <td className="px-4 py-4 text-sm text-muted-foreground">
                            {course.highlights.slice(0, 3).map(h => h.title).join(", ")}
                          </td>

                          {/* Top Careers */}
                          <td className="px-4 py-4 text-sm text-muted-foreground">
                            {course.careers.slice(0, 3).map(c => c.title).join(", ")}
                          </td>

                          {/* Action */}
                          <td className="px-4 py-4 text-center">
                            <Link
                              to={`/courses/${course.slug}`}
                              className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark font-medium border border-primary rounded-lg px-3 py-1.5 hover:bg-primary hover:text-white transition-all"
                            >
                              View
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CompareTable;
