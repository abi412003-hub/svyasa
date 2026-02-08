import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle, ArrowUp, X } from "lucide-react";

const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

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

  // Desktop vertical stack
  const DesktopFloatingButtons = () => (
    <div className="hidden md:flex fixed bottom-8 right-8 flex-col gap-3 z-40">
      {/* Phone with tooltip */}
      <div className="relative">
        <motion.button
          onClick={() => setShowPhoneTooltip(!showPhoneTooltip)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full shadow-large flex items-center justify-center hover:bg-secondary/90 transition-colors"
        >
          <Phone className="w-5 h-5" />
        </motion.button>

        <AnimatePresence>
          {showPhoneTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card rounded-xl shadow-large p-4 min-w-[220px]"
            >
              <button
                onClick={() => setShowPhoneTooltip(false)}
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              >
                <X size={14} />
              </button>
              <h4 className="font-semibold text-foreground mb-3">Call Us</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs">Global City Campus</p>
                  <a href="tel:+919070907066" className="text-primary hover:underline">
                    +91 9070907066
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Prashanti Campus</p>
                  <a href="tel:+918762996815" className="text-primary hover:underline">
                    +91 8762996815
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Email */}
      <motion.a
        href="mailto:info@svyasa.edu.in"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-large flex items-center justify-center hover:bg-primary/90 transition-colors"
      >
        <Mail className="w-5 h-5" />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919070907066"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-green-500 text-white rounded-full shadow-large flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-gold text-accent-foreground rounded-full shadow-large flex items-center justify-center hover:bg-gold/90 transition-colors"
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
    </div>
  );

  // Mobile fixed bottom bar
  const MobileFloatingBar = () => (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-large z-40"
    >
      <div className="flex items-center justify-around py-3">
        <motion.a
          href="https://applynow.svyasa.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="flex-1 mx-1 py-2.5 bg-primary text-primary-foreground rounded-lg text-center text-sm font-medium"
        >
          Apply Now
        </motion.a>
        <motion.a
          href="tel:+919070907066"
          whileTap={{ scale: 0.95 }}
          className="flex-1 mx-1 py-2.5 bg-secondary text-secondary-foreground rounded-lg text-center text-sm font-medium"
        >
          Call Us
        </motion.a>
        <motion.a
          href="https://wa.me/919070907066"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="flex-1 mx-1 py-2.5 bg-green-500 text-white rounded-lg text-center text-sm font-medium"
        >
          WhatsApp
        </motion.a>
      </div>
    </motion.div>
  );

  return (
    <>
      <DesktopFloatingButtons />
      <MobileFloatingBar />
    </>
  );
};

export default FloatingActions;
