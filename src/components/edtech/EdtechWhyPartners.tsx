import { motion } from "framer-motion";
import { BookOpen, Globe, Wrench, Award, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Industry-Aligned Curriculum",
    desc: "Programs co-designed with leading companies to ensure graduates are job-ready from day one.",
  },
  {
    icon: Globe,
    title: "Access to Global Expertise",
    desc: "Tap into world-class knowledge from Cambridge, IBM, Intel and other global institutions.",
  },
  {
    icon: Wrench,
    title: "Hands-on Projects",
    desc: "Real-world capstone projects, internships, and live case studies embedded in every program.",
  },
  {
    icon: Award,
    title: "Recognised Certifications",
    desc: "Earn industry-recognised credentials that add immediate value to your professional profile.",
  },
  {
    icon: Users,
    title: "Mentorship & Networking",
    desc: "Direct access to industry mentors, guest lectures, and exclusive hiring events.",
  },
  {
    icon: TrendingUp,
    title: "Higher Employability",
    desc: "Partnership-driven placements boost employment outcomes by connecting students with top recruiters.",
  },
];

const EdtechWhyPartners = () => {
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
            Why It Matters
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            Why Our Partners <span className="text-primary">Matter</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Strategic EdTech partnerships transform how students learn — embedding real industry context, cutting-edge tools, and professional networks directly into their education. These alliances bridge the gap between campus and career, accelerating skills acquisition and opening doors to global opportunities that would otherwise take years to build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              className="group p-7 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdtechWhyPartners;
