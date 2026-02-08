import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users } from "lucide-react";

const SWCMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sentences = [
    "The Student Welfare Committee at S-VYASA plays a pivotal role in supporting students' well-being — ensuring they have the necessary resources and assistance to thrive academically, emotionally, and socially.",
    "Our mission is to create a positive and inclusive campus environment where every student feels safe, supported, and empowered to achieve their personal and academic goals.",
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Warm radial gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-20"
          style={{
            background: "radial-gradient(ellipse, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative Icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <motion.div
              className="relative w-20 h-20"
              animate={isInView ? { rotate: [0, 5, -5, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {/* Hands cradling icon using lucide components */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 80 80" className="w-20 h-20">
                  <motion.path
                    d="M20 50 Q10 40 15 30 Q20 20 30 25 Q35 27 40 35"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <motion.path
                    d="M60 50 Q70 40 65 30 Q60 20 50 25 Q45 27 40 35"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="40"
                    cy="35"
                    r="8"
                    fill="none"
                    stroke="hsl(var(--gold))"
                    strokeWidth="2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Heading with word stagger */}
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-secondary mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            {"Your Well-Being Is Our Priority".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Gold decorative line */}
          <motion.div
            className="h-1 bg-gold mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          />

          {/* Mission paragraphs */}
          <div className="space-y-4">
            {sentences.map((sentence, index) => (
              <motion.p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              >
                {sentence}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SWCMission;
