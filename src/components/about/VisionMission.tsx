import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              className="h-px w-12 bg-primary origin-right"
            />
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground"
            >
              Our Vision & Mission
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              className="h-px w-12 bg-primary origin-left"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-3xl mx-auto"
          >
            The vision and mission of 'Be and Make' at S-VYASA promote a harmonious 
            synthesis of personal development and societal contribution, aligning 
            with the holistic principles of yoga.
          </motion.p>
        </div>

        {/* BE and MAKE Blocks */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-primary via-gold to-navy z-10"
          />

          {/* BE Block */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-primary/5 to-saffron-light/5 rounded-2xl p-8 md:p-10 overflow-hidden group"
          >
            {/* Background Mandala */}
            <motion.div
              className="absolute -right-20 -bottom-20 w-64 h-64 opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
                {[...Array(12)].map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="5"
                    x2="50"
                    y2="50"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    transform={`rotate(${i * 30} 50 50)`}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Content */}
            <motion.h3
              initial={{ scale: 2, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="font-heading text-6xl md:text-8xl font-bold text-primary mb-6"
            >
              BE
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground leading-relaxed relative z-10"
            >
              <span className="font-semibold text-foreground">To be</span> emphasizes 
              personal development and self-realization. It encourages individuals, 
              particularly students and members of the S-VYASA community, to cultivate 
              a strong sense of self-awareness, self-discipline, and self-improvement.
            </motion.p>
          </motion.div>

          {/* MAKE Block */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-navy/5 to-teal/5 rounded-2xl p-8 md:p-10 overflow-hidden group"
          >
            {/* Background Mandala (Opposite Rotation) */}
            <motion.div
              className="absolute -left-20 -bottom-20 w-64 h-64 opacity-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-navy">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
                {[...Array(12)].map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="5"
                    x2="50"
                    y2="50"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    transform={`rotate(${i * 30} 50 50)`}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Content */}
            <motion.h3
              initial={{ scale: 2, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="font-heading text-6xl md:text-8xl font-bold text-navy mb-6"
            >
              MAKE
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground leading-relaxed relative z-10"
            >
              <span className="font-semibold text-foreground">To make</span> implies 
              a commitment to making a positive impact on others and the world. It 
              relates to the responsibility of individuals to contribute to the 
              well-being of society and the community.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
