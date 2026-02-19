import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import galleryHeroImage from "@/assets/gallery-hero.jpg";

const GalleryHero = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev >= 1.08 ? 1 : prev + 0.001));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${galleryHeroImage})`,
          backgroundPosition: "center 40%",
          scale,
        }}
        transition={{ duration: 0.2 }}
      />
      <div className="absolute inset-0 bg-navy/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-navy/40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-display"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.8)" }}
          >
            Gallery
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
