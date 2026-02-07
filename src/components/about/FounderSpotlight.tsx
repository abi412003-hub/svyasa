import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import founderPortrait from "@/assets/founder-portrait.png";

const FounderSpotlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const titleText = "From NASA to VYASA";

  return (
    <section ref={ref} className="py-20 bg-cream relative overflow-hidden">
      {/* Floating Light Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Typewriter Title */}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              {titleText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="inline-block"
                  style={{ marginRight: char === " " ? "0.3em" : "0" }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-0.5 h-8 bg-primary ml-1 align-middle"
              />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              <span className="font-semibold text-foreground">Padmashri Dr. H.R. Nagendra</span>, 
              the 'Yoga Scientist,' founded S-VYASA University and pioneered the 
              International Day of Yoga. His journey from NASA to academia embodies 
              yoga's transformative power.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="text-muted-foreground leading-relaxed"
            >
              After a distinguished career as a scientist at NASA, Dr. Nagendra 
              returned to India with a vision to bring scientific rigor to the 
              study of yoga. His pioneering research has helped establish yoga 
              therapy as a recognized discipline worldwide.
            </motion.p>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Portrait with Animated Border */}
            <div className="relative">
              <motion.div
                className="absolute -inset-3 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--gold)), hsl(var(--primary)))",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background">
                <img
                  src={founderPortrait}
                  alt="Dr. H.R. Nagendra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Video Thumbnail Overlay */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsVideoOpen(true)}
              className="absolute -bottom-4 right-0 lg:right-12 w-32 h-20 bg-secondary rounded-xl overflow-hidden shadow-large group cursor-pointer"
            >
              <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-gold transition-colors"
                >
                  <Play className="w-5 h-5 text-primary-foreground fill-current ml-1" />
                </motion.div>
              </div>
              <span className="absolute bottom-2 left-2 text-xs text-primary-foreground/80">
                Watch Story
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-foreground rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full flex items-center justify-center text-primary-foreground">
                <p>Video Player Placeholder</p>
              </div>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-muted transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FounderSpotlight;
