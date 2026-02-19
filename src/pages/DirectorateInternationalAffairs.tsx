import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import DIAHero from "@/components/international-affairs/DIAHero";
import DIANavigation from "@/components/international-affairs/DIANavigation";
import DIAContent from "@/components/international-affairs/DIAContent";
import DIAForm from "@/components/international-affairs/DIAForm";
import DIAStats from "@/components/international-affairs/DIAStats";
import DIABadge from "@/components/international-affairs/DIABadge";
import DIACTA from "@/components/international-affairs/DIACTA";

const DirectorateInternationalAffairs = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const breadcrumbItems = [{ label: "Directorate of International Affairs" }];

  return (
    <Layout>
      <DIAHero />
      <Breadcrumb items={breadcrumbItems} />
      <DIANavigation isSticky={isSticky} />

      {/* Main Content Section */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Content */}
            <div className="lg:col-span-3">
              <DIAContent />
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2">
              <DIAForm />
            </div>
          </div>
        </div>
      </section>

      <DIAStats />
      
      <DIABadge />
      <DIACTA />
    </Layout>
  );
};

export default DirectorateInternationalAffairs;
