import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, BookOpen, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// SVG line-draw animated icon wrapper
const AnimatedIcon = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.3, delay: delay + 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const publications = [
  {
    icon: FileText,
    title: "Research Publications",
    description:
      "Explore 284+ peer-reviewed research papers published by S-VYASA faculty and scholars in international journals across yoga therapy, neuroscience, psychology, and integrative medicine.",
    cta: "View Research Papers",
    link: "/research-publications",
    external: false,
    delay: 0,
    slideFrom: "left",
  },
  {
    icon: BookOpen,
    title: "Books & Authored Works",
    description:
      "Our Chancellor and faculty have authored 28+ books on yoga science, Vedic philosophy, pranayama techniques, and the integration of ancient wisdom with modern medicine.",
    cta: "Explore Library",
    link: "/library",
    external: false,
    delay: 0.15,
    slideFrom: "bottom",
  },
  {
    icon: Globe,
    title: "International Journal of Yoga",
    description:
      "S-VYASA contributes extensively to IJOY, a leading peer-reviewed journal indexed in PubMed, dedicated to publishing high-quality research on yoga and allied sciences.",
    cta: "Visit IJOY",
    link: "https://www.ijoy.org.in/",
    external: true,
    delay: 0.3,
    slideFrom: "right",
  },
];

const PublicationCard = ({ pub, index }: { pub: typeof publications[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getInitialX = () => {
    if (pub.slideFrom === "left") return -50;
    if (pub.slideFrom === "right") return 50;
    return 0;
  };

  const getInitialScale = () => (pub.slideFrom === "bottom" ? 0.9 : 1);

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, x: getInitialX(), scale: getInitialScale() }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: pub.delay }}
    >
      <div className="h-full bg-card rounded-2xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-large border border-transparent hover:border-primary/20 relative overflow-hidden">
        {/* Left border accent on hover */}
        <motion.div
          className="absolute left-0 top-0 w-1 bg-primary"
          initial={{ height: 0 }}
          whileHover={{ height: "100%" }}
          transition={{ duration: 0.3 }}
        />

        <AnimatedIcon delay={pub.delay}>
          <pub.icon className="w-8 h-8 text-primary" />
        </AnimatedIcon>

        <h3 className="font-heading text-xl text-foreground mb-4">{pub.title}</h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6">{pub.description}</p>

        {pub.external ? (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium group/link"
          >
            <span className="relative">
              {pub.cta}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        ) : (
          <Link
            to={pub.link}
            className="inline-flex items-center gap-2 text-primary font-medium group/link"
          >
            <span className="relative">
              {pub.cta}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

const OtherPublications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Decorative background pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8751A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="font-heading text-3xl md:text-4xl text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            More from S-VYASA
          </motion.h2>
          <motion.div
            className="h-1 bg-gold mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <PublicationCard key={pub.title} pub={pub} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherPublications;
