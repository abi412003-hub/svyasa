import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import campusImage from "@/assets/campus-1.jpg";

// Golden particle for background
const GoldenParticle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-gold rounded-full"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
    }}
  />
);

const GovernancePhilosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const quote = "Guiding S-VYASA with the vision of combining the Best of the East with the Best of the West — nurturing leaders who embody wisdom, integrity, and service.";
  const words = quote.split(" ");

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <img
          src={campusImage}
          alt="S-VYASA Campus"
          className="w-full h-[130%] object-cover"
        />
      </motion.div>

      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-navy/90" />

      {/* Golden particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <GoldenParticle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Content */}
      <div ref={textRef} className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative quotation marks */}
          <motion.div
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <span className="text-8xl font-heading text-gold/30 leading-none">"</span>
          </motion.div>

          {/* Quote with word-by-word animation */}
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-8">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* Closing quotation mark */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
          >
            <span className="text-8xl font-heading text-gold/30 leading-none rotate-180">"</span>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="mt-12 mx-auto h-px bg-gold/40"
            initial={{ width: 0 }}
            animate={isInView ? { width: 120 } : {}}
            transition={{ delay: 1.8, duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default GovernancePhilosophy;
