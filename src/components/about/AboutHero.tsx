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
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      {/* Background Image with Ken Burns */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 15, ease: "linear" }}
        className="absolute inset-0"
      >
        <img
          src={aboutHero}
          alt="S-VYASA University Campus"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Particle key={i} delay={i * 0.7} />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-end pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium rounded-full border border-primary/30 mb-4"
          >
            About Us
          </motion.span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-shadow-lg">
            {"S-VYASA University".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.03 }}
                className="inline-block"
                style={{ marginRight: char === " " ? "0.3em" : "0" }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-4 text-lg text-primary-foreground/80 max-w-2xl"
          >
            Swami Vivekananda Yoga Anusandhana Samsthana
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
