import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GalleryCategory } from "./galleryData";

interface GalleryFiltersProps {
  categories: GalleryCategory[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const GalleryFilters = ({ categories, activeFilter, onFilterChange }: GalleryFiltersProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  const allPhotosCount = categories.reduce((acc, cat) => acc + cat.photos.length, 0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftFade(scrollLeft > 10);
      setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Left fade */}
      {showLeftFade && (
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      )}

      {/* Right fade */}
      {showRightFade && (
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
      )}

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* All filter */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange("all")}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === "all"
              ? "bg-primary text-white shadow-md"
              : "bg-white text-muted-foreground border border-border hover:border-primary hover:text-primary"
          }`}
        >
          <span>All</span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="ml-1.5 inline-flex items-center justify-center w-5 h-5 text-xs rounded-full bg-navy/20 text-inherit"
          >
            {allPhotosCount}
          </motion.span>
        </motion.button>

        {/* Category filters */}
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange(category.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
              activeFilter === category.id
                ? "bg-primary text-white shadow-md"
                : "bg-white text-muted-foreground border border-border hover:border-primary hover:text-primary"
            }`}
          >
            <span>{category.label}</span>
            <motion.span
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              className={`ml-1.5 inline-flex items-center justify-center w-5 h-5 text-xs rounded-full transition-colors ${
                activeFilter === category.id
                  ? "bg-white/20"
                  : "bg-navy text-white group-hover:bg-primary"
              }`}
            >
              {category.photos.length}
            </motion.span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default GalleryFilters;
