import { motion } from "framer-motion";
import { Shield, Award, Star, CheckCircle2, Globe, BookOpen, FlaskConical, HeartPulse } from "lucide-react";

const accreditations = [
  { icon: Shield, label: "UGC", detail: "Deemed to be University (since 2002)", color: "text-primary" },
  { icon: Award, label: "NAAC", detail: "Accredited A+ Grade", color: "text-gold" },
  { icon: Star, label: "KSURF", detail: "4-Star Rating", color: "text-gold" },
  { icon: CheckCircle2, label: "AICTE", detail: "Approved", color: "text-primary" },
  { icon: HeartPulse, label: "AYUSH", detail: "Recognized", color: "text-gold" },
  { icon: Globe, label: "AIU", detail: "Member, Association of Indian Universities", color: "text-primary" },
  { icon: FlaskConical, label: "ICMR", detail: "Research collaborations", color: "text-gold" },
  { icon: BookOpen, label: "WHO", detail: "Recognized collaborations", color: "text-primary" },
];

const mous = [
  "MIT (USA)",
  "St. Petersburg Federal Research Institute (Russia)",
  "Hangzhou Yinhu Technology (China)",
  "and more international institutions",
];

const UniversityAccreditations = () => (
  <section className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Trust & Excellence</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          Recognitions & Accreditations
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
        {accreditations.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card rounded-xl p-5 text-center border border-border/50 hover:border-gold/30 hover:shadow-medium transition-all duration-300"
          >
            <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
            <h4 className="font-heading font-bold text-foreground text-lg">{item.label}</h4>
            <p className="text-muted-foreground text-xs mt-1 leading-snug">{item.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* MoUs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center bg-card rounded-xl p-6 border border-border/50"
      >
        <h3 className="font-heading font-semibold text-foreground mb-3">International MoUs</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {mous.map((mou) => (
            <span key={mou} className="bg-gold/10 text-gold text-xs px-3 py-1.5 rounded-full font-medium">
              {mou}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default UniversityAccreditations;
