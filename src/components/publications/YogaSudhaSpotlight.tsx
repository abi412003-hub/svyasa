import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

// SVG Lotus icon with stroke animation
const AnimatedLotus = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 64 64"
    className="text-gold"
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, delay: 0.5 }}
  >
    <motion.path
      d="M32 8 C32 8 20 20 20 32 C20 44 32 52 32 52 C32 52 44 44 44 32 C44 20 32 8 32 8 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
    <motion.path
      d="M32 20 C28 24 26 28 26 32 C26 36 28 40 32 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.8 }}
    />
    <motion.path
      d="M32 20 C36 24 38 28 38 32 C38 36 36 40 32 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.8 }}
    />
  </motion.svg>
);

// Magazine cover placeholder component
const MagazineCover = ({ offset = 0, opacity = 1, zIndex = 10 }: { offset?: number; opacity?: number; zIndex?: number }) => (
  <motion.div
    className="absolute rounded-lg overflow-hidden shadow-2xl"
    style={{
      width: "280px",
      height: "380px",
      transform: `translateX(${offset}px) translateY(${offset * 0.5}px) rotateY(${offset * 0.1}deg)`,
      opacity,
      zIndex,
    }}
  >
    <div className="w-full h-full bg-gradient-to-br from-primary via-primary/90 to-gold p-6 flex flex-col items-center justify-between">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-2xl font-heading">ॐ</span>
        </div>
        <h3 className="text-white font-heading text-2xl">Yoga Sudha</h3>
        <p className="text-white/80 text-sm">Monthly Journal</p>
      </div>
      
      {/* Center motif */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border-2 border-white/30 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-white/60 text-4xl">🪷</span>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center text-white/70 text-sm">
        <p>S-VYASA Deemed to be University</p>
        <p className="text-xs mt-1">Est. 1989</p>
      </div>
    </div>
  </motion.div>
);

const YogaSudhaSpotlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToArchives = () => {
    const element = document.getElementById("archives");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Magazine Cover Showcase */}
          <motion.div
            className="relative h-[450px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Layered covers behind */}
            <MagazineCover offset={-40} opacity={0.3} zIndex={1} />
            <MagazineCover offset={-20} opacity={0.5} zIndex={2} />
            
            {/* Main cover with 3D tilt animation */}
            <motion.div
              className="relative z-10"
              initial={{ rotateY: 15, opacity: 0 }}
              animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                animate={isInView ? { y: [0, -6, 0] } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-[280px] h-[380px] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-primary via-primary/90 to-gold p-6 flex flex-col items-center justify-between">
                  {/* Header */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-2xl font-heading">ॐ</span>
                    </div>
                    <h3 className="text-white font-heading text-2xl">Yoga Sudha</h3>
                    <p className="text-white/80 text-sm">Monthly Journal</p>
                  </div>
                  
                  {/* Center motif */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-2 border-white/30 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center">
                        <span className="text-white/80 text-5xl">🪷</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="text-center text-white/80 text-sm">
                    <p>S-VYASA Deemed to be University</p>
                    <p className="text-xs mt-1 text-white/60">Est. 1989</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:pl-8">
            {/* Decorative accent line */}
            <motion.div
              className="h-1 bg-primary rounded-full mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            />

            {/* Heading with lotus */}
            <div className="flex items-center gap-3 mb-2">
              <motion.h2
                className="font-heading text-4xl md:text-5xl text-gold"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
              >
                Yoga Sudha
              </motion.h2>
              <AnimatedLotus />
            </div>

            {/* Subheading */}
            <motion.p
              className="text-secondary text-lg mb-4"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Monthly Journal of S-VYASA Deemed to be University
            </motion.p>

            {/* Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6, type: "spring", bounce: 0.4 }}
            >
              <span className="px-4 py-2 rounded-full border-2 border-gold text-gold font-medium text-sm">
                Est. 1989 • 35+ Years
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              In its true spirit, Yoga Sudha captures the pulse of the university as a whole — 
              its representations, activities, and achievements across the globe, spreading the 
              message of Yoga far and wide. Publishing articles with a scriptural base, spiritual 
              ideology, scientific approach, and humanitarian concern, Yoga Sudha has been a beacon 
              of knowledge for over 35 years under the guidance of Chancellor Dr. H R Nagendra.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                onClick={scrollToArchives}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg pulse-glow"
              >
                Browse Archives
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaSudhaSpotlight;
