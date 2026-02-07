import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, BookOpen, Users, Globe, Shield, Sparkles, Heart, Trophy, Lightbulb } from "lucide-react";
import campus1 from "@/assets/campus-1.jpg";

const lightObjectives = [
  { icon: BookOpen, text: "Holistic Education and Training" },
  { icon: Globe, text: "Advancement of Research and Dissemination" },
  { icon: Users, text: "Community Engagement through Outreach and Extension" },
  { icon: Lightbulb, text: "Initiate Necessary Actions for University Objectives" },
];

const darkObjectives = [
  { icon: Shield, text: "Uncompromising Academic Integrity" },
  { icon: Sparkles, text: "Nurturing Student Abilities, Character, and Creativity" },
  { icon: Trophy, text: "Cultivate Pride in Personal and University Achievements" },
  { icon: Heart, text: "Commitment to Leadership, Service, Philanthropy, Social Justice, and Entrepreneurship" },
];

const Objectives = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative">
      {/* Section Title */}
      <div className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2"
            >
              Our Objectives
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-gold"
            />
          </div>
        </div>
      </div>

      {/* Light Section */}
      <div className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {lightObjectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all cursor-pointer group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, type: "spring" }}
                  className="shrink-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-gold/10 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-gold/20 transition-colors"
                >
                  <objective.icon className="w-6 h-6 text-primary" />
                </motion.div>

                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {objective.text}
                </p>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  className="ml-auto shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center"
                >
                  <Check className="w-4 h-4 text-primary" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark Section with Parallax Background */}
      <div className="relative py-16 overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0"
          style={{ y: 0 }}
        >
          <img
            src={campus1}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/90" />
        </motion.div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto space-y-4">
            {darkObjectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.15 }}
                whileHover={{ x: -8 }}
                className="flex items-center gap-4 p-4 bg-secondary-foreground/5 backdrop-blur-sm rounded-xl border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-all cursor-pointer group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.15, type: "spring" }}
                  className="shrink-0 w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors"
                >
                  <objective.icon className="w-6 h-6 text-gold" />
                </motion.div>

                <p className="text-secondary-foreground font-medium group-hover:text-gold transition-colors">
                  {objective.text}
                </p>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.15 }}
                  className="ml-auto shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center"
                >
                  <Check className="w-4 h-4 text-gold" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
