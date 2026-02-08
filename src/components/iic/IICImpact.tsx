import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Cog, Rocket } from "lucide-react";

const IICImpact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Floating innovation icons
  const floatingIcons = [
    { Icon: Lightbulb, left: "10%", top: "20%", delay: 0 },
    { Icon: Cog, left: "85%", top: "30%", delay: 1 },
    { Icon: Rocket, left: "15%", top: "70%", delay: 2 },
    { Icon: Cog, left: "80%", top: "75%", delay: 1.5 },
    { Icon: Lightbulb, left: "50%", top: "15%", delay: 0.5 },
  ];

  return (
    <section ref={ref} className="relative py-16 bg-primary overflow-hidden">
      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.1) 10px,
            rgba(255,255,255,0.1) 11px
          )`,
        }}
      />

      {/* Floating innovation icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: item.left, top: item.top }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          <item.Icon className="w-12 h-12 text-white" strokeWidth={1} />
        </motion.div>
      ))}

      {/* Decorative quote marks */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 text-gold/15 text-9xl font-serif hidden lg:block">
        "
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-gold/15 text-9xl font-serif hidden lg:block">
        "
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="text-3xl md:text-4xl font-display text-white mb-6"
          >
            Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed"
          >
            The IIC at S-VYASA empowers innovators to transform ideas into real-world solutions 
            that enhance health, wellness, sustainability, and social well-being, contributing 
            to India's growing innovation ecosystem.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default IICImpact;
