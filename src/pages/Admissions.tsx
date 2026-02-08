import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import AdmissionsHero from "@/components/admissions/AdmissionsHero";
import AdmissionsQuickActions from "@/components/admissions/AdmissionsQuickActions";
import ProgramCatalog from "@/components/admissions/ProgramCatalog";
import AdmissionsCTA from "@/components/admissions/AdmissionsCTA";
import {
  AdmissionProcessModal,
  NotificationsModal,
  FeeStructureModal,
  FloatingTriggers,
} from "@/components/admissions/AdmissionsModals";

const Admissions = () => {
  const [processModalOpen, setProcessModalOpen] = useState(false);
  const [notificationsModalOpen, setNotificationsModalOpen] = useState(false);
  const [feeModalOpen, setFeeModalOpen] = useState(false);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Admissions" },
  ];

  return (
    <Layout>
      <AdmissionsHero />

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

      <AdmissionsQuickActions onOpenFeeModal={() => setFeeModalOpen(true)} />
      <ProgramCatalog />
      <AdmissionsCTA />

      {/* Floating Triggers */}
      <FloatingTriggers
        onOpenProcess={() => setProcessModalOpen(true)}
        onOpenNotifications={() => setNotificationsModalOpen(true)}
      />

      {/* Modals */}
      <AdmissionProcessModal
        isOpen={processModalOpen}
        onClose={() => setProcessModalOpen(false)}
      />
      <NotificationsModal
        isOpen={notificationsModalOpen}
        onClose={() => setNotificationsModalOpen(false)}
      />
      <FeeStructureModal
        isOpen={feeModalOpen}
        onClose={() => setFeeModalOpen(false)}
      />
    </Layout>
  );
};

export default Admissions;
