import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import campusImage from "@/assets/campus-2.jpg";

// Animated counter hook
const useCounter = (end: number, duration: number = 2, startAnimation: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;
    
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, startAnimation]);

  return count;
};

// Golden particle
const GoldenParticle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-gold rounded-full"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1.5, 0],
    }}
    transition={{
      duration: 2.5,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 3,
    }}
  />
);

// Stats data
const stats = [
  {
    value: "A+",
    label: "NAAC Grade",
    isText: true,
  },
  {
    value: 4,
    label: "KSURF Star Rating",
    isStars: true,
  },
  {
    value: 284,
    suffix: "+",
    label: "Research Papers Published",
  },
  {
    value: 2002,
    label: "UGC Deemed University Since",
    isYear: true,
  },
];

// Stat Item Component
const StatItem = ({ 
  stat, 
  index, 
  isInView 
}: { 
  stat: typeof stats[0]; 
  index: number; 
  isInView: boolean;
}) => {
  const count = useCounter(
    typeof stat.value === 'number' ? stat.value : 0, 
    stat.isYear ? 0.5 : 2, 
    isInView
  );

  return (
    <motion.div
      className="text-center relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15 }}
    >
      {/* Vertical divider (except first) */}
      {index > 0 && (
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-px h-16 hidden md:block"
          initial={{ height: 0 }}
          animate={isInView ? { height: 64 } : {}}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
        </motion.div>
      )}

      <div className="mb-2">
        {stat.isText ? (
          <motion.span
            className="font-heading text-5xl md:text-6xl font-bold text-gold"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
          >
            {stat.value}
          </motion.span>
        ) : stat.isStars ? (
          <div className="flex justify-center gap-1">
            {[...Array(stat.value as number)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.3 + i * 0.1, type: "spring" }}
              >
                <Star className="w-8 h-8 md:w-10 md:h-10 fill-gold text-gold" />
              </motion.div>
            ))}
          </div>
        ) : (
          <span className="font-heading text-5xl md:text-6xl font-bold text-gold tabular-nums">
            {count}
            {stat.suffix && <span>{stat.suffix}</span>}
          </span>
        )}
      </div>

      <motion.p
        className="text-white/80 text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.5 }}
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
};

const TrustMetrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <img
          src={campusImage}
          alt="S-VYASA Campus"
          className="w-full h-[130%] object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/90" />

      {/* Golden particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <GoldenParticle key={i} delay={i * 0.2} />
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              className="h-px bg-gold"
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Numbers That Speak
            </h2>
            <motion.div
              className="h-px bg-gold"
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
