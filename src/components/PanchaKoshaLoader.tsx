import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import svyasaLogo from "@/assets/svyasa-logo.svg";
import vivekanandaSketch from "@/assets/vivekananda-sketch.png";

interface PanchaKoshaLoaderProps {
  onComplete: () => void;
  isContentReady?: boolean;
}

// Kosha configuration
const koshas = [
  { name: "Annamaya", color: "#C96B3C", meaning: "Physical" },
  { name: "Pranamaya", color: "#E8871E", meaning: "Vital Energy" },
  { name: "Manomaya", color: "#2A8B9D", meaning: "Mind" },
  { name: "Vijnanamaya", color: "#5B3F9E", meaning: "Wisdom" },
  { name: "Anandamaya", color: "#F5D67B", meaning: "Bliss" },
];

// Particle component for background stars and effects
const Particle = ({ delay, duration, size, color, style }: {
  delay: number;
  duration: number;
  size: number;
  color: string;
  style?: React.CSSProperties;
}) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      boxShadow: `0 0 ${size * 2}px ${color}`,
      ...style,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1, 0.5],
      y: [0, -20, -40],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

// Kosha Ring component
const KoshaRing = ({ 
  index, 
  kosha, 
  isActive, 
  isComplete,
  showLabel,
}: {
  index: number;
  kosha: typeof koshas[0];
  isActive: boolean;
  isComplete: boolean;
  showLabel: boolean;
}) => {
  const baseRadius = 80 + index * 35;
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) {
      controls.start({
        scale: [0.5, 1.1, 1],
        opacity: [0, 0.9, 0.7],
        transition: { duration: 0.5, ease: "easeOut" }
      });
    }
  }, [isActive, controls]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={controls}
      initial={{ scale: 0.5, opacity: 0 }}
    >
      {/* Main ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: baseRadius * 2,
          height: baseRadius * 2,
          border: `3px solid ${kosha.color}`,
          boxShadow: `0 0 20px ${kosha.color}60, 0 0 40px ${kosha.color}30, inset 0 0 20px ${kosha.color}20`,
        }}
        animate={isComplete ? {
          rotate: 360 * (index % 2 === 0 ? 1 : -1),
          scale: [1, 1.02, 1],
        } : {}}
        transition={{
          rotate: { duration: 20 + index * 5, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      
      {/* Inner glow ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: baseRadius * 2 - 10,
          height: baseRadius * 2 - 10,
          background: `radial-gradient(circle, transparent 50%, ${kosha.color}25 100%)`,
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Kosha label */}
      <AnimatePresence>
        {showLabel && (
          <motion.div
            className="absolute"
            style={{ top: -baseRadius - 25 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className="font-heading italic text-sm tracking-[3px] uppercase"
              style={{ color: kosha.color }}
            >
              {kosha.name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Swami Vivekananda Image Component
const VivekanandaImage = ({ opacity, glowIntensity }: { opacity: number; glowIntensity: number }) => (
  <motion.div
    className="absolute flex items-center justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    <motion.img
      src={vivekanandaSketch}
      alt="Swami Vivekananda"
      className="w-32 h-32 object-contain"
      style={{ 
        filter: `drop-shadow(0 0 ${glowIntensity * 20}px #E8751A)`,
      }}
      animate={{
        filter: [
          `drop-shadow(0 0 ${glowIntensity * 10}px #E8751A)`,
          `drop-shadow(0 0 ${glowIntensity * 25}px #E8751A)`,
          `drop-shadow(0 0 ${glowIntensity * 10}px #E8751A)`,
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.div>
);

// Heart center orb
const HeartOrb = ({ phase, isBlissPhase }: { phase: number; isBlissPhase: boolean }) => (
  <motion.div
    className="absolute"
    style={{ top: "calc(50% - 15px)" }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: isBlissPhase ? [1, 3, 50] : [0.5, 1, 0.8, 1],
      opacity: isBlissPhase ? [1, 1, 0] : phase >= 1 ? 1 : 0,
    }}
    transition={isBlissPhase ? {
      duration: 0.6,
      ease: "easeIn",
    } : {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div
      className="w-4 h-4 rounded-full"
      style={{
        background: "radial-gradient(circle, #FFFFFF 0%, #F5D67B 50%, #D4A843 100%)",
        boxShadow: `0 0 20px #F5D67B, 0 0 40px #D4A84380, 0 0 60px #D4A84340`,
      }}
    />
  </motion.div>
);

const PanchaKoshaLoader = ({ onComplete, isContentReady = true }: PanchaKoshaLoaderProps) => {
  const [phase, setPhase] = useState(0);
  const [currentKosha, setCurrentKosha] = useState(-1);
  const [showLabel, setShowLabel] = useState(-1);
  const [isExiting, setIsExiting] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Check session storage for first visit
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('svyasa-visited');
    if (hasVisited) {
      setIsFirstVisit(false);
    }
  }, []);

  // Skip handler
  const handleSkip = useCallback(() => {
    setIsExiting(true);
    sessionStorage.setItem('svyasa-visited', 'true');
    setTimeout(onComplete, 400);
  }, [onComplete]);

  // Show skip button after 1 second
  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Animation sequence
  useEffect(() => {
    if (prefersReducedMotion || !isFirstVisit) {
      // Simple fade for reduced motion or returning visitors
      setTimeout(() => {
        setIsExiting(true);
        sessionStorage.setItem('svyasa-visited', 'true');
        setTimeout(onComplete, 800);
      }, isFirstVisit ? 1000 : 500);
      return;
    }

    const timings = [
      { phase: 1, delay: 400 },   // Emergence complete
      { phase: 2, kosha: 0, delay: 900 },   // Annamaya
      { phase: 3, kosha: 1, delay: 1400 },  // Pranamaya
      { phase: 4, kosha: 2, delay: 1900 },  // Manomaya
      { phase: 5, kosha: 3, delay: 2400 },  // Vijnanamaya
      { phase: 6, kosha: 4, delay: 2900 },  // Anandamaya
      { phase: 7, delay: 3400 },  // Hold
    ];

    const timers: NodeJS.Timeout[] = [];

    timings.forEach(({ phase: p, kosha, delay }) => {
      timers.push(setTimeout(() => {
        setPhase(p);
        if (kosha !== undefined) {
          setCurrentKosha(kosha);
          setShowLabel(kosha);
          // Hide label after 400ms
          setTimeout(() => setShowLabel(-1), 400);
        }
      }, delay));
    });

    // Final dissolution - wait for content if needed
    timers.push(setTimeout(() => {
      const checkAndComplete = () => {
        if (isContentReady) {
          setIsExiting(true);
          sessionStorage.setItem('svyasa-visited', 'true');
          setTimeout(onComplete, 600);
        } else {
          setTimeout(checkAndComplete, 100);
        }
      };
      checkAndComplete();
    }, 3600));

    return () => timers.forEach(clearTimeout);
  }, [onComplete, isContentReady, prefersReducedMotion, isFirstVisit]);

  // Generate background particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Background particles (saffron/gold on white) */}
          {particles.map((p) => (
            <Particle
              key={p.id}
              delay={p.delay}
              duration={p.duration}
              size={p.size}
              color="#E8751A"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
            />
          ))}

          {/* Sacred geometry background grid - subtle cream pattern */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at center, transparent 0%, white 70%),
                repeating-conic-gradient(from 0deg at 50% 50%, #E8751A08 0deg 30deg, transparent 30deg 60deg)
              `,
              backgroundSize: "100% 100%, 100px 100px",
            }}
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main container for silhouette and rings */}
          <div className="relative flex items-center justify-center">
            {/* Kosha Rings */}
            {koshas.map((kosha, index) => (
              <KoshaRing
                key={kosha.name}
                index={index}
                kosha={kosha}
                isActive={currentKosha >= index}
                isComplete={currentKosha >= 4}
                showLabel={showLabel === index}
              />
            ))}

            {/* Swami Vivekananda image */}
            <VivekanandaImage
              opacity={phase >= 1 ? 0.5 + (phase * 0.1) : 0}
              glowIntensity={phase >= 6 ? 1 : phase * 0.15}
            />

            {/* Heart center orb */}
            <HeartOrb phase={phase} isBlissPhase={phase >= 7} />
          </div>

          {/* S-VYASA text/logo */}
          <motion.div
            className="absolute bottom-32 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {phase >= 6 ? (
              <motion.img
                src={svyasaLogo}
                alt="S-VYASA University"
                className="h-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              <motion.span
                className="text-secondary/40 font-body font-semibold text-2xl tracking-[6px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
              >
                S-VYASA
              </motion.span>
            )}
            
            {phase >= 6 && (
              <motion.p
                className="text-secondary/70 font-body font-light text-sm tracking-[2px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Where Ancient Wisdom Meets Modern Science
              </motion.p>
            )}
          </motion.div>

          {/* Skip button */}
          <AnimatePresence>
            {showSkip && (
              <motion.button
                className="absolute bottom-8 right-8 text-secondary/40 font-body text-xs tracking-wider hover:text-secondary/70 transition-colors"
                onClick={handleSkip}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
              >
                Skip
              </motion.button>
            )}
          </AnimatePresence>

          {/* Saffron/white flash overlay for final dissolution */}
          {phase >= 7 && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at center, #FFF9F0 0%, #E8751A30 50%, white 100%)",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.6, 1], scale: [0.5, 1, 2] }}
              transition={{ duration: 0.6, ease: "easeIn" }}
            />
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PanchaKoshaLoader;
