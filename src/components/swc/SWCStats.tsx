import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, Lock, BookOpen } from "lucide-react";

// Counter hook
const useCounter = (end: number, duration: number = 2, startWhen: boolean = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startWhen) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startWhen]);

  return count;
};

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Students Supported Annually",
    delay: 0,
    isCounter: true,
  },
  {
    text: "24/7",
    icon: Clock,
    label: "Counseling Availability",
    delay: 0.15,
    isCounter: false,
  },
  {
    text: "100%",
    icon: Lock,
    label: "Confidential",
    delay: 0.3,
    isCounter: false,
  },
  {
    value: 10,
    suffix: "+",
    icon: BookOpen,
    label: "Workshops Per Semester",
    delay: 0.45,
    isCounter: true,
  },
];

const StatItem = ({ stat, isInView }: { stat: typeof stats[0]; isInView: boolean }) => {
  const count = useCounter(stat.value || 0, 2, isInView && stat.isCounter);

  return (
    <motion.div
      className="text-center py-8 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: stat.delay }}
    >
      {/* Icon if present */}
      {stat.icon && (
        <motion.div
          className="flex justify-center mb-3"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: stat.delay + 0.1, type: "spring" }}
        >
          <stat.icon className="w-8 h-8 text-gold" />
        </motion.div>
      )}

      {/* Value */}
      <div className="mb-2">
        {stat.isCounter ? (
          <motion.span
            className="text-4xl md:text-5xl font-heading text-white tabular-nums"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: stat.delay }}
          >
            {count}{stat.suffix}
          </motion.span>
        ) : (
          <motion.span
            className="text-4xl md:text-5xl font-heading text-gold"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: stat.delay, type: "spring" }}
          >
            {stat.text}
          </motion.span>
        )}
      </div>

      {/* Label */}
      <p className="text-white/70 text-sm">{stat.label}</p>
    </motion.div>
  );
};

const SWCStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-secondary overflow-hidden">
      {/* Background parallax image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80')`,
        }}
      />

      {/* Golden particle field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative">
              {/* Vertical divider */}
              {index > 0 && (
                <motion.div
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px bg-gold/30"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "60%" } : {}}
                  transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                />
              )}
              <StatItem stat={stat} isInView={isInView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SWCStats;
