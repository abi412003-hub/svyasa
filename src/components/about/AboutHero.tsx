import { motion } from "framer-motion";
import aboutHero from "@/assets/about-hero.jpg";

const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1.5 h-1.5 bg-gold/40 rounded-full"
    initial={{
      x: Math.random() * 100 + "%",
      y: "110%",
      opacity: 0,
    }}
    animate={{
      y: "-10%",
      opacity: [0, 0.8, 0.8, 0],
    }}
    transition={{
      duration: 10 + Math.random() * 5,
      delay: delay,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      left: `${Math.random() * 100}%`,
    }}
  />
);

const AboutHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Image with Ken Burns */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0"
      >
        <img
          src={aboutHero}
          alt="S-VYASA Global City Campus - Admissions Open 2026-27"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Subtle Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Particle key={i} delay={i * 0.7} />
        ))}
      </div>

      {/* Content - positioned to not overlap with the student image */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-lg"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full mb-4"
          >
            NAAC A+ Accredited
          </motion.span>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="block"
            >
              S-VYASA Global City Campus
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-block border-2 border-primary/80 rounded-lg px-6 py-4 mb-6"
          >
            <p className="text-lg font-semibold text-secondary">ADMISSIONS OPEN</p>
            <p className="text-3xl md:text-4xl font-bold text-primary">2026 – 27</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-secondary/80 max-w-md"
          >
            Swami Vivekananda Yoga Anusandhana Samsthana - Deemed to be University
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
