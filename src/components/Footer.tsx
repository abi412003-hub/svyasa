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
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import svyasaLogo from "@/assets/svyasa-logo.svg";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  "Quick Links": [
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/admissions" },
    { label: "Research", href: "/research" },
    { label: "Admissions", href: "/admissions" },
    { label: "Campus Life", href: "/life-at-svyasa" },
  ],
  Programs: [
    { label: "Yoga Programs", href: "/programs/yoga-programmes" },
    { label: "B.Tech", href: "/programs/btech" },
    { label: "MBA", href: "/programs/mba" },
    { label: "Ph.D Programs", href: "/courses/phd-computer-science" },
    { label: "Distance Learning", href: "https://svyasadde.com/" },
  ],
  Resources: [
    { label: "Library", href: "/library" },
    { label: "Publications", href: "/publications" },
    { label: "Exams", href: "/exams" },
    { label: "Gallery", href: "/gallery" },
    { label: "Careers", href: "/careers" },
  ],
  Connect: [
    { label: "Contact Us", href: "/contact-us" },
    { label: "News & Events", href: "/news-events" },
    { label: "International Affairs", href: "/directorate-of-international-affairs" },
    { label: "Training Programs", href: "/training" },
    { label: "Edtech Partners", href: "/edtech-partners" },
  ],
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", color: "hover:bg-blue-600", href: "https://www.facebook.com/svyasauniversity" },
  { icon: Instagram, label: "Instagram", color: "hover:bg-pink-600", href: "https://www.instagram.com/svyasauniversity" },
  { icon: Twitter, label: "Twitter", color: "hover:bg-sky-500", href: "https://twitter.com/svyasa" },
  { icon: Youtube, label: "YouTube", color: "hover:bg-red-600", href: "https://www.youtube.com/@svyasa" },
  { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-700", href: "https://www.linkedin.com/school/svyasa" },
];

const Footer = () => {
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
    <footer ref={ref} className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <img 
                src={svyasaLogo} 
                alt="S-VYASA University" 
                className="h-14 brightness-0 invert opacity-90"
              />
            </div>
            
            <p className="text-sm text-secondary-foreground/80 mb-6 leading-relaxed">
              Swami Vivekananda Yoga Anusandhana Samsthana - India's premier yoga university, 
              blending ancient wisdom with modern science.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <motion.a
                href="#"
                className="flex items-start gap-3 text-secondary-foreground/80 hover:text-gold transition-colors group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>No. 19, Eknath Bhavan, Gavipuram Circle, Bengaluru - 560019</span>
              </motion.a>
              <motion.a
                href="tel:+918028561999"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-gold transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4" />
                <span>+91 80 2856 1999</span>
              </motion.a>
              <motion.a
                href="mailto:info@svyasa.edu.in"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-gold transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4" />
                <span>info@svyasa.edu.in</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + columnIndex * 0.1 }}
            >
              <h3 className="font-heading text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + columnIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <a
                      href="#"
                      className="text-sm text-secondary-foreground/70 hover:text-gold transition-colors relative group inline-block"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-secondary-foreground/5 rounded-2xl p-6 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-secondary-foreground/70">
                Stay updated with the latest news, events, and research publications.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:border-gold"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="flex gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
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
              transition={{ delay: 0.9 }}
              className="text-sm text-secondary-foreground/60 text-center"
            >
              © {new Date().getFullYear()} S-VYASA Deemed-to-be University. All rights reserved.
            </motion.p>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="flex gap-4 text-sm text-secondary-foreground/60"
            >
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 50 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-large flex items-center justify-center z-40 hover:bg-primary/90 transition-colors"
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

export default Footer;
