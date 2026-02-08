import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Flower2, 
  Users, 
  TrendingUp, 
  BookOpen, 
  Shield, 
  Heart,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const initiatives = [
  {
    icon: Flower2,
    title: "Stress Management Workshops",
    description: "Techniques rooted in yoga and mindfulness to help students manage academic pressure.",
  },
  {
    icon: Users,
    title: "Peer Support Networks",
    description: "Trained peer mentors who provide a friendly ear and bridge the gap to professional support.",
  },
  {
    icon: TrendingUp,
    title: "Leadership Development",
    description: "Programs building confidence, public speaking, and decision-making skills.",
  },
  {
    icon: BookOpen,
    title: "Study Skills Bootcamps",
    description: "Time management, note-taking strategies, and exam preparation workshops.",
  },
  {
    icon: Shield,
    title: "Anti-Ragging Cell",
    description: "Zero-tolerance policy enforcement with dedicated helplines and anonymous reporting.",
  },
  {
    icon: Heart,
    title: "Inclusion & Equity Programs",
    description: "Initiatives ensuring every student, regardless of background, feels valued and respected.",
  },
];

const InitiativeCard = ({ initiative, index }: { initiative: typeof initiatives[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = initiative.icon;

  return (
    <motion.div
      ref={ref}
      className="flex-shrink-0 w-72 snap-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-full bg-card rounded-2xl p-6 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1">
        {/* Icon with line-draw effect */}
        <motion.div
          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
        >
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <h3 className="font-heading text-lg text-secondary mb-2">{initiative.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">{initiative.description}</p>
      </div>
    </motion.div>
  );
};

const SWCInitiatives = () => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="font-heading text-3xl md:text-4xl text-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            {"Our Initiatives".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            className="h-1 bg-gold mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        {/* Scrollable container */}
        <div className="relative">
          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-lg border-primary/20 hover:bg-primary hover:text-white transition-all ${
              !canScrollLeft ? "opacity-0 pointer-events-none" : ""
            }`}
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-lg border-primary/20 hover:bg-primary hover:text-white transition-all ${
              !canScrollRight ? "opacity-0 pointer-events-none" : ""
            }`}
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Cards container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 px-8 snap-x snap-mandatory scrollbar-hide"
            onScroll={checkScroll}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {initiatives.map((initiative, index) => (
              <InitiativeCard key={initiative.title} initiative={initiative} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SWCInitiatives;
