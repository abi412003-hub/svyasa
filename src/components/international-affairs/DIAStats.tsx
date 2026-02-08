import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Handshake, Globe, Mic, Users } from "lucide-react";
import { globalStats } from "./diaData";

const iconMap: Record<string, React.ElementType> = {
  handshake: Handshake,
  globe: Globe,
  podium: Mic,
  users: Users,
};

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const DIAStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-cream relative overflow-hidden">
      {/* World Map Watermark */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cpath fill='%231B3A5C' d='M200,100 Q250,50 300,100 T400,100 Q450,150 400,200 T300,200 Q250,150 200,200 T100,200 Q50,150 100,100 T200,100 Z'/%3E%3Cpath fill='%231B3A5C' d='M600,100 Q650,50 700,100 T800,100 Q850,150 800,200 T700,200 Q650,150 600,200 T500,200 Q450,150 500,100 T600,100 Z'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-display text-navy text-center mb-12"
        >
          Our Global Footprint
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {globalStats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Globe;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  className="w-12 h-12 mx-auto mb-4 text-primary"
                >
                  <Icon className="w-full h-full" strokeWidth={1.5} />
                </motion.div>
                <div className="text-3xl md:text-4xl font-display text-primary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm md:text-base text-navy font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DIAStats;
