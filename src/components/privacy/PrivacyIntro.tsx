import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck } from "lucide-react";

const PrivacyIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sentences = [
    "S-VYASA Deemed-to-be University (Swami Vivekananda Yoga Anusandhana Samsthana) is committed to protecting the privacy and security of all users who interact with our website, applications, and services.",
    "This Privacy Policy outlines how we collect, use, store, and protect your personal information in compliance with applicable Indian data protection laws, including the Digital Personal Data Protection Act, 2023 (DPDPA) and the Information Technology Act, 2000.",
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
          >
            <span className="px-4 py-2 rounded-full bg-secondary text-white text-sm font-medium">
              Last Updated: January 2025
            </span>
          </motion.div>

          {/* Heading with Shield Icon */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
                animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <ShieldCheck className="w-8 h-8 text-primary" />
              </motion.div>
            </motion.div>
            <motion.h2
              className="font-heading text-2xl md:text-3xl text-secondary"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our Commitment to Your Privacy
            </motion.h2>
          </div>

          {/* Introduction paragraphs */}
          <div className="space-y-4 text-center">
            {sentences.map((sentence, index) => (
              <motion.p
                key={index}
                className="text-muted-foreground leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                {sentence}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyIntro;
