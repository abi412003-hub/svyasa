import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import NewsEventsHero from "@/components/news-events/NewsEventsHero";
import NewsGrid from "@/components/news-events/NewsGrid";
import EventsTimeline from "@/components/news-events/EventsTimeline";
import NewsEventsCTA from "@/components/news-events/NewsEventsCTA";

type TabType = "news" | "events";

const NewsEvents = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<TabType>("news");
  const [isSticky, setIsSticky] = useState(false);

  // Handle URL hash on load
  useEffect(() => {
    if (location.hash === "#events") {
      setActiveTab("events");
    }
  }, [location.hash]);

  // Handle sticky tabs
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "News & Events" },
  ];

  return (
    <Layout>
      <NewsEventsHero />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumb items={breadcrumbItems} />
          </motion.div>
        </div>
      </div>

      {/* Sticky Tab Toggle */}
      <div
        className={`bg-white/90 backdrop-blur-md border-b border-border z-30 transition-all duration-300 ${
          isSticky ? "sticky top-16" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-4">
            <div className="inline-flex bg-muted rounded-full p-1">
              {(["news", "events"] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    activeTab === tab
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeNewsEventsTab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{tab}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {activeTab === "news" ? (
              <motion.div
                key="news"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <NewsGrid />
              </motion.div>
            ) : (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <EventsTimeline />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <NewsEventsCTA />
    </Layout>
  );
};

export default NewsEvents;
