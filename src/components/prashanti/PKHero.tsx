import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://spkbypslhjqvnvnujpwd.supabase.co/storage/v1/object/public/site-images/prashanti/prashanti-campus/1771447482333-5rxqdis5qyr.jpg",
    mobileImage: "https://spkbypslhjqvnvnujpwd.supabase.co/storage/v1/object/public/site-images/prashanti/prashanti-campus/1771447482333-5rxqdis5qyr.jpg",
    title: "Prashanti Kutiram",
    subtitle: "A Haven for Holistic Learning",
  },
  {
    image: "https://spkbypslhjqvnvnujpwd.supabase.co/storage/v1/object/public/site-images/prashanti/prashanti-campus/1771447477140-tzz2jgl93yn.jpg",
    mobileImage: "https://spkbypslhjqvnvnujpwd.supabase.co/storage/v1/object/public/site-images/prashanti/prashanti-campus/1771447477140-tzz2jgl93yn.jpg",
    title: "100 Acres of Serenity",
    subtitle: "Where Tradition Meets Modern Science",
  },
];

// Golden prana particles floating upward
const PranaParticles = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    startY: 100 + Math.random() * 20,
    duration: Math.random() * 8 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            bottom: 0,
            background: `radial-gradient(circle, rgba(212, 168, 67, 0.7) 0%, rgba(212, 168, 67, 0) 70%)`,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            opacity: [0, 0.8, 0.6, 0],
            x: [0, Math.sin(particle.id) * 30],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

const PKHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  // Auto-play with progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Ken Burns zoom effect */}
          <motion.img
            src={isMobile ? slides[currentSlide].mobileImage : slides[currentSlide].image}
            alt="Prashanti Campus"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 12, ease: "easeOut" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent" />

      {/* Prana particles */}
      <PranaParticles />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        {/* S-VYASA badge */}
        <motion.div
          className="absolute top-24 left-8 md:left-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-lg font-semibold tracking-wider opacity-90">S-VYASA</span>
        </motion.div>

        {/* Main title with parallax text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-light mb-2 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, type: "spring", bounce: 0.4 }}
          className="mt-8"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg relative overflow-hidden group pulse-glow"
          >
            <a href="https://applynow.svyasa.edu.in/" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10">Admissions 2025 — Apply Now</span>
              <motion.span
                className="absolute inset-0 bg-white/20 rounded-full"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Navigation arrows - fade in on hover */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 hover:border-accent hover:bg-white/20 opacity-0 hover:opacity-100 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 hover:border-accent hover:bg-white/20 opacity-0 hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Dot indicators with expand animation */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setProgress(0);
            }}
            className="relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-accent" : "bg-white/50"
              }`}
              animate={{
                scale: index === currentSlide ? 1.3 : 1,
                width: index === currentSlide ? 24 : 12,
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          className="h-full bg-accent"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Scroll down chevron */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 opacity-70" />
      </motion.button>
    </section>
  );
};

export default PKHero;
