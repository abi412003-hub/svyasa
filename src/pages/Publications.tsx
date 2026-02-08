import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import PublicationsHero from "@/components/publications/PublicationsHero";
import YogaSudhaSpotlight from "@/components/publications/YogaSudhaSpotlight";
import JournalHighlights from "@/components/publications/JournalHighlights";
import YogaSudhaArchives from "@/components/publications/YogaSudhaArchives";
import OtherPublications from "@/components/publications/OtherPublications";
import SubscribeSection from "@/components/publications/SubscribeSection";
import SocietyCTA from "@/components/society/SocietyCTA";

const Publications = () => {
  return (
    <Layout>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Publications" },
        ]}
      />
      <PublicationsHero />
      <YogaSudhaSpotlight />
      <JournalHighlights />
      <YogaSudhaArchives />
      <OtherPublications />
      <SubscribeSection />
      <SocietyCTA />
    </Layout>
  );
};

export default Publications;
