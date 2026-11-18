import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowLeft, Monitor, Briefcase, Calculator, Cpu, FlaskConical,
  GraduationCap, TrendingUp, Microscope, Leaf, HeartPulse, BookOpen, Crown
} from "lucide-react";
import { categories, courses } from "@/data/courses";
import { getYogaImage } from "@/utils/yogaImages";

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

// One image per programme category, matching what the card is about (src/assets/program-cards/<slug>.jpg).
const programCardImages = import.meta.glob<string>("/src/assets/program-cards/*.jpg", { eager: true, import: "default" });
const categoryImageMap: Record<string, string> = Object.fromEntries(
  Object.entries(programCardImages).map(([path, src]) => [path.split("/").pop()!.replace(/\.jpg$/, ""), src]),
);

/**
 * Program card: the photo fills the whole card and fades into a light
 * gradient at the bottom, where the title and details sit.
 */
const ProgramCard = ({
  image,
  title,
  text,
  badge,
  cta,
  Icon,
}: {
  image?: string;
  title: string;
  text: string;
  badge: string;
  cta: string;
  Icon: React.ElementType;
}) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="group relative h-[320px] rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-shadow duration-300 cursor-pointer border border-border bg-card"
  >
    {image && (
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    )}
    {/* Light gradient: photo clear at the top, soft white behind the text */}
    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 via-45% to-white/0" />

    {/* Icon badge */}
    <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/85 backdrop-blur-sm shadow-sm flex items-center justify-center">
      <Icon className="w-4 h-4 text-primary" />
    </div>

    <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col">
      <h3 className="font-heading text-xl font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors leading-tight">
        {title}
      </h3>
      <p className="text-foreground/75 text-sm mb-4 leading-relaxed line-clamp-2">{text}</p>
      <div className="flex items-center justify-between pt-3 border-t border-foreground/10">
        <span className="text-xs font-medium text-foreground/70 bg-white/80 px-2 py-1 rounded-full">{badge}</span>
        <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
          <span>{cta}</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  </motion.div>
);

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
                  <ProgramCard
                    image={categoryImageMap[cat.slug]}
                    title={cat.shortTitle}
                    text={cat.subtitle}
                    badge={`${cat.programSlugs.length} ${cat.programSlugs.length === 1 ? "Program" : "Programs"}`}
                    cta="Explore"
                    Icon={Icon}
                  />
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
                  <ProgramCard
                    image={getYogaImage(course.slug) || categoryImageMap["yoga-programmes"]}
                    title={course.shortTitle}
                    text={course.hookLine}
                    badge={course.duration}
                    cta="Details"
                    Icon={Leaf}
                  />
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
