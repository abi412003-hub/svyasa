import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, FileText, Users, FlaskConical } from "lucide-react";

const researchStats = [
  { icon: FileText, value: "600+", label: "Publications" },
  { icon: Users, value: "50+", label: "Research Scholars" },
  { icon: FlaskConical, value: "15", label: "Research Labs" },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted relative overflow-hidden">
      {/* Particle Network Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-navy rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="relative rounded-2xl overflow-hidden shadow-large"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800"
                alt="Research Lab"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-large max-w-[200px]"
            >
              <p className="text-sm text-muted-foreground mb-2">Latest Publication</p>
              <p className="font-heading text-lg font-semibold text-foreground">
                Yoga & Neuroplasticity
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block text-primary font-medium mb-4"
            >
              Research & Innovation
            </motion.span>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pioneering Scientific{" "}
              <span className="text-gradient-saffron">Research in Yoga</span>
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              S-VYASA is at the forefront of yoga research, conducting groundbreaking 
              studies on the therapeutic applications of yoga practices. Our research 
              centers collaborate with international institutions to advance the 
              scientific understanding of yoga's impact on human health.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {researchStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-background rounded-xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mb-2"
                  >
                    <stat.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-navy to-teal text-secondary-foreground rounded-full font-medium group relative overflow-hidden"
            >
              <span className="relative z-10">Explore Our Research</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
