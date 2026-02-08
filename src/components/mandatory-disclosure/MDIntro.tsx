import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MDIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const headingWords = "Institutional Transparency".split(" ");

  return (
    <section ref={ref} className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Document/Shield Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="w-20 h-20 mx-auto mb-8"
          >
            <svg viewBox="0 0 80 80" className="w-full h-full">
              {/* Document shape */}
              <motion.path
                d="M20 10 L50 10 L60 20 L60 70 L20 70 Z"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
              {/* Folded corner */}
              <motion.path
                d="M50 10 L50 20 L60 20"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
              />
              {/* Lines */}
              <motion.path
                d="M28 32 L52 32 M28 42 L52 42 M28 52 L42 52"
                fill="none"
                stroke="hsl(var(--gold))"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
              {/* Checkmark */}
              <motion.path
                d="M44 48 L48 54 L56 42"
                fill="none"
                stroke="hsl(var(--gold))"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.5 }}
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
            transition={{ delay: 0.9 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            As mandated by regulatory bodies including the University Grants Commission (UGC), 
            All India Council for Technical Education (AICTE), and National Assessment and 
            Accreditation Council (NAAC), S-VYASA University maintains full transparency through 
            public disclosure of its approvals, accreditations, governance structures, and 
            institutional policies.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MDIntro;
