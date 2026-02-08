import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, ShieldCheck, FileCheck } from "lucide-react";

const valueProps = [
  {
    icon: Globe,
    title: "Globally Recognized Degrees",
    description: "Your degree from S-VYASA carries the weight of A+ NAAC accreditation and UGC recognition, accepted by employers and institutions worldwide.",
    slideFrom: "left",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured Education",
    description: "Rigorous quality frameworks ensure world-class curriculum, faculty, infrastructure, and research standards across all programs.",
    slideFrom: "bottom",
  },
  {
    icon: FileCheck,
    title: "Eligible for Government Schemes",
    description: "UGC recognition makes S-VYASA students eligible for government scholarships, fellowships, NET/SET examinations, and higher education opportunities.",
    slideFrom: "right",
  },
];

// SVG icon with line-draw animation
const AnimatedIcon = ({ 
  Icon, 
  isInView, 
  delay 
}: { 
  Icon: typeof Globe; 
  isInView: boolean; 
  delay: number;
}) => (
  <motion.div
    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative overflow-hidden"
    initial={{ scale: 0 }}
    animate={isInView ? { scale: 1 } : {}}
    transition={{ delay, type: "spring", stiffness: 200 }}
  >
    <motion.div
      initial={{ pathLength: 0 }}
      animate={isInView ? { pathLength: 1 } : {}}
      transition={{ delay: delay + 0.2, duration: 0.8 }}
    >
      <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
    </motion.div>
    
    {/* Bounce effect on hover */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      whileHover={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);

const ValueCard = ({ 
  prop, 
  index 
}: { 
  prop: typeof valueProps[0]; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = prop.icon;

  const getSlideAnimation = () => {
    switch (prop.slideFrom) {
      case "left": return { opacity: 0, x: -80 };
      case "right": return { opacity: 0, x: 80 };
      case "bottom": return { opacity: 0, y: 80, scale: 0.9 };
      default: return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getSlideAnimation()}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      className="group"
    >
      <motion.div
        className="bg-card rounded-2xl p-8 border border-border h-full relative overflow-hidden transition-all duration-300"
        whileHover={{ 
          y: -8,
          boxShadow: "0 20px 50px -15px hsla(25, 84%, 50%, 0.2)",
        }}
      >
        {/* Animated left border on hover */}
        <motion.div
          className="absolute left-0 top-0 w-1 bg-primary"
          initial={{ height: 0 }}
          whileHover={{ height: "100%" }}
          transition={{ duration: 0.3 }}
        />

        <AnimatedIcon Icon={Icon} isInView={isInView} delay={index * 0.15} />

        <motion.h3
          className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.15 + 0.3 }}
        >
          {prop.title}
        </motion.h3>

        <motion.p
          className="text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.4 }}
        >
          {prop.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const AccreditationValue = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative yoga geometric pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ y: 0 }}
      >
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <pattern id="yogaPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            {[...Array(6)].map((_, i) => (
              <line 
                key={i}
                x1="50" y1="10" x2="50" y2="90" 
                stroke="currentColor" 
                strokeWidth="0.3" 
                className="text-primary"
                transform={`rotate(${i * 30} 50 50)`}
              />
            ))}
          </pattern>
          <rect width="100%" height="100%" fill="url(#yogaPattern)" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {"What This Means For You".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.div
            className="h-0.5 bg-gold mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </motion.div>

        {/* Value proposition cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {valueProps.map((prop, index) => (
            <ValueCard key={prop.title} prop={prop} index={index} />
          ))}
        </div>
      </div>

      {/* Section divider */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default AccreditationValue;
