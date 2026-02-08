import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import IQACHero from "@/components/iqac/IQACHero";
import IQACIntro from "@/components/iqac/IQACIntro";
import IQACDocuments from "@/components/iqac/IQACDocuments";
import IQACWhySection from "@/components/iqac/IQACWhySection";
import IQACQualityStrip from "@/components/iqac/IQACQualityStrip";
import IQACCTA from "@/components/iqac/IQACCTA";

const IQAC = () => {
  const breadcrumbItems = [{ label: "IQAC (Internal Quality Assurance Cell)" }];

  return (
    <Layout>
      <IQACHero />
      <Breadcrumb items={breadcrumbItems} />
      <IQACIntro />
      <IQACDocuments />
      <IQACWhySection />
      <IQACQualityStrip />
      <IQACCTA />
    </Layout>
  );
};

export default IQAC;
