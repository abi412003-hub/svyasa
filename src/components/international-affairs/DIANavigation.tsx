import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { subNavTabs } from "./diaData";

interface DIANavigationProps {
  isSticky: boolean;
}

const DIANavigation = ({ isSticky }: DIANavigationProps) => {
  return (
    <div
      className={`bg-white/95 backdrop-blur-md border-b border-border z-30 transition-all duration-300 ${
        isSticky ? "sticky top-16" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center py-3 overflow-x-auto">
          <div className="inline-flex bg-muted rounded-full p-1 gap-1">
            {subNavTabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.href}
                className={`relative px-4 md:px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                  tab.active
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                } ${tab.comingSoon ? "cursor-default" : ""}`}
                onClick={(e) => tab.comingSoon && e.preventDefault()}
              >
                {tab.active && (
                  <motion.div
                    layoutId="activeDIATab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.label}
                  {tab.comingSoon && (
                    <span className="px-1.5 py-0.5 bg-gold/20 text-gold text-[10px] font-semibold rounded-full uppercase">
                      Soon
                    </span>
                  )}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DIANavigation;
