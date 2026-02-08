import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import campusImage from "@/assets/campus-1.jpg";

// Floating bokeh particle component
const BokehParticle = ({ delay, size, left }: { delay: number; size: number; left: string }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-br from-gold/40 to-gold/10 blur-sm"
    style={{
      width: size,
      height: size,
      left,
    }}
    initial={{ y: "100%", opacity: 0 }}
    animate={{
      y: "-20%",
      opacity: [0, 0.8, 0.8, 0],
    }}
    transition={{
      duration: 12 + Math.random() * 5,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const SocietyHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.8]);

  return (
    <section ref={containerRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Ken Burns Background */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale }}
      >
        <motion.img
          src={campusImage}
          alt="S-VYASA Campus"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 15, ease: "linear" }}
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"
        style={{ opacity: overlayOpacity }}
      />

      {/* Floating bokeh particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <BokehParticle
            key={i}
            delay={i * 0.8}
            size={8 + Math.random() * 16}
            left={`${Math.random() * 100}%`}
          />
        ))}
      </div>

      {/* Title Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.h1
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            S-VYASA Society
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            The Parent Body of S-VYASA Deemed-to-be University
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative mandala corners */}
      <motion.div
        className="absolute bottom-4 left-4 w-24 h-24 opacity-10"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.1, rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-gold">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="5"
              x2="50"
              y2="95"
              stroke="currentColor"
              strokeWidth="0.5"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>
    </section>
  );
};

export default SocietyHero;
