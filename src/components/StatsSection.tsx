import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Globe, Award } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: 10000, suffix: "+", label: "Students Enrolled" },
  { icon: BookOpen, value: 600, suffix: "+", label: "Research Papers" },
  { icon: Globe, value: 40, suffix: "+", label: "Countries" },
  { icon: Award, value: 30, suffix: "+", label: "Years of Excellence" },
];

const CountUpNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
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
  }, [value, inView]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-gold to-primary bg-[length:200%_100%]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-primary-foreground/10 hover:bg-card/20 transition-colors cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center w-14 h-14 bg-primary-foreground/10 rounded-full mb-4"
                >
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                {/* Number */}
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  <CountUpNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
                </h3>

                {/* Label */}
                <p className="text-primary-foreground/80 text-sm font-medium">
                  {stat.label}
                </p>

                {/* Floating plus animation */}
                <motion.span
                  className="absolute top-4 right-4 text-primary-foreground/40 text-xl font-bold"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✦
                </motion.span>
              </motion.div>

              {/* Divider for desktop */}
              {index < stats.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-primary-foreground/20 origin-center"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
