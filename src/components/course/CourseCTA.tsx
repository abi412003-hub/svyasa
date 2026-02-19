import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Course } from "@/data/courses";

interface CourseCTAProps {
  course: Course;
}

const CourseCTA = ({ course }: CourseCTAProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section 
      ref={sectionRef}
      id="apply"
      className="relative py-16 md:py-20 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x" />

      {/* Decorative Lotus SVGs */}
      <div className="absolute bottom-4 left-4 opacity-15">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <path d="M50 10 Q70 30 50 50 Q30 30 50 10" stroke="white" strokeWidth="1" fill="none" />
          <path d="M50 10 Q80 50 50 50 Q20 50 50 10" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute top-4 right-4 opacity-15 rotate-180">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <path d="M50 10 Q70 30 50 50 Q30 30 50 10" stroke="white" strokeWidth="1" fill="none" />
          <path d="M50 10 Q80 50 50 50 Q20 50 50 10" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
        >
          Ready to Begin Your Journey?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/90 text-lg mb-8 max-w-xl mx-auto"
        >
          Applications are open. Secure your seat at S-VYASA today.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            className="bg-white text-secondary hover:bg-cream rounded-xl px-8 py-3 text-base font-medium hover:scale-105 transition-transform"
          >
            <a href={course.applyLink} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-white text-white hover:bg-white/20 rounded-xl px-8 py-3 text-base"
          >
            <Link to="/contact-us" className="text-blue-500">
              Talk to Admissions
            </Link>
          </Button>

          {course.brochureLink ? (
            <a
              href={course.brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 underline underline-offset-4 text-base transition-colors"
            >
              Download Brochure
            </a>
          ) : (
            <Link
              to="/contact-us"
              className="text-white hover:text-white/80 underline underline-offset-4 text-base transition-colors"
            >
              Enquire
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CourseCTA;
