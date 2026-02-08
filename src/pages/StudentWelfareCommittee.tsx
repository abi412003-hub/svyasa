import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import SWCHero from "@/components/swc/SWCHero";
import SWCMission from "@/components/swc/SWCMission";
import SWCServices from "@/components/swc/SWCServices";
import SWCStats from "@/components/swc/SWCStats";
import SWCCommittee from "@/components/swc/SWCCommittee";
import SWCContact from "@/components/swc/SWCContact";
import SWCInitiatives from "@/components/swc/SWCInitiatives";
import SWCTestimonial from "@/components/swc/SWCTestimonial";
import SocietyCTA from "@/components/society/SocietyCTA";

const StudentWelfareCommittee = () => {
  return (
    <Layout>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Student Welfare Committee" },
        ]}
      />
      <SWCHero />
      <SWCMission />
      <SWCServices />
      <SWCStats />
      <SWCCommittee />
      <SWCContact />
      <SWCInitiatives />
      <SWCTestimonial />
      <SocietyCTA />
    </Layout>
  );
};

export default StudentWelfareCommittee;
