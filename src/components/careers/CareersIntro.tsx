import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CareersIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const heading = "Transform Lives. Transform Yours.";
  const words = heading.split(" ");

  const paragraph = `At S-VYASA, we believe every career path is a transformative journey that ignites personal growth, fuels innovation, and inspires service to society. In a spiritually enriching and intellectually stimulating environment, every individual is primed to gain cutting-edge skills while fostering character development. A value-based foundation sets the tone for individuals to cultivate a spirit of service and strive for personal excellence, preparing them to become pillars of a stronger, more resilient NATION.`;

  return (
    <section ref={ref} className="py-20 bg-cream relative overflow-hidden">
      {/* Mandala watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-[600px] h-[600px] text-primary/5"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="20"
              x2="100"
              y2="180"
              stroke="currentColor"
              strokeWidth="0.3"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <path
              key={`petal-${i}`}
              d="M100 40 Q115 70 100 100 Q85 70 100 40"
              fill="currentColor"
              opacity="0.3"
              transform={`rotate(${i * 45} 100 100)`}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading with word-by-word animation */}
          <h2 className="text-3xl md:text-5xl font-display text-navy mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* Gold underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-24 h-1 bg-gold mx-auto mb-8"
          />

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {paragraph}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CareersIntro;
