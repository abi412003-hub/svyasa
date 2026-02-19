import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Mehta",
    program: "MCA – Data Science",
    year: "2024 Graduate",
    initials: "PM",
    color: "#7C3AED",
    quote:
      "The Intellipaat partnership gave me access to cloud certification modules that I wouldn't have been able to afford on my own. I landed a Data Engineer role at a Bangalore startup within two weeks of graduating — the skills I gained through the partnership were the deciding factor.",
    partner: "Intellipaat",
    outcome: "Data Engineer, Startup Bangalore",
  },
  {
    name: "Arjun Sharma",
    program: "B.Tech – Computer Science",
    year: "2023 Graduate",
    initials: "AS",
    color: "#0071C5",
    quote:
      "The Intel AI & Edge Computing lab sessions were genuinely transformative. We built real prototypes with actual Intel hardware — not just theory. That hands-on experience is what set my résumé apart during interviews at HCL and eventually got me a full-time offer.",
    partner: "Intel",
    outcome: "Software Engineer, HCL Technologies",
  },
  {
    name: "Sneha Reddy",
    program: "MBA – Digital Business Management",
    year: "2024 Graduate",
    initials: "SR",
    color: "#E31837",
    quote:
      "IBM SkillsBuild workshops opened my eyes to AI in business strategy. The mentors were actual IBM consultants — their insights were invaluable. I completed three certifications alongside my MBA and used them to pivot into a product management role right after college.",
    partner: "IBM",
    outcome: "Product Manager, FinTech Firm",
  },
];

const EdtechTestimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Student Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 leading-tight">
            Student Success{" "}
            <span className="text-primary">Powered by Partners</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from students whose careers were shaped by our industry collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="relative bg-card rounded-2xl border border-border p-8 flex flex-col hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4 flex-shrink-0" />
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic mb-6">
                "{t.quote}"
              </p>

              <div className="border-t border-border pt-5 flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                  aria-label={`${t.name} avatar`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.program} · {t.year}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: t.color }}>{t.outcome}</p>
                </div>
              </div>

              <div
                className="absolute top-6 right-6 text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: `${t.color}15`, color: t.color }}
              >
                via {t.partner}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdtechTestimonials;
