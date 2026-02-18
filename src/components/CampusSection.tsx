import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";

const images = [
  { src: campus1, label: "University Library" },
  { src: campus2, label: "Yoga Hall" },
  { src: campus3, label: "Meditation Garden" },
  { src: "/images/campus/prashanti-campus_campus1.jpg", label: "Main Building" },
  { src: "/images/campus/prashanti-campus_entrance.jpeg", label: "Lecture Hall" },
  { src: "/images/campus/p3-admin-exteriors_128.jpg", label: "Sports Complex" },
];

const CampusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  const getAnimation = (index: number) => {
    const animations = [
      { opacity: 0, y: 50, rotate: -5 },
      { opacity: 0, scale: 0.8 },
      { opacity: 0, x: 50 },
      { opacity: 0, y: -50, rotate: 5 },
      { opacity: 0, x: -50 },
      { opacity: 0, scale: 0.9, rotate: 3 },
    ];
    return animations[index % animations.length];
  };

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Lotus SVG Drawing Animation */}
      <motion.svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-5"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <motion.path
          d="M100 20 C100 20 140 60 140 100 C140 140 100 180 100 180 C100 180 60 140 60 100 C60 60 100 20 100 20"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="30"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 1 }}
        />
      </motion.svg>

      <div className="container mx-auto px-4 relative">
        {/* Section Title with Wave Animation */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-primary font-medium mb-4"
          >
            Experience Our Campus
          </motion.span>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {"Campus Life".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 }}
                className="inline-block"
                style={{ marginRight: char === " " ? "0.5rem" : "0" }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our 100-acre campus featuring world-class facilities designed 
            for holistic learning and personal transformation.
          </motion.p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={getAnimation(index)}
              animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                index === 0 ? "md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                src={image.src}
                alt={image.label}
                className={`w-full object-cover ${
                  index === 0 ? "h-full min-h-[200px] md:min-h-[400px]" : "h-36 md:h-56"
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent flex items-end p-4"
              >
                <span className="text-primary-foreground font-medium">{image.label}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.label}
                className="w-full rounded-xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-muted transition-colors"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-xl">
                <p className="text-primary-foreground text-xl font-heading">{selectedImage.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CampusSection;
