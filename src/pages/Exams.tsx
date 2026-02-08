import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Search, X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ExamsHero from "@/components/exams/ExamsHero";
import NotificationsTab from "@/components/exams/NotificationsTab";
import TimetableTab from "@/components/exams/TimetableTab";
import ResultsTab from "@/components/exams/ResultsTab";
import OthersTab from "@/components/exams/OthersTab";
import ExamsQuickHelp from "@/components/exams/ExamsQuickHelp";
import ExamsCTA from "@/components/exams/ExamsCTA";

type TabType = "notification" | "examinations" | "results" | "others";

const tabLabels: Record<TabType, string> = {
  notification: "Notification",
  examinations: "Examinations Timetable",
  results: "Results",
  others: "Others",
};

const Exams = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<TabType>("notification");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  // Handle URL hash
  useEffect(() => {
    const hash = location.hash.replace("#", "").toLowerCase();
    if (hash === "notification" || hash === "examinations" || hash === "results" || hash === "others") {
      setActiveTab(hash as TabType);
    }
  }, [location.hash]);

  // Handle sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Exam" },
  ];

  return (
    <Layout>
      <ExamsHero />

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

      {/* Search Bar */}
      <div className="bg-cream py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-w-2xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search notifications, timetables, results..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-white rounded-full border-2 border-transparent focus:border-primary outline-none shadow-md transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        </div>
      </div>

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
                  className={`relative px-4 md:px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                    activeTab === tab
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeExamsTab"
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
      <section className="py-10 bg-cream min-h-[50vh]">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {activeTab === "notification" && (
              <motion.div
                key="notification"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <NotificationsTab searchQuery={searchQuery} />
              </motion.div>
            )}
            {activeTab === "examinations" && (
              <motion.div
                key="examinations"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TimetableTab searchQuery={searchQuery} />
              </motion.div>
            )}
            {activeTab === "results" && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ResultsTab searchQuery={searchQuery} />
              </motion.div>
            )}
            {activeTab === "others" && (
              <motion.div
                key="others"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <OthersTab />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <ExamsQuickHelp />
      <ExamsCTA />
    </Layout>
  );
};

export default Exams;
