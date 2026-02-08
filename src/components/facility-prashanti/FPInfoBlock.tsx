import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const FPInfoBlock = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const bodyText = [
    "Spanning over 100 acres in the lap of virgin nature,",
    "Prashanti Kutiram features residential hostels, study and practice blocks,",
    "world-class research centers, therapy facilities,",
    "a 15,000-book library, cow-sheds, plantations, and nature tracks —",
    "everything for yogic and spiritual growth.",
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden bg-cream">
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: bgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
          alt="Nature background"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading with gold underline */}
          <motion.h2
            className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Prashanti Kutiram — 100 Acres of Holistic Excellence
          </motion.h2>

          {/* Animated gold underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: "50%" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Body text with staggered line reveal */}
          <div className="space-y-2">
            {bodyText.map((line, index) => (
              <motion.p
                key={index}
                className="font-poppins text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FPInfoBlock;
