import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, ArrowLeftRight, GraduationCap, Microscope, Mail, Phone } from "lucide-react";
import { keyOfferings } from "./diaData";

const iconMap: Record<string, React.ElementType> = {
  exchange: ArrowLeftRight,
  degree: GraduationCap,
  globe: Globe,
  research: Microscope,
};

const DIAContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="space-y-10">
      {/* Intro Block */}
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex-shrink-0 w-16 h-16 text-primary hidden md:block"
          >
            <Globe className="w-full h-full" strokeWidth={1} />
          </motion.div>
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-2xl md:text-3xl font-display text-navy mb-4"
            >
              {"Connecting S-VYASA to the World".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed"
            >
              S-VYASA Deemed-to-be University has established itself as a pioneer in integrating traditional knowledge systems with modern education and research. Through its International Affairs division, the University fosters collaborations with leading universities, research institutions, and organizations worldwide. The focus is to create a dynamic platform for cultural exchange, joint academic initiatives, and collaborative research that reflect the university's vision of bringing together science, spirituality, and education for the betterment of society.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Key Offerings Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4 py-6 border-y border-border"
      >
        {keyOfferings.map((offering, i) => {
          const Icon = iconMap[offering.icon] || Globe;
          return (
            <motion.div
              key={offering.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-2 px-4 py-3 cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                className="w-10 h-10 text-primary"
              >
                <Icon className="w-full h-full" strokeWidth={1.5} />
              </motion.div>
              <span className="text-sm font-medium text-navy group-hover:text-primary transition-colors text-center">
                {offering.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Strategic Partnerships Block */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-display text-navy mb-2">Strategic Partnerships and Programs</h3>
          <div className="w-16 h-1 bg-gold rounded-full mb-4" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-muted-foreground leading-relaxed"
        >
          Directorate of International Affairs actively develops strategic partnerships across multiple disciplines, offering opportunities for student and faculty exchanges, dual degree programs, and global internships. It facilitates collaborative research in areas such as yoga therapy, allied health sciences, management, and sustainable development. By connecting with over 900 international institutions, S-VYASA provides a gateway for students to gain global exposure and contribute to addressing contemporary challenges through innovative, cross-cultural solutions.
        </motion.p>
      </div>

      {/* Global Learning Ecosystem Block */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <h3 className="text-xl font-display text-navy mb-2">Creating a Global Learning Ecosystem</h3>
          <div className="w-16 h-1 bg-gold rounded-full mb-4" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1 }}
          className="text-muted-foreground leading-relaxed"
        >
          With a strong commitment to nurturing globally competent professionals, S-VYASA emphasizes internationalization in every aspect of its academic and research framework. The International Affairs division organizes international conferences, cultural immersion programs, and joint projects that empower students and faculty to engage in meaningful global dialogues. Through these initiatives, the University continues to build a global learning ecosystem that blends the best of traditional wisdom with modern advancements, fostering peace, health, and sustainable growth worldwide.
        </motion.p>
      </div>

      {/* Contact Info Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2 }}
        className="bg-navy rounded-xl p-6 text-white space-y-4"
      >
        <p className="text-white/80 mb-4">For more information, please contact:</p>
        <div className="flex flex-wrap gap-6">
          <motion.a
            href="mailto:iad@svyasa.edu.in"
            whileHover={{ y: -2 }}
            className="group flex items-center gap-3 hover:text-gold transition-colors"
          >
            <motion.div
              initial={{ rotateY: 0 }}
              whileHover={{ rotateY: 180 }}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
            >
              <Mail className="w-5 h-5" />
            </motion.div>
            <span className="group-hover:underline">iad@svyasa.edu.in</span>
          </motion.a>
          <motion.a
            href="tel:+919035074730"
            whileHover={{ y: -2 }}
            className="group flex items-center gap-3 hover:text-gold transition-colors"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.4 }}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
            >
              <Phone className="w-5 h-5" />
            </motion.div>
            <span className="group-hover:underline">+91-9035074730</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default DIAContent;
