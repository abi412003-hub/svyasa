import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Scale, Users, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Brain,
    iconColor: "text-primary",
    borderColor: "border-primary",
    title: "Counseling & Mental Health",
    description: "Confidential one-on-one counseling sessions for stress, anxiety, depression, relationship challenges, and academic pressure. We provide a safe space for every student to speak openly and receive professional support in today's fast-paced academic environment.",
    delay: 0,
  },
  {
    icon: Scale,
    iconColor: "text-secondary",
    borderColor: "border-secondary",
    title: "Student Rights & Advocacy",
    description: "We advocate for students' rights and ensure access to a fair, supportive learning environment. From addressing discrimination and harassment to guiding students through grievance processes, the SWC works with administration to create policies that promote equity and inclusion.",
    delay: 0.15,
  },
  {
    icon: Users,
    iconColor: "text-gold",
    borderColor: "border-gold",
    title: "Outreach & Community Building",
    description: "Workshops on time management, study skills, and leadership development help students grow personally and academically. Social activities, peer support networks, and group programs build connections and make the campus a welcoming space for everyone.",
    delay: 0.3,
  },
  {
    icon: ClipboardCheck,
    iconColor: "text-teal-600",
    borderColor: "border-teal-500",
    title: "Grievance Redressal",
    description: "A structured and transparent process for students facing difficulties — whether academic, administrative, or interpersonal. The SWC provides clear channels and guidance to ensure every concern is heard and resolved fairly.",
    delay: 0.45,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: service.delay }}
    >
      <div className={`h-full bg-card rounded-2xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-large border-l-4 ${service.borderColor}`}>
        {/* Animated left border glow on hover */}
        <motion.div
          className={`absolute left-0 top-0 w-1 rounded-l-2xl bg-gradient-to-b from-primary via-gold to-primary opacity-0 group-hover:opacity-100 transition-opacity`}
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: service.delay + 0.2 }}
        />

        {/* Icon */}
        <motion.div
          className={`w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-6 ${service.iconColor}`}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <h3 className="font-heading text-xl text-foreground mb-4">{service.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
      </div>
    </motion.div>
  );
};

const SWCServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading text-3xl md:text-4xl text-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            {"How We Support You".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            className="h-1 bg-gold mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SWCServices;
