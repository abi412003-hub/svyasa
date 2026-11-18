import { motion, useInView, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BookOpen, ChevronDown, ChevronLeft, ChevronRight, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { openArchive } from "./archiveEvents";
import { researchPapers } from "@/data/researchPapers";

/** How long each spotlight slide stays before auto-scrolling to the next (ms). */
const SLIDE_DURATION = 7000;

// SVG Lotus icon with stroke animation
const AnimatedLotus = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 64 64"
    className="text-gold"
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, delay: 0.5 }}
  >
    <motion.path
      d="M32 8 C32 8 20 20 20 32 C20 44 32 52 32 52 C32 52 44 44 44 32 C44 20 32 8 32 8 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
    <motion.path
      d="M32 20 C28 24 26 28 26 32 C26 36 28 40 32 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.8 }}
    />
    <motion.path
      d="M32 20 C36 24 38 28 38 32 C38 36 36 40 32 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.8 }}
    />
  </motion.svg>
);

type Cover = {
  icon: string;
  title: string;
  subtitle: string;
  motif: string;
  footer: string;
  footerSmall: string;
};

type Slide = {
  key: "yoga-sudha" | "research";
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  cover: Cover;
};

const slides: Slide[] = [
  {
    key: "yoga-sudha",
    title: "Yoga Sudha",
    subtitle: "Monthly Journal of S-VYASA Deemed to be University",
    badge: "Est. 1989 • 35+ Years",
    description:
      "In its true spirit, Yoga Sudha captures the pulse of the university as a whole — its representations, activities, and achievements across the globe, spreading the message of Yoga far and wide. Publishing articles with a scriptural base, spiritual ideology, scientific approach, and humanitarian concern, Yoga Sudha has been a beacon of knowledge for over 35 years under the guidance of Chancellor Dr. H R Nagendra.",
    cover: {
      icon: "ॐ",
      title: "Yoga Sudha",
      subtitle: "Monthly Journal",
      motif: "🪷",
      footer: "S-VYASA Deemed to be University",
      footerSmall: "Est. 1989",
    },
  },
  {
    key: "research",
    title: "Research Papers",
    subtitle: "Peer-reviewed Research from S-VYASA University & Arogyadhama",
    badge: "1,500+ Research Papers • 50+ Years",
    description:
      "S-VYASA University and Arogyadhama have built one of the world's largest evidence bases for integrative and yoga-based medicine. Drawing on decades of clinical experience and the ancient wisdom of Yoga and Ayurveda, our peer-reviewed studies span Yoga & Life Sciences, Humanities and Spirituality — published across 30+ international journals.",
    cover: {
      icon: "ॐ",
      title: "Research Papers",
      subtitle: "Peer-reviewed Studies",
      motif: "🔬",
      footer: "S-VYASA & Arogyadhama",
      footerSmall: `${researchPapers.length} papers in our archive`,
    },
  },
];

// Magazine cover (used for the stacked covers and the main cover)
const CoverFace = ({ cover }: { cover: Cover }) => (
  <div className="w-full h-full bg-gradient-to-br from-primary via-primary/90 to-gold p-6 flex flex-col items-center justify-between">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
        <span className="text-white text-2xl font-heading">{cover.icon}</span>
      </div>
      <h3 className="text-white font-heading text-2xl">{cover.title}</h3>
      <p className="text-white/80 text-sm">{cover.subtitle}</p>
    </div>
    <div className="flex-1 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border-2 border-white/30 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center">
          <span className="text-white/80 text-5xl">{cover.motif}</span>
        </div>
      </div>
    </div>
    <div className="text-center text-white/80 text-sm">
      <p>{cover.footer}</p>
      <p className="text-xs mt-1 text-white/60">{cover.footerSmall}</p>
    </div>
  </div>
);

const StackedCover = ({ offset, opacity, zIndex, cover }: { offset: number; opacity: number; zIndex: number; cover: Cover }) => (
  <div
    className="absolute rounded-lg overflow-hidden shadow-2xl"
    style={{
      width: "280px",
      height: "380px",
      transform: `translateX(${offset}px) translateY(${offset * 0.5}px) rotateY(${offset * 0.1}deg)`,
      opacity,
      zIndex,
    }}
  >
    <CoverFace cover={cover} />
  </div>
);

