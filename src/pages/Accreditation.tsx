import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import AccreditationHero from "@/components/accreditation/AccreditationHero";
import AccreditationShowcase from "@/components/accreditation/AccreditationShowcase";
import AdditionalRecognitions from "@/components/accreditation/AdditionalRecognitions";
import TrustMetrics from "@/components/accreditation/TrustMetrics";
import AccreditationValue from "@/components/accreditation/AccreditationValue";
import SocietyCTA from "@/components/society/SocietyCTA";

const Accreditation = () => {
  return (
    <Layout>
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about" },
          { label: "Accreditation" },
        ]}
      />
      <AccreditationHero />
      <AccreditationShowcase />
      <AdditionalRecognitions />
      <TrustMetrics />
      <AccreditationValue />
      <SocietyCTA />
    </Layout>
  );
};

export default Accreditation;
