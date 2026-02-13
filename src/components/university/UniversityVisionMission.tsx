import { motion } from "framer-motion";
import { Eye, Target, Quote } from "lucide-react";

const UniversityVisionMission = () => (
  <section className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      {/* Motto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Quote className="w-8 h-8 text-gold mx-auto mb-4" />
        <p className="font-heading text-3xl md:text-4xl font-bold text-foreground italic">
          "Be and Make"
        </p>
        <p className="text-muted-foreground text-sm mt-2 uppercase tracking-widest">University Motto</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-medium border border-border/50 relative overflow-hidden group hover:shadow-large transition-shadow"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
          <Eye className="w-10 h-10 text-gold mb-4" />
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To bring the holistic vision of Yoga and its great legacies to the world to usher in holistic health for all mankind.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-medium border border-border/50 relative overflow-hidden group hover:shadow-large transition-shadow"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
          <Target className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To combine the best of the East (Yoga and spiritual lore) with the best of the West (modern scientific research), wherein science and spirituality work together.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default UniversityVisionMission;
