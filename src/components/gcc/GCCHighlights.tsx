import { motion } from "framer-motion";
import { Building2, Heart, Globe } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Campus Advantage",
    description:
      "Located in Sattva Global City IT Park for unparalleled industry exposure. Students learn surrounded by leading tech companies and startups, with metro connectivity and modern infrastructure.",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description:
      "Integration of yoga, wellness, and academic excellence for balanced learning. Daily yoga and meditation complement rigorous academics, building resilient, well-rounded professionals.",
    iconColor: "text-accent",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description:
      "Industry partnerships ensuring top placements and internships. Global certifications from HETIC Paris and ESG Paris, MNCs offering ₹10,000/month internships, and an average package of ₹4-6 LPA.",
    iconColor: "text-emerald-400",
  },
];

const GCCHighlights = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="/images/campus/campus_2.jpeg"
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/90" />
      </motion.div>

      {/* Subtle tech pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-primary text-sm font-semibold uppercase tracking-[3px] mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Key Highlights
          </motion.span>
          <motion.h2
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {"Fostering Intellectual Growth for Leaders of Tomorrow".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, borderColor: "rgba(212, 168, 67, 0.5)" }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />

              {/* Icon */}
              <motion.div
                className={`w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 ${highlight.iconColor}`}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <highlight.icon className="w-7 h-7" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          className="text-center text-white/80 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Discover the transformative power of education. Explore diverse programs, from undergraduate to Ph.D, that blend tradition with modern advancements at S-VYASA (Deemed To Be University).
        </motion.p>
      </div>
    </section>
  );
};

export default GCCHighlights;
