import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, BookOpen, FileText, Share2, Newspaper, Bell, Monitor, Disc, Wifi, Wind } from "lucide-react";
import { libraryServices, borrowingPrivileges, libraryRules } from "./libraryData";

const iconMap: Record<string, React.ElementType> = {
  lending: BookOpen,
  reference: FileText,
  referral: Share2,
  news: Newspaper,
  awareness: Bell,
  digital: Monitor,
  cd: Disc,
  internet: Wifi,
  ac: Wind,
};

const LibraryServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openRule, setOpenRule] = useState<string | null>(null);

  return (
    <div ref={ref} className="space-y-16">
      {/* Services Grid */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-display text-navy mb-3">Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraryServices.map((service, i) => {
            const Icon = iconMap[service.icon] || BookOpen;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-6 text-center shadow-md border-t-4 border-transparent hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring", bounce: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center text-primary"
                >
                  <Icon className="w-7 h-7" />
                </motion.div>
                <h3 className="font-semibold text-navy group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Borrowing Privileges */}
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80')`,
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>

        <div className="relative z-10 p-8 md:p-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-2xl font-display text-white mb-8 text-center"
          >
            Borrowing Privileges
          </motion.h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-4 py-3 text-left text-white/80 font-medium">Sl. No</th>
                  <th className="px-4 py-3 text-left text-white/80 font-medium">Patron Category</th>
                  <th className="px-4 py-3 text-left text-white/80 font-medium">No of Items</th>
                  <th className="px-4 py-3 text-left text-white/80 font-medium">Loan Period</th>
                </tr>
              </thead>
              <tbody>
                {borrowingPrivileges.map((row, i) => (
                  <motion.tr
                    key={row.slNo}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 py-4 text-white/70">{row.slNo}</td>
                    <td className="px-4 py-4 text-white font-medium">{row.category}</td>
                    <td className="px-4 py-4 text-primary">{row.items}</td>
                    <td className="px-4 py-4 text-white/80">{row.period}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Rules & Regulations */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl font-display text-navy mb-6"
        >
          General Rules and Regulations
        </motion.h3>

        <div className="space-y-4">
          {libraryRules.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenRule(openRule === section.id ? null : section.id)}
                className="w-full flex items-center justify-between p-5 text-left border-l-4 border-primary hover:bg-cream/50 transition-colors"
              >
                <h4 className="font-semibold text-navy">{section.title}</h4>
                <motion.div
                  animate={{ rotate: openRule === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openRule === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2 border-t border-border">
                      <ul className="space-y-3">
                        {section.rules.map((rule, ri) => (
                          <motion.li
                            key={ri}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: ri * 0.05 }}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{rule}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryServices;
