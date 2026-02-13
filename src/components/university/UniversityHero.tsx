import { motion } from "framer-motion";

const UniversityHero = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-secondary">
    {/* Animated mandala background */}
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
      {[...Array(3)].map((_, ring) => (
        <motion.div
          key={ring}
          className="absolute border border-gold/30 rounded-full"
          style={{ width: 300 + ring * 200, height: 300 + ring * 200 }}
          animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 40 + ring * 10, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>

    <div className="container mx-auto px-4 relative z-10 text-center py-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gold text-sm uppercase tracking-[0.3em] mb-4 font-medium"
      >
        Swami Vivekananda Yoga Anusandhana Samsthana
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight"
      >
        S-VYASA Deemed to be
        <br />
        <span className="text-gold">University</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto"
      >
        India's First Full-Fledged Higher Education Yoga Institution
      </motion.p>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="w-24 h-0.5 bg-gold mx-auto mt-8"
      />
    </div>
  </section>
);

export default UniversityHero;
