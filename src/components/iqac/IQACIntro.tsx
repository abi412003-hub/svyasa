import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield } from "lucide-react";

const IQACIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const headingWords = "Committed to Quality & Academic Excellence".split(" ");

  return (
    <section ref={ref} className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Shield Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="w-20 h-20 mx-auto mb-8"
          >
            <svg viewBox="0 0 80 80" className="w-full h-full">
              <motion.path
                d="M40 8 L70 20 L70 45 C70 60 55 72 40 76 C25 72 10 60 10 45 L10 20 Z"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
              <motion.path
                d="M30 42 L38 50 L52 32"
                fill="none"
                stroke="hsl(var(--gold))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </svg>
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-display text-navy mb-6">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            The Internal Quality Assurance Cell (IQAC) at S-VYASA University ensures the implementation 
            of quality enhancement measures, institutional governance, and compliance with national 
            accreditation standards. As mandated by NAAC, the IQAC drives continuous improvement in 
            academic, administrative, and research processes.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default IQACIntro;
