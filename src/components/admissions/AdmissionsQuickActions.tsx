import { motion } from "framer-motion";
import { ExternalLink, FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface QuickActionsProps {
  onOpenFeeModal: () => void;
}

const AdmissionsQuickActions = ({ onOpenFeeModal }: QuickActionsProps) => {
  const words = "Tailored programs to unlock your full potential.".split(" ");

  const actionButtons = [
    {
      label: "Apply now for S-VYASA Global City Campus",
      href: "https://applynow.svyasa.edu.in/",
      external: true,
      variant: "primary" as const,
    },
    {
      label: "Apply now for Prashanti Campus",
      href: "https://admissions.svyasa.edu.in/",
      external: true,
      variant: "primary" as const,
    },
    {
      label: "Fee Structure",
      onClick: onOpenFeeModal,
      variant: "outline" as const,
      icon: FileText,
    },
    {
      label: "Contact Us",
      href: "/contact-us",
      variant: "outline" as const,
      icon: Phone,
    },
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-4">
        {/* Animated heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-display text-navy flex flex-wrap justify-center gap-x-3">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {actionButtons.map((button, i) => (
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
              {button.href ? (
                button.external ? (
                  <a
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300
                      ${
                        button.variant === "primary"
                          ? "bg-primary text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/30 pulse-glow"
                          : "border-2 border-navy text-navy hover:bg-navy hover:text-white hover:scale-105"
                      }
                    `}
                  >
                    {button.label}
                    {button.external && <ExternalLink className="w-4 h-4" />}
                  </a>
                ) : (
                  <Link
                    to={button.href}
                    className={`
                      inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300
                      ${
                        button.variant === "primary"
                          ? "bg-primary text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                          : "border-2 border-navy text-navy hover:bg-navy hover:text-white hover:scale-105"
                      }
                    `}
                  >
                    {button.icon && <button.icon className="w-4 h-4" />}
                    {button.label}
                  </Link>
                )
              ) : (
                <button
                  onClick={button.onClick}
                  className={`
                    inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300
                    ${
                      button.variant === "primary"
                        ? "bg-primary text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                        : "border-2 border-navy text-navy hover:bg-navy hover:text-white hover:scale-105"
                    }
                  `}
                >
                  {button.icon && <button.icon className="w-4 h-4" />}
                  {button.label}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionsQuickActions;
