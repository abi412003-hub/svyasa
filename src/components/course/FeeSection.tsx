import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Info, ArrowRight, Wallet } from "lucide-react";
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
    <section ref={sectionRef} id="fee" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(42 65% 55%), transparent)" }}
      />

      <div className="container mx-auto px-4 max-w-3xl relative">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1 }}
              className="h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, hsl(25 84% 50%))" }}
            />
            <span className="text-sm uppercase tracking-[4px] font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              INVESTMENT
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1 }}
              className="h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(42 65% 55%), transparent)" }}
            />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Program Fee Structure
          </h2>
        </motion.div>

        {/* Premium Fee Table */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient border */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 rounded-3xl" />
          <div className="absolute inset-[1px] bg-card rounded-3xl" />
          
          <div className="relative overflow-hidden rounded-3xl">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-8 py-5 text-left font-semibold text-white bg-gradient-to-r from-secondary to-secondary/90">
                    <div className="flex items-center gap-3">
                      <Wallet className="w-5 h-5 text-accent" />
                      Year
                    </div>
                  </th>
                  <th className="px-8 py-5 text-right font-semibold text-white bg-gradient-to-r from-secondary/90 to-secondary">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {course.fee.yearlyFees.map((fee, index) => (
                  <motion.tr
                    key={fee.year}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="group hover:bg-primary/[0.03] transition-colors"
                  >
                    <td className="px-8 py-5 text-foreground font-medium border-b border-border/50">{fee.year}</td>
                    <td className="px-8 py-5 text-right font-bold text-foreground border-b border-border/50">
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-lg">
                        {fee.amount}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Registration Fee Note */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 rounded-2xl p-5 flex items-start gap-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
        >
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Info className="w-4 h-4 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">Registration Fee:</span>{" "}
            {course.fee.registration}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-2xl px-10 py-3 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all"
          >
            <a href={course.applyLink} target="_blank" rel="noopener noreferrer">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeeSection;
