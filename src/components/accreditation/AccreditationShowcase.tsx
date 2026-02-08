import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Star, Shield, BadgeCheck } from "lucide-react";

// Accreditation data
const accreditations = [
  {
    id: "naac",
    title: "NAAC A+ GRADE",
    subtitle: "National Assessment and Accreditation Council",
    description: "S-VYASA has been accredited with the prestigious A+ Grade by NAAC, recognizing the university's commitment to excellence in teaching, research, infrastructure, learning resources, and governance. This places S-VYASA among India's top-tier educational institutions.",
    icon: Award,
    colorScheme: "gold",
    slideFrom: "left",
    badge: "A+",
  },
  {
    id: "ugc",
    title: "UGC RECOGNISED",
    subtitle: "University Grants Commission",
    description: "S-VYASA is recognized as a Deemed-to-be University by the University Grants Commission (UGC) of India since 2002, and holds UGC Category 1 status — the highest institutional quality category. This recognition validates S-VYASA's academic standards, research output, and governance framework at the national level.",
    icon: Shield,
    colorScheme: "navy",
    slideFrom: "bottom",
    badge: "Cat 1",
  },
  {
    id: "ksurf",
    title: "4 STAR RATING",
    subtitle: "Karnataka State Universities Rating Framework",
    description: "S-VYASA has been rated as a 4-Star Specialist University by the Karnataka State Universities Rating Framework (KSURF), recognizing its specialized excellence in yoga education, research output, and holistic academic framework within the state of Karnataka.",
    icon: Star,
    colorScheme: "teal",
    slideFrom: "right",
    stars: 4,
  },
];

// Laurel wreath SVG component
const LaurelWreath = ({ isInView, colorClass }: { isInView: boolean; colorClass: string }) => (
  <motion.svg
    viewBox="0 0 120 120"
    className={`absolute inset-0 w-full h-full ${colorClass}`}
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    transition={{ delay: 0.5, duration: 0.5 }}
  >
    {/* Left wreath */}
    <motion.path
      d="M25 60 Q20 40 30 25 Q25 45 35 55 Q25 50 25 60"
      fill="currentColor"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
      transition={{ delay: 0.6, duration: 0.8 }}
    />
    <motion.path
      d="M20 70 Q15 50 25 35 Q20 55 30 65 Q20 60 20 70"
      fill="currentColor"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 0.25 } : {}}
      transition={{ delay: 0.7, duration: 0.8 }}
    />
    {/* Right wreath */}
    <motion.path
      d="M95 60 Q100 40 90 25 Q95 45 85 55 Q95 50 95 60"
      fill="currentColor"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
      transition={{ delay: 0.6, duration: 0.8 }}
    />
    <motion.path
      d="M100 70 Q105 50 95 35 Q100 55 90 65 Q100 60 100 70"
      fill="currentColor"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 0.25 } : {}}
      transition={{ delay: 0.7, duration: 0.8 }}
    />
  </motion.svg>
);

// Animated star rating
const StarRating = ({ count, isInView }: { count: number; isInView: boolean }) => (
  <div className="flex gap-1 justify-center mt-2">
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.8 + i * 0.2, type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={isInView ? { 
            boxShadow: ["0 0 0px hsla(42, 65%, 55%, 0)", "0 0 20px hsla(42, 65%, 55%, 0.8)", "0 0 0px hsla(42, 65%, 55%, 0)"]
          } : {}}
          transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
        >
          <Star className="w-6 h-6 fill-gold text-gold" />
        </motion.div>
      </motion.div>
    ))}
  </div>
);

