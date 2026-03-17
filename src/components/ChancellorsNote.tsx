import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import chancellorImage from "@/assets/chancellor-dayananda.jpg";

const ChancellorsNote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 bg-cream overflow-hidden">
      {/* Subtle mandala watermark */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.03] pointer-events-none"
        animate={{ rotate: 360 }}
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
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">From the Chancellor's Desk</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">Chancellor's Note</h2>
            <motion.div
              className="mx-auto mt-4 h-0.5 bg-gold"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Portrait — 2 cols */}
            <motion.div
              className="md:col-span-2 flex justify-center"
              initial={{ opacity: 0, x: -40 }}
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
                  <div className="w-full h-full rounded-2xl bg-cream" />
                </motion.div>

                <img
                  src={chancellorImage}
                  alt="Dr. H.R. Dayananda Swamy — Chancellor, S-VYASA University"
                  className="relative z-10 w-64 h-80 md:w-72 md:h-96 object-cover object-top rounded-2xl shadow-large"
                />

                {/* Name plate */}
                <motion.div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 bg-secondary text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full shadow-lg text-center whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <p className="font-heading font-semibold text-sm">Dr. H.R. Dayananda Swamy</p>
                  <p className="text-gold text-[10px] tracking-wider uppercase">Chancellor, S-VYASA University</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Quote content — 3 cols */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
            >
              <Quote className="w-10 h-10 text-gold/30 mb-4 rotate-180" />

              <blockquote className="font-heading text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                As one of the Founding Members of the S-VYASA Movement, I have been dedicated to the growth and stability of this institution for over three decades. Our mission is to integrate Yoga, science, and education for global well-being.
              </blockquote>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With a keen eye for financial prudence and operational excellence, my leadership as Secretary of S-VYASA Society ensures financial sustainability and strategic administration. Together, we continue to build an institution where ancient yogic wisdom meets modern scientific inquiry, nurturing individuals who embody the values of service, integrity, and holistic well-being.
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-0.5 bg-gold" />
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">Dr. H.R. Dayananda Swamy</p>
                  <p className="text-muted-foreground text-xs">B.Com, MBA, M.Sc., Ph.D. · Chancellor, S-VYASA University</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChancellorsNote;
