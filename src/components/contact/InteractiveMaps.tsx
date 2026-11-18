import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GLOBAL_CITY_CAMPUS, PRASHANTI_KUTIRAM } from "@/config/campusLocations";

const InteractiveMaps = () => {
  const [activeTab, setActiveTab] = useState<"global" | "prashanti">("global");

  const maps = {
    global: {
      title: "Global City Campus",
      embedUrl: GLOBAL_CITY_CAMPUS.embedUrl,
      mapTitle: GLOBAL_CITY_CAMPUS.mapTitle,
    },
    prashanti: {
      title: "Prashanti Kutiram Campus",
      embedUrl: PRASHANTI_KUTIRAM.embedUrl,
      mapTitle: PRASHANTI_KUTIRAM.mapTitle,
    },
  };

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <motion.div
              initial={{ scaleX: 0, originX: 1 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-0.5 w-16 bg-gold"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-display text-navy"
            >
              Find Us
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-0.5 w-16 bg-gold"
            />
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            {(["global", "prashanti"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeMapTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === "global" ? "Global City Campus" : "Prashanti Campus"}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="aspect-video"
              >
                <iframe
                  src={maps[activeTab].embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={maps[activeTab].mapTitle}
                  className="w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveMaps;
