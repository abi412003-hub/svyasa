import { motion } from "framer-motion";
import { GraduationCap, BookOpen, HeartPulse, Sparkles, Leaf, Stethoscope } from "lucide-react";

const uniquePoints = [
  {
    icon: GraduationCap,
    title: "India's First Yoga University",
    description: "Full-fledged higher education Yoga institution — offering UG, PG, and Ph.D programs.",
  },
  {
    icon: BookOpen,
    title: "Gurukula-Style Education",
    description: "Blending ancient Gurukula traditions with modern scientific pedagogy.",
  },
  {
    icon: HeartPulse,
    title: "Life Training & Character Building",
    description: "Yoga as a way of life — fostering discipline, wellness, and personal growth.",
  },
  {
    icon: Sparkles,
    title: "Holistic Academic Excellence",
    description: "Integration of Yoga, wellness, and academic excellence for balanced learning.",
  },
  {
    icon: Leaf,
    title: "Four Streams of Yoga",
    description: "Jnana, Raja, Bhakti & Karma Yoga — as envisioned by Swami Vivekananda.",
  },
  {
    icon: Stethoscope,
    title: "Integrative Medicine",
    description: "Integration of Yoga with Naturopathy, Ayurveda, Allopathy and Homeopathy.",
  },
];

const UniversityUnique = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Why Choose Us</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          What Makes S-VYASA Unique
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {uniquePoints.map((point, i) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card rounded-xl p-6 border border-border/50 hover:border-gold/30 hover:shadow-large transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
              <point.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{point.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UniversityUnique;
