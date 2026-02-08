import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Building, Flower2, Globe } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Programs",
    subtitle: "Industry partnerships ensuring top placements and internships",
  },
  {
    icon: Building,
    title: "Campus",
    subtitle: "100 acres of serene, eco-friendly campus environment",
  },
  {
    icon: Flower2,
    title: "Holistic Education",
    subtitle: "Blending ancient wisdom with modern scientific approach",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    subtitle: "International collaborations and exchange programs",
  },
];

// Animated SVG icon wrapper
const AnimatedIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <motion.div
    className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
    whileHover={{ scale: 1.1, rotate: 5 }}
  >
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
    </motion.div>
  </motion.div>
);

const PKHighlights = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background with parallax image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1920&q=80"
          alt="Campus background"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-cream/95" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Key Highlights
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            style={{ originX: 0.5 }}
          />
          <motion.p
            className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Fostering intellectual growth for leaders of tomorrow.
          </motion.p>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              {/* Animated top border on hover */}
              <motion.div
                className="absolute top-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />

              <AnimatedIcon Icon={highlight.icon} />

              <h3 className="text-xl font-semibold text-secondary mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {highlight.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          className="text-center text-muted-foreground max-w-3xl mx-auto text-lg"
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

export default PKHighlights;
