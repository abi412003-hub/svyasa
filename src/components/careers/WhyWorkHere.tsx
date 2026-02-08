import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { whyWorkFeatures } from "./careersData";

const iconPaths: Record<string, string> = {
  lotus: "M50 20 C30 35, 15 55, 50 85 C85 55, 70 35, 50 20 M50 45 C35 55, 25 70, 50 90 C75 70, 65 55, 50 45 M30 50 C20 60, 15 75, 40 85 M70 50 C80 60, 85 75, 60 85",
  growth: "M20 80 L20 50 L35 50 L35 80 M45 80 L45 35 L60 35 L60 80 M70 80 L70 20 L85 20 L85 80 M15 85 L90 85 M50 15 L50 5 M45 10 L50 5 L55 10",
  globe: "M50 10 A40 40 0 1 1 50 90 A40 40 0 1 1 50 10 M50 10 C35 30, 35 70, 50 90 M50 10 C65 30, 65 70, 50 90 M15 50 L85 50 M20 30 L80 30 M20 70 L80 70",
  community: "M50 25 A10 10 0 1 1 50 45 A10 10 0 1 1 50 25 M25 40 A8 8 0 1 1 25 56 A8 8 0 1 1 25 40 M75 40 A8 8 0 1 1 75 56 A8 8 0 1 1 75 40 M35 55 C35 75, 65 75, 65 55 M15 60 C15 75, 35 75, 35 65 M65 65 C65 75, 85 75, 85 60",
};

const WhyWorkHere = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display text-navy mb-4">
            Why Work With Us?
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-20 h-1 bg-gold mx-auto"
          />
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.12, duration: 0.5 }}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-0 hover:border-l-4 border-primary"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-4 text-primary">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-full h-full"
                >
                  <motion.path
                    d={iconPaths[feature.icon]}
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.15, duration: 1 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkHere;
