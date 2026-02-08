import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Floating geometric shape component
const FloatingShape = ({ 
  type, 
  delay, 
  duration, 
  startX, 
  startY, 
  size 
}: { 
  type: "hexagon" | "circle"; 
  delay: number; 
  duration: number; 
  startX: number; 
  startY: number;
  size: number;
}) => (
  <motion.div
    className="absolute pointer-events-none"
    initial={{ opacity: 0, x: startX, y: startY }}
    animate={{
      opacity: [0, 0.15, 0.1, 0],
      y: [startY, startY - 100],
      x: [startX, startX + Math.random() * 30 - 15],
      rotate: [0, 180],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {type === "hexagon" ? (
      <svg width={size} height={size} viewBox="0 0 100 100" className="fill-white/20">
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
      </svg>
    ) : (
      <div 
        className="rounded-full border-2 border-white/20" 
        style={{ width: size, height: size }}
      />
    )}
  </motion.div>
);

const PrivacyHero = () => {
  const [shapes, setShapes] = useState<Array<{
    id: number;
    type: "hexagon" | "circle";
    delay: number;
    duration: number;
    startX: number;
    startY: number;
    size: number;
  }>>([]);

  useEffect(() => {
    const newShapes = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      type: (i % 2 === 0 ? "hexagon" : "circle") as "hexagon" | "circle",
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 4,
      startX: Math.random() * 100,
      startY: 70 + Math.random() * 30,
      size: 20 + Math.random() * 40,
    }));
    setShapes(newShapes);
  }, []);

  return (
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background with Ken Burns effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80')`,
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/50" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shapes.map((shape) => (
          <FloatingShape
            key={shape.id}
            type={shape.type}
            delay={shape.delay}
            duration={shape.duration}
            startX={shape.startX}
            startY={shape.startY}
            size={shape.size}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4 text-shadow-lg"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Privacy & Policy
        </motion.h1>
        <motion.p
          className="text-lg text-white/80 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Your trust is our priority
        </motion.p>
      </div>
    </section>
  );
};

export default PrivacyHero;
