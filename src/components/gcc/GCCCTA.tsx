import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Golden sparkle particles
const SparkleParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const GCCCTA = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(25, 82%, 50%) 0%, hsl(35, 70%, 55%) 100%)",
            "linear-gradient(135deg, hsl(30, 85%, 52%) 0%, hsl(25, 82%, 50%) 100%)",
            "linear-gradient(135deg, hsl(25, 82%, 50%) 0%, hsl(35, 70%, 55%) 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Sparkle particles */}
      <SparkleParticles />

      {/* Decorative lotus/mandala corners */}
      <motion.div
        className="absolute top-8 left-8 w-24 h-24 opacity-20"
        initial={{ opacity: 0, rotate: -30 }}
        whileInView={{ opacity: 0.2, rotate: 0 }}
        viewport={{ once: true }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" />
          <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="1" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="50"
              y1="5"
              x2="50"
              y2="95"
              stroke="white"
              strokeWidth="0.5"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 w-24 h-24 opacity-20"
        initial={{ opacity: 0, rotate: 30 }}
        whileInView={{ opacity: 0.2, rotate: 0 }}
        viewport={{ once: true }}
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" />
          <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="1" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="50"
              y1="5"
              x2="50"
              y2="95"
              stroke="white"
              strokeWidth="0.5"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.h2
          className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Be a part of S-VYASA
        </motion.h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", bounce: 0.4 }}
          >
            <Button
              size="lg"
              className="relative bg-white text-primary hover:bg-white/90 text-base md:text-lg px-6 md:px-8 py-6 rounded-full shadow-lg group overflow-hidden"
              asChild
            >
              <a href="https://applynow.svyasa.edu.in/" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">Apply now for S-VYASA Global City Campus</span>
                <motion.span
                  className="absolute inset-0 bg-accent/20"
                  animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            <Button
              size="lg"
              className="relative bg-white text-primary hover:bg-white/90 text-base md:text-lg px-6 md:px-8 py-6 rounded-full shadow-lg group overflow-hidden"
              asChild
            >
              <a href="https://applynow.svyasa.edu.in/" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">Apply now for Prashanti Campus</span>
                <motion.span
                  className="absolute inset-0 bg-accent/20"
                  animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="relative border-2 border-white text-white hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 py-6 rounded-full group overflow-hidden"
              asChild
            >
              <a href="/contact">
                <span className="relative z-10">Contact Us</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GCCCTA;
