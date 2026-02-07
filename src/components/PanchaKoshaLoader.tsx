import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import svyasaLogo from "@/assets/svyasa-logo.svg";

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
          border: `2px solid ${kosha.color}`,
          boxShadow: `0 0 30px ${kosha.color}40, inset 0 0 30px ${kosha.color}20`,
          filter: "blur(0.5px)",
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
          background: `radial-gradient(circle, transparent 60%, ${kosha.color}15 100%)`,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
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

// Meditating silhouette SVG
const MeditatingSilhouette = ({ opacity, glowIntensity }: { opacity: number; glowIntensity: number }) => (
  <motion.svg
    width="120"
    height="140"
    viewBox="0 0 120 140"
    className="absolute"
    style={{ filter: `drop-shadow(0 0 ${glowIntensity * 20}px #D4A843)` }}
  >
    <defs>
      <linearGradient id="silhouetteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F5D67B" />
        <stop offset="100%" stopColor="#D4A843" />
      </linearGradient>
    </defs>
    <motion.path
      d="M60 10 
         C50 10 42 18 42 28 
         C42 38 50 46 60 46 
         C70 46 78 38 78 28 
         C78 18 70 10 60 10
         M60 50
         C55 50 50 55 48 62
         L35 90
         C32 95 35 100 40 100
         L45 98
         L42 115
         C40 120 45 125 50 125
         L52 125
         L55 108
         L60 108
         L65 108
         L68 125
         L70 125
         C75 125 80 120 78 115
         L75 98
         L80 100
         C85 100 88 95 85 90
         L72 62
         C70 55 65 50 60 50
         M30 75
         C25 75 20 80 20 85
         L15 110
         C14 115 18 118 22 116
         L35 105
         M90 75
         C95 75 100 80 100 85
         L105 110
         C106 115 102 118 98 116
         L85 105"
      fill="none"
      stroke="url(#silhouetteGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  </motion.svg>
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
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#0A1628" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Background particles (stars) */}
          {particles.map((p) => (
            <Particle
              key={p.id}
              delay={p.delay}
              duration={p.duration}
              size={p.size}
              color="#D4A843"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
            />
          ))}

          {/* Sacred geometry background grid */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at center, transparent 0%, #0A1628 70%),
                repeating-conic-gradient(from 0deg at 50% 50%, #D4A84308 0deg 30deg, transparent 30deg 60deg)
              `,
              backgroundSize: "100% 100%, 100px 100px",
            }}
            animate={{ opacity: [0.05, 0.1, 0.05] }}
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

            {/* Meditating silhouette */}
            <MeditatingSilhouette
              opacity={phase >= 1 ? 0.3 + (phase * 0.1) : 0}
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
                className="h-16 brightness-0 invert"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              <motion.span
                className="text-white/40 font-body font-semibold text-2xl tracking-[6px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
              >
                S-VYASA
              </motion.span>
            )}
            
            {phase >= 6 && (
              <motion.p
                className="text-white/60 font-body font-light text-sm tracking-[2px]"
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
                className="absolute bottom-8 right-8 text-white/40 font-body text-xs tracking-wider hover:text-white/70 transition-colors"
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

          {/* Golden flash overlay for final dissolution */}
          {phase >= 7 && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at center, #F5D67B 0%, #D4A843 50%, transparent 100%)",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.8, 1], scale: [0.5, 1, 2] }}
              transition={{ duration: 0.6, ease: "easeIn" }}
            />
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PanchaKoshaLoader;
