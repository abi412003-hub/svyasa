import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import campusImage from "@/assets/accreditation-hero.jpg";

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

const AccreditationHero = () => {
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
            Accreditation
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Recognized Excellence in Yoga Education & Research
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative certificate-style corner */}
      <motion.div
        className="absolute bottom-4 left-4 w-20 h-20 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-gold fill-none" strokeWidth="1">
          <path d="M0 0 L30 0 M0 0 L0 30" />
          <circle cx="15" cy="15" r="8" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-4 right-4 w-20 h-20 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-gold fill-none" strokeWidth="1">
          <path d="M100 0 L70 0 M100 0 L100 30" />
          <circle cx="85" cy="15" r="8" />
        </svg>
      </motion.div>
    </section>
  );
};

export default AccreditationHero;
