import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import LibraryHero from "@/components/library/LibraryHero";
import LibraryOverview from "@/components/library/LibraryOverview";
import LibraryServices from "@/components/library/LibraryServices";
import LibraryResources from "@/components/library/LibraryResources";
import LibraryStaff from "@/components/library/LibraryStaff";
import LibraryCTA from "@/components/library/LibraryCTA";

type TabType = "overview" | "services" | "resources" | "staff";

const tabLabels: Record<TabType, string> = {
  overview: "Overview",
  services: "Services",
  resources: "Resources",
  staff: "Staff",
};

const Library = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const hash = location.hash.replace("#", "").toLowerCase();
    if (hash === "overview" || hash === "services" || hash === "resources" || hash === "staff" || hash === "staffs") {
      setActiveTab(hash === "staffs" ? "staff" : (hash as TabType));
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const breadcrumbItems = [{ label: "Library" }];

  return (
    <Layout>
      <LibraryHero />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Sticky Tab Navigation */}
      <div
        className={`bg-white/95 backdrop-blur-md border-b border-border z-30 transition-all duration-300 ${
          isSticky ? "sticky top-16" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-3 overflow-x-auto">
            <div className="inline-flex bg-muted rounded-full p-1 gap-1">
              {(Object.keys(tabLabels) as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                    activeTab === tab
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeLibraryTab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tabLabels[tab]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <section className="py-12 bg-cream min-h-[60vh]">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <LibraryOverview />
              </motion.div>
            )}
            {activeTab === "services" && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <LibraryServices />
              </motion.div>
            )}
            {activeTab === "resources" && (
              <motion.div
                key="resources"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <LibraryResources />
              </motion.div>
            )}
            {activeTab === "staff" && (
              <motion.div
                key="staff"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <LibraryStaff />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <LibraryCTA />
    </Layout>
  );
};

export default Library;
