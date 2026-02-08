import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, Calendar } from "lucide-react";

const ExamsQuickHelp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const helpItems = [
    {
      icon: Phone,
      title: "Exam Queries",
      value: "+91-8762996815",
      href: "tel:+918762996815",
      animation: "ring",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@svyasa.edu.in",
      href: "mailto:info@svyasa.edu.in",
      animation: "open",
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      value: "Download Calendar",
      href: "/academic-calendar.pdf",
      animation: "flip",
    },
  ];

  return (
    <section ref={ref} className="py-12 bg-navy">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {helpItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group flex items-center gap-4 p-5 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: item.animation === "ring" ? [0, -10, 10, -10, 0] : 0 }}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white"
              >
                <item.icon className="w-6 h-6" />
              </motion.div>
              <div>
                <p className="text-white/70 text-sm">{item.title}</p>
                <p className="text-white font-medium group-hover:text-gold transition-colors">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamsQuickHelp;
