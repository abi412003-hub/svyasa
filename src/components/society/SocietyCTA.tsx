import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

// Sparkle particle
const SparkleParticle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-gold rounded-full"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 3,
    }}
  />
);

// Decorative mandala/lotus corner
const DecorativeCorner = ({ position }: { position: "top-left" | "bottom-right" }) => {
  const isTopLeft = position === "top-left";

  return (
    <motion.div
      className={`absolute w-32 h-32 opacity-20 ${
        isTopLeft ? "top-4 left-4" : "bottom-4 right-4"
      }`}
      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
      whileInView={{ opacity: 0.2, scale: 1, rotate: isTopLeft ? 0 : 180 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full fill-none stroke-gold"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* Lotus/mandala pattern */}
        <circle cx="50" cy="50" r="45" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="35" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="25" strokeWidth="0.5" />
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d="M50 15 Q55 30 50 50 Q45 30 50 15"
            strokeWidth="0.5"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
      </motion.svg>
    </motion.div>
  );
};

// CTA Button with animations
const CTAButton = ({
  children,
  href,
  delay,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  delay: number;
  variant?: "primary" | "secondary";
}) => {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Button
        size="lg"
        className={`relative overflow-hidden group ${
          isPrimary
            ? "bg-white text-primary hover:bg-white/90 shadow-large"
            : "bg-transparent border-2 border-white text-white hover:bg-white/10"
        }`}
      >
        {/* Pulse glow effect for primary buttons */}
        {isPrimary && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        )}

        <span className="relative flex items-center gap-2">
          {children}
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </span>
      </Button>
    </motion.a>
  );
};

const SocietyCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-saffron-dark to-primary bg-[length:200%_100%]"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />

      {/* Sparkle particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <SparkleParticle key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* Decorative corners */}
      <DecorativeCorner position="top-left" />
      <DecorativeCorner position="bottom-right" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Heading with scale animation */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-6 h-6 text-gold" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Be a Part of S-VYASA
            </h2>
            <Sparkles className="w-6 h-6 text-gold" />
          </motion.div>

          <motion.p
            className="text-lg text-white/80 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Join our legacy of excellence in yoga education and research
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href="https://applynow.svyasa.edu.in/"
              delay={0.3}
              variant="primary"
            >
              Apply for Global City Campus
            </CTAButton>

            <CTAButton
              href="https://applynow.svyasa.edu.in/"
              delay={0.4}
              variant="secondary"
            >
              Apply for Prashanti Campus
            </CTAButton>

            <CTAButton
              href="/contact"
              delay={0.5}
              variant="secondary"
            >
              Contact Us
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocietyCTA;
