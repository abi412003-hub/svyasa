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


      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Particle key={i} delay={i * 0.7} />
        ))}
      </div>

    </section>
  );
};

export default AboutHero;
