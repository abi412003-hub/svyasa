import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UniversityCTA = () => (
  <section className="py-20 bg-secondary relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-gold/20 rounded-full"
          style={{
            width: 200 + i * 150,
            height: 200 + i * 150,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 50 + i * 10, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>

    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-white mb-4"
      >
        Begin Your Journey at <span className="text-gold">S-VYASA</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/70 max-w-xl mx-auto mb-8"
      >
        Where ancient wisdom meets modern education. Explore our programs and become part of a transformative legacy.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a href="https://applynow.svyasa.edu.in/" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-gold text-secondary-foreground rounded-full px-8 hover:bg-gold/90">
            Apply Now
          </Button>
        </a>
        <Link to="/admissions">
          <Button size="lg" variant="outline" className="border-white text-white rounded-full px-8 hover:bg-white/10">
            Explore Programs
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default UniversityCTA;
