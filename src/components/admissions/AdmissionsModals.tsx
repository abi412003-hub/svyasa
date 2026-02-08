import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Bell, FileText, Download } from "lucide-react";
import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Admission Process Modal
export const AdmissionProcessModal = ({ isOpen, onClose }: ModalProps) => {
  const steps = [
    { step: 1, title: "Choose Your Program", desc: "Browse programs and select the one that matches your aspirations" },
    { step: 2, title: "Submit Application", desc: "Fill out the online application form with required documents" },
    { step: 3, title: "Entrance Test / Interview", desc: "Appear for the entrance test or interview as applicable" },
    { step: 4, title: "Receive Offer Letter", desc: "Get your admission offer letter via email" },
    { step: 5, title: "Pay Fees & Confirm", desc: "Complete fee payment to confirm your admission" },
    { step: 6, title: "Welcome to S-VYASA!", desc: "Join orientation and begin your journey" },
  ];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       md:w-full md:max-w-2xl md:max-h-[80vh] bg-white/95 backdrop-blur-md rounded-2xl 
                       shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-display text-navy">Admission Process</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors group"
              >
                <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                </motion.div>
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Notifications Modal
export const NotificationsModal = ({ isOpen, onClose }: ModalProps) => {
  const notifications = [
    { id: 1, title: "STRAY VACANCY ROUND - MERIT LIST", date: "Feb 5, 2026", isNew: true },
    { id: 2, title: "Admissions Open for 2026-27 Academic Year", date: "Feb 1, 2026", isNew: true },
    { id: 3, title: "Scholarship Applications Now Open", date: "Jan 28, 2026", isNew: false },
    { id: 4, title: "Ph.D Entrance Test Schedule Released", date: "Jan 20, 2026", isNew: false },
    { id: 5, title: "International Student Quota Announced", date: "Jan 15, 2026", isNew: false },
  ];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       md:w-full md:max-w-lg md:max-h-[70vh] bg-white/95 backdrop-blur-md rounded-2xl 
                       shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-display text-navy">Notifications</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors group"
              >
                <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                </motion.div>
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              <div className="space-y-3">
                {notifications.map((notif, i) => (
                  <motion.div
                    key={notif.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-medium text-navy">{notif.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{notif.date}</p>
                      </div>
                      {notif.isNew && (
                        <span className="px-2 py-0.5 bg-primary text-white text-xs rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Fee Structure Modal
export const FeeStructureModal = ({ isOpen, onClose }: ModalProps) => {
  const [activeTab, setActiveTab] = useState<"global" | "prashanti">("global");

  const fees = {
    global: [
      { program: "BCA Programs", amount: "₹1,20,000/year" },
      { program: "BBA Programs", amount: "₹1,30,000/year" },
      { program: "B.Tech Programs", amount: "₹1,80,000/year" },
      { program: "MCA Programs", amount: "₹1,50,000/year" },
      { program: "MBA Programs", amount: "₹2,00,000/year" },
      { program: "Ph.D Programs", amount: "Contact Office" },
    ],
    prashanti: [
      { program: "B.Sc. Yoga Programs", amount: "₹80,000/year" },
      { program: "BNYS", amount: "₹1,50,000/year" },
      { program: "BPT", amount: "₹1,40,000/year" },
      { program: "M.Sc. Yoga Programs", amount: "₹90,000/year" },
      { program: "MD Yoga", amount: "₹1,20,000/year" },
      { program: "Certificate Courses", amount: "Varies" },
    ],
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       md:w-full md:max-w-xl md:max-h-[80vh] bg-white/95 backdrop-blur-md rounded-2xl 
                       shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-display text-navy">Fee Structure</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors group"
              >
                <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                </motion.div>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border">
              {(["global", "prashanti"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 text-sm font-medium relative transition-colors ${
                    activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "global" ? "Global Campus" : "Prashanti Campus"}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-3"
                >
                  {fees[activeTab].map((fee, i) => (
                    <motion.div
                      key={fee.program}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    >
                      <span className="font-medium text-navy">{fee.program}</span>
                      <span className="text-primary font-semibold">{fee.amount}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <motion.a
                href="#"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Complete Fee Structure (PDF)
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Floating Modal Triggers
interface FloatingTriggersProps {
  onOpenProcess: () => void;
  onOpenNotifications: () => void;
}

export const FloatingTriggers = ({ onOpenProcess, onOpenNotifications }: FloatingTriggersProps) => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        whileHover={{ x: -8 }}
        onClick={onOpenProcess}
        className="flex items-center gap-2 px-3 py-4 bg-primary text-white rounded-l-lg shadow-lg"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <CheckCircle className="w-4 h-4 rotate-90" />
        Admission Process
      </motion.button>
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ x: -8 }}
        onClick={onOpenNotifications}
        className="flex items-center gap-2 px-3 py-4 bg-navy text-white rounded-l-lg shadow-lg"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <Bell className="w-4 h-4 rotate-90" />
        Notifications
      </motion.button>
    </div>
  );
};
