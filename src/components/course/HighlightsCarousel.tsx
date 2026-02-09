import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Course } from "@/data/courses";

interface HighlightsCarouselProps {
  course: Course;
}

const getIconComponent = (iconName: string) => {
  const formattedName = iconName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return (LucideIcons as any)[formattedName] || LucideIcons.Star;
};

const HighlightsCarousel = ({ course }: HighlightsCarouselProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", updateScrollState);
      updateScrollState();
      return () => carousel.removeEventListener("scroll", updateScrollState);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 320;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <section ref={sectionRef} id="journey" className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary text-sm uppercase tracking-[3px] font-medium">
              WHAT YOU'LL MASTER
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-primary"
            />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Your Learning Journey
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-primary/90 hover:bg-primary text-white rounded-full items-center justify-center shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-primary/90 hover:bg-primary text-white rounded-full items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {course.highlights.map((highlight, index) => {
              const IconComponent = getIconComponent(highlight.icon);
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.85, x: 50 }}
                  animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[300px] snap-center"
                >
                  <div className="relative bg-card rounded-2xl shadow-lg p-7 h-full group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Background Number */}
                    <span className="absolute top-4 right-4 text-7xl font-extrabold text-accent/20 group-hover:text-primary/20 transition-colors select-none">
                      {highlight.number}
                    </span>

                    {/* Icon */}
                    <div className="relative w-14 h-14 rounded-full bg-cream flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="relative text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="relative text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 h-1 bg-border rounded-full overflow-hidden max-w-md mx-auto">
            <motion.div
              className="h-full bg-primary rounded-full"
              style={{ width: `${(scrollProgress * 100) + 10}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {course.highlights.map((_, index) => {
              const isActive = Math.floor(scrollProgress * (course.highlights.length - 1)) === index;
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (carouselRef.current) {
                      const scrollTo = (carouselRef.current.scrollWidth / course.highlights.length) * index;
                      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    isActive ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsCarousel;
