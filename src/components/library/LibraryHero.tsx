import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import libraryHeroImage from "@/assets/library-shelves.jpg";

const LibraryHero = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev >= 1.08 ? 1 : prev + 0.001));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${libraryHeroImage})`,
          scale,
        }}
        transition={{ duration: 0.2 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-display text-shadow-lg mb-4"
          >
            Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-light"
          >
            S-VYASA University — Global City Campus
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default LibraryHero;
