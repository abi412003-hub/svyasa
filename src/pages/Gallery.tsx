import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import { prashantiCategories, globalCityCategories } from "@/components/gallery/galleryData";

type CampusTab = "prashanti" | "globalcity";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<CampusTab>("prashanti");
  const [isSticky, setIsSticky] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Gallery" },
  ];

  return (
    <Layout>
      <GalleryHero />

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
              {(["prashanti", "globalcity"] as CampusTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 md:px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    activeTab === tab
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeGalleryTab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab === "prashanti" ? "Prashanti Campus" : "Global City Campus"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <section className="py-12 bg-cream relative">
        {/* Scroll progress indicator */}
        <motion.div
          className="absolute top-0 left-0 h-1 bg-primary z-20"
          style={{ width: progressWidth }}
        />

        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {activeTab === "prashanti" ? (
              <motion.div
                key="prashanti"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GalleryGrid categories={prashantiCategories} />
              </motion.div>
            ) : (
              <motion.div
                key="globalcity"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GalleryGrid categories={globalCityCategories} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <GalleryCTA />
    </Layout>
  );
};

export default Gallery;
