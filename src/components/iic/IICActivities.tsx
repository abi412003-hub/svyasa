import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { keyActivities, focusAreas } from "./iicData";

const IICActivities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="activities" ref={ref} className="py-16 bg-navy relative overflow-hidden scroll-mt-24">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Key Activities */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="mb-8"
            >
              <h3 className="text-2xl font-display text-white mb-3">Key Activities</h3>
              <div className="w-16 h-1 bg-gold rounded-full" />
            </motion.div>

            <div className="space-y-4">
              {keyActivities.map((activity, i) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group flex items-center gap-4"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="w-1 h-8 bg-gold/30 rounded-full origin-left"
                  />
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    {activity.icon}
                  </div>
                  <span className="text-white/90 group-hover:text-white transition-colors">
                    {activity.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-display text-white mb-3">Focus Areas</h3>
              <div className="w-16 h-1 bg-gold rounded-full" />
            </motion.div>

            <div className="space-y-4">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    {area.icon}
                  </div>
                  <span className="text-white/90 group-hover:text-white transition-colors">
                    {area.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IICActivities;
