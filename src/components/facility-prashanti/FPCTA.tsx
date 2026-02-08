import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Floating sparkle particles
const SparkleParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 3,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Rotating lotus corner decoration
const LotusCorner = ({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const positionClasses = {
    "top-left": "top-4 left-4 -rotate-45",
    "top-right": "top-4 right-4 rotate-45",
    "bottom-left": "bottom-4 left-4 -rotate-135",
    "bottom-right": "bottom-4 right-4 rotate-135",
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} w-16 h-16 opacity-20`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.2, scale: 1, rotate: [0, 360] }}
      transition={{
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
        rotate: { duration: 60, repeat: Infinity, ease: "linear" },
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-white">
        <path d="M50 0C55 20 70 35 90 40C70 45 55 60 50 80C45 60 30 45 10 40C30 35 45 20 50 0Z" />
      </svg>
    </motion.div>
  );
};

const FPCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const buttons = [
    {
      label: "Apply now for S-VYASA Global City Campus",
      href: "https://applynow.svyasa.edu.in/",
      external: true,
    },
    {
      label: "Apply now for Prashanti Campus",
      href: "/prashanti-campus",
      external: false,
    },
    {
      label: "Contact Us",
      href: "/contact",
      external: false,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.85) 50%, hsl(var(--accent)) 100%)",
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
            "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Sparkle particles */}
      <SparkleParticles />

      {/* Lotus corner decorations */}
      <LotusCorner position="top-left" />
      <LotusCorner position="top-right" />
      <LotusCorner position="bottom-left" />
      <LotusCorner position="bottom-right" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Heading */}
        <motion.h2
          className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Be a part of S-VYASA
        </motion.h2>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {buttons.map((button, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                type: "spring",
                bounce: 0.4,
              }}
            >
              <Button
                asChild
                size="lg"
                className="relative group bg-white text-primary hover:bg-white/90 font-poppins font-semibold px-8 py-6 text-base shadow-lg"
              >
                <a
                  href={button.href}
                  target={button.external ? "_blank" : undefined}
                  rel={button.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2"
                >
                  {/* Persistent pulse glow */}
                  <motion.span
                    className="absolute inset-0 rounded-md bg-white/20"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(255,255,255,0.4)",
                        "0 0 20px 10px rgba(255,255,255,0)",
                        "0 0 0 0 rgba(255,255,255,0.4)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative z-10">{button.label}</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FPCTA;
