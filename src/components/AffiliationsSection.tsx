import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import logoAyush from "@/assets/logo-ayush.png";
import logoNaac from "@/assets/logo-naac.png";
import logoIcmr from "@/assets/logo-icmr.png";
import logoWho from "@/assets/logo-who.png";
import logoUgc from "@/assets/logo-ugc.png";
import logoAiu from "@/assets/logo-aiu.png";

const affiliations = [
  { name: "Ministry of Ayush", logo: logoAyush },
  { name: "NAAC", logo: logoNaac },
  { name: "ICMR", logo: logoIcmr },
  { name: "WHO", logo: logoWho },
  { name: "UGC", logo: logoUgc },
  { name: "AIU", logo: logoAiu },
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
              className="shrink-0 w-40 h-20 flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <div className="w-full h-full bg-card rounded-lg shadow-soft flex items-center justify-center p-4">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-w-[120px] max-h-[48px] object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AffiliationsSection;
