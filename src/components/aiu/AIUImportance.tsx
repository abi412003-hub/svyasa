import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { importancePoints } from "./aiuData";

const AIUImportance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-cream relative overflow-hidden">
      {/* Parallax decorative image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.08 } : {}}
        className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden lg:block"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/campus/prashanti-campus_campus1.jpg')",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-display text-navy mb-8"
          >
            Why This Championship Matters
          </motion.h2>

          {/* Points */}
          <div className="space-y-5">
            {importancePoints.map((point, i) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl"
                >
                  {point.icon}
                </motion.div>
                <p className="text-lg text-navy leading-relaxed pt-2">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIUImportance;
