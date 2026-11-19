import { useState, useEffect } from "react";
import PanchaKoshaLoader from "@/components/PanchaKoshaLoader";
import MegaMenuHeader from "@/components/MegaMenuHeader";
import MegaFooter from "@/components/MegaFooter";
import FloatingActions from "@/components/FloatingActions";
import ScrollProgress from "@/components/society/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PresidentsNote from "@/components/PresidentsNote";
import ChancellorsNote from "@/components/ChancellorsNote";
import ViceChancellorsNote from "@/components/ViceChancellorsNote";
import ProgramsSection from "@/components/ProgramsSection";
import WhySection from "@/components/WhySection";
import AnnouncementsTicker from "@/components/AnnouncementsTicker";
import ResearchSection from "@/components/ResearchSection";
import CampusSection from "@/components/CampusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AffiliationsSection from "@/components/AffiliationsSection";
import CTASection from "@/components/CTASection";

// The intro animation only plays when a visitor first lands on the home page.
// Clicking "Home" from another page (or returning later in the session) goes
// straight to the hero slideshow.
const LANDED_ON_HOME = typeof window !== "undefined" && window.location.pathname === "/";
let introPlayed = false;

const shouldPlayIntro = () => {
  if (!LANDED_ON_HOME || introPlayed) return false;
  try {
    return !sessionStorage.getItem("svyasa-visited");
  } catch {
    return false;
  }
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(shouldPlayIntro);
  const [isContentReady, setIsContentReady] = useState(false);

  // Never replay the intro after the first visit to the home page.
  useEffect(() => {
    introPlayed = true;
  }, []);

  useEffect(() => {
    // Mark content as ready once images are preloaded
    const preloadImages = async () => {
      // Give a minimum time for initial render
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsContentReady(true);
    };
    preloadImages();
  }, []);

  const handleLoaderComplete = () => {
    introPlayed = true;
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <PanchaKoshaLoader 
          onComplete={handleLoaderComplete} 
          isContentReady={isContentReady}
        />
      )}
      
      <div className={`min-h-screen transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <ScrollProgress />
        <MegaMenuHeader />
        <main>
          <HeroSection active={!isLoading} />
          <StatsSection />
          <AnnouncementsTicker />
          <ProgramsSection />
          <WhySection />
          <ResearchSection />
          <CampusSection />
          <PresidentsNote />
          <ChancellorsNote />
          <ViceChancellorsNote />
          <TestimonialsSection />
          <AffiliationsSection />
          <CTASection />
        </main>
        <MegaFooter />
        <FloatingActions />
      </div>
    </>
  );
};

export default Index;
