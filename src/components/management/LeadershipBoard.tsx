import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Award } from "lucide-react";

// Leadership data
const leaders = [
  {
    name: "Dr. H.R. Nagendra",
    designation: "Chancellor",
    isChancellor: true,
    gradient: "from-gold via-primary to-gold",
    shortBio: "Padmashri Dr. H.R. Nagendra, Chancellor of S-VYASA, is a visionary leader who founded the university.",
    fullBio: "With a background from NASA and IISc Bangalore, he pioneered the scientific study of yoga. He has published 30+ research papers in engineering, 135+ papers on yoga, authored 28 books, and guided 32 PhD students. Dr. Nagendra serves as Chairman of the IDY Experts Committee and multiple government advisory bodies.",
    achievements: [
      "Padmashri Award recipient",
      "Former NASA scientist",
      "30+ engineering research papers",
      "135+ yoga research papers",
      "28 books authored",
      "32 PhD students guided",
    ],
  },
  {
    name: "Dr. B.R. Ramakrishna",
    designation: "Pro Chancellor",
    gradient: "from-navy via-teal to-navy",
    shortBio: "Dr. B R Ramakrishna serves as Pro Chancellor, providing strategic academic guidance and governance oversight to the university.",
    fullBio: "Under his leadership, S-VYASA has strengthened its position as a premier institution bridging ancient wisdom with modern education.",
    slideFrom: "left",
  },
  {
    name: "Dr. N.K. Manjunath",
    designation: "Vice Chancellor",
    gradient: "from-teal via-gold to-teal",
    shortBio: "Dr. N K Manjunath, the current Vice Chancellor, leads S-VYASA's academic and research initiatives.",
    fullBio: "Under his stewardship, the university has achieved NAAC A+ accreditation and a 4-star KSURF rating, strengthening its position as India's premier yoga university.",
    slideFrom: "bottom",
  },
  {
    name: "Prof. Sony Kumari",
    designation: "Registrar",
    gradient: "from-primary via-saffron-light to-primary",
    shortBio: "Prof. Sony Kumari serves as Registrar, overseeing the university's administrative operations.",
    fullBio: "She manages academic compliance and institutional coordination across both campuses, ensuring smooth functioning of all university processes.",
    slideFrom: "right",
  },
];

// Animated border ring for portraits
const AnimatedRing = ({ gradient, size, isChancellor }: { gradient: string; size: string; isChancellor?: boolean }) => (
  <motion.div
    className={`absolute inset-0 rounded-full ${size}`}
    style={{
      background: `conic-gradient(${gradient.split(" ").map(g => g.startsWith("from-") || g.startsWith("via-") || g.startsWith("to-") ? `hsl(var(--${g.replace(/^(from-|via-|to-)/, "")}))` : g).join(", ")})`,
      padding: isChancellor ? "4px" : "3px",
    }}
    animate={{ rotate: 360 }}
    transition={{ duration: isChancellor ? 6 : 8, repeat: Infinity, ease: "linear" }}
  >
    <div className="w-full h-full rounded-full bg-card" />
  </motion.div>
);