/** "Browse Archives" button with a dropdown: Yoga Sudha Archives / Research Papers. */
const BrowseArchivesMenu = ({ onOpenChange }: { onOpenChange: (open: boolean) => void }) => (
  <DropdownMenu onOpenChange={onOpenChange}>
    <DropdownMenuTrigger asChild>
      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg pulse-glow gap-2">
        Browse Archives
        <ChevronDown className="w-5 h-5" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="start"
      sideOffset={8}
      className="w-72 p-2 rounded-xl"
      // Don't jump focus back to the button: it would cancel the scroll to the archive.
      onCloseAutoFocus={(e) => e.preventDefault()}
    >
      <DropdownMenuItem
        className="gap-3 py-3 px-3 rounded-lg cursor-pointer text-base whitespace-nowrap"
        onSelect={() => openArchive("yoga-sudha")}
      >
        <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
          <BookOpen className="w-4 h-4 text-primary" />
        </span>
        Yoga Sudha Archives
      </DropdownMenuItem>
      <DropdownMenuItem
        className="gap-3 py-3 px-3 rounded-lg cursor-pointer text-base whitespace-nowrap"
        onSelect={() => openArchive("research")}
      >
        <span className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center">
          <Microscope className="w-4 h-4 text-gold" />
        </span>
        Research Papers
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const YogaSudhaSpotlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const paused = hovered || menuOpen || !isInView;

  const go = (dir: number) =>
    setSlide(([i]) => [(i + dir + slides.length) % slides.length, dir]);

  // Auto-scroll to the next slide
  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => go(1), SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [index, paused]);

  const slide = slides[index];
  const offscreen = reduceMotion ? 0 : 80;

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-cream overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-roledescription="carousel"
    >
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={slide.key}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            custom={direction}
            initial={{ opacity: 0, x: direction * offscreen }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * offscreen }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) go(1);
              else if (info.offset.x > 80) go(-1);
            }}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
          >
            {/* Left Column - Cover Showcase */}
            <motion.div
              className="relative h-[450px] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              {/* Layered covers behind */}
              <StackedCover offset={-40} opacity={0.3} zIndex={1} cover={slide.cover} />
              <StackedCover offset={-20} opacity={0.5} zIndex={2} cover={slide.cover} />

              {/* Main cover with 3D tilt animation */}
              <motion.div
                className="relative z-10"
                initial={{ rotateY: 15, opacity: 0 }}
                animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  animate={isInView ? { y: [0, -6, 0] } : {}}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-[280px] h-[380px] rounded-lg overflow-hidden shadow-2xl">
                    <CoverFace cover={slide.cover} />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <div className="lg:pl-8">
              <motion.div
                className="h-1 bg-primary rounded-full mb-6"
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
              />

              <div className="flex items-center gap-3 mb-2">
                <motion.h2
                  className="font-heading text-4xl md:text-5xl text-gold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                >
                  {slide.title}
                </motion.h2>
                <AnimatedLotus />
              </div>

              <motion.p
                className="text-secondary text-lg mb-4"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6, type: "spring", bounce: 0.4 }}
              >
                <span className="px-4 py-2 rounded-full border-2 border-gold text-gold font-medium text-sm">
                  {slide.badge}
                </span>
              </motion.div>

              <motion.p
                className="text-muted-foreground leading-relaxed mb-8"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <BrowseArchivesMenu onOpenChange={setMenuOpen} />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide controls: arrows + dots (the active dot fills while the slide waits) */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            className="w-9 h-9 rounded-full border border-secondary/20 bg-card flex items-center justify-center text-secondary hover:bg-primary/10 hover:border-primary/30 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {slides.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setSlide([i, i > index ? 1 : -1])}
              className="relative h-1.5 w-12 rounded-full bg-secondary/15 overflow-hidden"
              aria-label={`Show ${s.title}`}
              aria-current={i === index}
            >
              {i === index && (
                <motion.span
                  key={`${index}-${paused}`}
                  className="absolute inset-y-0 left-0 bg-primary rounded-full"
                  initial={{ width: paused ? "100%" : "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: paused ? 0 : SLIDE_DURATION / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
          <button
            onClick={() => go(1)}
            className="w-9 h-9 rounded-full border border-secondary/20 bg-card flex items-center justify-center text-secondary hover:bg-primary/10 hover:border-primary/30 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default YogaSudhaSpotlight;
