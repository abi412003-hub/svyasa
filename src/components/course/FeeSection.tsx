import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course } from "@/data/courses";

interface FeeSectionProps {
  course: Course;
}

const FeeSection = ({ course }: FeeSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} id="fee" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8 }}
              className="h-0.5 bg-primary"
            />
            <span className="text-primary text-sm uppercase tracking-[3px] font-medium">
              INVESTMENT
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8 }}
              className="h-0.5 bg-primary"
            />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Program Fee Structure
          </h2>
        </motion.div>

        {/* Fee Table */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="px-6 py-4 text-left font-medium">Year</th>
                <th className="px-6 py-4 text-right font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {course.fee.yearlyFees.map((fee, index) => (
                <motion.tr
                  key={fee.year}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className={index % 2 === 0 ? "bg-background" : "bg-cream/50"}
                >
                  <td className="px-6 py-4 text-foreground">{fee.year}</td>
                  <td className="px-6 py-4 text-right font-semibold text-foreground">{fee.amount}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Registration Fee Note */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 bg-cream rounded-xl p-4 flex items-start gap-3"
        >
          <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Registration Fee:</span>{" "}
            {course.fee.registration}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8"
          >
            <a href={course.applyLink} target="_blank" rel="noopener noreferrer">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeeSection;
