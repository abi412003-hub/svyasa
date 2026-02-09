import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Category } from "@/data/courses";

interface WhyStudySectionProps {
  category: Category;
}

// Helper to get Lucide icon component by name
const getIconComponent = (iconName: string) => {
  const formattedName = iconName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return (LucideIcons as any)[formattedName] || LucideIcons.Star;
};

// Animated counter hook
const useAnimatedCounter = (end: number | string, inView: boolean, duration: number = 1500) => {
  const [value, setValue] = useState(0);
  const numericEnd = typeof end === "string" ? parseInt(end.replace(/[^0-9]/g, "")) || 0 : end;
  const isNumeric = /^\d+/.test(String(end));

  useEffect(() => {
    if (!inView || !isNumeric) return;

    let start = 0;
    const increment = numericEnd / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericEnd) {
        setValue(numericEnd);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, numericEnd, isNumeric, duration]);

  return isNumeric ? value : end;
};

const WhyStudySection = ({ category }: WhyStudySectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8 }}
              className="h-0.5 bg-primary"
            />
            <span className="text-primary text-sm uppercase tracking-[3px] font-medium">
              WHY S-VYASA
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8 }}
              className="h-0.5 bg-primary"
            />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Why Study {category.shortTitle} at S-VYASA?
          </h2>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {category.whyStudy.map((stat, index) => {
            const IconComponent = getIconComponent(stat.icon);
            const animatedValue = useAnimatedCounter(stat.stat, isInView);

            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="bg-card rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>

                {/* Stat Number */}
                <div className="text-4xl font-bold text-secondary mb-2 tabular-nums">
                  {shouldReduceMotion || typeof stat.stat !== "string" || !/^\d/.test(stat.stat) 
                    ? stat.stat 
                    : animatedValue + stat.stat.replace(/^\d+/, "")
                  }
                </div>

                {/* Label */}
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyStudySection;
