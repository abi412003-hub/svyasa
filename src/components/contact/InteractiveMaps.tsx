import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const InteractiveMaps = () => {
  const [activeTab, setActiveTab] = useState<"global" | "prashanti">("global");

  const maps = {
    global: {
      title: "Global City Campus",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0397456565985!2d77.50539!3d12.908889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f2c8d4e09bf%3A0x6b4d0a0a3f58d06e!2sSattva%20Global%20City!5e0!3m2!1sen!2sin!4v1234567890",
    },
    prashanti: {
      title: "Prashanti Kutiram Campus",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5678901234567!2d77.6189!3d12.8023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8f2a9b6c5d%3A0x1234567890abcdef!2sPrashanti%20Kutiram!5e0!3m2!1sen!2sin!4v1234567890",
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
                  title={`${maps[activeTab].title} Map`}
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
