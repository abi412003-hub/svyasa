import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Star, TrendingUp } from "lucide-react";
import { qualityMetrics } from "./iqacData";

const iconMap: Record<string, React.ElementType> = {
  shield: Shield,
  star: Star,
  chart: TrendingUp,
};

const IQACQualityStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-12 bg-navy overflow-hidden">
      {/* Gold gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {qualityMetrics.map((metric, i) => {
            const Icon = iconMap[metric.icon] || Shield;

            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 text-white"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.15,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-gold" />
                </motion.div>
                <span className="font-medium text-lg">{metric.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IQACQualityStrip;
