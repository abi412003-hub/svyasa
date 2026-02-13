import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Award, Stethoscope } from "lucide-react";

interface Leader {
  name: string;
  designation: string;
  qualifications?: string;
  isPrimary?: boolean;
  gradient: string;
  shortBio: string;
  fullBio?: string;
  achievements?: string[];
  careerTimeline?: string[];
  slideFrom?: string;
}

const leaders: Leader[] = [
  {
    name: "Dr. H.R. Nagendra",
    designation: "President, S-VYASA Society",
    qualifications: "ME, PhD (Mechanical Engineering) · Padma Shri Awardee",
    isPrimary: true,
    gradient: "from-gold via-primary to-gold",
    shortBio:
      "Widely recognized across the world as a Yoga Guru. Born January 1, 1943. Ex-NASA scientist who left a stellar career in the West to dedicate his life to Yoga research and education.",
    fullBio:
      "Education: B.E. Mechanical Engineering (Bangalore University), PhD from IISc Bangalore (1968). Career: Faculty at IISc → Post-Doctoral Research Fellow, University of British Columbia, Canada (1969) → NASA Marshall Space Flight Centre, USA (1970) → Consultant, Harvard University, USA (1972) → Visiting Staff, Imperial College London. Joined Vivekananda Kendra in 1975 as full-time worker. All India Secretary, Yoga Shiksha Vibhag, Vivekananda Kendra (1975–1993). President, VYASA, Bengaluru since 2000. Served as Vice Chancellor of S-VYASA (2002–2013), then Chancellor (2013 onwards).",
    achievements: [
      "Padma Shri Award recipient",
      "Chairman, IDY Experts Committee, AYUSH, Govt. of India",
      "Member, SAC of CCRYN",
      "Distinguished Alumni Award of IISc",
      "DSc (Honorary Causa) from KIIT, Bhubaneswar",
      "30 Research Papers in Engineering",
      "135+ papers on Yoga",
      "45+ books on Yoga authored/co-authored",
      "Guided 32 PhD students",
    ],
  },
  {
    name: "Dr. H.R. Dayananda Swamy",
    designation: "Chancellor, S-VYASA University",
    gradient: "from-secondary via-gold to-secondary",
    shortBio:
      "Chancellor of S-VYASA University, providing strategic vision and governance to the institution's academic and spiritual mission.",
    slideFrom: "left",
  },
  {
    name: "Dr. N.K. Manjunath Sharma",
    designation: "Vice Chancellor",
    qualifications: "DSc, BNYS, PhD",
    gradient: "from-primary via-gold to-primary",
    shortBio:
      "Has delivered lectures on evidence-based Yoga therapy at prestigious institutions worldwide including Harvard Medical School (USA), Monash University (Australia), Royal College of Medicine (London), Shanghai University of Sports (China), and Pharma University (Italy).",
    fullBio:
      "Editor, International Journal of Yoga (IJOY). Founding Director, Vivekananda Health Global (chain of Integrative Medicine clinics). Director, Boston Center of Excellence, Boston, USA. Founding Director, Vivekananda Yoga University, California, USA. Vice-President, Asian Yoga Therapy Association, Singapore.",
    achievements: [
      "Editor, International Journal of Yoga (IJOY)",
      "Member, Scientific Advisory Committee, DST (SATYAM program)",
      "Member, Research Committee, Integrative Medicine, NITI Aayog",
      "Member, Working Committee, Program Accreditation, NAAC",
      "Founding Director, Vivekananda Health Global",
      "Director, Boston Center of Excellence, USA",
      "Founding Director, Vivekananda Yoga University, California",
      "Vice-President, Asian Yoga Therapy Association, Singapore",
    ],
    slideFrom: "bottom",
  },
  {
    name: "Siva Sankara Sai",
    designation: "Pro Vice Chancellor",
    gradient: "from-gold via-primary to-gold",
    shortBio:
      "Pro Vice Chancellor of S-VYASA, supporting the Vice Chancellor in academic administration and strategic initiatives.",
    slideFrom: "right",
  },
  {
    name: "Ms. Sony Kumari",
    designation: "Registrar",
    gradient: "from-primary via-gold to-primary",
    shortBio:
      "Registrar of S-VYASA University, overseeing administrative operations, academic compliance, and institutional coordination across both campuses.",
    slideFrom: "left",
  },
];

const keyOfficers: Leader[] = [
  {
    name: "Dr. R. Nagarathna",
    designation: "Director, Arogyadhama",
    qualifications: "MBBS, MD, FRCP, DLITT, DSc",
    gradient: "from-primary via-gold to-primary",
    shortBio:
      "Pioneer in the field of Yoga therapy. Dean, Division of Yoga and Life Sciences. Chief Consultant, Arogyadhama, S-VYASA.",
    fullBio:
      "MBBS (Bangalore Medical College), MD Internal Medicine (Mysore Medical College), MRCP and FRCP (Edinburgh, UK).",
    achievements: [
      "Pioneer in Yoga Therapy",
      "Dean, Division of Yoga and Life Sciences",
      "Chief Consultant, Arogyadhama",
      "FRCP (Edinburgh, UK)",
      "80+ publications in national & international journals",
      "11+ books on Yoga for different ailments",
    ],
    slideFrom: "bottom",
  },
];

