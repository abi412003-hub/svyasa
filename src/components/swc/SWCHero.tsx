import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import swcHeroImage from "@/assets/swc-hero.jpg";

// Warm bokeh particle component
const WarmBokeh = ({ delay, duration, startX, startY, size }: { 
  delay: number; 
  duration: number; 
  startX: number; 
  startY: number;
  size: number;
}) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle, hsla(30, 90%, 60%, 0.4) 0%, transparent 70%)`,
      filter: "blur(2px)",
    }}
    initial={{ opacity: 0, x: `${startX}%`, y: `${startY}%` }}
    animate={{
      opacity: [0, 0.6, 0.3, 0],
      y: [`${startY}%`, `${startY - 20}%`],
      x: [`${startX}%`, `${startX + (Math.random() * 10 - 5)}%`],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

const SWCHero = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    delay: number;
    duration: number;
    startX: number;
    startY: number;
    size: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: Math.random() * 6,
      duration: 5 + Math.random() * 3,
      startX: Math.random() * 100,
      startY: 60 + Math.random() * 30,
      size: 30 + Math.random() * 50,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
      {/* Background with Ken Burns effect */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 15, ease: "linear" }}
      >
        <img
          src={swcHeroImage}
          alt="S-VYASA Students"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-navy/55" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-navy/40" />

      {/* Warm bokeh particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <WarmBokeh
            key={particle.id}
            delay={particle.delay}
            duration={particle.duration}
            startX={particle.startX}
            startY={particle.startY}
            size={particle.size}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.8)" }}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Student Welfare Committee
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-xl mx-auto"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Supporting your journey, every step of the way
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-white/70 rounded-full"
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SWCHero;