// Leader Card Component
const LeaderCard = ({
  leader,
  index,
}: {
  leader: (typeof leaders)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const getSlideAnimation = () => {
    if (leader.isChancellor) return { opacity: 0, scale: 0.85, y: 30 };
    switch (leader.slideFrom) {
      case "left": return { opacity: 0, x: -100 };
      case "right": return { opacity: 0, x: 100 };
      case "bottom": return { opacity: 0, y: 100 };
      default: return { opacity: 0, scale: 0.85 };
    }
  };

  const getDelay = () => {
    if (leader.isChancellor) return 0;
    return 0.3 + index * 0.15;
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${leader.isChancellor ? "col-span-full flex justify-center mb-12" : ""}`}
      initial={getSlideAnimation()}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: getDelay(),
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <motion.div
        className={`relative bg-card rounded-2xl overflow-hidden shadow-soft transition-all duration-500 group
          ${leader.isChancellor 
            ? "p-8 max-w-lg border-2 border-gold/20" 
            : "p-6 border border-border"
          }`}
        whileHover={{
          y: -10,
          boxShadow: leader.isChancellor 
            ? "0 25px 60px -15px hsla(42, 65%, 55%, 0.35)"
            : "0 20px 50px -15px hsla(25, 84%, 50%, 0.25)",
        }}
      >
        {/* Chancellor golden aura */}
        {leader.isChancellor && (
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle at center, hsla(42, 65%, 55%, 0.15), transparent 70%)",
            }}
          />
        )}

        {/* Portrait container */}
        <div className={`relative mx-auto mb-6 ${leader.isChancellor ? "w-48 h-48" : "w-36 h-36"}`}>
          <AnimatedRing 
            gradient={leader.gradient} 
            size={leader.isChancellor ? "w-48 h-48" : "w-36 h-36"} 
            isChancellor={leader.isChancellor}
          />

          {/* Photo placeholder with clip-path reveal */}
          <motion.div
            className="absolute inset-1 rounded-full overflow-hidden bg-muted flex items-center justify-center"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={isInView ? { clipPath: "circle(50% at 50% 50%)" } : {}}
            transition={{ duration: 0.8, delay: getDelay() + 0.3 }}
          >
            <motion.div 
              className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className={`font-heading text-primary/40 ${leader.isChancellor ? "text-5xl" : "text-4xl"}`}>
                {leader.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </motion.div>
          </motion.div>

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow: leader.isChancellor
                ? "0 0 50px hsla(42, 65%, 55%, 0.6)"
                : "0 0 30px hsla(25, 84%, 50%, 0.4)",
            }}
          />
        </div>

        {/* Lotus SVG for Chancellor */}
        {leader.isChancellor && (
          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <Award className="w-8 h-8 text-gold" />
          </motion.div>
        )}

        {/* Name and designation */}
        <div className="text-center">
          <motion.h3
            className={`font-heading font-bold mb-1 
              ${leader.isChancellor ? "text-2xl" : "text-xl"} text-foreground`}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: getDelay() + 0.5 }}
          >
            {leader.name}
          </motion.h3>
          
          <motion.p
            className={`text-sm uppercase tracking-widest mb-4 
              ${leader.isChancellor ? "text-gold shimmer" : "text-muted-foreground"}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: getDelay() + 0.6 }}
          >
            {leader.designation}
          </motion.p>

          {/* Bio section */}
          <motion.p
            className="text-sm text-muted-foreground leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: getDelay() + 0.7 }}
          >
            {leader.shortBio}
          </motion.p>

          {/* Expandable content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {leader.fullBio}
                </p>
                
                {leader.achievements && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="text-xs uppercase tracking-wider text-gold mb-3">Key Achievements</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {leader.achievements.map((achievement, i) => (
                        <motion.li
                          key={achievement}
                          className="text-xs text-muted-foreground flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Read More button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 mx-auto text-sm text-primary hover:text-primary/80 transition-colors group/btn"
            whileHover={{ scale: 1.02 }}
          >
            <span>{isExpanded ? "Show Less" : "Read More"}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Section heading with word animation
const SectionHeading = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = "Beacons of Wisdom".split(" ");

  return (
    <div ref={ref} className="text-center mb-16 relative">
      {/* Decorative mandala behind heading */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
      >
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full fill-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(12)].map((_, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="60"
              rx="15"
              ry="40"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="20" />
        </motion.svg>
      </motion.div>

      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 relative z-10">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {/* Subheading with animated underline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="relative inline-block"
      >
        <span className="text-lg md:text-xl text-muted-foreground tracking-wider uppercase">
          S-VYASA Management Board
        </span>
        <motion.div
          className="absolute -bottom-2 left-1/2 h-0.5 bg-gold"
          initial={{ width: 0, x: "-50%" }}
          animate={isInView ? { width: "100%", x: "-50%" } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
      </motion.div>
    </div>
  );
};

const LeadershipBoard = () => {
  return (
    <section className="relative py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading />

        {/* Leadership grid - diamond formation */}
        <div className="max-w-5xl mx-auto">
          {/* Chancellor at top */}
          <LeaderCard leader={leaders[0]} index={0} />

          {/* Other leaders in a row */}
          <div className="grid md:grid-cols-3 gap-6">
            {leaders.slice(1).map((leader, index) => (
              <LeaderCard key={leader.name} leader={leader} index={index + 1} />
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default LeadershipBoard;
