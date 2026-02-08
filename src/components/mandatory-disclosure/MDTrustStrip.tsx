import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle, Star, FileCheck } from "lucide-react";
import { trustBadges } from "./mandatoryDisclosureData";

const badgeIcons: Record<string, React.ElementType> = {
  ugc: Award,
  aicte: CheckCircle,
  naac: Star,
  aishe: FileCheck,
};

const MDTrustStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-12 bg-navy overflow-hidden">
      {/* Gold gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {trustBadges.map((badge, i) => {
            const Icon = badgeIcons[badge.id] || Award;

            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4,
                }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="group flex flex-col items-center gap-3 text-white cursor-default"
              >
                <motion.div
                  whileHover={{ boxShadow: "0 0 20px rgba(212, 168, 67, 0.4)" }}
                  className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-gold" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="font-medium text-center text-sm md:text-base"
                >
                  {badge.label}
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MDTrustStrip;
