import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { trustBadges } from "./mandatoryDisclosureData";
import logoUgc from "@/assets/logo-ugc.png";
import logoAicte from "@/assets/logo-aicte.png";
import logoNaac from "@/assets/logo-naac.png";

/** Official logos for each regulator. AISHE publishes no standalone logo, so it gets a text badge. */
const badgeLogos: Record<string, string> = {
  ugc: logoUgc,
  aicte: logoAicte,
  naac: logoNaac,
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
            const logo = badgeLogos[badge.id];

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
                  whileHover={{ boxShadow: "0 0 20px rgba(212, 168, 67, 0.5)" }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden ring-2 ring-gold/40 shadow-lg transition-all duration-300"
                >
                  {logo ? (
                    <img
                      src={logo}
                      alt={`${badge.id.toUpperCase()} logo`}
                      loading="lazy"
                      className="w-[78%] h-[78%] object-contain"
                    />
                  ) : (
                    <span className="flex flex-col items-center leading-none" aria-hidden="true">
                      <span className="font-heading font-bold text-navy text-lg tracking-wide">
                        {badge.id.toUpperCase()}
                      </span>
                      <span className="mt-1 h-0.5 w-8 bg-gradient-to-r from-primary to-gold rounded-full" />
                    </span>
                  )}
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
