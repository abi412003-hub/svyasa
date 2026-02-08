import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Shield, HandHeart } from "lucide-react";
import campusImage from "@/assets/campus-2.jpg";

// SVG line draw icon wrapper
const AnimatedIcon = ({
  Icon,
  isInView,
  delay,
}: {
  Icon: typeof Shield;
  isInView: boolean;
  delay: number;
}) => (
  <motion.div
    className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors"
    initial={{ scale: 0, rotate: -180 }}
    animate={isInView ? { scale: 1, rotate: 0 } : {}}
    transition={{ delay, type: "spring", stiffness: 200 }}
  >
    <motion.div
      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
      transition={{ delay: delay + 0.3, duration: 0.8 }}
    >
      <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
    </motion.div>
  </motion.div>
);

// Feature card with glassmorphism
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  direction,
  delay,
}: {
  icon: typeof Shield;
  title: string;
  description: string;
  direction: "left" | "right";
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{
        opacity: 0,
        x: direction === "left" ? -100 : 100,
      }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 overflow-hidden"
        whileHover={{
          boxShadow: "0 0 40px hsla(42, 65%, 55%, 0.2)",
        }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsla(0,0%,100%,0.1), transparent)",
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />

        <AnimatedIcon Icon={Icon} isInView={isInView} delay={delay} />

        <motion.h3
          className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-white/80 text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.4 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Animated section heading with decorative lines
const SectionHeading = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center mb-12">
      <div className="flex items-center justify-center gap-4 mb-4">
        <motion.div
          className="h-px bg-gold"
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 0.6 }}
        />
        <motion.h2
          className="font-heading text-4xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          Why S-VYASA?
        </motion.h2>
        <motion.div
          className="h-px bg-gold"
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 0.6 }}
        />
      </div>

      <motion.p
        className="text-xl text-gold font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
      >
        Fostering a Legacy of Lifelong Learning
      </motion.p>
    </div>
  );
};

// Line-by-line text reveal
const AnimatedParagraph = ({ text, delay }: { text: string; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const lines = text.split(". ").filter(Boolean);

  return (
    <div ref={ref} className="max-w-3xl mx-auto text-center mb-12">
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className="inline text-white/90 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: delay + i * 0.15 }}
        >
          {line}
          {i < lines.length - 1 ? ". " : "."}
        </motion.span>
      ))}
    </div>
  );
};

const WhySVyasa = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.8, 0.85]);

  const descriptionText =
    "S-VYASA (Society), a registered Society under the Karnataka State Society Registration Act, striving to promote Yoga as a lifestyle by combining the Best of East with the Best of the West is the parent body to S-VYASA deemed to be University";

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <img
          src={campusImage}
          alt="S-VYASA Campus"
          className="w-full h-[130%] object-cover"
        />
      </motion.div>

      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 bg-navy"
        style={{ opacity: overlayOpacity }}
      />

      {/* Breathing overlay animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-navy/20 via-transparent to-navy/20"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading />

        <AnimatedParagraph text={descriptionText} delay={0.6} />

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FeatureCard
            icon={Shield}
            title="Trusted By Thousands"
            description="Ours is the only Yoga University offering various Yoga Courses. Here students undergo Life Training and Character Building Education with Yoga as a way of Life. Here Gurukula way of Education is combined with modern scientific approach. The emphasis is on practical hands-on experience and in-depth research."
            direction="left"
            delay={0.8}
          />
          <FeatureCard
            icon={HandHeart}
            title="Unlimited Resources With Strong Support"
            description="The Department of AYUSH, Ministry of Health & Family Welfare, Govt. of India accorded Centre of Excellence in Yoga. This institute also has an Advanced Centre for Research in Yoga & Naturopathy sponsored by Indian Council of Medical Research."
            direction="right"
            delay={1}
          />
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

export default WhySVyasa;
