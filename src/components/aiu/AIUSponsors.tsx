import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { sponsors } from "./aiuData";

const AIUSponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  // Double the sponsors for seamless loop
  const doubledSponsors = [...sponsors, ...sponsors];

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display text-navy mb-3">Our Sponsors</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: isPaused ? undefined : [0, -50 * sponsors.length * 8],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {doubledSponsors.map((sponsor, i) => (
              <motion.div
                key={`${sponsor.id}-${i}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 group cursor-pointer"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:drop-shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(sponsor.name)}&background=E8751A&color=fff&size=120`;
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default AIUSponsors;
