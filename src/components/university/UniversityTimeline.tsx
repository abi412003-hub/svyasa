import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "1986",
    title: "Foundation",
    description:
      "VYASA (Vivekananda Yoga Anusandhana Samsthana) registered as a Charitable Society in Nagarcoil, Tamil Nadu. From 1986–2000 known as Vivekananda Kendra Yoga Anusandhana Samsthana (VK YOGAS).",
  },
  {
    year: "2000",
    title: "Rebranding",
    description:
      "Renamed to Swami Vivekananda Yoga Anusandhana Samsthana (S-VYASA). VYASA Society remains the parent body.",
  },
  {
    year: "2002",
    title: "University Status",
    description:
      "UGC approved S-VYASA as a Deemed to be University. Founded by ex-NASA scientist Padmashri Dr. H.R. Nagendra.",
  },
  {
    year: "2013",
    title: "Leadership Transition",
    description:
      "Dr. H.R. Nagendra transitions from Vice Chancellor to Chancellor.",
  },
  {
    year: "Present",
    title: "Two-Campus Model",
    description:
      "Two campuses operational: Prashanti Kutiram (100 acres, Jigani) and Global City Campus (Sattva Global City IT Park, Mysore Road).",
  },
];

const TimelineItem = ({ item, index }: { item: typeof milestones[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex items-start gap-6 md:gap-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
    >
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className={`bg-card rounded-xl p-6 shadow-medium border border-border/50 hover:shadow-large transition-shadow duration-300 ${isLeft ? "md:ml-auto" : ""}`}>
          <span className="text-gold font-heading text-2xl font-bold">{item.year}</span>
          <h3 className="font-heading text-lg font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>

      {/* Center dot */}
      <div className="flex-shrink-0 relative hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, type: "spring" }}
          className="w-4 h-4 rounded-full bg-gold border-4 border-card shadow-lg z-10"
        />
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

const UniversityTimeline = () => (
  <section className="py-20 bg-background relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Our Journey</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          History & Timeline
        </h2>
      </motion.div>

      {/* Timeline line */}
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
        <div className="space-y-12">
          {milestones.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default UniversityTimeline;
