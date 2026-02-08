import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  ClipboardList, 
  Settings, 
  Shield, 
  Cookie, 
  Link2, 
  UserCheck, 
  Baby, 
  RefreshCw, 
  Headphones,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

// Policy sections data
const policySections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: ClipboardList,
    content: [
      {
        subtitle: "Personal Information Provided Directly",
        text: "When you interact with S-VYASA through admissions, inquiries, event registrations, or our website, we may collect: your name, email address, phone number, date of birth, postal address, educational qualifications, academic records, photographs, and identification documents.",
      },
      {
        subtitle: "Information Collected Automatically",
        text: "When you visit our website, we may automatically collect: IP address, browser type and version, device information, pages visited, time spent on pages, referring website, and clickstream data.",
      },
      {
        subtitle: "Sensitive Information",
        text: "For specific academic and health-related programs (such as Yoga Therapy, Naturopathy, and Physiotherapy), we may collect health-related information solely for academic and program purposes, with your explicit consent.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    icon: Settings,
    useCases: [
      "Processing admissions and enrollment",
      "Communicating about programs, events, and university updates",
      "Academic record management and examination processes",
      "Improving website experience and services",
      "Compliance with UGC, NAAC, and regulatory requirements",
      "Research and statistical analysis (anonymized)",
    ],
  },
  {
    id: "data-storage-security",
    title: "Data Storage & Security",
    icon: Shield,
    content: [
      {
        text: "Your data is stored on secure servers located in India. S-VYASA employs industry-standard security measures including encryption (SSL/TLS), secure access controls, regular security audits, and restricted access policies to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      },
      {
        text: "We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and university regulations.",
      },
    ],
  },
  {
    id: "cookies-tracking",
    title: "Cookies & Tracking Technologies",
    icon: Cookie,
    introText: "Our website uses cookies and similar tracking technologies to enhance your browsing experience. These include:",
    cookies: [
      { name: "Essential Cookies", description: "Required for website functionality, login sessions, and security." },
      { name: "Analytics Cookies", description: "Help us understand how visitors interact with our website (Google Analytics)." },
      { name: "Marketing Cookies", description: "Used to deliver relevant advertisements and measure campaign effectiveness." },
    ],
    footerText: "You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.",
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    icon: Link2,
    introText: "S-VYASA may share limited data with trusted third-party service providers for:",
    items: [
      "Payment processing (admission fees, examination fees)",
      "Email communication services",
      "Website analytics and performance monitoring",
      "Government and regulatory bodies as required by law (UGC, NAAC, AICTE, Ministry of AYUSH)",
    ],
    footerText: "We do not sell, trade, or rent your personal information to third parties for marketing purposes.",
  },
  {
    id: "your-rights",
    title: "Your Rights & Choices",
    icon: UserCheck,
    rights: [
      { title: "Right to Access", description: "You may request a copy of your personal data held by S-VYASA." },
      { title: "Right to Correction", description: "You may request corrections to inaccurate or incomplete data." },
      { title: "Right to Erasure", description: "Subject to legal and academic requirements, you may request deletion of your data." },
      { title: "Right to Withdraw Consent", description: "Where processing is based on consent, you may withdraw consent at any time." },
      { title: "Right to Grievance Redressal", description: "You may file a complaint with our Grievance Officer or the Data Protection Board of India." },
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    icon: Baby,
    content: [
      {
        text: "S-VYASA does not knowingly collect personal information from children under the age of 18 without verifiable parental or guardian consent. If you believe a child's information has been collected without proper consent, please contact our Grievance Officer immediately.",
      },
    ],
  },
  {
    id: "policy-changes",
    title: "Changes to This Policy",
    icon: RefreshCw,
    content: [
      {
        text: "S-VYASA reserves the right to update this Privacy Policy periodically. Any changes will be posted on this page with a revised 'Last Updated' date. We encourage you to review this policy regularly. Continued use of our website and services after any changes constitutes acceptance of the updated policy.",
      },
    ],
  },
  {
    id: "grievance-contact",
    title: "Grievance Officer & Contact",
    icon: Headphones,
    isContact: true,
    contact: {
      name: "Designated Grievance Officer",
      designation: "Grievance Officer, S-VYASA Deemed-to-be University",
      email: "info@svyasa.edu.in",
      phone: "+91-9070907066",
      address: "Sattva Global City, Mysore Road, Rajarajeshwari Nagar, Bengaluru, Karnataka - 560059, INDIA",
      responseTime: "We aim to respond to all privacy-related inquiries within 30 days.",
    },
  },
];

// Table of Contents Sidebar
const TableOfContents = ({ activeSection }: { activeSection: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="hidden lg:block sticky top-24 h-fit"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-card/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 shadow-soft">
        <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
          Quick Navigation
        </h3>
        <nav className="space-y-2">
          {policySections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block text-sm transition-all duration-300 py-1.5 border-l-2 pl-3 ${
                activeSection === section.id
                  ? "text-primary border-primary translate-x-1 font-medium"
                  : "text-muted-foreground border-transparent hover:text-primary hover:translate-x-1"
              }`}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

// Mobile TOC Accordion
const MobileTOC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-card rounded-xl shadow-soft border border-gold/20"
      >
        <span className="font-medium text-secondary">Quick Navigation</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-card/50 rounded-b-xl border-x border-b border-gold/20">
          <nav className="space-y-2">
            {policySections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-muted-foreground hover:text-primary py-1"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </motion.div>
    </div>
  );
};

// Individual Policy Section
const PolicySection = ({ section, index }: { section: typeof policySections[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = section.icon;

  return (
    <motion.div
      ref={ref}
      id={section.id}
      className="scroll-mt-28 mb-12 last:mb-0"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        >
          <Icon className="w-6 h-6 text-primary" />
        </motion.div>
        <div>
          <h3 className="font-heading text-xl md:text-2xl text-secondary">{section.title}</h3>
          <motion.div
            className="h-0.5 bg-gold rounded-full mt-1"
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
        </div>
      </div>

      {/* Content variants */}
      <div className="pl-16 space-y-4">
        {/* Standard content blocks */}
        {section.content?.map((block, i) => (
          <div key={i}>
            {block.subtitle && (
              <h4 className="font-semibold text-foreground mb-2">{block.subtitle}</h4>
            )}
            <p className="text-muted-foreground leading-relaxed">{block.text}</p>
          </div>
        ))}

        {/* Use cases grid */}
        {section.useCases && (
          <div className="grid sm:grid-cols-2 gap-3">
            {section.useCases.map((useCase, i) => (
              <motion.div
                key={i}
                className="p-4 bg-card rounded-xl shadow-soft border border-border hover:-translate-y-1 transition-transform"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              >
                <p className="text-sm text-muted-foreground">{useCase}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Cookies section */}
        {section.cookies && (
          <>
            <p className="text-muted-foreground">{section.introText}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {section.cookies.map((cookie, i) => (
                <motion.div
                  key={i}
                  className="p-4 bg-card rounded-xl shadow-soft border border-border"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                >
                  <h5 className="font-semibold text-foreground mb-2">{cookie.name}</h5>
                  <p className="text-sm text-muted-foreground">{cookie.description}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">{section.footerText}</p>
          </>
        )}

        {/* Third-party items */}
        {section.items && (
          <>
            <p className="text-muted-foreground">{section.introText}</p>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <p className="text-muted-foreground font-medium">{section.footerText}</p>
          </>
        )}

        {/* Rights section */}
        {section.rights && (
          <div className="space-y-3">
            {section.rights.map((right, i) => (
              <motion.div
                key={i}
                className="p-4 bg-card rounded-xl border-l-4 border-primary shadow-soft"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
              >
                <h5 className="font-semibold text-foreground mb-1">{right.title}</h5>
                <p className="text-sm text-muted-foreground">{right.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Contact section */}
        {section.isContact && section.contact && (
          <motion.div
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-t-4 border-gold shadow-medium"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4, boxShadow: "0 20px 50px -15px rgba(0,0,0,0.2)" }}
          >
            <h4 className="font-heading text-xl text-secondary mb-4">{section.contact.name}</h4>
            <p className="text-muted-foreground mb-4">{section.contact.designation}</p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${section.contact.email}`} className="text-primary hover:underline">
                  {section.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href={`tel:${section.contact.phone}`} className="text-muted-foreground hover:text-primary">
                  {section.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{section.contact.address}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground italic">{section.contact.responseTime}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const PrivacyContent = () => {
  const [activeSection, setActiveSection] = useState(policySections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    policySections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Sidebar */}
          <TableOfContents activeSection={activeSection} />

          {/* Main Content */}
          <div>
            <MobileTOC />
            {policySections.map((section, index) => (
              <PolicySection key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
