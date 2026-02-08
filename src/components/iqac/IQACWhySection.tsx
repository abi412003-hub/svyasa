import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Globe, BookOpen, Heart, Microscope, GraduationCap } from "lucide-react";
import { whyFeatures } from "./iqacData";

const fallbackIcons: Record<string, React.ElementType> = {
  infrastructure: Building2,
  collaborations: Globe,
  curriculum: BookOpen,
  impact: Heart,
  research: Microscope,
  programs: GraduationCap,
};

const IQACWhySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-cream relative overflow-hidden">
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            hsl(var(--navy)) 10px,
            hsl(var(--navy)) 11px
          )`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display text-navy mb-3">Why S-VYASA</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-4" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground italic"
          >
            Your gateway to academic excellence and career success.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyFeatures.map((feature, i) => {
            const FallbackIcon = fallbackIcons[feature.id] || GraduationCap;
            const isOdd = i % 2 === 0;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: isOdd ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-6 text-center shadow-md border-t-4 border-transparent hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, type: "spring", bounce: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  className="w-16 h-16 mx-auto mb-4"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Hide image and show fallback
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
                <h3 className="font-semibold text-navy group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IQACWhySection;
