import ManagementHero from "@/components/management/ManagementHero";
import LeadershipBoard from "@/components/management/LeadershipBoard";
import GovernancePhilosophy from "@/components/management/GovernancePhilosophy";
import SocietyCTA from "@/components/society/SocietyCTA";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const Management = () => {
  return (
    <Layout>
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about" },
          { label: "Management" },
        ]}
      />
      <ManagementHero />
      <LeadershipBoard />
      <GovernancePhilosophy />
      <SocietyCTA />
    </Layout>
  );
};

export default Management;
