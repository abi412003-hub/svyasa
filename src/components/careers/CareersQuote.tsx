import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CareersQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const quote =
    "Education is the cornerstone of progress and the key to unlocking one's true potential. It transcends boundaries, empowers minds, and shapes the future.";
  const words = quote.split(" ");

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/campus/p3-admin-exteriors_134.jpg')`,
          y,
        }}
      />
      <div className="absolute inset-0 bg-navy/80" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 relative"
        >
          {/* Decorative Quote Marks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.2 } : {}}
            transition={{ delay: 0.3 }}
            className="absolute top-4 left-4 text-8xl text-gold font-serif leading-none"
          >
            "
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.2 } : {}}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 right-4 text-8xl text-gold font-serif leading-none rotate-180"
          >
            "
          </motion.div>

          {/* Quote Text - Word by Word */}
          <blockquote className="text-xl md:text-2xl lg:text-3xl text-white text-center font-display leading-relaxed mb-6 relative z-10">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </blockquote>

          {/* Attribution */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="text-center text-gold font-medium"
          >
            — S-VYASA University
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersQuote;
