import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
              {/* UN Logo placeholder */}
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">UN</span>
              </div>
              <div className="text-2xl text-gold">+</div>
              {/* S-VYASA Logo */}
              <img
                src="/src/assets/svyasa-emblem.png"
                alt="S-VYASA"
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
