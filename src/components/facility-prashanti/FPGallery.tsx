import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface FacilityItem {
  id: number;
  label: string;
  description: string;
  image: string;
  featured?: boolean;
}

const facilities: FacilityItem[] = [
  {
    id: 1,
    label: "Campus",
    description: "Wide aerial/panoramic campus view, greenery, buildings",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: 2,
    label: "Annapurna Kitchen Inside",
    description: "Large institutional kitchen, stainless steel, food prep",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    label: "Cultural",
    description: "Cultural events hall, performances, stage",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    label: "Sports",
    description: "Outdoor sports grounds, courts, students playing",
    image: "https://images.unsplash.com/photo-1461896836934- voices-are-playing?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    label: "Cardio Lab",
    description: "Lab with cardio equipment, medical instruments",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    label: "Electro Lab",
    description: "Electrophysiology lab, electrodes, monitors",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    label: "Exercise Lab",
    description: "Exercise physiology lab, treadmills, measurement tools",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    label: "Neuro Lab",
    description: "Neuroscience lab, EEG machines, brain monitoring",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    label: "Physiology Lab",
    description: "General physiology lab, specimens, equipment",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    label: "Research Lab",
    description: "Advanced research facility, microscopes, instruments",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    label: "Transport",
    description: "University buses, transport fleet",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    label: "Digital Library",
    description: "Modern library with computers, digital resources",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
  },
];

// Animation variants for different card positions
const getCardVariant = (index: number) => {
  if (index % 3 === 0) {
    // Every 3rd card: slide from right with rotation
    return {
      hidden: { opacity: 0, x: 60, rotate: -3 },
      visible: { opacity: 1, x: 0, rotate: 0 },
    };
  } else if (index % 2 === 0) {
    // Even cards: scale in
    return {
      hidden: { opacity: 0, scale: 0.85 },
      visible: { opacity: 1, scale: 1 },
    };
  } else {
    // Odd cards: slide up
    return {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    };
  }
};

interface GalleryCardProps {
  item: FacilityItem;
  index: number;
  onClick: () => void;
}

const GalleryCard = ({ item, index, onClick }: GalleryCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const variant = getCardVariant(index);

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden rounded-xl cursor-pointer ${
        item.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      variants={variant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onClick={onClick}
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.label}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Dark overlay - deepens on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 1 }}
        />
        <motion.div
          className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-400"
        />

        {/* Saffron border on hover */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent group-hover:border-primary/80 rounded-xl transition-all duration-400"
          style={{ boxShadow: "0 0 0 0 rgba(232, 117, 26, 0)" }}
          whileHover={{ boxShadow: "0 0 20px 2px rgba(232, 117, 26, 0.3)" }}
        />

        {/* View icon - appears on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.div
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
          >
            <Search className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>

        {/* Label overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4"
          initial={{ y: 0 }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-poppins font-semibold text-white uppercase tracking-wider text-sm md:text-base">
            {item.label}
          </h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FPGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? facilities.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === facilities.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrev();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle geometric pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30L30 5z' fill='none' stroke='%23E8751A' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4">
        {/* Decorative saffron line */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mb-12 mx-auto"
          initial={{ width: 0 }}
          animate={isInView ? { width: "60%" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {facilities.map((facility, index) => (
            <GalleryCard
              key={facility.id}
              item={facility}
              index={index}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent 
          className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none"
          onKeyDown={handleKeyDown}
        >
          <AnimatePresence mode="wait">
            {selectedIndex !== null && (
              <motion.div
                key={selectedIndex}
                className="relative w-full h-full flex flex-col items-center justify-center p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {/* Close button */}
                <motion.button
                  className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  onClick={closeLightbox}
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Navigation arrows */}
                <motion.button
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  onClick={goToPrev}
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  onClick={goToNext}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>

                {/* Main image */}
                <motion.img
                  src={facilities[selectedIndex].image}
                  alt={facilities[selectedIndex].label}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Label */}
                <motion.h2
                  className="mt-6 text-2xl md:text-3xl font-playfair font-bold text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {facilities[selectedIndex].label}
                </motion.h2>

                <motion.p
                  className="mt-2 text-white/70 font-poppins text-center max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {facilities[selectedIndex].description}
                </motion.p>

                {/* Dot indicators */}
                <div className="flex items-center gap-2 mt-6">
                  {facilities.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === selectedIndex
                          ? "bg-primary w-6"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                      onClick={() => setSelectedIndex(index)}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FPGallery;
