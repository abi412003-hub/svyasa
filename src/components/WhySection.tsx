import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Award, Users, Building, Microscope, Heart } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Recognition",
    description: "Internationally accredited programs with partnerships across 40+ countries",
  },
  {
    icon: Award,
    title: "NAAC 'A' Accredited",
    description: "Highest quality standards recognized by National Assessment Council",
  },
  {
    icon: Microscope,
    title: "Research Excellence",
    description: "600+ published research papers in international peer-reviewed journals",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "World-renowned scholars and practitioners with decades of experience",
  },
  {
    icon: Building,
    title: "Modern Campus",
    description: "State-of-the-art facilities spread across 100 acres of serene environment",
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Integrated curriculum combining ancient wisdom with modern science",
  },
];

const WhySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        animate={{ x: [0, 40], y: [0, 40] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Gradient line animation on top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-primary font-medium mb-4"
          >
            Why Choose Us
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            The S-VYASA <span className="text-gradient-saffron">Advantage</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Join India's leading yoga university and experience a transformative 
            educational journey that prepares you for a meaningful career.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -50 : 50 
              }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group flex gap-5 p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-gold/20 transition-colors"
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
