import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Globe, BookOpen, Award } from "lucide-react";

// Counter hook for animated numbers
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

// Animated globe with rotating dots
const AnimatedGlobe = () => (
  <div className="relative w-12 h-12">
    <Globe className="w-12 h-12 text-gold" />
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      {[0, 90, 180, 270].map((angle) => (
        <motion.div
          key={angle}
          className="absolute w-2 h-2 bg-primary rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: `rotate(${angle}deg) translateX(20px) translateY(-50%)`,
          }}
        />
      ))}
    </motion.div>
  </div>
);

const highlights = [
  {
    icon: Award,
    value: 35,
    suffix: "+",
    label: "Years of Publication",
    delay: 0,
  },
  {
    icon: BookOpen,
    value: 400,
    suffix: "+",
    label: "Editions Published",
    delay: 0.15,
  },
  {
    icon: Calendar,
    value: null,
    text: "Monthly",
    label: "Publication Frequency",
    delay: 0.3,
  },
  {
    icon: null,
    customIcon: true,
    value: null,
    text: "Global",
    label: "Readership Reach",
    delay: 0.45,
  },
];

const JournalHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 bg-secondary overflow-hidden"
    >
      {/* Background parallax image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('/images/campus/prashanti_digital-library.jpg')`,
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              className="relative text-center py-8 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: item.delay }}
            >
              {/* Vertical divider (except first item) */}
              {index > 0 && (
                <motion.div
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px bg-gold/30"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "60%" } : {}}
                  transition={{ duration: 0.5, delay: item.delay + 0.2 }}
                />
              )}

              {/* Icon */}
              <div className="flex justify-center mb-4">
                {item.customIcon ? (
                  <AnimatedGlobe />
                ) : item.icon && (
                  <item.icon className="w-12 h-12 text-gold" />
                )}
              </div>

              {/* Value */}
              <div className="mb-2">
                {item.value !== null ? (
                  <CounterDisplay value={item.value} suffix={item.suffix || ""} isInView={isInView} />
                ) : (
                  <motion.span
                    className="text-4xl md:text-5xl font-heading text-white"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: item.delay + 0.3 }}
                  >
                    {item.text}
                  </motion.span>
                )}
              </div>

              {/* Label */}
              <p className="text-white/70 text-sm md:text-base">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate component for counter display
const CounterDisplay = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const count = useCounter(value, 2, isInView);
  
  return (
    <span className="text-4xl md:text-5xl font-heading text-white tabular-nums">
      {count}{suffix}
    </span>
  );
};

export default JournalHighlights;
