import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const AboutCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const buttons = [
    {
      label: "Apply now for S-VYASA Global City Campus",
      href: "https://applynow.svyasa.edu.in/",
    },
    {
      label: "Apply now for Prashanti Campus",
      href: "#",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-saffron-light to-gold"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      />

      {/* Floating Sparkle Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="w-4 h-4 text-primary-foreground/40" />
          </motion.div>
        ))}
      </div>

      {/* Decorative Corners */}
      <motion.div
        initial={{ opacity: 0, rotate: -90 }}
        animate={isInView ? { opacity: 0.3, rotate: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-8 left-8 w-20 h-20"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-primary-foreground">
          <path d="M0 50 Q25 0 50 0 M50 0 Q100 25 100 50" strokeWidth="2" />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 90 }}
        animate={isInView ? { opacity: 0.3, rotate: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute bottom-8 right-8 w-20 h-20 rotate-180"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-primary-foreground">
          <path d="M0 50 Q25 0 50 0 M50 0 Q100 25 100 50" strokeWidth="2" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8 text-shadow-lg"
          >
            Be a part of S-VYASA
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {buttons.map((button, index) => (
              <motion.div
                key={button.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                <motion.a
                  href={button.href}
                  target={button.href.startsWith("http") ? "_blank" : undefined}
                  rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className={`${
                      index === 2
                        ? "bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                        : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    } shadow-large hover:shadow-glow-gold transition-all duration-300 group px-6`}
                  >
                    {button.label}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
