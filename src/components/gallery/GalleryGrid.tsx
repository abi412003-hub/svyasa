import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import { Expand, Grid, Play } from "lucide-react";
import { GalleryCategory, GalleryPhoto, getAllPhotos } from "./galleryData";
import GalleryFilters from "./GalleryFilters";
import GalleryLightbox from "./GalleryLightbox";

interface GalleryGridProps {
  categories: GalleryCategory[];
}

const GalleryGrid = ({ categories }: GalleryGridProps) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "slideshow">("grid");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "all") {
      return getAllPhotos(categories);
    }
    const category = categories.find((c) => c.id === activeFilter);
    return category ? category.photos : [];
  }, [activeFilter, categories]);

  const openLightbox = (photo: GalleryPhoto) => {
    const index = filteredPhotos.findIndex((p) => p.id === photo.id);
    setLightboxIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  };

  // Slideshow auto-advance
  useEffect(() => {
    if (viewMode !== "slideshow" || isPaused || filteredPhotos.length === 0) return;

    const interval = setInterval(() => {
      setSlideshowIndex((prev) => (prev + 1) % filteredPhotos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [viewMode, isPaused, filteredPhotos.length]);

  // Reset slideshow index on filter change
  useEffect(() => {
    setSlideshowIndex(0);
  }, [activeFilter]);

  return (
    <div className="space-y-6">
      {/* Filter and View Toggle Row */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex-1 overflow-hidden">
          <GalleryFilters
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-sm self-end">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-full transition-all ${
              viewMode === "grid"
                ? "bg-primary text-white"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("slideshow")}
            className={`p-2 rounded-full transition-all ${
              viewMode === "slideshow"
                ? "bg-primary text-white"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            <Play className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {viewMode === "grid" ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={gridRef}
            className="columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <GalleryCard
                  key={photo.id}
                  photo={photo}
                  index={index}
                  onClick={() => openLightbox(photo)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="slideshow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slideshow */}
            <div className="relative aspect-video max-h-[70vh] rounded-2xl overflow-hidden bg-navy">
              <AnimatePresence mode="wait">
                <motion.img
                  key={filteredPhotos[slideshowIndex]?.id}
                  src={filteredPhotos[slideshowIndex]?.src}
                  alt={filteredPhotos[slideshowIndex]?.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation */}
              <button
                onClick={() =>
                  setSlideshowIndex((prev) =>
                    prev === 0 ? filteredPhotos.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setSlideshowIndex((prev) => (prev + 1) % filteredPhotos.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all"
              >
                →
              </button>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <motion.div
                  key={slideshowIndex}
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: isPaused ? undefined : "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                {filteredPhotos[slideshowIndex]?.category}
              </div>

              {/* Counter */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                {slideshowIndex + 1} / {filteredPhotos.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <GalleryLightbox
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />

      {/* Empty state */}
      {filteredPhotos.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-lg text-muted-foreground">No photos in this category.</p>
        </motion.div>
      )}
    </div>
  );
};

const GalleryCard = ({
  photo,
  index,
  onClick,
}: {
  photo: GalleryPhoto;
  index: number;
  onClick: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Determine animation variant based on index
  const getVariant = () => {
    if (index % 3 === 2) {
      return {
        initial: { opacity: 0, rotate: -3 },
        animate: { opacity: 1, rotate: 0 },
      };
    }
    if (index % 2 === 0) {
      return {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
      };
    }
    return {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    };
  };

  const variant = getVariant();

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={variant.initial}
      whileInView={variant.animate}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (index % 12) * 0.08, duration: 0.4 }}
      className="break-inside-avoid mb-4"
    >
      <div
        onClick={onClick}
        className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        {/* Blur-up placeholder */}
        <div
          className={`aspect-[4/3] bg-muted transition-all duration-500 ${
            isLoaded ? "" : "blur-xl scale-105"
          }`}
        >
          {isInView && (
            <img
              src={photo.src}
              alt={photo.alt}
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/50 text-white text-xs rounded-full">
          {photo.category}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"
          >
            <Expand className="w-6 h-6 text-navy" />
          </motion.div>
        </div>

        {/* Bottom saffron border */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  );
};

export default GalleryGrid;
