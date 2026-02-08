import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, FlaskConical, BookOpen, Bus } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: <MapPin className="w-8 h-8" />, value: 100, suffix: "+", label: "Acres" },
  { icon: <FlaskConical className="w-8 h-8" />, value: 7, suffix: "+", label: "Research Labs" },
  { icon: <BookOpen className="w-8 h-8" />, value: 15000, suffix: "+", label: "Books in Library" },
  { icon: <Bus className="w-8 h-8" />, value: 24, suffix: "/7", label: "Transport" },
];

// Animated counter hook
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

interface StatCardProps {
  stat: StatItem;
  index: number;
  isInView: boolean;
}

const StatCard = ({ stat, index, isInView }: StatCardProps) => {
  const count = useCounter(stat.value, 2000, isInView);

  return (
    <motion.div
      className="flex flex-col items-center text-center px-4 md:px-8"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Icon with rotate + scale animation */}
      <motion.div
        className="text-primary mb-4"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.2, type: "spring" }}
      >
        {stat.icon}
      </motion.div>

      {/* Animated counter */}
      <div className="font-playfair text-3xl md:text-4xl font-bold text-white mb-1">
        {count.toLocaleString()}{stat.suffix}
      </div>

      {/* Label */}
      <div className="font-poppins text-sm text-white/70 uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  );
};

const FPStatsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--secondary)/0.9) 100%)",
      }}
    >
      {/* Subtle gradient animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(232,117,26,0.1) 0%, transparent 50%)",
            "linear-gradient(45deg, transparent 0%, rgba(232,117,26,0.1) 50%)",
            "linear-gradient(45deg, rgba(232,117,26,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <StatCard stat={stat} index={index} isInView={isInView} />
              
              {/* Vertical divider - grows from center */}
              {index < stats.length - 1 && (
                <motion.div
                  className="hidden md:block w-px bg-white/20 mx-8 self-stretch"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  style={{ originY: 0.5 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FPStatsBar;
