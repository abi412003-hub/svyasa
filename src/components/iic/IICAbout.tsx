import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const IICAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-16 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Content - 2/3 */}
          <div className="lg:col-span-2">
            {/* Heading with animated underline */}
            <div className="mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="text-3xl md:text-4xl font-display text-navy mb-3"
              >
                About IIC – S-VYASA
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-24 h-1 bg-gold rounded-full origin-left"
              />
            </div>

            {/* Paragraphs */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg leading-relaxed mb-6"
            >
              <span className="font-semibold text-navy">
                The Institution Innovation Council (IIC) at Swami Vivekananda Yoga Anusandhana 
                Samsthana (S-VYASA) is established under the Ministry of Education's Innovation 
                Cell (MIC), Government of India, to nurture a strong culture of innovation and 
                entrepreneurship across the campus.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Aligned with S-VYASA's mission of integrating Yoga, science, and holistic health, 
              the IIC serves as a vibrant platform for idea generation, research, start-up 
              development, and societal impact.
            </motion.p>
          </div>

          {/* Decorative illustration - 1/3 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="hidden lg:flex justify-center items-center"
          >
            <svg viewBox="0 0 200 200" className="w-48 h-48">
              {/* Lightbulb */}
              <motion.path
                d="M100 30 C70 30 50 55 50 80 C50 100 65 115 75 125 L75 150 L125 150 L125 125 C135 115 150 100 150 80 C150 55 130 30 100 30"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.6 }}
              />
              {/* Filament */}
              <motion.path
                d="M85 155 L115 155 M90 160 L110 160 M95 165 L105 165"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.5, delay: 2 }}
              />
              {/* Circuit lines */}
              <motion.path
                d="M30 100 L45 100 M155 100 L170 100 M100 175 L100 190 M50 50 L60 60 M140 50 L150 60"
                fill="none"
                stroke="hsl(var(--gold))"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.8 }}
              />
              {/* Lotus petals */}
              <motion.path
                d="M85 80 C90 70 95 65 100 60 C105 65 110 70 115 80 C110 75 105 75 100 75 C95 75 90 75 85 80"
                fill="hsl(var(--gold) / 0.3)"
                stroke="hsl(var(--gold))"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 2.2 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IICAbout;
