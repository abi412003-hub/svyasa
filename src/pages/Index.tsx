import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhySection from "@/components/WhySection";
import AnnouncementsTicker from "@/components/AnnouncementsTicker";
import ResearchSection from "@/components/ResearchSection";
import CampusSection from "@/components/CampusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventsSection from "@/components/EventsSection";
import AffiliationsSection from "@/components/AffiliationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      
      <div className={`min-h-screen transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Header />
        <main>
          <HeroSection />
          <StatsSection />
          <ProgramsSection />
          <WhySection />
          <AnnouncementsTicker />
          <ResearchSection />
          <CampusSection />
          <TestimonialsSection />
          <EventsSection />
          <AffiliationsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
