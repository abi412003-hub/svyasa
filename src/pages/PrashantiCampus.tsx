import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import PKHero from "@/components/prashanti/PKHero";
import PKPrograms from "@/components/prashanti/PKPrograms";
import PKHighlights from "@/components/prashanti/PKHighlights";
import PKAbout from "@/components/prashanti/PKAbout";
import PKFaculty from "@/components/prashanti/PKFaculty";
import PKAccreditations from "@/components/prashanti/PKAccreditations";
import PKNews from "@/components/prashanti/PKNews";
import PKUpcoming from "@/components/prashanti/PKUpcoming";
import PKLife from "@/components/prashanti/PKLife";
import PKCTA from "@/components/prashanti/PKCTA";

const PrashantiCampus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PKHero />
      <PKPrograms />
      <PKHighlights />
      <PKAbout />
      <PKFaculty />
      <PKAccreditations />
      <PKNews />
      <PKUpcoming />
      <PKLife />
      <PKCTA />
    </Layout>
  );
};

export default PrashantiCampus;
