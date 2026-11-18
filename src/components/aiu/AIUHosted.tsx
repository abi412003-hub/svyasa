import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { GLOBAL_CITY_CAMPUS } from "@/config/campusLocations";

const AIUHosted = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display text-navy mb-4">
              Hosted by S-VYASA Deemed-to-be University
            </h2>
            <div className="w-20 h-1 bg-gold rounded-full mb-6" />

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              S-VYASA, an NAAC A+ accredited, research-driven university, blends yogic wisdom 
              with modern scientific education. With campuses like Prashanti Kutiram and the 
              tech-driven Sattva Global City Campus, S-VYASA stands at the forefront of holistic 
              and future-ready academic environments.
            </p>

            <div className="bg-white rounded-xl p-4 shadow-md mb-6 border-l-4 border-primary">
              <p className="text-navy font-medium flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Located within <strong>Sattva Global Tech Park</strong> — modern, accessible, and secure.
                </span>
              </p>
            </div>

            <motion.a
              href={GLOBAL_CITY_CAMPUS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
            >
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <MapPin className="w-5 h-5" />
              </motion.span>
              Get Directions
              <ExternalLink className="w-4 h-4 opacity-70" />
            </motion.a>
          </motion.div>

          {/* Right Map/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src={GLOBAL_CITY_CAMPUS.embedUrl}
                title={GLOBAL_CITY_CAMPUS.mapTitle}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            
            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIUHosted;
