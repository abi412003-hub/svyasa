import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScrollSpySidebarProps {
  applyLink: string;
  shortTitle: string;
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "journey", label: "Journey" },
  { id: "eligibility", label: "Eligibility" },
  { id: "course-structure", label: "Curriculum" },
  { id: "careers", label: "Careers" },
  { id: "testimonials", label: "Voices" },
  { id: "fee", label: "Fee" },
  { id: "apply", label: "Apply" },
];

const ScrollSpySidebar = ({ applyLink, shortTitle }: ScrollSpySidebarProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsVisible(scrollY > viewportHeight * 0.8);

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Sidebar - Premium glass pill */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1 bg-white/80 backdrop-blur-2xl rounded-2xl p-2 shadow-xl border border-border/50"
          >
            {sections.map((section) => (
              <div key={section.id} className="relative">
                <button
                  onClick={() => scrollToSection(section.id)}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gradient-to-br from-primary to-accent shadow-sm"
                      : "hover:bg-cream"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full transition-all ${
                    activeSection === section.id ? "bg-white" : "bg-muted-foreground/40"
                  }`} />
                </button>
                <AnimatePresence>
                  {hoveredSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, x: 8, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 8, scale: 0.95 }}
                      className="absolute right-11 top-1/2 -translate-y-1/2 bg-secondary text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg font-medium"
                    >
                      {section.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="h-[1px] w-5 bg-border my-1" />

            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-primary to-accent text-white rounded-xl text-[11px] px-3 py-1 h-auto shadow-sm"
            >
              <a href={applyLink} target="_blank" rel="noopener noreferrer">
                Apply
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Bar - Gradient glass */}
      <motion.div
        initial={shouldReduceMotion ? {} : { y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring" }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 py-4 px-5 flex items-center justify-between shadow-2xl backdrop-blur-2xl border-t border-white/10"
        style={{ background: "linear-gradient(135deg, hsla(210,52%,23%,0.95), hsla(210,52%,18%,0.98))" }}
      >
        <span className="text-white text-sm font-semibold truncate max-w-[55%]">
          {shortTitle}
        </span>
        <Button
          asChild
          size="sm"
          className="bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-lg shadow-primary/30"
        >
          <a href={applyLink} target="_blank" rel="noopener noreferrer">
            Apply Now
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </a>
        </Button>
      </motion.div>
    </>
  );
};

export default ScrollSpySidebar;