// Animated ring for portraits
const AnimatedRing = ({ isPrimary }: { isPrimary?: boolean }) => (
  <motion.div
    className="absolute inset-0 rounded-full"
    style={{
      background: isPrimary
        ? "conic-gradient(hsl(var(--gold)), hsl(var(--primary)), hsl(var(--gold)))"
        : "conic-gradient(hsl(var(--primary)), hsl(var(--gold)), hsl(var(--primary)))",
      padding: isPrimary ? "4px" : "3px",
    }}
    animate={{ rotate: 360 }}
    transition={{ duration: isPrimary ? 6 : 8, repeat: Infinity, ease: "linear" }}
  >
    <div className="w-full h-full rounded-full bg-card" />
  </motion.div>
);

const LeaderCard = ({ leader, index }: { leader: Leader; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const getInitial = () => {
    if (leader.isPrimary) return { opacity: 0, scale: 0.85, y: 30 };
    switch (leader.slideFrom) {
      case "left": return { opacity: 0, x: -100 };
      case "right": return { opacity: 0, x: 100 };
      case "bottom": return { opacity: 0, y: 100 };
      default: return { opacity: 0, scale: 0.85 };
    }
  };

  const delay = leader.isPrimary ? 0 : 0.3 + index * 0.12;

  return (
    <motion.div
      ref={ref}
      className={leader.isPrimary ? "col-span-full flex justify-center mb-12" : ""}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100, damping: 15 }}
    >
      <motion.div
        className={`relative bg-card rounded-2xl overflow-hidden shadow-soft transition-all duration-500 group
          ${leader.isPrimary ? "p-8 max-w-lg border-2 border-gold/20" : "p-6 border border-border"}`}
        whileHover={{
          y: -10,
          boxShadow: leader.isPrimary
            ? "0 25px 60px -15px hsla(42, 65%, 55%, 0.35)"
            : "0 20px 50px -15px hsla(25, 84%, 50%, 0.25)",
        }}
      >
        {leader.isPrimary && (
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "radial-gradient(circle at center, hsla(42, 65%, 55%, 0.15), transparent 70%)" }}
          />
        )}

        {/* Portrait */}
        <div className={`relative mx-auto mb-6 ${leader.isPrimary ? "w-48 h-48" : "w-36 h-36"}`}>
          <AnimatedRing isPrimary={leader.isPrimary} />
          <motion.div
            className="absolute inset-1 rounded-full overflow-hidden bg-muted flex items-center justify-center"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={isInView ? { clipPath: "circle(50% at 50% 50%)" } : {}}
            transition={{ duration: 0.8, delay: delay + 0.3 }}
          >
            <motion.div
              className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className={`font-heading text-primary/40 ${leader.isPrimary ? "text-5xl" : "text-4xl"}`}>
                {leader.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </motion.div>
          </motion.div>
        </div>

        {leader.isPrimary && (
          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <Award className="w-8 h-8 text-gold" />
          </motion.div>
        )}

        <div className="text-center">
          <motion.h3
            className={`font-heading font-bold mb-1 ${leader.isPrimary ? "text-2xl" : "text-xl"} text-foreground`}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: delay + 0.5 }}
          >
            {leader.name}
          </motion.h3>

          <motion.p
            className={`text-sm uppercase tracking-widest mb-1 ${leader.isPrimary ? "text-gold" : "text-muted-foreground"}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.6 }}
          >
            {leader.designation}
          </motion.p>

          {leader.qualifications && (
            <motion.p
              className="text-xs text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: delay + 0.65 }}
            >
              {leader.qualifications}
            </motion.p>
          )}

          <motion.p
            className="text-sm text-muted-foreground leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.7 }}
          >
            {leader.shortBio}
          </motion.p>

          {(leader.fullBio || leader.achievements) && (
            <>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {leader.fullBio && (
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{leader.fullBio}</p>
                    )}
                    {leader.achievements && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <h4 className="text-xs uppercase tracking-wider text-gold mb-3">Key Achievements</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                          {leader.achievements.map((a, i) => (
                            <motion.li
                              key={a}
                              className="text-xs text-muted-foreground flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                              {a}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 mx-auto text-sm text-primary hover:text-primary/80 transition-colors mt-2"
                whileHover={{ scale: 1.02 }}
              >
                <span>{isExpanded ? "Show Less" : "Read More"}</span>
                <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = title.split(" ");

  return (
    <div ref={ref} className="text-center mb-16 relative">
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
            <ellipse key={i} cx="100" cy="60" rx="15" ry="40" transform={`rotate(${i * 30} 100 100)`} />
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="relative inline-block"
      >
        <span className="text-lg md:text-xl text-muted-foreground tracking-wider uppercase">{subtitle}</span>
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

const LeadershipBoard = () => (
  <section className="relative py-24 bg-cream overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <SectionHeading title="University Management Team" subtitle="Leadership Hierarchy" />

      {/* Primary leader */}
      <div className="max-w-5xl mx-auto">
        <LeaderCard leader={leaders[0]} index={0} />

        {/* Chancellor & VC row */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {leaders.slice(1, 3).map((leader, index) => (
            <LeaderCard key={leader.name} leader={leader} index={index + 1} />
          ))}
        </div>

        {/* Pro VC & Registrar row */}
        <div className="grid md:grid-cols-2 gap-6">
          {leaders.slice(3).map((leader, index) => (
            <LeaderCard key={leader.name} leader={leader} index={index + 3} />
          ))}
        </div>
      </div>

      {/* Key Officers */}
      <div className="mt-20">
        <SectionHeading title="Key Officers" subtitle="Academic & Clinical Leadership" />
        <div className="max-w-lg mx-auto">
          {keyOfficers.map((officer, index) => (
            <LeaderCard key={officer.name} leader={officer} index={index} />
          ))}
        </div>
      </div>
    </div>

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

export default LeadershipBoard;
