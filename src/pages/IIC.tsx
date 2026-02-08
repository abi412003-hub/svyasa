import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import IICHero from "@/components/iic/IICHero";
import IICNav from "@/components/iic/IICNav";
import IICAbout from "@/components/iic/IICAbout";
import IICVisionMission from "@/components/iic/IICVisionMission";
import IICObjectives from "@/components/iic/IICObjectives";
import IICActivities from "@/components/iic/IICActivities";
import IICImpact from "@/components/iic/IICImpact";
import IICTeam from "@/components/iic/IICTeam";
import IICGallery from "@/components/iic/IICGallery";
import IICCTA from "@/components/iic/IICCTA";

const IIC = () => {
  const breadcrumbItems = [{ label: "IIC" }];

  return (
    <Layout>
      <IICHero />
      <Breadcrumb items={breadcrumbItems} />
      <IICNav />
      <IICAbout />
      <IICVisionMission />
      <IICObjectives />
      <IICActivities />
      <IICImpact />
      <IICTeam />
      <IICGallery />
      <IICCTA />
    </Layout>
  );
};

export default IIC;
