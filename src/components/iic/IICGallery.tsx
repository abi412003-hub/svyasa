import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryImages } from "./iicData";

const IICGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const goToPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };
  
  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display text-navy mb-3">Activity Gallery</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Gallery Grid - 3+2 pattern */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.12 }}
              onClick={() => openLightbox(i)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${
                i >= 3 ? "md:col-span-1" : ""
              } ${i === 3 ? "md:col-start-1" : ""}`}
            >
              <div className="aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80&fit=crop`;
                  }}
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="bg-white/90 rounded-full p-3">
                    <ZoomIn className="w-6 h-6 text-navy" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", bounce: 0.3 }}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.currentTarget.src = `https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80`;
              }}
            />

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IICGallery;
