import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin, ArrowRight, Download, ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course, Category } from "@/data/courses";
import DomainSVG from "@/components/category/DomainSVG";
import yogaWellness1 from "@/assets/yoga-wellness-1.jpg";
import yogaWellness2 from "@/assets/yoga-wellness-2.jpg";
import yogaWellness3 from "@/assets/yoga-wellness-3.jpg";
import yogaWellness4 from "@/assets/yoga-wellness-4.jpg";
import yogaWellness5 from "@/assets/yoga-wellness-5.jpg";
import yogaWellness6 from "@/assets/yoga-wellness-6.jpg";
import yogaWellness7 from "@/assets/yoga-wellness-7.jpg";
import yogaWellness8 from "@/assets/yoga-wellness-8.jpg";
import yogaWellness9 from "@/assets/yoga-wellness-9.jpg";
import yogaWellness10 from "@/assets/yoga-wellness-10.jpg";

const YOGA_IMAGES = [
  yogaWellness1, yogaWellness2, yogaWellness3, yogaWellness4, yogaWellness5,
  yogaWellness6, yogaWellness7, yogaWellness8, yogaWellness9, yogaWellness10,
];

const getYogaImageForSlug = (slug: string): string => {
  const hash = slug.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return YOGA_IMAGES[hash % YOGA_IMAGES.length];
};

interface CourseHeroProps {
  course: Course;
  category: Category;
}

const CourseHero = ({ course, category }: CourseHeroProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const contentY = useTransform(scrollY, [0, 400], [0, 80]);

  useEffect(() => {
    const handleScroll = () => setShowScrollIndicator(window.scrollY < 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shortCampus = course.campusType === "gcc" ? "Global City Campus" : "Prashanti Kutiram";
  const heroBg = course.bannerImage || getYogaImageForSlug(course.slug);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
        <motion.div
          className="absolute inset-0"
          initial={{ x: "0%" }}
          animate={shouldReduceMotion ? {} : { x: "-3%" }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
        </motion.div>
      </motion.div>

      {/* Multi-layer Gradient Overlay */}
      <div className="absolute inset-0" style={{
        background: `
          linear-gradient(135deg, hsla(210,52%,15%,0.92) 0%, hsla(210,52%,23%,0.7) 40%, hsla(25,84%,50%,0.15) 80%, transparent 100%),
          radial-gradient(ellipse at 80% 20%, hsla(42,65%,55%,0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, hsla(25,84%,50%,0.1) 0%, transparent 50%)
        `
      }} />

      {/* Animated Mesh Gradient Orbs */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(25 84% 50%), transparent)" }}
        animate={shouldReduceMotion ? {} : { 
          x: [0, 30, -20, 0], 
          y: [0, -20, 15, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full opacity-15 blur-[80px]"
        style={{ background: "radial-gradient(circle, hsl(42 65% 55%), transparent)" }}
        animate={shouldReduceMotion ? {} : { 
          x: [0, -25, 15, 0], 
          y: [0, 20, -10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Domain SVG with glow */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[35%] h-[70%] opacity-60">
        <DomainSVG theme={course.domainTheme} className="w-full h-full" />
      </div>

      {/* Content with parallax */}
      <motion.div className="relative h-full container mx-auto px-4 flex flex-col justify-center" style={{ y: contentY }}>
        {/* Breadcrumb */}
        <nav className="absolute top-24 left-4 flex items-center gap-2 text-sm">
          {[
            { label: "Home", to: "/" },
            { label: "Programs", to: "/admissions" },
            { label: category.shortTitle, to: `/programs/${category.slug}` },
            { label: course.shortTitle, to: null }
          ].map((crumb, i) => (
            <motion.span
              key={i}
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              {i > 0 && <span className="text-white/30">→</span>}
              {crumb.to ? (
                <Link to={crumb.to} className="text-white/60 hover:text-accent transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-white/90">{crumb.label}</span>
              )}
            </motion.span>
          ))}
        </nav>

        <div className="max-w-[60%] lg:max-w-[55%]">
          {/* Glassmorphism Badge Row */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 150, damping: 20 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg">
              <Clock className="w-4 h-4 text-accent" />
              {course.duration}
            </span>
            <motion.span
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/80 to-accent/80 backdrop-blur-xl text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg shadow-primary/20"
            >
              <MapPin className="w-4 h-4" />
              {shortCampus}
            </motion.span>
            <motion.span
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              {course.degree}
            </motion.span>
          </motion.div>

          {/* Title with gradient text effect */}
          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-5 drop-shadow-lg"
          >
            {course.title}
          </motion.h1>

          {/* Hook Line with animated underline */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="text-lg md:text-xl text-white/80 italic mb-10 max-w-xl leading-relaxed">
              {course.hookLine}
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-1 rounded-full mb-10"
              style={{ background: "linear-gradient(90deg, hsl(25 84% 50%), hsl(42 65% 55%))" }}
            />
          </motion.div>

          {/* CTAs with glow effect */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              className="relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-2xl px-8 py-3 text-base group shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105"
            >
              <a href={course.applyLink} target="_blank" rel="noopener noreferrer">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              className="bg-white/10 backdrop-blur-xl border border-white/25 text-white hover:bg-white/20 rounded-2xl px-8 py-3 text-base transition-all hover:scale-105"
            >
              {course.brochureLink ? (
                <a href={course.brochureLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </a>
              ) : (
                <Link to="/contact-us">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Enquire Now
                </Link>
              )}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated gradient bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background: "linear-gradient(to top, hsl(40 100% 99%), transparent)"
      }} />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollIndicator ? 0.8 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/70 text-xs tracking-[3px] uppercase mb-3">Explore</span>
        <motion.div
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CourseHero;
