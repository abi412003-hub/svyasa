import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import LifeHero from "@/components/life/LifeHero";
import LifeSection from "@/components/life/LifeSection";
import { lifeSectionsData } from "@/components/life/lifeSectionsData";
import YogaWellnessSection from "@/components/life/YogaWellnessSection";
import LifeCTA from "@/components/life/LifeCTA";

const LifeAtSvyasa = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Life@S-VYASA" },
  ];

  return (
    <Layout>
      <LifeHero />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumb items={breadcrumbItems} />
          </motion.div>
        </div>
      </div>

      {/* Alternating Sections */}
      {lifeSectionsData.map((section, index) => (
        <LifeSection
          key={section.id}
          data={section}
          index={index}
          imagePosition={index % 2 === 0 ? "right" : "left"}
        />
      ))}

      {/* Yoga & Wellness - Grand Finale */}
      <YogaWellnessSection />

      {/* CTA */}
      <LifeCTA />
    </Layout>
  );
};

export default LifeAtSvyasa;
