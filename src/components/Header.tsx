import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import svyasaLogo from "@/assets/svyasa-logo.svg";

const navItems = [
  {
    label: "About",
    href: "/about",
    submenu: ["Vision & Mission", "History", "Leadership", "Accreditations"],
  },
  {
    label: "Academics",
    submenu: ["Undergraduate", "Postgraduate", "Doctoral Programs", "Certificates"],
  },
  {
    label: "Research",
    submenu: ["Research Centers", "Publications", "Projects", "Collaborations"],
  },
  {
    label: "Campus Life",
    submenu: ["Facilities", "Hostels", "Sports", "Wellness Center"],
  },
  { label: "Admissions", submenu: null },
  { label: "Contact", submenu: null },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-secondary text-secondary-foreground py-2 hidden md:block"
      >
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+918028561999" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} />
              +91 80 2856 1999
            </a>
            <a href="mailto:info@svyasa.edu.in" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} />
              info@svyasa.edu.in
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/90 backdrop-blur-lg shadow-medium py-2"
            : "bg-card py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.img
                  src={svyasaLogo}
                  alt="S-VYASA University"
                  className={`transition-all duration-300 ${isScrolled ? "h-12" : "h-14"}`}
                  animate={{ 
                    filter: ["drop-shadow(0 0 0 rgba(232, 117, 26, 0))", "drop-shadow(0 0 8px rgba(232, 117, 26, 0.3))", "drop-shadow(0 0 0 rgba(232, 117, 26, 0))"] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => setActiveSubmenu(item.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {'href' in item && item.href ? (
                    <Link 
                      to={item.href}
                      className="px-4 py-2 flex items-center gap-1 text-foreground hover:text-primary transition-colors group"
                    >
                      <span className="relative">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                      {item.submenu && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                  ) : (
                    <button className="px-4 py-2 flex items-center gap-1 text-foreground hover:text-primary transition-colors group">
                      <span className="relative">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                      {item.submenu && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-large overflow-hidden border border-border"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <motion.a
                            key={subItem}
                            href="#"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {subItem}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <Button
                  className="hidden sm:flex bg-gradient-to-r from-primary to-saffron-dark text-primary-foreground shadow-glow-saffron hover:shadow-glow-gold transition-all duration-300 hover:scale-105"
                >
                  Apply Now
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <nav className="container mx-auto px-4 py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href="#"
                      className="block py-3 text-foreground hover:text-primary transition-colors border-b border-border/50"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4"
                >
                  <Button className="w-full bg-gradient-to-r from-primary to-saffron-dark text-primary-foreground">
                    Apply Now
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
