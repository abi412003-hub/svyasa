import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import campus2 from "@/assets/campus-2.jpg";

const AboutIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = [
    "Discover the transformative power of education at S-VYASA. Explore diverse programs, from undergraduate to Ph.D., that blend tradition with modern advancements. At S-VYASA University, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn practical skills, build a network of industry contacts, and gain real-world experience.",
    "Students at S-VYASA undergo a unique form of education that integrates Life Training and Character Building through Yoga as a way of life. The institution blends the Gurukula style of education with a modern scientific approach, placing a strong emphasis on practical, hands-on experience and in-depth research.",
  ];

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Mandala Background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-primary">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.3" />
          {[...Array(24)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="10"
              x2="100"
              y2="100"
              stroke="currentColor"
              strokeWidth="0.3"
              transform={`rotate(${i * 15} 100 100)`}
            />
          ))}
        </svg>
      </motion.div>

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
              transition={{ duration: 8, repeat: Infinity }}
              className="relative rounded-2xl overflow-hidden shadow-large"
            >
              <img
                src={campus2}
                alt="S-VYASA Campus"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-gold rounded-2xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-navy to-teal rounded-2xl -z-10"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Title with Letter Animation */}
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              {"S-VYASA".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h2>

            {/* Badge with Shimmer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-gold/10 rounded-full mb-6 relative overflow-hidden"
            >
              <span className="text-sm font-medium text-foreground">
                India's leading university • A+ NAAC accredited • AICTE approved
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </motion.div>

            {/* Paragraphs with Stagger */}
            <div className="space-y-4">
              {paragraphs.map((paragraph, pIndex) => (
                <motion.p
                  key={pIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + pIndex * 0.2 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
