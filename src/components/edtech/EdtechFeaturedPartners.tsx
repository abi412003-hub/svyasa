import { motion } from "framer-motion";

const partners = [
  {
    abbr: "NS",
    color: "#FF6B35",
    name: "Newton School",
    outcome: "Structured tech programs with live project mentorship and guaranteed placement support for BCA & MCA students.",
    metric: "1,200+ Learners",
    metricSub: "Placed through program",
    tag: "Placement Partner",
  },
  {
    abbr: "IP",
    color: "#2563EB",
    name: "Intellipaat",
    outcome: "Certified learning pathways in Data Science, Cloud & AI integrated as elective modules across postgraduate programs.",
    metric: "30+ Certifications",
    metricSub: "Offered jointly",
    tag: "Curriculum Partner",
  },
  {
    abbr: "FS",
    color: "#7C3AED",
    name: "Futurense",
    outcome: "Tech-enabled career acceleration program connecting students with 500+ hiring companies in the startup ecosystem.",
    metric: "500+ Hirers",
    metricSub: "In partner network",
    tag: "Career Partner",
  },
  {
    abbr: "HCL",
    color: "#E31837",
    name: "HCL Tech",
    outcome: "Industry immersion workshops, coding bootcamps, and priority internship slots for final-year engineering students.",
    metric: "800+ Interns",
    metricSub: "Placed annually",
    tag: "Industry Partner",
  },
  {
    abbr: "CAM",
    color: "#003366",
    name: "University of Cambridge",
    outcome: "Joint research initiatives and access to Cambridge's global academic resources for faculty and doctoral scholars.",
    metric: "15+ Publications",
    metricSub: "Co-authored",
    tag: "Academic Partner",
  },
  {
    abbr: "PL",
    color: "#059669",
    name: "Proximal Learning",
    outcome: "Adaptive e-learning platform delivering personalised skill modules supplementing classroom instruction.",
    metric: "10,000+ Hours",
    metricSub: "Learning delivered",
    tag: "EdTech Partner",
  },
  {
    abbr: "INT",
    color: "#0071C5",
    name: "Intel",
    outcome: "Certified learning pathways in AI & Edge Computing, including lab equipment grants and faculty training workshops.",
    metric: "20+ Certified Programs",
    metricSub: "Delivered on campus",
    tag: "Technology Partner",
  },
  {
    abbr: "IBM",
    color: "#1F70C1",
    name: "IBM",
    outcome: "Workshops, industry mentorship programmes, and IBM SkillsBuild integration for digital literacy at scale.",
    metric: "1,500+ Learners",
    metricSub: "Engaged via IBM SkillsBuild",
    tag: "Skills Partner",
  },
  {
    abbr: "L&T",
    color: "#D4A017",
    name: "Larsen & Toubro",
    outcome: "Infrastructure & Engineering electives, site visits, and graduate recruitment pipeline for B.Tech students.",
    metric: "200+ Graduates",
    metricSub: "Hired annually",
    tag: "Recruitment Partner",
  },
];

const EdtechFeaturedPartners = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Featured Partners
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 leading-tight">
            Partners &amp; <span className="text-primary">Outcomes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each partnership is purpose-built to deliver measurable impact for students, faculty, and the broader academic community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <motion.article
              key={p.name}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              {/* Header bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: p.color }} />

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  {/* Logo placeholder */}
                  <div
                    className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-xs shadow-md"
                    style={{ background: `${p.color}15`, border: `2px solid ${p.color}30`, color: p.color }}
                    aria-label={`${p.name} logo`}
                  >
                    {p.abbr}
                  </div>
                  <div>
                    <span
                      className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-1"
                      style={{ background: `${p.color}15`, color: p.color }}
                    >
                      {p.tag}
                    </span>
                    <h3 className="text-base font-bold text-foreground">{p.name}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.outcome}</p>

                {/* Metric callout */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div>
                    <p className="text-xl font-black" style={{ color: p.color }}>{p.metric}</p>
                    <p className="text-xs text-muted-foreground">{p.metricSub}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdtechFeaturedPartners;
