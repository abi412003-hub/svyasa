import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AIUHero = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev >= 1.06 ? 1 : prev + 0.0008));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Generate golden prana particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 3,
    size: 4 + Math.random() * 6,
  }));

  return (
    <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('img/banner/AIU-Web-Banner-1.jpg'), url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1920&q=80')`,
          scale,
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Lighter gradient overlay for event banner visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />

      {/* Golden prana particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.left}%`,
              bottom: -20,
              width: particle.size,
              height: particle.size,
              background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)",
              boxShadow: "0 0 10px hsl(var(--gold) / 0.5)",
            }}
            animate={{
              y: [0, -600],
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 0.8],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Title overlay - only show if banner is generic */}
      <div className="absolute inset-0 flex items-end justify-center pb-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-display text-shadow-lg mb-3"
          >
            All India Inter-University Yogasana Championships
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-light"
          >
            Women 2026 • Hosted by S-VYASA Deemed-to-be University
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AIUHero;
