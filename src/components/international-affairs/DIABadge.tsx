import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import unaiLogo from "@/assets/logo-unai.jpg";
import svyasaEmblem from "@/assets/svyasa-emblem.png";

const DIABadge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-12 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl mx-auto bg-white rounded-2xl p-8 border-2 border-gold shadow-lg text-center overflow-hidden"
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />

          <div className="relative z-10">
            {/* Logos */}
            <div className="flex items-center justify-center gap-6 mb-6">
              {/* UNAI Logo */}
              <img
                src={unaiLogo}
                alt="United Nations Academic Impact logo"
                className="w-20 h-20 object-contain rounded-full"
              />
              <div className="text-2xl text-gold">+</div>
              {/* S-VYASA Logo */}
              <img
                src={svyasaEmblem}
                alt="S-VYASA emblem"
                className="w-16 h-16 object-contain"
              />
            </div>

            <h3 className="text-lg md:text-xl font-display text-navy mb-2">
              S-VYASA is a proud member of the
            </h3>
            <p className="text-primary font-semibold text-xl">
              United Nations Academic Impact (UNAI)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DIABadge;
