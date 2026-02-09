import { motion, Easing } from "framer-motion";

interface DomainSVGProps {
  theme: "tech" | "business" | "yoga" | "health" | "research" | "arts";
  className?: string;
}

const DomainSVG = ({ theme, className = "" }: DomainSVGProps) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.4,
      transition: { duration: 3, ease: "easeInOut" as const }
    }
  };

  const renderSVG = () => {
    switch (theme) {
      case "tech":
        return (
          <svg viewBox="0 0 200 200" className={className}>
            {/* Circuit board traces */}
            <motion.path
              d="M20 100 L80 100 L80 40 L140 40"
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M60 160 L60 100 L120 100 L120 60"
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.path
              d="M100 180 L100 120 L160 120 L160 80"
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
            />
            {/* Nodes */}
            <motion.circle cx="80" cy="100" r="6" fill="white" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.4 }} transition={{ delay: 1.5 }} />
            <motion.circle cx="120" cy="100" r="6" fill="white" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.4 }} transition={{ delay: 1.8 }} />
            <motion.circle cx="140" cy="40" r="6" fill="white" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.4 }} transition={{ delay: 2 }} />
            <motion.circle cx="160" cy="80" r="6" fill="white" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.4 }} transition={{ delay: 2.2 }} />
          </svg>
        );

      case "business":
        return (
          <svg viewBox="0 0 200 200" className={className}>
            {/* Bar chart */}
            <motion.rect x="30" y="120" width="25" height="60" fill="white" fillOpacity={0.4} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ transformOrigin: "bottom" }} />
            <motion.rect x="65" y="90" width="25" height="90" fill="white" fillOpacity={0.4} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ transformOrigin: "bottom" }} />
            <motion.rect x="100" y="60" width="25" height="120" fill="white" fillOpacity={0.4} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.6 }} style={{ transformOrigin: "bottom" }} />
            <motion.rect x="135" y="30" width="25" height="150" fill="white" fillOpacity={0.4} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ transformOrigin: "bottom" }} />
            {/* Growth arrow */}
            <motion.path
              d="M40 110 L80 80 L120 50 L155 25"
              stroke="white"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path d="M145 20 L160 25 L155 40" stroke="white" strokeWidth="3" fill="none" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 2.5 }} />
          </svg>
        );

      case "yoga":
        return (
          <svg viewBox="0 0 200 200" className={className}>
            {/* Concentric lotus/mandala circles */}
            <motion.circle cx="100" cy="100" r="80" stroke="white" strokeWidth="1" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.4 }} transition={{ duration: 3, ease: "easeInOut" }} />
            <motion.circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.4 }} transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }} />
            <motion.circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.4 }} transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }} />
            <motion.circle cx="100" cy="100" r="20" stroke="white" strokeWidth="2" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.4 }} transition={{ duration: 3, ease: "easeInOut", delay: 0.9 }} />
            {/* Lotus petals */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <motion.ellipse
                key={angle}
                cx="100"
                cy="40"
                rx="8"
                ry="20"
                fill="none"
                stroke="white"
                strokeWidth="1"
                transform={`rotate(${angle} 100 100)`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1 + i * 0.1 }}
              />
            ))}
          </svg>
        );

      case "health":
        return (
          <svg viewBox="0 0 200 200" className={className}>
            {/* DNA Helix */}
            <motion.path
              d="M60 20 Q100 50 60 80 Q20 110 60 140 Q100 170 60 200"
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M140 20 Q100 50 140 80 Q180 110 140 140 Q100 170 140 200"
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            />
            {/* Cross connections */}
            {[35, 65, 95, 125, 155, 185].map((y, i) => (
              <motion.line
                key={y}
                x1={i % 2 === 0 ? 60 : 80}
                y1={y}
                x2={i % 2 === 0 ? 140 : 120}
                y2={y}
                stroke="white"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.5 + i * 0.2 }}
              />
            ))}
          </svg>
        );

      case "research":
        return (
          <svg viewBox="0 0 200 200" className={className}>
            {/* Atom orbital rings */}
            <motion.ellipse cx="100" cy="100" rx="70" ry="25" stroke="white" strokeWidth="1" fill="none" transform="rotate(0 100 100)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.4 }} transition={{ duration: 3, ease: "easeInOut" }} />
            <motion.ellipse cx="100" cy="100" rx="70" ry="25" stroke="white" strokeWidth="1" fill="none" transform="rotate(60 100 100)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.4 }} transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }} />
            <motion.ellipse cx="100" cy="100" rx="70" ry="25" stroke="white" strokeWidth="1" fill="none" transform="rotate(120 100 100)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.4 }} transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }} />
            {/* Nucleus */}
            <motion.circle cx="100" cy="100" r="10" fill="white" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.6 }} transition={{ delay: 2 }} />
            {/* Electrons */}
            <motion.circle cx="170" cy="100" r="5" fill="white" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 2.5 }} />
            <motion.circle cx="65" cy="60" r="5" fill="white" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 2.7 }} />
            <motion.circle cx="65" cy="140" r="5" fill="white" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 2.9 }} />
          </svg>
        );

      case "arts":
      default:
        return (
          <svg viewBox="0 0 200 200" className={className}>
            {/* Flowing curves */}
            <motion.path
              d="M20 100 Q50 50 100 80 Q150 110 180 60"
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M20 130 Q60 80 110 110 Q160 140 180 90"
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.path
              d="M20 160 Q70 110 120 140 Q170 170 180 120"
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
            />
          </svg>
        );
    }
  };

  return renderSVG();
};

export default DomainSVG;
