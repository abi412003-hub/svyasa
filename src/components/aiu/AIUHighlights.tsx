import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Award, Music, Trophy } from "lucide-react";
import { eventHighlights, eventStats } from "./aiuData";

const fallbackIcons: Record<string, React.ElementType> = {
  inaugural: Award,
  competitions: Trophy,
  cultural: Music,
  valedictory: Calendar,
};

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
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
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AIUHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display text-navy mb-3">Event Highlights</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Event Cards */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-primary/30 -translate-y-1/2" />
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-primary/20 -translate-y-1/2 origin-left"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventHighlights.map((event, i) => {
              const FallbackIcon = fallbackIcons[event.id] || Calendar;
              
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 relative z-10"
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.12, type: "spring", bounce: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    className="w-16 h-16 mx-auto mb-4"
                  >
                    <img
                      src={event.icon}
                      alt={event.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = "";
                          const div = document.createElement("div");
                          div.className = "w-full h-full bg-primary/10 rounded-xl flex items-center justify-center text-primary";
                          parent.appendChild(div);
                        }
                      }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-semibold text-navy mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  {/* Date Badge */}
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {event.date}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Diagonal pattern background */}
          <div
            className="absolute inset-0 bg-primary"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.05) 10px,
                rgba(255,255,255,0.05) 11px
              )`,
            }}
          />

          <div className="relative py-10 px-6">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-6">
              {eventStats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="text-center text-white"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 }}
              className="text-center text-white/90 italic max-w-2xl mx-auto"
            >
              "This championship celebrates athletic excellence, Indian culture, and the empowering spirit of Yoga."
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIUHighlights;
