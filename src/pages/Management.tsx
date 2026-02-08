import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ManagementHero from "@/components/management/ManagementHero";
import LeadershipBoard from "@/components/management/LeadershipBoard";
import GovernancePhilosophy from "@/components/management/GovernancePhilosophy";
import SocietyCTA from "@/components/society/SocietyCTA";
import ScrollProgress from "@/components/society/ScrollProgress";

const Management = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about" },
          { label: "Management" },
        ]}
      />
      <main>
        <ManagementHero />
        <LeadershipBoard />
        <GovernancePhilosophy />
        <SocietyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Management;
