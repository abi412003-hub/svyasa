import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import AIUHero from "@/components/aiu/AIUHero";
import AIUAbout from "@/components/aiu/AIUAbout";
import AIUHosted from "@/components/aiu/AIUHosted";
import AIUSponsors from "@/components/aiu/AIUSponsors";
import AIUHighlights from "@/components/aiu/AIUHighlights";
import AIUSponsorship from "@/components/aiu/AIUSponsorship";
import AIUImportance from "@/components/aiu/AIUImportance";
import AIUAboutAIU from "@/components/aiu/AIUAboutAIU";
import AIUJoinUs from "@/components/aiu/AIUJoinUs";
import AIUCTA from "@/components/aiu/AIUCTA";

const AIU = () => {
  const breadcrumbItems = [{ label: "AIU Yogasana Championship" }];

  return (
    <Layout>
      <AIUHero />
      <Breadcrumb items={breadcrumbItems} />
      <AIUAbout />
      <AIUHosted />
      <AIUSponsors />
      <AIUHighlights />
      <AIUSponsorship />
      <AIUImportance />
      <AIUAboutAIU />
      <AIUJoinUs />
      <AIUCTA />
    </Layout>
  );
};

export default AIU;
