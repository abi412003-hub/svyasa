import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import MDHero from "@/components/mandatory-disclosure/MDHero";
import MDIntro from "@/components/mandatory-disclosure/MDIntro";
import MDDocuments from "@/components/mandatory-disclosure/MDDocuments";
import MDTrustStrip from "@/components/mandatory-disclosure/MDTrustStrip";
import MDCTA from "@/components/mandatory-disclosure/MDCTA";

const MandatoryDisclosure = () => {
  const breadcrumbItems = [{ label: "Mandatory Disclosure" }];

  return (
    <Layout>
      <MDHero />
      <Breadcrumb items={breadcrumbItems} />
      <MDIntro />
      <MDDocuments />
      <MDTrustStrip />
      <MDCTA />
    </Layout>
  );
};

export default MandatoryDisclosure;
