import { motion } from "framer-motion";
import { BookOpen, MapPin, FlaskConical, Globe, HeartPulse, Microscope, Briefcase } from "lucide-react";

const facts = [
  { icon: BookOpen, value: "66+", label: "Distinct Programs", sub: "Yoga, Healthcare, IT, Management, Allied Sciences" },
  { icon: MapPin, value: "2", label: "Campuses", sub: "Prashanti Kutiram + Global City Campus" },
  { icon: FlaskConical, value: "30+", label: "Years of Yoga Research", sub: "Through Anvesana Research Labs" },
  { icon: Globe, value: "30+", label: "Countries", sub: "International student community" },
  { icon: HeartPulse, value: "Arogyadhama", label: "Therapy Hospital", sub: "Holistic healing on campus" },
  { icon: Microscope, value: "6+", label: "Research Labs", sub: "Molecular Bioscience, Psychophysiology, Cognitive Neuroscience & more" },
];

const partners = ["Amazon", "Accenture", "Flipkart", "JSW", "Microsoft", "Cognizant", "SAS"];

const UniversityKeyFacts = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">At a Glance</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          Key Facts
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border/50 hover:shadow-medium transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <fact.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-heading text-2xl font-bold text-gold">{fact.value}</span>
              <h4 className="font-semibold text-foreground text-sm">{fact.label}</h4>
              <p className="text-muted-foreground text-xs mt-0.5">{fact.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Industry partners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
          <Briefcase className="w-5 h-5 text-gold" />
          Industry Tie-ups
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {partners.map((p) => (
            <span key={p} className="bg-secondary text-secondary-foreground text-sm px-4 py-2 rounded-full font-medium">
              {p}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default UniversityKeyFacts;
