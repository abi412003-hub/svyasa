import { motion } from "framer-motion";
import { MapPin, Trees, Building2, FlaskConical, Stethoscope, MonitorSmartphone, BrainCircuit, TrainFront } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const campuses = [
  {
    name: "Prashanti Kutiram Campus",
    address: "Vivekananda Road, Kalluballu Post, Jigani, Anekal, Bengaluru – 560105",
    focus: "Yoga, Naturopathy, Healthcare, Research",
    color: "bg-primary",
    link: "/prashanthi-campus",
    features: [
      { icon: Trees, label: "100-acre serene residential campus" },
      { icon: Stethoscope, label: "Arogyadhama holistic hospital" },
      { icon: FlaskConical, label: "Anvesana Research Labs" },
    ],
  },
  {
    name: "S-VYASA Global City Campus",
    subtitle: "School of Advanced Studies",
    address: "Sattva Global City, Mysore Road, Rajarajeshwari Nagar, Bengaluru – 560059",
    focus: "Technology, Management, Allied Sciences, Psychology",
    color: "bg-gold",
    link: "/global-city-campus",
    features: [
      { icon: Building2, label: "Located in IT tech park" },
      { icon: TrainFront, label: "Near metro station" },
      { icon: MonitorSmartphone, label: "Cutting-edge labs & modern spaces" },
    ],
  },
];

const UniversityCampuses = () => (
  <section className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Our Presence</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          Campuses
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {campuses.map((campus, i) => (
          <motion.div
            key={campus.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-large transition-shadow duration-300"
          >
            <div className={`${campus.color} h-2`} />
            <div className="p-7">
              <h3 className="font-heading text-xl font-bold text-foreground mb-1">{campus.name}</h3>
              {campus.subtitle && (
                <p className="text-gold text-xs font-medium uppercase tracking-wider mb-3">{campus.subtitle}</p>
              )}

              <div className="flex items-start gap-2 mb-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-gold" />
                <span>{campus.address}</span>
              </div>

              <p className="text-sm text-foreground font-medium mb-4">
                Focus: <span className="text-muted-foreground font-normal">{campus.focus}</span>
              </p>

              <div className="space-y-2 mb-6">
                {campus.features.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <f.icon className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>

              <Link to={campus.link}>
                <Button variant="outline" size="sm" className="rounded-full">
                  Explore Campus →
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UniversityCampuses;
