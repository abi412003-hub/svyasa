import { useState, useEffect } from "react";
import PanchaKoshaLoader from "@/components/PanchaKoshaLoader";
import MegaMenuHeader from "@/components/MegaMenuHeader";
import MegaFooter from "@/components/MegaFooter";
import FloatingActions from "@/components/FloatingActions";
import ScrollProgress from "@/components/society/ScrollProgress";
import Breadcrumb from "@/components/Breadcrumb";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import FounderSpotlight from "@/components/about/FounderSpotlight";
import WhyVyasa from "@/components/about/WhyVyasa";
import LeadershipQuotes from "@/components/about/LeadershipQuotes";
import VisionMission from "@/components/about/VisionMission";
import Objectives from "@/components/about/Objectives";
import Achievements from "@/components/about/Achievements";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    // Mark content as ready once initial render completes
    const timer = setTimeout(() => {
      setIsContentReady(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  const breadcrumbItems = [
    { label: "About Us", href: "/about" },
    { label: "S-VYASA University" },
  ];

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
        <Breadcrumb items={breadcrumbItems} />
        <main>
          <AboutHero />
          <AboutIntro />
          <FounderSpotlight />
          <WhyVyasa />
          <LeadershipQuotes />
          <VisionMission />
          <Objectives />
          <Achievements />
          <AboutCTA />
        </main>
        <MegaFooter />
        <FloatingActions />
      </div>
    </>
  );
};

export default About;
