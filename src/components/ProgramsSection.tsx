import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowLeft, Monitor, Briefcase, Calculator, Cpu, FlaskConical,
  GraduationCap, TrendingUp, Microscope, Leaf, HeartPulse, BookOpen, Crown
} from "lucide-react";
import { categories, courses } from "@/data/courses";

const iconMap: Record<string, React.ElementType> = {
  bca: Monitor,
  bba: Briefcase,
  bcom: Calculator,
  btech: Cpu,
  bsc: FlaskConical,
  mca: GraduationCap,
  mba: TrendingUp,
  msc: Microscope,
  "yoga-programmes": Leaf,
  "allied-sciences": HeartPulse,
  "phd-programmes": BookOpen,
  "dsc-dlitt": Crown,
};

const categoryImageMap: Record<string, string> = {
  bca: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&q=80",
  bba: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
  bcom: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
  btech: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  bsc: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80",
  mca: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
  mba: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  msc: "https://spkbypslhjqvnvnujpwd.supabase.co/storage/v1/object/public/site-images/prashanti/research-lab/1771452099298-q9sj0vt197n.jpeg",
  "yoga-programmes": "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&q=80",
  "allied-sciences": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
  "phd-programmes": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80",
  "dsc-dlitt": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80",
};

const CARD_WIDTH = 260;
const GAP = 20;
const SCROLL_AMOUNT = (CARD_WIDTH + GAP) * 3;

const useScrollControls = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? SCROLL_AMOUNT : -SCROLL_AMOUNT, behavior: "smooth" });
  };

  return { scrollRef, canScrollLeft, canScrollRight, handleScroll, scroll };
};

const ScrollArrows = ({ canScrollLeft, canScrollRight, scroll }: { canScrollLeft: boolean; canScrollRight: boolean; scroll: (dir: "left" | "right") => void }) => (
  <div className="flex items-center gap-2 shrink-0">
    <button
      onClick={() => scroll("left")}
      disabled={!canScrollLeft}
      className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
    >
      <ArrowLeft size={18} />
    </button>
    <button
      onClick={() => scroll("right")}
      disabled={!canScrollRight}
      className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
    >
      <ArrowRight size={18} />
    </button>
  </div>
);

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const mainScroll = useScrollControls();
  const yogaScroll = useScrollControls();

  const yogaPrograms = courses.filter((c) => c.category === "yoga-programmes");

  return (
    <section ref={ref} className="py-12 md:py-20 bg-muted relative overflow-hidden">
      {/* Background Mandala */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-primary">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {[...Array(12)].map((_, i) => (
            <line key={i} x1="100" y1="20" x2="100" y2="100"
              stroke="currentColor" strokeWidth="0.5"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title + Scroll Controls */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block text-primary font-medium mb-3"
            >
              Academic Excellence
            </motion.span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
              {"Our Programs".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={titleInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-xl"
            >
              Discover programs blending traditional yoga wisdom with contemporary academic rigor.
            </motion.p>
          </div>

          {/* Arrow Controls */}
          <ScrollArrows {...mainScroll} />
        </div>

        {/* Programs Scroll Row */}
        <div
          ref={mainScroll.scrollRef}
          onScroll={mainScroll.handleScroll}
          className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {categories.map((cat, index) => {
            const Icon = iconMap[cat.slug] || BookOpen;
            return (
              <motion.div
                key={cat.slug}
                className="shrink-0 w-[260px] snap-start"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: Math.min(index * 0.06, 0.6), duration: 0.4 }}
              >
                <Link to={`/programs/${cat.slug}`}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group bg-card rounded-2xl overflow-hidden h-full shadow-soft hover:shadow-large transition-all duration-300 cursor-pointer border border-border flex flex-col"
                  >
                    {/* Smaller image strip */}
                    <div className="relative h-20 overflow-hidden shrink-0">
                      <img
                        src={categoryImageMap[cat.slug] || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80"}
                        alt={cat.shortTitle}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      {/* Icon badge */}
                      <div className="absolute bottom-2 right-2 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Bigger content area */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                        {cat.shortTitle}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                        {cat.subtitle}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {cat.programSlugs.length} {cat.programSlugs.length === 1 ? "Program" : "Programs"}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                          <span>Explore</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Yoga Programs Row */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 mb-2"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Yoga Programs
                </h3>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground text-sm max-w-lg"
              >
                From certificates to doctorates — explore our comprehensive yoga education offerings.
              </motion.p>
            </div>
            <ScrollArrows {...yogaScroll} />
          </div>

          <div
            ref={yogaScroll.scrollRef}
            onScroll={yogaScroll.handleScroll}
            className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            {yogaPrograms.map((course, index) => (
              <motion.div
                key={course.slug}
                className="shrink-0 w-[260px] snap-start"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: Math.min(0.5 + index * 0.06, 1.2), duration: 0.4 }}
              >
                <Link to={`/programs/yoga-programmes`}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group bg-card rounded-2xl overflow-hidden h-full shadow-soft hover:shadow-large transition-all duration-300 cursor-pointer border border-border flex flex-col"
                  >
                    <div className="relative h-20 overflow-hidden shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&q=80"
                        alt={course.shortTitle}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 right-2 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Leaf className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                        {course.shortTitle}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1 line-clamp-2">
                        {course.hookLine}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {course.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                          <span>Details</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Programs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/admissions">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/90 transition-colors"
            >
              Explore All Programs
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
