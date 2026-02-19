import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-14 md:py-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-saffron-light to-gold"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-foreground/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Decorative Corners */}
      <motion.div
        initial={{ opacity: 0, rotate: -90 }}
        animate={isInView ? { opacity: 0.2, rotate: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-8 left-8 w-24 h-24"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-primary-foreground">
          <path d="M0 50 Q25 0 50 0 M50 0 Q100 25 100 50" strokeWidth="2" />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 90 }}
        animate={isInView ? { opacity: 0.2, rotate: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute bottom-8 right-8 w-24 h-24 rotate-180"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-primary-foreground">
          <path d="M0 50 Q25 0 50 0 M50 0 Q100 25 100 50" strokeWidth="2" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Admissions Open 2025-26
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6 text-shadow-lg"
          >
            Begin Your Journey of{" "}
            <span className="underline decoration-wavy decoration-primary-foreground/50">
              Transformation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-primary-foreground/90 mb-8 md:mb-10"
          >
            Join thousands of students who have discovered their purpose 
            through the ancient wisdom of yoga combined with modern education.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-large hover:shadow-glow-gold text-base md:text-lg px-6 md:px-8 group"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base md:text-lg px-6 md:px-8"
              >
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-6 mt-8 md:mt-10 text-primary-foreground/70 text-sm"
          >
            <span>✓ 100% Placement Assistance</span>
            <span>✓ Scholarships Available</span>
            <span>✓ International Recognition</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
