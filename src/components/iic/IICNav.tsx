import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { navTabs } from "./iicData";

const IICNav = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`z-40 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl shadow-lg"
          : "relative bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-6 py-4 overflow-x-auto">
          {navTabs.map((tab, i) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => scrollToSection(tab.id)}
              className={`relative px-4 py-2 text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-300 ${
                activeTab === tab.id
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-navy"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default IICNav;
