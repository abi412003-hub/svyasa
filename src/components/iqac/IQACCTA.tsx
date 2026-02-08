import { motion } from "framer-motion";
import { ExternalLink, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const IQACCTA = () => {
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
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8), hsl(var(--gold)))",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Sparkle particles */}
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

      {/* Lotus corners */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        whileInView={{ opacity: 0.1, rotate: 0 }}
        viewport={{ once: true }}
        className="absolute top-4 left-4 w-24 h-24"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <path d="M50 10 C60 25 75 25 85 40 C75 50 75 65 50 80 C25 65 25 50 15 40 C25 25 40 25 50 10" />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 15 }}
        whileInView={{ opacity: 0.1, rotate: 0 }}
        viewport={{ once: true }}
        className="absolute bottom-4 right-4 w-24 h-24"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <path d="M50 10 C60 25 75 25 85 40 C75 50 75 65 50 80 C25 65 25 50 15 40 C25 25 40 25 50 10" />
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
                             hover:scale-105 hover:shadow-xl transition-all duration-300"
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

export default IQACCTA;
