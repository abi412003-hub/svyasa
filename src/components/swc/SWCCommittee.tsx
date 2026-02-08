import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const committeeMembers = [
  {
    name: "SWC Chairperson",
    designation: "Committee Head",
    department: "Student Welfare Committee",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    isFeatured: true,
    borderGradient: "from-primary via-gold to-primary",
    delay: 0,
  },
  {
    name: "Dr. Linta Maria George",
    designation: "Student Welfare Coordinator",
    department: "Assistant Professor in Physics, Department of Science and Humanities",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    isFeatured: false,
    borderGradient: "from-secondary via-teal-500 to-secondary",
    delay: 0.2,
  },
  {
    name: "Dr. Sreelatha H R.",
    designation: "Redressal Coordinator",
    department: "Associate Professor, Department of Management",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    isFeatured: false,
    borderGradient: "from-gold via-primary to-gold",
    delay: 0.4,
  },
];

// Animated ring component
const AnimatedRing = ({ gradient, size }: { gradient: string; size: number }) => (
  <motion.div
    className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} p-[3px]`}
    animate={{ rotate: 360 }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full rounded-full bg-card" />
  </motion.div>
);

const MemberCard = ({ member, index }: { member: typeof committeeMembers[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const size = member.isFeatured ? 200 : 160;

  return (
    <motion.div
      ref={ref}
      className={`text-center ${member.isFeatured ? "col-span-full mb-8" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: member.delay }}
    >
      {/* Portrait with animated ring */}
      <div 
        className="relative mx-auto mb-6 group"
        style={{ width: size, height: size }}
      >
        <AnimatedRing gradient={member.borderGradient} size={size} />
        
        {/* Portrait image with clip-path reveal */}
        <motion.div
          className="absolute inset-[4px] rounded-full overflow-hidden"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={isInView ? { clipPath: "circle(50% at 50% 50%)" } : {}}
          transition={{ duration: 0.8, delay: member.delay + 0.2, ease: "easeOut" }}
        >
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            boxShadow: "0 0 30px hsl(var(--primary) / 0.4)",
          }}
        />
      </div>

      {/* Name */}
      <motion.h3
        className={`font-heading ${member.isFeatured ? "text-2xl" : "text-xl"} text-foreground mb-1`}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: member.delay + 0.4 }}
      >
        {member.name}
      </motion.h3>

      {/* Designation */}
      <motion.p
        className="text-primary font-medium text-sm mb-1"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: member.delay + 0.5 }}
      >
        {member.designation}
      </motion.p>

      {/* Department */}
      <motion.p
        className="text-muted-foreground text-sm max-w-xs mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: member.delay + 0.6 }}
      >
        {member.department}
      </motion.p>
    </motion.div>
  );
};

const SWCCommittee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading text-3xl md:text-4xl text-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            {"Meet Our Committee".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            className="h-1 bg-gold mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Dedicated faculty committed to your welfare and growth.
          </motion.p>
        </div>

        {/* Committee members */}
        <div className="max-w-3xl mx-auto">
          {/* Featured member */}
          {committeeMembers.filter(m => m.isFeatured).map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}

          {/* Other members row */}
          <div className="grid sm:grid-cols-2 gap-8">
            {committeeMembers.filter(m => !m.isFeatured).map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SWCCommittee;
