import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Lock, CircleOff } from "lucide-react";

const trustIndicators = [
  {
    icon: ShieldCheck,
    title: "SSL Encrypted",
    description: "All data transmitted via secure encryption",
    delay: 0,
  },
  {
    icon: Lock,
    title: "DPDPA Compliant",
    description: "Aligned with India's Digital Personal Data Protection Act",
    delay: 0.15,
  },
  {
    icon: CircleOff,
    title: "No Data Selling",
    description: "Your information is never sold to third parties",
    delay: 0.3,
  },
];

const TrustAssurance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-12 md:py-16 bg-secondary overflow-hidden">
      {/* Gold particle field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {trustIndicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                {/* Icon with line-draw effect */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: item.delay + 0.1, type: "spring" }}
                >
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 0.8, delay: item.delay + 0.2 }}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>

                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustAssurance;
