import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, FileText, ArrowRight } from "lucide-react";

const contactOptions = [
  {
    icon: MapPin,
    title: "Walk In",
    description: "Visit the Student Welfare Office at S-VYASA Global City Campus during working hours. No appointment needed for initial consultations.",
    borderColor: "border-primary",
    link: null,
    delay: 0,
  },
  {
    icon: Phone,
    title: "Call or Message",
    description: "Reach out via phone at +91-9070907066 or email info@svyasa.edu.in. All communications are treated with strict confidentiality.",
    borderColor: "border-secondary",
    link: null,
    delay: 0.15,
  },
  {
    icon: FileText,
    title: "Submit a Concern",
    description: "Use our structured grievance redressal process for formal concerns. The SWC ensures every complaint is heard, documented, and resolved fairly.",
    borderColor: "border-gold",
    link: {
      text: "Learn More",
      href: "https://docs.google.com/presentation/d/1acHBKGLtRbDoNbQ4msGXpgt1UKkJZBdr81PAsQ9LNA0/edit#slide=id.ge9090756a_1_78",
    },
    delay: 0.3,
  },
];

const ContactCard = ({ option, index }: { option: typeof contactOptions[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = option.icon;

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: option.delay }}
    >
      <div className={`h-full bg-card rounded-2xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-large border-l-4 ${option.borderColor}`}>
        {/* Icon */}
        <motion.div
          className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <h3 className="font-heading text-xl text-foreground mb-4">{option.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed text-sm mb-4">{option.description}</p>

        {/* Link if present */}
        {option.link && (
          <a
            href={option.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium group/link"
          >
            <span className="relative">
              {option.link.text}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const SWCContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Warm radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-10"
          style={{
            background: "radial-gradient(ellipse, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading text-3xl md:text-4xl text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            We're Here For You
          </motion.h2>

          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reach out anytime — your concerns matter.
          </motion.p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactOptions.map((option, index) => (
            <ContactCard key={option.title} option={option} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SWCContact;