// Accreditation Card Component
const AccreditationCard = ({
  accreditation,
  index,
}: {
  accreditation: (typeof accreditations)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getSlideAnimation = () => {
    switch (accreditation.slideFrom) {
      case "left": return { opacity: 0, x: -100 };
      case "right": return { opacity: 0, x: 100 };
      case "bottom": return { opacity: 0, y: 100, scale: 0.9 };
      default: return { opacity: 0, scale: 0.85 };
    }
  };

  const getColorClasses = () => {
    switch (accreditation.colorScheme) {
      case "gold": return { 
        border: "border-gold/30 hover:border-gold/60", 
        text: "text-gold",
        bg: "bg-gold/5",
        icon: "text-gold",
        glow: "shadow-glow-gold"
      };
      case "navy": return { 
        border: "border-secondary/30 hover:border-secondary/60", 
        text: "text-secondary",
        bg: "bg-secondary/5",
        icon: "text-secondary",
        glow: "shadow-[0_0_30px_hsla(210,52%,23%,0.3)]"
      };
      case "teal": return { 
        border: "border-teal/30 hover:border-teal/60", 
        text: "text-teal",
        bg: "bg-teal/5",
        icon: "text-teal",
        glow: "shadow-[0_0_30px_hsla(180,45%,35%,0.3)]"
      };
      default: return { border: "", text: "", bg: "", icon: "", glow: "" };
    }
  };

  const colors = getColorClasses();
  const Icon = accreditation.icon;

  return (
    <motion.div
      ref={ref}
      initial={getSlideAnimation()}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <motion.div
        className={`relative bg-card rounded-2xl p-8 border-2 ${colors.border} overflow-hidden transition-all duration-500 group h-full`}
        whileHover={{
          y: -12,
          boxShadow: "0 25px 60px -15px hsla(42, 65%, 55%, 0.25)",
        }}
      >
        {/* Animated gradient border overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: "conic-gradient(from 0deg, transparent, hsla(42, 65%, 55%, 0.3), transparent, hsla(42, 65%, 55%, 0.3), transparent)",
            padding: "2px",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Badge/Icon container with seal animation */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <LaurelWreath isInView={isInView} colorClass={colors.icon} />
          
          {/* Seal circle expanding from center */}
          <motion.div
            className={`absolute inset-4 rounded-full ${colors.bg} flex items-center justify-center`}
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={isInView ? { clipPath: "circle(50% at 50% 50%)" } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
            >
              <Icon className={`w-12 h-12 ${colors.icon}`} strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {/* Shimmer overlay */}
          <motion.div
            className="absolute inset-4 rounded-full overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, transparent, hsla(42, 65%, 55%, 0.3), transparent)",
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.div>
        </div>

        {/* Category badge for UGC */}
        {accreditation.badge && (
          <motion.div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text} border ${colors.border}`}
            initial={{ scale: 0, rotate: 20 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.8, type: "spring" }}
          >
            {accreditation.badge}
          </motion.div>
        )}

        {/* Star rating for KSURF */}
        {accreditation.stars && (
          <StarRating count={accreditation.stars} isInView={isInView} />
        )}

        {/* Title */}
        <motion.h3
          className={`font-heading text-2xl font-bold text-center mb-2 tracking-wider ${colors.text}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.6 }}
        >
          {accreditation.title}
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          className="text-sm text-muted-foreground text-center mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.2 + 0.7 }}
        >
          {accreditation.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-sm text-muted-foreground leading-relaxed text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.8 }}
        >
          {accreditation.description}
        </motion.p>

        {/* Hover glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${colors.glow}`}
        />
      </motion.div>
    </motion.div>
  );
};

// Section heading
const SectionHeading = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = "A Mark of Excellence".split(" ");

  return (
    <div ref={ref} className="text-center mb-16">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
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

      <motion.p
        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
      >
        Endorsed by leading organizations, ensuring quality education and global recognition.
      </motion.p>

      {/* Animated underline */}
      <motion.div
        className="h-0.5 bg-gold mx-auto"
        initial={{ width: 0 }}
        animate={isInView ? { width: 120 } : {}}
        transition={{ delay: 0.7, duration: 0.6 }}
      />
    </div>
  );
};

const AccreditationShowcase = () => {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative certificate corner patterns */}
      <div className="absolute top-8 left-8 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-gold fill-none" strokeWidth="2">
          <path d="M0 0 L40 0 M0 0 L0 40" />
        </svg>
      </div>
      <div className="absolute top-8 right-8 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-gold fill-none" strokeWidth="2">
          <path d="M100 0 L60 0 M100 0 L100 40" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <SectionHeading />

        {/* Accreditation cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {accreditations.map((accreditation, index) => (
            <AccreditationCard key={accreditation.id} accreditation={accreditation} index={index} />
          ))}
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

export default AccreditationShowcase;
