import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { objectives } from "./iicData";
import objectivesBg from "@/assets/research-lab-hero.jpg";

const IICObjectives = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="objectives" ref={ref} className="relative overflow-hidden py-16 bg-white scroll-mt-24">
      {/* Background photo under a light wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${objectivesBg})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-cream/90" />
      <div className="relative container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display text-navy mb-3">Objectives</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {objectives.map((objective, i) => (
            <motion.div
              key={objective.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mb-4"
                >
                  {objective.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-primary transition-colors">
                  {objective.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {objective.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IICObjectives;
