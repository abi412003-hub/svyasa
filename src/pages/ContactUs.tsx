import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ContactHero from "@/components/contact/ContactHero";
import CampusCards from "@/components/contact/CampusCards";
import InteractiveMaps from "@/components/contact/InteractiveMaps";
import ContactForm from "@/components/contact/ContactForm";
import QuickContactStrip from "@/components/contact/QuickContactStrip";
import ContactCTA from "@/components/contact/ContactCTA";

const ContactUs = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact S-VYASA" },
  ];

  return (
    <Layout>
      <ContactHero />

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

      <CampusCards />
      <InteractiveMaps />
      <ContactForm />
      <QuickContactStrip />
      <ContactCTA />
    </Layout>
  );
};

export default ContactUs;
