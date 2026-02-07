import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Handshake, Award, FileCheck } from "lucide-react";

const achievements = [
  {
    icon: Handshake,
    title: "MOUs",
    count: "15+",
    description:
      "MoUs with esteemed institutions globally, including St. Petersburg Federal Research Institute (Russia), Hangzhou Yinhu Technology Co., Ltd (China), Massachusetts Institute of Technology (USA), and more.",
  },
  {
    icon: Award,
    title: "Recognitions",
    count: "A+",
    description:
      "Recognitions such as a 4-star rating by KSURF, A+ grading by NAAC, and Deemed University status conferred by UGC.",
  },
  {
    icon: FileCheck,
    title: "Approval",
    count: "10+",
    description:
      "Approval letters from AICTE, Centre for Excellence from the Ministry of AYUSH, and more.",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted relative overflow-hidden">
      {/* Floating Confetti Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-10%",
            }}
            animate={{
              y: [0, -800],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header with Wave Effect */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {"ACHIEVEMENTS".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 200,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50, scale: 0.85 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full bg-card rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                {/* Shimmer Border on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, hsl(var(--gold)) 50%, transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="absolute inset-[2px] bg-card rounded-2xl" />

                {/* Content */}
                <div className="relative">
                  {/* Count Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                    className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-primary to-gold text-primary-foreground text-sm font-bold rounded-full"
                  >
                    {achievement.count}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary/10 to-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-gold/20 transition-colors"
                  >
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
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

export default Achievements;
