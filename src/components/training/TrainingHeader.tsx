import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import svyasaLogo from "@/assets/svyasa-logo.svg";

const navLinks = [
  { label: "Home", href: "/training" },
  { label: "About", href: "/training/about" },
  {
    label: "Courses",
    href: "/training/courses",
    dropdown: [
      { label: "Yoga & Wellness Certifications", href: "/training/courses/yoga-wellness" },
      { label: "Ayurveda & Integrative Health", href: "/training/courses/ayurveda" },
      { label: "Government & PSU Programs", href: "/training/courses/government-psu" },
      { label: "Special Signature Programs", href: "/training/courses/signature" },
      { label: "All Courses", href: "/training/courses" },
    ],
  },
  { label: "Delivery (CODE)", href: "/training/delivery" },
  { label: "Admissions", href: "/training/admissions" },
  { label: "Institutions & PSUs", href: "/training/institutions-psu" },
  { label: "Faculty", href: "/training/faculty" },
  { label: "FAQs", href: "/training/faqs" },
  { label: "Contact", href: "/training/contact" },
];

const TrainingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Utility Bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: isScrolled ? -40 : 0 }}
        transition={{ duration: 0.3 }}
        className="bg-secondary text-white py-2 text-xs"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1 text-white/80 hover:text-gold transition-colors">
              <Phone className="w-3 h-3" /> +91-98765-43210
            </a>
            <a href="mailto:training@svyasa.edu.in" className="hidden sm:flex items-center gap-1 text-white/80 hover:text-gold transition-colors">
              <Mail className="w-3 h-3" /> training@svyasa.edu.in
            </a>
          </div>
          <a
            href="https://svyasa.edu.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white/80 hover:text-gold transition-colors"
          >
            ← Visit Main University Site <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </motion.div>

      {/* Logo Bar */}
      <div className={`bg-card border-b border-border/50 transition-all duration-300 ${isScrolled ? "py-2" : "py-3"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/training" className="flex items-center gap-3">
            <img src={svyasaLogo} alt="S-VYASA" className={`transition-all ${isScrolled ? "h-8" : "h-10"}`} />
            <div className="hidden sm:block">
              <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                Short-Term & Professional Training Programs
              </span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <Link to="/training/admissions">
              <Button size="sm" className="bg-primary text-primary-foreground rounded-full px-5 text-xs">
                Enrol Now
              </Button>
            </Link>
            <Link to="/training/contact">
              <Button size="sm" variant="outline" className="border-secondary text-secondary rounded-full px-5 text-xs">
                Contact
              </Button>
            </Link>
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(true)}>
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={`sticky top-0 z-40 bg-secondary shadow-md transition-all ${isScrolled ? "" : ""}`}>
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex items-center gap-0">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setDropdownOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`px-3 py-3 text-xs font-medium transition-colors flex items-center gap-1 ${
                    location.pathname === item.href || (item.dropdown && location.pathname.startsWith("/training/courses"))
                      ? "text-gold"
                      : "text-white/80 hover:text-gold"
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute top-full left-0 bg-card shadow-large rounded-lg border border-border/50 py-2 min-w-[260px] z-50"
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block px-4 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-secondary z-50 overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <img src={svyasaLogo} alt="S-VYASA" className="h-8 brightness-0 invert" />
                <button onClick={() => setMobileOpen(false)} className="p-2 text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="space-y-1">
                {navLinks.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="w-full flex justify-between items-center py-3 text-white border-b border-white/10"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-white/5 rounded-lg mt-1 mb-2"
                            >
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.href}
                                  to={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-4 py-2.5 text-white/70 text-sm"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 text-white border-b border-white/10"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-6 space-y-3">
                <Link to="/training/admissions" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground">Enrol Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TrainingHeader;
