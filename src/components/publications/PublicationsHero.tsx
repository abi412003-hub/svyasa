import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Floating bokeh particle component
const BokehParticle = ({ delay, duration, startX, startY }: { delay: number; duration: number; startX: number; startY: number }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-gold/40"
    initial={{ opacity: 0, x: startX, y: startY }}
    animate={{
      opacity: [0, 0.6, 0.3, 0],
      y: [startY, startY - 150],
      x: [startX, startX + Math.random() * 40 - 20],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
    style={{
      filter: "blur(1px)",
      boxShadow: "0 0 10px hsl(var(--gold))",
    }}
  />
);

const PublicationsHero = () => {
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; duration: number; startX: number; startY: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 3,
      startX: Math.random() * 100,
      startY: 80 + Math.random() * 20,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background with Ken Burns effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80')`,
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-secondary/30" />

      {/* Floating bokeh particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <BokehParticle
            key={particle.id}
            delay={particle.delay}
            duration={particle.duration}
            startX={particle.startX}
            startY={particle.startY}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-4 text-shadow-lg"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Publications
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore 35+ years of yogic wisdom through Yoga Sudha
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

export default PublicationsHero;
