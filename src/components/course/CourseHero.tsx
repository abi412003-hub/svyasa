import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin, ArrowRight, Download, ChevronDown, HelpCircle } from "lucide-react";
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

/** Picks a consistent image for a given slug using a simple char-code hash */
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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shortCampus = course.campusType === "gcc" ? "Global City Campus" : "Prashanti Kutiram";

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background with Ken Burns */}
      <motion.div
        className="absolute inset-0"
        initial={{ x: "0%" }}
        animate={shouldReduceMotion ? {} : { x: "-3%" }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${course.bannerImage})` }}
        />
      </motion.div>

      {/* Cinematic Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(27,58,92,0.88) 0%, rgba(27,58,92,0.55) 50%, transparent 100%)"
        }}
      />

      {/* Domain SVG - Desktop only */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[35%] h-[70%]">
        <DomainSVG theme={course.domainTheme} className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        {/* Breadcrumb */}
        <nav className="absolute top-24 left-4 flex items-center gap-2 text-sm text-cream/80">
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
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              {i > 0 && <span className="text-cream/50">→</span>}
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-primary transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </motion.span>
          ))}
        </nav>

        <div className="max-w-[55%] lg:max-w-[50%]">
          {/* Badge Row */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-white text-secondary px-4 py-1.5 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4" />
              {course.duration}
            </span>
            <motion.span
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium"
            >
              <MapPin className="w-4 h-4" />
              {shortCampus}
            </motion.span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-4"
          >
            {course.title}
          </motion.h1>

          {/* Hook Line */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-cream italic mb-8 max-w-xl"
          >
            {course.hookLine}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2.5 group hover:scale-105 transition-all"
            >
              <a href={course.applyLink} target="_blank" rel="noopener noreferrer">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-secondary rounded-xl px-6 py-2.5"
            >
              {course.brochureLink ? (
                <a href={course.brochureLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </a>
              ) : (
                <Link to="/contact-us" className="text-blue-500">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Enquire Now
                </Link>
              )}
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

export default CourseHero;
