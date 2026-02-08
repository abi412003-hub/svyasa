import SocietyHero from "@/components/society/SocietyHero";
import BoardMembers from "@/components/society/BoardMembers";
import WhySVyasa from "@/components/society/WhySVyasa";
import SocietyCTA from "@/components/society/SocietyCTA";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const Society = () => {
  return (
    <Layout>
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about" },
          { label: "S-VYASA Society" },
        ]}
      />
      <SocietyHero />
      <BoardMembers />
      <WhySVyasa />
      <SocietyCTA />
    </Layout>
  );
};

export default Society;
