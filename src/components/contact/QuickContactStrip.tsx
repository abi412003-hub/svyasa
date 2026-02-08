import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const QuickContactStrip = () => {
  const contactItems = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91-9070907066",
      href: "tel:+919070907066",
      subtitle: "Mon-Sat, 9AM-5PM",
      color: "primary",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@svyasa.edu.in",
      href: "mailto:info@svyasa.edu.in",
      subtitle: "We respond within 24 hours",
      color: "primary",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91-8762996815",
      href: "https://api.whatsapp.com/send?phone=+918762996815&text=Know%20more%20about%20courses:",
      subtitle: "Chat with us instantly",
      color: "green",
    },
  ];

  return (
    <section className="py-12 bg-navy relative overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-navy opacity-50"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.title === "WhatsApp" ? "_blank" : undefined}
              rel={item.title === "WhatsApp" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5, type: "spring" }}
              whileHover={{ y: -6 }}
              className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 
                transition-all duration-300 hover:shadow-xl ${
                  item.color === "green" 
                    ? "hover:border-green-500/50 hover:shadow-green-500/20" 
                    : "hover:border-primary/50 hover:shadow-primary/20"
                }`}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 + 0.2, type: "spring", bounce: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    item.color === "green" ? "bg-green-500/20" : "bg-primary/20"
                  }`}
                >
                  <item.icon
                    className={`w-7 h-7 ${
                      item.color === "green" ? "text-green-400" : "text-primary"
                    }`}
                  />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-0.5">{item.title}</h3>
                  <p className="text-white/90 text-lg font-semibold group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                  <p className="text-white/60 text-sm">{item.subtitle}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickContactStrip;
