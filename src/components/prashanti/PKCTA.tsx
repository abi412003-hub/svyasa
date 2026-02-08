import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Floating golden sparkle particles
const SparkleParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%)`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            y: [0, -20, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Decorative lotus corner element
const LotusCorner = ({ position }: { position: "left" | "right" }) => (
  <motion.div
    className={`absolute ${position === "left" ? "left-4 bottom-4" : "right-4 top-4"} w-24 h-24 opacity-20`}
    initial={{ opacity: 0, rotate: position === "left" ? -15 : 15 }}
    whileInView={{ opacity: 0.2, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="white"
      strokeWidth="1"
      animate={{ rotate: position === "left" ? [0, 5, 0] : [0, -5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M50 90 Q30 50 50 20 Q70 50 50 90" />
      <path d="M50 90 Q20 60 30 30 Q50 50 50 90" />
      <path d="M50 90 Q80 60 70 30 Q50 50 50 90" />
    </motion.svg>
  </motion.div>
);

const PKCTA = () => {
  const buttons = [
    {
      label: "Apply now for S-VYASA Global City Campus",
      href: "https://applynow.svyasa.edu.in/",
      external: true,
    },
    {
      label: "Apply now for Prashanti Campus",
      href: "https://applynow.svyasa.edu.in/",
      external: true,
    },
    {
      label: "Contact Us",
      href: "/contact-us",
      external: false,
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-cta-animated"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Sparkle particles */}
      <SparkleParticles />

      {/* Decorative lotus corners */}
      <LotusCorner position="left" />
      <LotusCorner position="right" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Heading */}
          <motion.h2
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Be a part of S-VYASA
          </motion.h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            {buttons.map((button, index) => (
              <motion.div
                key={button.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  type: "spring", 
                  bounce: 0.4 
                }}
              >
                <Button
                  asChild
                  size="lg"
                  variant={index === 2 ? "outline" : "default"}
                  className={`px-8 py-6 rounded-full shadow-lg relative overflow-hidden group ${
                    index === 2
                      ? "bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary"
                      : "bg-white text-primary hover:bg-white/90"
                  }`}
                >
                  <a
                    href={button.href}
                    target={button.external ? "_blank" : undefined}
                    rel={button.external ? "noopener noreferrer" : undefined}
                  >
                    <span className="relative z-10">{button.label}</span>
                    {/* Pulse animation */}
                    <motion.span
                      className="absolute inset-0 rounded-full bg-white/20"
                      animate={{ scale: [1, 1.3], opacity: [0.3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PKCTA;
