import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCTAProps {
  course: Course;
}

const CourseCTA = ({ course }: CourseCTAProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} id="apply" className="relative py-24 md:py-32 overflow-hidden">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-[hsl(210,60%,12%)]" />
      
      {/* Animated mesh gradient orbs */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(25 84% 50%), transparent)" }}
        animate={shouldReduceMotion ? {} : { x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] rounded-full opacity-15 blur-[80px]"
        style={{ background: "radial-gradient(circle, hsl(42 65% 55%), transparent)" }}
        animate={shouldReduceMotion ? {} : { x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative lotus SVGs */}
      <div className="absolute bottom-6 left-6 opacity-[0.06]">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M50 10 Q70 30 50 50 Q30 30 50 10" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M50 10 Q80 50 50 50 Q20 50 50 10" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M30 40 Q50 45 70 40" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      <div className="absolute top-6 right-6 opacity-[0.06] rotate-180">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M50 10 Q70 30 50 50 Q30 30 50 10" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M50 10 Q80 50 50 50 Q20 50 50 10" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M30 40 Q50 45 70 40" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Gradient decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 1 }}
          className="h-1 rounded-full mx-auto mb-10"
          style={{ background: "linear-gradient(90deg, hsl(25 84% 50%), hsl(42 65% 55%))" }}
        />

        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Begin Your{" "}
          <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">Journey</span>?
        </motion.h2>

        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl mb-12 max-w-xl mx-auto"
        >
          Applications are open. Secure your seat at S-VYASA today.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 rounded-2xl px-10 py-4 text-lg font-semibold hover:scale-105 transition-all shadow-xl shadow-primary/30 group"
          >
            <a href={course.applyLink} target="_blank" rel="noopener noreferrer">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <Button
            asChild
            className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 rounded-2xl px-10 py-4 text-lg transition-all hover:scale-105"
          >
            <Link to="/contact-us">
              Talk to Admissions
            </Link>
          </Button>
        </motion.div>

        {course.brochureLink && (
          <motion.a
            href={course.brochureLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="inline-block mt-8 text-white/50 hover:text-white underline underline-offset-4 text-base transition-colors"
          >
            Download Brochure
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default CourseCTA;
