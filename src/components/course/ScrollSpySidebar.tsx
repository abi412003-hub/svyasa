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
  { id: "careers", label: "Careers" },
  { id: "difference", label: "Difference" },
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

      // Show/hide based on scroll position
      setIsVisible(scrollY > viewportHeight * 0.8);

      // Find active section
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
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3"
          >
            {sections.map((section) => (
              <div key={section.id} className="relative">
                <button
                  onClick={() => scrollToSection(section.id)}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  className={`w-3 h-3 rounded-full border-2 transition-all ${
                    activeSection === section.id
                      ? "bg-primary border-primary w-3.5 h-3.5 shadow-glow-saffron"
                      : "border-muted-foreground/50 hover:border-primary"
                  }`}
                />
                <AnimatePresence>
                  {hoveredSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="absolute right-6 top-1/2 -translate-y-1/2 bg-secondary text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                    >
                      {section.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Button
              asChild
              size="sm"
              className="mt-4 bg-primary hover:bg-primary/90 text-white rounded-lg text-xs px-3"
            >
              <a href={applyLink} target="_blank" rel="noopener noreferrer">
                Apply
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Bar */}
      <motion.div
        initial={shouldReduceMotion ? {} : { y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring" }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-secondary py-3 px-4 flex items-center justify-between shadow-lg"
      >
        <span className="text-white text-sm font-medium truncate max-w-[60%]">
          {shortTitle}
        </span>
        <Button
          asChild
          size="sm"
          className="bg-primary hover:bg-primary/90 text-white rounded-lg"
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
