import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import presidentImage from "@/assets/president-nagendra.jpg";

const PresidentsNote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 bg-background overflow-hidden">
      {/* Subtle mandala watermark */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.03] pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-primary">
          {[...Array(12)].map((_, i) => (
            <ellipse key={i} cx="100" cy="60" rx="15" ry="40" transform={`rotate(${i * 30} 100 100)`} />
          ))}
          <circle cx="100" cy="100" r="20" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">From the President's Desk</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">President's Note</h2>
            <motion.div
              className="mx-auto mt-4 h-0.5 bg-gold"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Quote content — 3 cols (left side) */}
            <motion.div
              className="md:col-span-3 order-2 md:order-1"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
            >
              <Quote className="w-10 h-10 text-gold/30 mb-4 rotate-180" />

              <blockquote className="font-heading text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                Yoga is not merely a practice — it is the science of holistic living. At S-VYASA, we have dedicated ourselves to bridging the ancient wisdom of our Rishis with the rigour of modern scientific research, creating a model of education that transforms lives.
              </blockquote>

              <p className="text-muted-foreground leading-relaxed mb-6">
                As President of the S-VYASA Society, I envision an institution that serves as a beacon of hope and transformation. Our unique blend of yogic sciences, cutting-edge research, and value-based education prepares students not just for careers, but for a life of purpose, health, and service to humanity. The journey of S-VYASA is a testament to the power of perseverance, faith, and the timeless relevance of India's spiritual heritage.
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-0.5 bg-gold" />
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">Dr. H.R. Nagendra</p>
                  <p className="text-muted-foreground text-xs">ME, Ph.D. · Padma Shri Awardee · President, S-VYASA Society</p>
                </div>
              </div>
            </motion.div>

            {/* Portrait — 2 cols (right side) */}
            <motion.div
              className="md:col-span-2 flex justify-center order-1 md:order-2"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
            >
              <div className="relative">
                {/* Rotating ring */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl"
                  style={{
                    background: "conic-gradient(hsl(var(--gold)), hsl(var(--primary)), hsl(var(--gold)), hsl(var(--primary)), hsl(var(--gold)))",
                    padding: "3px",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-2xl bg-background" />
                </motion.div>

                <img
                  src={presidentImage}
                  alt="Dr. H.R. Nagendra — President, S-VYASA Society"
                  className="relative z-10 w-64 h-80 md:w-72 md:h-96 object-cover object-top rounded-2xl shadow-large"
                />

                {/* Name plate */}
                <motion.div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 bg-primary text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full shadow-lg text-center whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <p className="font-heading font-semibold text-sm">Dr. H.R. Nagendra</p>
                  <p className="text-gold text-[10px] tracking-wider uppercase">President, S-VYASA Society</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentsNote;
