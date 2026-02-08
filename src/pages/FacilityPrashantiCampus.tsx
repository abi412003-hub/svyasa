import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import FPHero from "@/components/facility-prashanti/FPHero";
import FPGallery from "@/components/facility-prashanti/FPGallery";
import FPInfoBlock from "@/components/facility-prashanti/FPInfoBlock";
import FPStatsBar from "@/components/facility-prashanti/FPStatsBar";
import FPCTA from "@/components/facility-prashanti/FPCTA";

const FacilityPrashantiCampus = () => {
  const breadcrumbItems = [
    { label: "Life@S-VYASA", href: "/prashanti-campus" },
    { label: "Facility – Prashanti Campus" },
  ];

  return (
    <Layout>
      <FPHero />
      <Breadcrumb items={breadcrumbItems} />
      <FPGallery />
      <FPInfoBlock />
      <FPStatsBar />
      <FPCTA />
    </Layout>
  );
};

export default FacilityPrashantiCampus;
