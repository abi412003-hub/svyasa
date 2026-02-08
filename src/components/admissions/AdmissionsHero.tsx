import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AdmissionsHero = () => {
  const [scale, setScale] = useState(1);

  // Ken Burns effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev >= 1.08 ? 1 : prev + 0.001));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      {/* Background with Ken Burns */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80')`,
          scale,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />

      {/* Golden bokeh particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-display text-shadow-lg"
          >
            Admissions
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsHero;
