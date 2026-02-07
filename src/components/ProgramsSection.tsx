import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Heart, Leaf } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Yoga Science",
    description: "BSc, MSc, and PhD programs in Yoga Science with research focus",
    color: "from-primary to-saffron-light",
  },
  {
    icon: Brain,
    title: "Yoga Therapy",
    description: "Clinical yoga therapy certification and degree programs",
    color: "from-navy to-teal",
  },
  {
    icon: Heart,
    title: "Naturopathy",
    description: "BNYS degree with integrated yoga and natural healing",
    color: "from-gold to-saffron-light",
  },
  {
    icon: Leaf,
    title: "Holistic Health",
    description: "Wellness management and integrative medicine programs",
    color: "from-teal to-navy-light",
  },
];

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-card rounded-2xl p-6 h-full shadow-soft hover:shadow-large transition-all duration-300 cursor-pointer border border-border"
              >
                {/* Icon with gradient background */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <program.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {program.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                >
                  <span>View All</span>
                  <motion.span
                    className="group-hover/link:translate-x-1 transition-transform"
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Programs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/90 transition-colors"
          >
            Explore All Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
