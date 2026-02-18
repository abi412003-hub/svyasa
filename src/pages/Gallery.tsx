import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import { prashantiCategories as staticPrashanti, globalCityCategories as staticGCC } from "@/components/gallery/galleryData";
import { useGalleryImages } from "@/hooks/useGalleryImages";
import { GalleryCategory } from "@/components/gallery/galleryData";

type CampusTab = "prashanti" | "globalcity" | "all";

const GallerySkeleton = () => (
  <div className="columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="break-inside-avoid mb-4 rounded-xl bg-muted animate-pulse"
        style={{ height: `${180 + (i % 3) * 60}px` }}
      />
    ))}
  </div>
);

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<CampusTab>("prashanti");
  const [isSticky, setIsSticky] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const { prashantiCategories, globalCityCategories, flatCategories, loading } = useGalleryImages();

  // Determine final categories: use dynamic data if available, else static fallback
  const finalPrashanti: GalleryCategory[] =
    prashantiCategories.length > 0 ? prashantiCategories : [];
  const finalGCC: GalleryCategory[] =
    globalCityCategories.length > 0 ? globalCityCategories : [];

  // If images were uploaded without campus folders, show them under "All"
  const hasFlatImages = flatCategories.length > 0;
  const tabs: { id: CampusTab; label: string }[] = [
    ...(finalPrashanti.length > 0 || loading ? [{ id: "prashanti" as CampusTab, label: "Prashanti Campus" }] : []),
    ...(finalGCC.length > 0 || loading ? [{ id: "globalcity" as CampusTab, label: "Global City Campus" }] : []),
    ...(hasFlatImages ? [{ id: "all" as CampusTab, label: "All Photos" }] : []),
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-select first available tab when data loads
  useEffect(() => {
    if (!loading) {
      if (finalPrashanti.length > 0) setActiveTab("prashanti");
      else if (finalGCC.length > 0) setActiveTab("globalcity");
      else if (hasFlatImages) setActiveTab("all");
    }
  }, [loading]);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Gallery" },
  ];

  const activeCategories =
    activeTab === "prashanti"
      ? finalPrashanti.length > 0 ? finalPrashanti : staticPrashanti
      : activeTab === "globalcity"
      ? finalGCC.length > 0 ? finalGCC : staticGCC
      : flatCategories;

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
      {tabs.length > 1 && (
        <div
          className={`bg-white/90 backdrop-blur-md border-b border-border z-30 transition-all duration-300 ${
            isSticky ? "sticky top-16" : ""
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-center py-4">
              <div className="inline-flex bg-muted rounded-full p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 md:px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${
                      activeTab === tab.id
                        ? "text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeGalleryTab"
                        className="absolute inset-0 bg-primary rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Content */}
      <section className="py-12 bg-cream relative">
        {/* Scroll progress indicator */}
        <motion.div
          className="absolute top-0 left-0 h-1 bg-primary z-20"
          style={{ width: progressWidth }}
        />

        <div className="container mx-auto px-4">
          {loading ? (
            <GallerySkeleton />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GalleryGrid categories={activeCategories} />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      <GalleryCTA />
    </Layout>
  );
};

export default Gallery;
