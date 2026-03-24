import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import svyasaLogo from "@/assets/svyasa-footer-logo.png";

const gccPrograms = [
  { label: "BCA", href: "/programs/bca" },
  { label: "BBA", href: "/programs/bba" },
  { label: "B.Com", href: "/programs/bcom" },
  { label: "B.Tech", href: "/programs/btech" },
  { label: "B.Sc. Computer Science", href: "/courses/bsc-computer-science" },
  { label: "B.Sc. Psychology (Clinical)", href: "/courses/bsc-clinical-psychology" },
  { label: "Bachelor of Occupational Therapy (BOT)", href: "/courses/bachelor-of-occupational-therapy" },
  { label: "MBA", href: "/programs/mba" },
  { label: "MCA", href: "/programs/mca" },
  { label: "M.Sc. Computer Science", href: "/programs/msc" },
  { label: "M.Sc. Psychology (Clinical)", href: "/courses/msc-clinical-psychology" },
  { label: "Ph.D Computer Science and Applications", href: "/courses/phd-computer-science" },
  { label: "Ph.D Computer Science and Engineering", href: "/courses/phd-computer-science-engineering" },
  { label: "Ph.D Commerce and Management", href: "/courses/phd-commerce-management" },
  { label: "Ph.D Applied Sciences", href: "/courses/phd-applied-sciences" },
  { label: "Ph.D Allied Sciences", href: "/courses/phd-allied-sciences" },
  { label: "Ph.D English", href: "/courses/phd-english" },
];

const prashanthiPrograms = [
  { label: "B.Sc. Yoga Therapy", href: "/courses/bsc-yoga-therapy" },
  { label: "B.Sc. Yoga & Vedic Wellness", href: "/courses/bsc-yoga-vedic-therapy" },
  { label: "BNYS", href: "/courses/bnys" },
  { label: "BPT", href: "/courses/bachelor-of-physiotherapy" },
  { label: "M.Sc. Yoga Therapy", href: "/courses/msc-yoga-therapy" },
  { label: "M.Sc. Yoga & Vedic Wellness", href: "/courses/msc-yoga-vedic-therapy" },
  { label: "MD Yoga", href: "/courses/doctor-of-medicine-yoga" },
  { label: "M.A. Yoga Darshanam", href: "/courses/master-of-arts-yoga-darshanam" },
  { label: "Ph.D Yoga", href: "/courses/phd-yoga" },
  { label: "Aerial Yoga", href: "/courses/aerial-yoga" },
  { label: "YIC", href: "/courses/yoga-instructor-course" },
  { label: "Ayurveda Lifestyle Management", href: "/courses/ayurveda-lifestyle-management" },
  { label: "SMET", href: "/courses/self-management-excessive-tension" },
  { label: "B.Sc. Yoga (Distance)", href: "https://svyasadde.com/bsc/" },
  { label: "M.Sc. Yoga (Distance)", href: "https://svyasadde.com/msc/" },
  { label: "YIC (Distance)", href: "https://svyasadde.com/yic/" },
  { label: "DYT (Distance)", href: "https://svyasadde.com/dyt/" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", color: "hover:bg-blue-600", href: "#" },
  { icon: Instagram, label: "Instagram", color: "hover:bg-pink-600", href: "#" },
  { icon: Twitter, label: "Twitter", color: "hover:bg-sky-500", href: "#" },
  { icon: Youtube, label: "YouTube", color: "hover:bg-red-600", href: "#" },
  { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-700", href: "#" },
];

const MegaFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="bg-secondary text-secondary-foreground pt-10 md:pt-16 pb-24 md:pb-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-6">
              <img 
                src={svyasaLogo} 
                alt="S-VYASA University" 
                className="h-20 w-auto object-contain"
              />
            </div>

            {/* Global City Campus */}
            <div className="mb-6">
              <h4 className="text-gold font-semibold text-sm mb-3">Global City Campus</h4>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <a href="tel:+919070907066" className="hover:text-gold transition-colors">+91-9070907066</a>
                    <span className="mx-1">|</span>
                    <a href="tel:+919070907099" className="hover:text-gold transition-colors">+91-9070907099</a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a href="tel:08022639998" className="hover:text-gold transition-colors">080-22639998</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a href="mailto:info@svyasa.edu.in" className="hover:text-gold transition-colors">info@svyasa.edu.in</a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Sattva Global City, Mysore Road, RR Nagar, Bengaluru - 560059</span>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold text-xs hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> Location Map
                </a>
              </div>
            </div>

            {/* Prashanti Campus */}
            <div>
              <h4 className="text-gold font-semibold text-sm mb-3">Prashanti Kutiram Campus</h4>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <a href="tel:+918762996815" className="hover:text-gold transition-colors">+91-87629 96815</a>
                    <span className="mx-1">|</span>
                    <a href="tel:+917022024777" className="hover:text-gold transition-colors">+91-7022024777</a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a href="mailto:admissions@svyasa.org" className="hover:text-gold transition-colors">admissions@svyasa.org</a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Vivekananda Road, Jigani, Anekal, Bengaluru – 560105</span>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold text-xs hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> Location Map
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Global City Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading text-lg font-semibold mb-4">Global City Campus</h3>
            <p className="text-xs text-gold mb-3">Programmes Offered</p>
            <ul className="space-y-1.5">
              {gccPrograms.map((program, index) => (
                <motion.li
                  key={program.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.02 }}
                >
                  <Link to={program.href} className="text-sm text-secondary-foreground/70 hover:text-gold transition-colors">
                    {program.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Prashanti Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-heading text-lg font-semibold mb-4">Prashanti Campus</h3>
            <p className="text-xs text-gold mb-3">Programmes Offered</p>
            <ul className="space-y-1.5">
              {prashanthiPrograms.map((program, index) => (
                <motion.li
                  key={program.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.02 }}
                >
                  {program.href.startsWith("http") ? (
                    <a href={program.href} target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-foreground/70 hover:text-gold transition-colors">
                      {program.label}
                    </a>
                  ) : (
                    <Link to={program.href} className="text-sm text-secondary-foreground/70 hover:text-gold transition-colors">
                      {program.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Admissions", href: "/admissions" },
                { label: "Research", href: "/research" },
                { label: "Careers", href: "/careers" },
                { label: "Library", href: "/library" },
                { label: "IQAC", href: "/iqac" },
                { label: "Gallery", href: "/gallery" },
                { label: "News & Events", href: "/news-events" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.03 }}
                >
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-gold transition-colors relative group inline-block"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-sm text-secondary-foreground/60 text-center"
            >
              © {new Date().getFullYear()} S-VYASA Deemed-to-be University. All rights reserved.
            </motion.p>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="flex gap-4 text-sm text-secondary-foreground/60"
            >
              <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="/mandatory-disclosure" className="hover:text-gold transition-colors">Disclosure</Link>
              <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Back to Top Button - Desktop only (mobile has floating bar) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 50 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:flex fixed bottom-24 right-8 w-12 h-12 bg-gold text-accent-foreground rounded-full shadow-large items-center justify-center z-40"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default MegaFooter;
