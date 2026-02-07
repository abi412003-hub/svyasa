import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const breadcrumbItems = [
    { label: "About Us", href: "/about" },
    { label: "S-VYASA University" },
  ];

  return (
    <>
      <Preloader isLoading={isLoading} />
      
      <div className={`min-h-screen transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Header />
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
        <Footer />
      </div>
    </>
  );
};

export default About;
