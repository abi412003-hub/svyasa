import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import CareersHero from "@/components/careers/CareersHero";
import CareersIntro from "@/components/careers/CareersIntro";
import WhyWorkHere from "@/components/careers/WhyWorkHere";
import JobListings from "@/components/careers/JobListings";
import ApplicationProcess from "@/components/careers/ApplicationProcess";
import CareersQuote from "@/components/careers/CareersQuote";
import CareersCTA from "@/components/careers/CareersCTA";

const Careers = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Careers" },
  ];

  return (
    <Layout>
      <CareersHero />

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

      <CareersIntro />
      <WhyWorkHere />
      <JobListings />
      <ApplicationProcess />
      <CareersQuote />
      <CareersCTA />
    </Layout>
  );
};

export default Careers;
