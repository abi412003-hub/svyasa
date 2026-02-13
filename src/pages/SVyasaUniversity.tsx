import { useState, useEffect } from "react";
import PanchaKoshaLoader from "@/components/PanchaKoshaLoader";
import MegaMenuHeader from "@/components/MegaMenuHeader";
import MegaFooter from "@/components/MegaFooter";
import FloatingActions from "@/components/FloatingActions";
import ScrollProgress from "@/components/society/ScrollProgress";
import Breadcrumb from "@/components/Breadcrumb";
import UniversityHero from "@/components/university/UniversityHero";
import UniversityTimeline from "@/components/university/UniversityTimeline";
import UniversityVisionMission from "@/components/university/UniversityVisionMission";
import UniversityUnique from "@/components/university/UniversityUnique";
import UniversityAccreditations from "@/components/university/UniversityAccreditations";
import UniversityKeyFacts from "@/components/university/UniversityKeyFacts";
import UniversityCampuses from "@/components/university/UniversityCampuses";
import UniversityCTA from "@/components/university/UniversityCTA";

const SVyasaUniversity = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsContentReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const breadcrumbItems = [
    { label: "About Us", href: "/about" },
    { label: "S-VYASA University" },
  ];

  return (
    <>
      {isLoading && (
        <PanchaKoshaLoader onComplete={() => setIsLoading(false)} isContentReady={isContentReady} />
      )}
      <div className={`min-h-screen transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <ScrollProgress />
        <MegaMenuHeader />
        <Breadcrumb items={breadcrumbItems} />
        <main>
          <UniversityHero />
          <UniversityTimeline />
          <UniversityVisionMission />
          <UniversityUnique />
          <UniversityAccreditations />
          <UniversityKeyFacts />
          <UniversityCampuses />
          <UniversityCTA />
        </main>
        <MegaFooter />
        <FloatingActions />
      </div>
    </>
  );
};

export default SVyasaUniversity;
