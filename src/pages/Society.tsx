import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SocietyHero from "@/components/society/SocietyHero";
import BoardMembers from "@/components/society/BoardMembers";
import WhySVyasa from "@/components/society/WhySVyasa";
import SocietyCTA from "@/components/society/SocietyCTA";
import ScrollProgress from "@/components/society/ScrollProgress";

const Society = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about" },
          { label: "S-VYASA Society" },
        ]}
      />
      <main>
        <SocietyHero />
        <BoardMembers />
        <WhySVyasa />
        <SocietyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Society;
