import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyIntro from "@/components/privacy/PrivacyIntro";
import PrivacyContent from "@/components/privacy/PrivacyContent";
import TrustAssurance from "@/components/privacy/TrustAssurance";
import SocietyCTA from "@/components/society/SocietyCTA";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Privacy & Policy" },
        ]}
      />
      <PrivacyHero />
      <PrivacyIntro />
      <PrivacyContent />
      <TrustAssurance />
      <SocietyCTA />
    </Layout>
  );
};

export default PrivacyPolicy;
