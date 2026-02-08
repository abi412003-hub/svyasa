import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Board member data
const boardMembers = [
  {
    name: "Dr. H.R. Nagendra",
    designation: "President",
    isPresident: true,
  },
  {
    name: "Prof. K Subrahmanyam",
    designation: "Vice President",
  },
  {
    name: "Dr. R Nagarathna",
    designation: "Vice President",
  },
  {
    name: "Dr. Prahlada Ramarao",
    designation: "Vice President",
  },
  {
    name: "Smt. Subhadra Devi",
    designation: "Vice President",
  },
  {
    name: "Dr. H R Dayananda Swamy",
    designation: "Secretary",
  },
  {
    name: "Sri. B Mahadevappa",
    designation: "Treasurer",
  },
];

// Animated border ring
const AnimatedRing = ({ isPresident }: { isPresident?: boolean }) => (
  <motion.div
    className="absolute inset-0 rounded-full"
    style={{
      background: isPresident
        ? "conic-gradient(from 0deg, hsl(var(--gold)), hsl(var(--primary)), hsl(var(--gold)), hsl(var(--primary)), hsl(var(--gold)))"
        : "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--gold)), hsl(var(--primary)))",
      padding: "3px",
    }}
    animate={{ rotate: 360 }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
  >
    <div className="w-full h-full rounded-full bg-card" />
  </motion.div>
);

// Board Member Card
const BoardMemberCard = ({
  member,
  index,
}: {
  member: (typeof boardMembers)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`relative group ${member.isPresident ? "md:col-span-3 lg:col-span-1" : ""}`}
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        className={`relative bg-card rounded-2xl p-6 shadow-soft transition-all duration-500 
          ${member.isPresident ? "border-2 border-gold/30" : "border border-border"}`}
        whileHover={{
          y: -10,
          boxShadow: "0 20px 50px -15px hsla(25, 84%, 50%, 0.25)",
        }}
      >
        {/* President badge */}
        {member.isPresident && (
          <motion.div
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-glow-gold"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            ★ President
          </motion.div>
        )}

        {/* Portrait container */}
        <div className="relative mx-auto mb-4 w-32 h-32 md:w-40 md:h-40">
          <AnimatedRing isPresident={member.isPresident} />

          {/* Photo placeholder with clip-path reveal */}
          <motion.div
            className="absolute inset-1 rounded-full overflow-hidden bg-muted flex items-center justify-center"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={isInView ? { clipPath: "circle(50% at 50% 50%)" } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-4xl font-heading text-primary/40">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
          </motion.div>

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow: member.isPresident
                ? "0 0 40px hsla(42, 65%, 55%, 0.5)"
                : "0 0 30px hsla(25, 84%, 50%, 0.4)",
            }}
          />
        </div>

        {/* Name and designation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.15 + 0.5 }}
        >
          <h3
            className={`font-heading font-semibold mb-1 
              ${member.isPresident ? "text-xl text-gold" : "text-lg text-foreground"}`}
          >
            {member.name}
          </h3>
          <p className="text-sm text-muted-foreground">{member.designation}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Section heading with word animation
const SectionHeading = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = "Meet the Minds Behind S-VYASA".split(" ");

  return (
    <div ref={ref} className="text-center mb-16">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {/* Subheading with animated underline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="relative inline-block"
      >
        <span className="text-lg md:text-xl text-muted-foreground tracking-wider uppercase">
          S-VYASA Society Board
        </span>
        <motion.div
          className="absolute -bottom-2 left-1/2 h-0.5 bg-gold"
          initial={{ width: 0, x: "-50%" }}
          animate={isInView ? { width: "100%", x: "-50%" } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
        />
      </motion.div>
    </div>
  );
};

// Lotus watermark background
const LotusWatermark = () => (
  <motion.div
    className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.03 }}
    transition={{ duration: 1 }}
  >
    <motion.svg
      viewBox="0 0 200 200"
      className="w-[600px] h-[600px] fill-primary"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {/* Lotus petals pattern */}
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={i}
          cx="100"
          cy="60"
          rx="20"
          ry="50"
          transform={`rotate(${i * 45} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="25" />
    </motion.svg>
  </motion.div>
);

const BoardMembers = () => {
  return (
    <section className="relative py-24 bg-cream overflow-hidden">
      <LotusWatermark />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading />

        {/* Board members grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* President card first, centered on larger screens */}
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center mb-8">
            <div className="w-full max-w-sm">
              <BoardMemberCard member={boardMembers[0]} index={0} />
            </div>
          </div>

          {/* Other board members */}
          {boardMembers.slice(1).map((member, index) => (
            <BoardMemberCard key={member.name} member={member} index={index + 1} />
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

export default BoardMembers;
