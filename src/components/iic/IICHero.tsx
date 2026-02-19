import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import iicHero from "@/assets/iic-hero.jpg";

const IICHero = () => {
  const [scale, setScale] = useState(1);
  const [morphProgress, setMorphProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev >= 1.06 ? 1 : prev + 0.0008));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Lightbulb to gear morph animation
  useEffect(() => {
    const morphInterval = setInterval(() => {
      setMorphProgress((prev) => (prev >= 1 ? 0 : prev + 0.125));
    }, 1000);
    return () => clearInterval(morphInterval);
  }, []);

  return (
    <section className="relative h-[50vh] min-h-[380px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${iicHero})`,
          backgroundPosition: "center 30%",
          scale,
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* Animated lightbulb-to-gear icon */}
      <div className="absolute top-8 right-8 w-16 h-16 opacity-40">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <motion.path
            d={morphProgress < 0.5 
              ? "M32 8 C22 8 14 16 14 26 C14 32 18 37 22 40 L22 48 L42 48 L42 40 C46 37 50 32 50 26 C50 16 42 8 32 8 M26 52 L38 52 L38 56 L26 56 Z"
              : "M32 8 L36 16 L46 16 L38 24 L42 34 L32 28 L22 34 L26 24 L18 16 L28 16 Z M26 40 L38 40 A6 6 0 0 1 38 52 L26 52 A6 6 0 0 1 26 40"
            }
            fill="none"
            stroke="hsl(var(--gold))"
            strokeWidth="2"
            animate={{ pathLength: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display text-shadow-lg mb-4"
          >
            Institution Innovation Council
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-light"
          >
            Fostering Innovation & Entrepreneurship at S-VYASA
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default IICHero;
