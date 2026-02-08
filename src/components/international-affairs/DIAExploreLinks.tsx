import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { exploreLinks } from "./diaData";

const DIAExploreLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl font-display text-navy text-center mb-10"
        >
          Explore More
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {exploreLinks.map((link, i) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                to={link.href}
                onClick={(e) => link.comingSoon && e.preventDefault()}
                className={`group block bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-transparent hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  link.comingSoon ? "cursor-default" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={link.image}
                    alt={link.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 ${
                      link.comingSoon ? "grayscale" : ""
                    }`}
                  />
                  {link.comingSoon && (
                    <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
                      <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-4 py-2 bg-gold text-navy font-semibold rounded-full text-sm"
                      >
                        Coming Soon
                      </motion.span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-navy group-hover:text-primary transition-colors mb-1">
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{link.subtitle}</p>
                    </div>
                    {!link.comingSoon && (
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DIAExploreLinks;
