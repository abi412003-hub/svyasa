import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Category } from "@/data/courses";
import DomainSVG from "./DomainSVG";
import { useEffect, useState } from "react";

interface CategoryHeroProps {
  category: Category;
  programCount: number;
  onExploreClick: () => void;
}

const CategoryHero = ({ category, programCount, onExploreClick }: CategoryHeroProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [displayCount, setDisplayCount] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Animated counter
  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayCount(programCount);
      return;
    }
    
    const duration = 600;
    const steps = 30;
    const increment = programCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= programCount) {
        setDisplayCount(programCount);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [programCount, shouldReduceMotion]);

  // Hide scroll indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const applyLink = category.campusType === "prashanti" 
    ? "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa"
    : "https://applynow.svyasa.edu.in/";

  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
      {/* Background Image with Ken Burns */}
      <motion.div
        className="absolute inset-0"
        initial={{ x: 0 }}
        animate={shouldReduceMotion ? {} : { x: "-3%" }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${category.bannerImage})` }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent" />

      {/* Domain SVG - Desktop only */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[80%]">
        <DomainSVG theme={category.domainTheme} className="w-full h-full opacity-40" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-[60%] lg:max-w-[55%]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-cream/80 mb-6">
            {["Home", "Programs", category.shortTitle].map((crumb, i) => (
              <motion.span
                key={crumb}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                {i > 0 && <span className="text-cream/50">→</span>}
                {i === 0 ? (
                  <Link to="/" className="hover:text-primary transition-colors">{crumb}</Link>
                ) : i === 1 ? (
                  <Link to="/admissions" className="hover:text-primary transition-colors">{crumb}</Link>
                ) : (
                  <span className="text-white">{crumb}</span>
                )}
              </motion.span>
            ))}
          </nav>

          {/* Program Count Badge */}
          <motion.div
            initial={shouldReduceMotion ? {} : { scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            <span className="tabular-nums">{displayCount}</span> Programs Available
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-heading text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4"
          >
            {category.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-cream italic mb-8"
          >
            {category.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              onClick={onExploreClick}
              className="bg-primary hover:bg-primary-dark text-white rounded-xl px-6 py-2.5 hover:scale-105 transition-all"
            >
              Explore Programs
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-secondary rounded-xl px-6 py-2.5"
            >
              <a href={applyLink} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollIndicator ? 0.7 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white"
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CategoryHero;
