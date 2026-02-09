import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { GraduationCap, Flower2, Handshake, Rocket } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Industry Expert Faculty",
    text: "Learn from experienced faculty and industry experts from Fortune 500 companies like Google, Amazon, and Accenture who bring real-world insights to every classroom.",
  },
  {
    icon: Flower2,
    title: "Yoga-Integrated Wellness",
    text: "S-VYASA's unique approach integrates yoga and wellness practices into every program — scientifically shown to enhance focus, creativity, mental balance, and soft skills.",
  },
  {
    icon: Handshake,
    title: "Industry Collaborations",
    text: "Programs co-designed with EdTech partners like IBM, Intel, HCL-Pearson, and Cambridge University. Earn industry-recognized certifications alongside your degree.",
  },
  {
    icon: Rocket,
    title: "Real-World Experience",
    text: "Hands-on projects, hackathons, internships, and industry visits integrated throughout the curriculum ensure you graduate career-ready from day one.",
  },
];

const DifferenceSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} id="difference" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary text-sm uppercase tracking-[3px] font-medium">
              THE S-VYASA DIFFERENCE
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-primary"
            />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            What Sets Us Apart
          </h2>
        </motion.div>

        {/* Feature Blocks */}
        <div className="space-y-12">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
                  {/* Image Placeholder */}
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    className="md:w-1/2"
                  >
                    <div className="relative w-full aspect-[4/3] bg-cream rounded-xl flex items-center justify-center overflow-hidden">
                      <IconComponent className="w-24 h-24 text-primary/20" />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5" />
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>

                {/* Separator */}
                {index < features.length - 1 && (
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                    className="flex justify-center mt-12"
                  >
                    <div className="w-24 h-px bg-accent pulse-glow" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
