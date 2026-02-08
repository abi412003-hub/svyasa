import { motion } from "framer-motion";
import { ExternalLink, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryCTA = () => {
  const buttons = [
    {
      label: "Apply now for S-VYASA Global City Campus",
      href: "https://applynow.svyasa.edu.in/",
      external: true,
    },
    {
      label: "Apply now for Prashanti Campus",
      href: "https://admissions.svyasa.edu.in/",
      external: true,
    },
    {
      label: "Contact Us",
      href: "/contact-us",
      external: false,
      icon: Phone,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-cta-animated"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-4 h-4 text-white/40" />
          </motion.div>
        ))}
      </div>

      {/* Lotus decorations */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        whileInView={{ opacity: 0.15, rotate: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-8 left-8 w-32 h-32 rotate-slow"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <path
            fill="currentColor"
            d="M50 0C50 27.6 27.6 50 0 50c27.6 0 50 22.4 50 50 0-27.6 22.4-50 50-50C72.4 50 50 27.6 50 0z"
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 15 }}
        whileInView={{ opacity: 0.15, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-8 right-8 w-32 h-32 rotate-slow"
        style={{ animationDirection: "reverse" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <path
            fill="currentColor"
            d="M50 0C50 27.6 27.6 50 0 50c27.6 0 50 22.4 50 50 0-27.6 22.4-50 50-50C72.4 50 50 27.6 50 0z"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display text-white text-center mb-10 text-shadow-lg"
        >
          Be a part of S-VYASA
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((button, i) => (
            <motion.div
              key={button.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                type: "spring",
                bounce: 0.4,
              }}
            >
              {button.external ? (
                <a
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy rounded-full font-semibold
                             hover:scale-105 hover:shadow-xl transition-all duration-300 pulse-glow"
                >
                  {button.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  to={button.href}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white 
                             border-2 border-white/50 rounded-full font-semibold
                             hover:bg-white hover:text-navy hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  {button.icon && <button.icon className="w-4 h-4" />}
                  {button.label}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;
