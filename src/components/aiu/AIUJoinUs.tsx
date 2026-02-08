import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Phone, MapPin, Sparkles } from "lucide-react";

const AIUJoinUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const taglines = [
    "Experience the power, precision, and grace of India's finest Yogasana athletes.",
    "Celebrate excellence. Champion young women in sport.",
    "Be part of a national movement shaping the future of Yogasana.",
  ];

  const buttons = [
    {
      label: "Download Brochure",
      href: "img/pdf/AIU-Sponsorship Brochure.pdf",
      icon: Download,
      variant: "primary",
      download: true,
    },
    {
      label: "Contact Organizers",
      href: "mailto:aiu@svyasa.edu.in",
      icon: Phone,
      variant: "outline",
    },
    {
      label: "Directions to Venue",
      href: "https://maps.app.goo.gl/cApSxP6kDMvkp6Q4A",
      icon: MapPin,
      variant: "outline",
      external: true,
    },
  ];

  // Golden particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <section ref={ref} className="py-20 bg-navy relative overflow-hidden">
      {/* Golden particle overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          >
            <Sparkles className="w-3 h-3 text-gold/40" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className="text-4xl md:text-5xl font-display text-white text-center mb-8"
        >
          Join Us
        </motion.h2>

        {/* Taglines */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
          {taglines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="text-lg text-white/80"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((button, i) => (
            <motion.a
              key={button.label}
              href={button.href}
              download={button.download}
              target={button.external ? "_blank" : undefined}
              rel={button.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.8 + i * 0.1,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                button.variant === "primary"
                  ? "bg-primary text-white hover:bg-primary/90 shadow-lg"
                  : "bg-transparent text-white border-2 border-white/50 hover:bg-white hover:text-navy"
              }`}
            >
              <motion.span
                whileHover={{
                  y: button.icon === Download ? [0, 3, 0] : undefined,
                  rotate: button.icon === Phone ? [0, -15, 15, -10, 10, 0] : undefined,
                  scale: button.icon === MapPin ? [1, 1.2, 1] : undefined,
                }}
                transition={{ duration: 0.4 }}
              >
                <button.icon className="w-5 h-5" />
              </motion.span>
              {button.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIUJoinUs;
