import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flower2, Building2, Briefcase, Cpu } from "lucide-react";

const features = [
  {
    icon: Flower2,
    title: "Yoga and Wellness",
    description:
      "Integrating Life Training and Character Building through Yoga as a way of life, fostering holistic development.",
    color: "from-primary to-saffron-light",
  },
  {
    icon: Building2,
    title: "State-of-the-Art Facilities",
    description:
      "World-class infrastructure at Prashanti Kutiram and Global City campuses designed for optimal learning.",
    color: "from-navy to-teal",
  },
  {
    icon: Briefcase,
    title: "Innovative Management Programs",
    description:
      "BBA, B.Com, MBA programs with strong industry collaborations and practical business exposure.",
    color: "from-gold to-saffron-light",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology Programs",
    description:
      "Engineering, BCA, MCA in AI, Data Science, Cybersecurity with hands-on project experience.",
    color: "from-teal to-navy-light",
  },
];

const WhyVyasa = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const titleWords = "Beyond Education, Towards Transformation!".split(" ");

  return (
    <section ref={ref} className="py-20 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8751A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{ y: [0, -20] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Shaping bright minds with limitless opportunities for holistic growth and success.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.85 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="group h-full bg-card rounded-2xl p-6 shadow-soft hover:shadow-large transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-primary relative overflow-hidden"
              >
                {/* Gradient Border Animation on Hover */}
                <motion.div
                  className="absolute left-0 top-0 w-1 bg-gradient-to-b from-primary to-gold"
                  initial={{ height: 0 }}
                  whileHover={{ height: "100%" }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon with SVG Line Draw Effect */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring" }}
                >
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
                  >
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Background Shift */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVyasa;
