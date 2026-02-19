import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import diaHeroWorld from "@/assets/dia-hero-world.jpg";

const DIAHero = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev >= 1.08 ? 1 : prev + 0.001));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Connection dots for world map animation
  const connectionDots = [
    { x: 30, y: 40 }, // India
    { x: 15, y: 35 }, // Europe
    { x: 8, y: 45 }, // Africa
    { x: 85, y: 35 }, // North America
    { x: 75, y: 55 }, // South America
    { x: 60, y: 30 }, // Asia
    { x: 90, y: 60 }, // Australia
  ];

  return (
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${diaHeroWorld})`,
          backgroundPosition: "center 15%",
          scale,
        }}
        transition={{ duration: 0.2 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />

      {/* Animated World Map Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Connection lines */}
          {connectionDots.slice(1).map((dot, i) => (
            <motion.line
              key={i}
              x1={connectionDots[0].x}
              y1={connectionDots[0].y}
              x2={dot.x}
              y2={dot.y}
              stroke="hsl(var(--gold))"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatDelay: 5 }}
            />
          ))}
          {/* Glowing dots */}
          {connectionDots.map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r="1.5"
              fill="hsl(var(--gold))"
              initial={{ scale: 0.5, opacity: 0.3 }}
              animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-display text-shadow-lg mb-4"
          >
            Directorate of International Affairs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-light italic"
          >
            Bridging Cultures. Building Futures.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default DIAHero;
