import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target } from "lucide-react";
import { missionPoints } from "./iicData";

const IICVisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision-mission" ref={ref} className="py-16 bg-cream scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
              className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6"
            >
              <Eye className="w-6 h-6 text-primary" />
            </motion.div>

            <h3 className="text-2xl font-display font-bold text-navy mb-4">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create an innovation-driven ecosystem that empowers students and researchers 
              to develop impactful solutions rooted in Yogic wisdom, scientific research, and 
              societal needs.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-navy"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
              className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-6"
            >
              <Target className="w-6 h-6 text-navy" />
            </motion.div>

            <h3 className="text-2xl font-display font-bold text-navy mb-4">Mission</h3>
            <ul className="space-y-3">
              {missionPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IICVisionMission;
