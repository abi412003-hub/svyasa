import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const SWCTestimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const quote = "The SWC was my anchor during a really difficult semester. The counseling sessions helped me not just survive, but actually thrive. I'm grateful for a university that genuinely cares about its students.";
  const words = quote.split(" ");

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-secondary overflow-hidden">
      {/* Diagonal line pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.1) 20px,
            rgba(255,255,255,0.1) 21px
          )`,
        }}
      />

      {/* Lotus watermark */}
      <motion.div
        className="absolute right-10 bottom-10 w-64 h-64 opacity-[0.03] pointer-events-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-white">
          {[...Array(8)].map((_, i) => (
            <ellipse key={i} cx="100" cy="50" rx="20" ry="50" transform={`rotate(${i * 45} 100 100)`} />
          ))}
          <circle cx="100" cy="100" r="25" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Large quotation mark */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Quote className="w-20 h-20 text-gold" strokeWidth={1} />
          </motion.div>

          {/* Quote text with word-by-word reveal */}
          <motion.blockquote
            className="font-heading text-xl md:text-2xl lg:text-3xl text-white italic leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.blockquote>

          {/* Attribution */}
          <motion.p
            className="text-white/70"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            — S-VYASA Student, 2024
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SWCTestimonial;
