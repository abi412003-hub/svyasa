import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Monitor, Briefcase, Calculator, Cpu, FlaskConical,
  GraduationCap, TrendingUp, Microscope, Leaf, HeartPulse, BookOpen, Crown
} from "lucide-react";
import { categories } from "@/data/courses";

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

const gradientMap: Record<string, string> = {
  tech: "from-primary to-saffron-light",
  business: "from-gold to-saffron-light",
  yoga: "from-teal to-navy-light",
  health: "from-primary to-teal",
  research: "from-navy to-teal",
  arts: "from-gold to-primary",
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

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section ref={ref} className="py-20 bg-muted relative overflow-hidden">
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
            <line
              key={i}
              x1="100"
              y1="20"
              x2="100"
              y2="100"
              stroke="currentColor"
              strokeWidth="0.5"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-primary font-medium mb-4"
          >
            Academic Excellence
          </motion.span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
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
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover our comprehensive range of programs designed to blend traditional yoga wisdom
            with contemporary academic rigor.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide snap-x snap-mandatory">
          {categories.map((cat, index) => {
            const Icon = iconMap[cat.slug] || BookOpen;
            const gradient = gradientMap[cat.domainTheme] || "from-primary to-saffron-light";
            return (
              <motion.div
                key={cat.slug}
                className="shrink-0 w-[200px] md:w-[220px] snap-start"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: Math.min(index * 0.06, 0.6), duration: 0.4 }}
              >
                <Link to={`/programs/${cat.slug}`}>
              <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group bg-card rounded-2xl overflow-hidden h-full shadow-soft hover:shadow-large transition-all duration-300 cursor-pointer border border-border flex flex-col"
                  >
                    {/* Image banner */}
                    <div className="relative h-32 overflow-hidden shrink-0">
                      <img
                        src={categoryImageMap[cat.slug] || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80"}
                        alt={cat.shortTitle}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <motion.div
                        className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-heading text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">
                        {cat.shortTitle}
                      </h3>
                      <p className="text-muted-foreground text-xs mb-3 leading-relaxed line-clamp-2 flex-1">
                        {cat.subtitle}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground/70">
                          {cat.programSlugs.length} {cat.programSlugs.length === 1 ? "Program" : "Programs"}
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary font-medium text-xs">
                          <span>Explore</span>
                          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
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
