import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const affiliations = [
  { name: "UGC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/University_Grants_Commission_India_logo.svg/200px-University_Grants_Commission_India_logo.svg.png" },
  { name: "NAAC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/NAAC_LOGO.svg/200px-NAAC_LOGO.svg.png" },
  { name: "AIU", logo: "https://www.aiu.ac.in/images/aiu-logo.png" },
  { name: "AYUSH", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Ministry_of_AYUSH.svg/200px-Ministry_of_AYUSH.svg.png" },
  { name: "ICMR", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/ICMR_Logo.png/200px-ICMR_Logo.png" },
  { name: "WHO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/200px-WHO_logo.svg.png" },
];

const AffiliationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="flex items-center justify-center gap-4">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50 origin-right"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="font-heading text-xl font-semibold text-foreground text-center"
          >
            Accreditations & Affiliations
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50 origin-left"
          />
        </div>
      </div>

      {/* Auto-scrolling Logos */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted to-transparent z-10" />

        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center"
        >
          {[...affiliations, ...affiliations].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: (index % affiliations.length) * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-card rounded-lg shadow-soft flex items-center justify-center p-2">
                <span className="text-xs font-bold text-muted-foreground">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AffiliationsSection;
