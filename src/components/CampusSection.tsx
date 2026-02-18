import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp } from "lucide-react";

const B = "https://spkbypslhjqvnvnujpwd.supabase.co/storage/v1/object/public/site-images";

const initialImages = [
  { src: `${B}/city-campus/library/1771447107660-cryl5zdmnyq.jpeg`, label: "Library" },
  { src: `${B}/prashanti/cultural/1771447411756-dpw9nmpgzw8.jpeg`, label: "Cultural Events" },
  { src: `${B}/city-campus/classrooms/1771447061621-ecmwy720a3m.jpeg`, label: "Classrooms" },
  { src: `${B}/city-campus/library/1771447109252-ada64v6p35p.jpeg`, label: "Library" },
  { src: `${B}/prashanti/cultural/1771447413246-yt2wejztpi.jpeg`, label: "Cultural Activities" },
  { src: `${B}/city-campus/classrooms/1771447063120-92qw8ltuz3e.jpeg`, label: "Classrooms" },
];

const extraImages = [
  { src: `${B}/city-campus/library/1771447108701-dfjj7yqf3rt.jpeg`, label: "Library" },
  { src: `${B}/city-campus/library/1771447109751-fvyfr4mmlu.jpeg`, label: "Library" },
  { src: `${B}/city-campus/library/1771447110259-5dauyg61hbq.jpeg`, label: "Library" },
  { src: `${B}/city-campus/library/1771447111050-qj2z3wku3xh.jpeg`, label: "Library" },
  { src: `${B}/city-campus/library/1771447111575-f58mmigak8n.jpeg`, label: "Library" },
  { src: `${B}/city-campus/library/1771447112157-19v3ypvb1ua.jpeg`, label: "Library" },
  { src: `${B}/prashanti/cultural/1771447412651-ob42mcgqoh.jpeg`, label: "Cultural Events" },
  { src: `${B}/prashanti/cultural/1771447413860-mfcklh3heef.jpeg`, label: "Cultural Events" },
  { src: `${B}/prashanti/cultural/1771447414693-0tfil5ur9d8i.jpeg`, label: "Cultural Events" },
  { src: `${B}/city-campus/classrooms/1771447062568-1972jsykujp.jpeg`, label: "Classrooms" },
  { src: `${B}/city-campus/classrooms/1771447063619-yvoqf8511h.jpeg`, label: "Classrooms" },
  { src: `${B}/city-campus/classrooms/1771447064167-ymjqv679y3b.jpeg`, label: "Classrooms" },
  { src: `${B}/city-campus/classrooms/1771447064763-v2gov5u8ekm.jpeg`, label: "Classrooms" },
  { src: `${B}/city-campus/classrooms/1771447065284-6hrm1o8v9pl.jpeg`, label: "Classrooms" },
];

const CampusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<(typeof initialImages)[0] | null>(null);
  const [showMore, setShowMore] = useState(false);

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
        {/* Section Title */}
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

        {/* Initial Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {initialImages.map((image, index) => (
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

        {/* Expanded Images with animated reveal */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {extraImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.85, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 30 }}
                    transition={{ delay: index * 0.06, duration: 0.4 }}
                    className="relative overflow-hidden rounded-2xl cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <motion.img
                      src={image.src}
                      alt={image.label}
                      className="w-full h-36 md:h-56 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More / Less Button */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => setShowMore((v) => !v)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={showMore ? "less" : "more"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                {showMore ? (
                  <>Show Less <ChevronUp size={16} /></>
                ) : (
                  <>View More Photos <ChevronDown size={16} /></>
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </motion.div>
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
