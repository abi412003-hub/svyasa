import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video-new.mp4";
import { useRef, useState, useEffect } from "react";

const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-gold/60 rounded-full"
    initial={{ 
      x: Math.random() * 100 + "%", 
      y: "110%",
      opacity: 0 
    }}
    animate={{
      y: "-10%",
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 8 + Math.random() * 4,
      delay: delay,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      left: `${Math.random() * 100}%`,
    }}
  />
);

const slides = [
  {
    title: (
      <>
        Where Ancient Wisdom<br />
        <span>Meets Modern Science</span>
      </>
    ),
    subtitle: "India's Premier Yoga University since 2002",
  },
  {
    title: <>Education Meets Industry</>,
    subtitle: "A University Inside a Tech Park",
  },
];

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const prevTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      // Detect loop: current time jumped backward (video restarted)
      if (prevTimeRef.current > currentTime + 1) {
        setSlideIndex(0);
      }
      prevTimeRef.current = currentTime;
    };

    // Switch to second slide after 24 seconds
    const switchTimer = setTimeout(() => {
      setSlideIndex(1);
    }, 24000);

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      clearTimeout(switchTimer);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  // When slideIndex resets to 0 (video looped), restart the 24s timer
  useEffect(() => {
    if (slideIndex !== 0) return;
    const switchTimer = setTimeout(() => {
      setSlideIndex(1);
    }, 24000);
    return () => clearTimeout(switchTimer);
  }, [slideIndex]);

  const current = slides[slideIndex];

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-hero-pattern" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-3 mb-6"
            >
              <span className="px-4 py-1.5 bg-gold/20 backdrop-blur-sm text-gold-light text-sm font-medium rounded-full border border-gold/30">
                NAAC 'A' Grade
              </span>
              <span className="px-4 py-1.5 bg-gold/20 backdrop-blur-sm text-gold-light text-sm font-medium rounded-full border border-gold/30">
                UGC Recognized
              </span>
            </motion.div>

            {/* Title + Subtitle with crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 text-shadow-lg leading-tight">
                  {current.title}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-shadow">
                  {current.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-saffron hover:scale-105 transition-all duration-300 text-lg px-8"
              >
                Explore Programs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 text-lg px-8"
              >
                Virtual Tour
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-primary-foreground/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
