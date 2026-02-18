import { motion } from "framer-motion";

const accreditations = [
  {
    name: "UGC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/University_Grants_Commission_%28India%29_logo.svg/200px-University_Grants_Commission_%28India%29_logo.svg.png",
  },
  {
    name: "NAAC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/NAAC_LOGO.png/200px-NAAC_LOGO.png",
  },
  {
    name: "KSURF",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
  },
];

const PKAccreditations = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {accreditations.map((acc, index) => (
            <motion.div
              key={acc.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
            >
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-4 rounded-xl bg-white shadow-sm"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={acc.logo}
                  alt={acc.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
              
              {/* Subtle glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PKAccreditations;
