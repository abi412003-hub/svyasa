import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Smartphone } from "lucide-react";
import gccCampusImage from "@/assets/gcc-campus.jpg";

const CampusCards = () => {
  const campuses = [
    {
      name: "Global City Campus",
      image: gccCampusImage,
      address: "Sattva Global City, Mysore Road, Rajarajeshwari nagar, Bengaluru, Karnataka - 560059, INDIA",
      mobile: ["+91-9070907066", "+91-9070907099"],
      landline: "080-22639998",
      email: "info@svyasa.edu.in",
      mapUrl: "https://maps.app.goo.gl/a2xnnRABVzQQnHvWA",
      direction: "left" as const,
    },
    {
      name: "Prashanti Kutiram Campus",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
      address: "Prashanti Kutiram, Vivekananda Road, Kalluballu Post, Jigani, Anekal, Bengaluru – 560105, INDIA",
      mobile: ["+91-8762996815", "+91-7676749929", "+91-8088503565", "+91-7022024777"],
      landline: "080-2263 9968",
      emails: ["info@svyasa.edu.in", "admissions@svyasa.org"],
      mapUrl: "https://maps.app.goo.gl/xZnMUxhGfGBW3WsT9",
      direction: "right" as const,
    },
  ];

  const words = "Connect With Us".split(" ");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-navy mb-4 flex flex-wrap justify-center gap-x-3">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-24 h-1 bg-gold mx-auto"
          />
        </div>

        {/* Campus Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {campuses.map((campus, index) => (
            <motion.div
              key={campus.name}
              initial={{ 
                opacity: 0, 
                x: campus.direction === "left" ? -60 : 60 
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden group transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Campus Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${campus.image}')` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-display text-navy mb-1"
                >
                  {campus.name}
                </motion.h3>
                <div className="w-16 h-0.5 bg-gold mb-4" />

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-3 mb-4"
                >
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                  >
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  </motion.div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {campus.address}
                  </p>
                </motion.div>

                {/* Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-3 mb-3"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Mob: </span>
                    {campus.mobile.map((num, i) => (
                      <span key={num}>
                        <a
                          href={`tel:${num.replace(/[^0-9+]/g, "")}`}
                          className="text-foreground hover:text-primary transition-colors link-underline"
                        >
                          {num}
                        </a>
                        {i < campus.mobile.length - 1 && " / "}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Landline */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-3 mb-3"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <span className="text-muted-foreground">Land: </span>
                    <a
                      href={`tel:${campus.landline.replace(/[^0-9+]/g, "")}`}
                      className="text-foreground hover:text-primary transition-colors link-underline"
                    >
                      {campus.landline}
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-3 mb-6"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <span className="text-muted-foreground">Email: </span>
                    {"emails" in campus ? (
                      campus.emails.map((email, i) => (
                        <span key={email}>
                          <a
                            href={`mailto:${email}`}
                            className="text-foreground hover:text-primary transition-colors link-underline"
                          >
                            {email}
                          </a>
                          {i < campus.emails.length - 1 && " / "}
                        </span>
                      ))
                    ) : (
                      <a
                        href={`mailto:${campus.email}`}
                        className="text-foreground hover:text-primary transition-colors link-underline"
                      >
                        {campus.email}
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Get Directions Button */}
                <motion.a
                  href={campus.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white rounded-full font-medium text-sm group/btn transition-all duration-300 hover:shadow-lg"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusCards;
