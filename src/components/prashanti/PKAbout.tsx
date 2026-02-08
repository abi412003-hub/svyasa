import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Typewriter effect hook
const useTypewriter = (text: string, speed: number = 50, startTyping: boolean = false) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    if (!startTyping) return;
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed, startTyping]);
  
  return displayText;
};

// SVG Mandala that draws itself
const AnimatedMandala = () => (
  <motion.svg
    className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10"
    viewBox="0 0 200 200"
    fill="none"
    stroke="hsl(25 84% 50%)"
    strokeWidth="0.5"
  >
    {[40, 60, 80, 100].map((r, i) => (
      <motion.circle
        key={r}
        cx="100"
        cy="100"
        r={r}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: i * 0.3, ease: "easeInOut" }}
      />
    ))}
    {[0, 45, 90, 135].map((angle, i) => (
      <motion.line
        key={angle}
        x1={100 + 100 * Math.cos((angle * Math.PI) / 180)}
        y1={100 + 100 * Math.sin((angle * Math.PI) / 180)}
        x2={100 + 100 * Math.cos(((angle + 180) * Math.PI) / 180)}
        y2={100 + 100 * Math.sin(((angle + 180) * Math.PI) / 180)}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
      />
    ))}
  </motion.svg>
);

const PKAbout = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const patternY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const heading = "S-VYASA Prashanti Kutiram Campus";
  const typedHeading = useTypewriter(heading, 40, isInView);

  const bodyLines = [
    "Prashanti Kutiram, the serene campus of S-VYASA, is a hub for holistic education, yoga, and research.",
    "Spanning 100 acres, it blends tradition with modern science, offering state-of-the-art facilities, eco-friendly surroundings, and a transformative learning environment.",
    "Home to Arogyadhama, an integrated health center, it fosters spiritual growth, academic excellence, and well-being, making it an ideal place for self-discovery and career development.",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
    >
      {/* Decorative yoga geometric patterns with parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          y: patternY,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 5L5 30l25 25 25-25L30 5zm0 10l15 15-15 15-15-15 15-15z' fill='none' stroke='%231B3A5C' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Mandala */}
      <AnimatedMandala />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* S-VYASA badge */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onViewportEnter={() => setIsInView(true)}
          >
            <span className="font-playfair text-6xl md:text-8xl font-bold text-primary/20">
              S-VYASA
            </span>
          </motion.div>

          {/* Subheading with letter-spacing animation */}
          <motion.p
            className="text-sm font-semibold tracking-[3px] text-primary uppercase mb-4"
            initial={{ opacity: 0, letterSpacing: "0px" }}
            whileInView={{ opacity: 1, letterSpacing: "3px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.p>

          {/* Heading with typewriter effect */}
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-8">
            {typedHeading}
            <motion.span
              className="inline-block w-[3px] h-[1em] bg-primary ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </h2>

          {/* Body text with line-by-line stagger */}
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            {bodyLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PKAbout;
