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

const cardGradients = [
  "from-primary/8 via-accent/4 to-transparent",
  "from-secondary/8 via-teal/4 to-transparent",
  "from-accent/8 via-gold/4 to-transparent",
  "from-teal/8 via-primary/4 to-transparent",
  "from-gold/8 via-secondary/4 to-transparent",
];

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
    carouselRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth"
    });
  };

  return (
    <section ref={sectionRef} id="journey" className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-cream" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(25 84% 50%), transparent)" }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm uppercase tracking-[4px] font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              WHAT YOU'LL MASTER
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(25 84% 50%), hsl(42 65% 55%))" }}
            />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Your Learning Journey
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-14 h-14 bg-white/90 backdrop-blur-xl hover:bg-white text-secondary rounded-2xl items-center justify-center shadow-xl border border-border/50 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-14 h-14 bg-white/90 backdrop-blur-xl hover:bg-white text-secondary rounded-2xl items-center justify-center shadow-xl border border-border/50 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {course.highlights.map((highlight, index) => {
              const IconComponent = getIconComponent(highlight.icon);
              const gradient = cardGradients[index % cardGradients.length];
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.85, y: 30 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-shrink-0 w-[320px] snap-center"
                >
                  <div className="relative h-full rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-[1px] bg-card rounded-3xl" />
                    
                    <div className={`relative p-8 bg-gradient-to-br ${gradient} rounded-3xl h-full`}>
                      {/* Background Number */}
                      <span className="absolute top-4 right-4 text-8xl font-black text-primary/[0.06] group-hover:text-primary/[0.12] transition-colors duration-500 select-none">
                        {highlight.number}
                      </span>

                      {/* Icon with gradient background */}
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/10 transition-shadow duration-500">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>

                      {/* Content */}
                      <h3 className="relative text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="relative text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Gradient Progress Bar */}
          <div className="mt-8 h-1.5 bg-border/50 rounded-full overflow-hidden max-w-md mx-auto">
            <motion.div
              className="h-full rounded-full"
              style={{ 
                width: `${(scrollProgress * 100) + 10}%`,
                background: "linear-gradient(90deg, hsl(25 84% 50%), hsl(42 65% 55%))"
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsCarousel;
