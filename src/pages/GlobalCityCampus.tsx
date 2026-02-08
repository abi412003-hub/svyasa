import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import GCCHero from "@/components/gcc/GCCHero";
import GCCPrograms from "@/components/gcc/GCCPrograms";
import GCCHighlights from "@/components/gcc/GCCHighlights";
import GCCVideo from "@/components/gcc/GCCVideo";
import GCCNews from "@/components/gcc/GCCNews";
import GCCUpcoming from "@/components/gcc/GCCUpcoming";
import GCCLifestyle from "@/components/gcc/GCCLifestyle";
import GCCCTA from "@/components/gcc/GCCCTA";

const GlobalCityCampus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <GCCHero />
      <GCCPrograms />
      <GCCHighlights />
      <GCCVideo />
      <GCCNews />
      <GCCUpcoming />
      <GCCLifestyle />
      <GCCCTA />
    </Layout>
  );
};

export default GlobalCityCampus;
