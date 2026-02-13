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
import ProgramsSection from "@/components/ProgramsSection";
import WhySection from "@/components/WhySection";
import AnnouncementsTicker from "@/components/AnnouncementsTicker";
import ResearchSection from "@/components/ResearchSection";
import CampusSection from "@/components/CampusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventsSection from "@/components/EventsSection";
import AffiliationsSection from "@/components/AffiliationsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

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
          <HeroSection />
          <StatsSection />
          <ProgramsSection />
          <WhySection />
          <AnnouncementsTicker />
          <ResearchSection />
          <CampusSection />
          <PresidentsNote />
          <ChancellorsNote />
          <TestimonialsSection />
          <EventsSection />
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
