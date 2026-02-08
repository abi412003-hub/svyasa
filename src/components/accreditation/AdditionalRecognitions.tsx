import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Laptop, Heart, BookOpen, Users, GraduationCap } from "lucide-react";

const recognitions = [
  {
    icon: Laptop,
    title: "AICTE Approved",
    description: "All India Council for Technical Education approval for technology and management programs",
  },
  {
    icon: Heart,
    title: "Ministry of AYUSH",
    description: "Designated as Centre of Excellence in Yoga by Department of AYUSH, Govt. of India",
  },
  {
    icon: BookOpen,
    title: "ICMR Centre",
    description: "Advanced Centre for Research in Yoga & Naturopathy sponsored by Indian Council of Medical Research",
  },
  {
    icon: Users,
    title: "AIU Member",
    description: "Member of Association of Indian Universities, connecting 527+ universities nationwide",
  },
  {
    icon: GraduationCap,
    title: "DEB Approved",
    description: "Distance Education Bureau approval for open and distance learning programs",
  },
];

const RecognitionCard = ({ 
  recognition, 
  index 
}: { 
  recognition: typeof recognitions[0]; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = recognition.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <motion.div
        className="bg-card rounded-xl p-6 border border-border h-full transition-all duration-300"
        whileHover={{ 
          y: -8, 
          boxShadow: "0 15px 40px -10px hsla(25, 84%, 50%, 0.2)",
        }}
      >
        {/* Icon */}
        <motion.div
          className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {recognition.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {recognition.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const AdditionalRecognitions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Additional Recognitions
          </h2>
          <motion.div
            className="h-0.5 bg-gold mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </motion.div>

        {/* Recognition cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {recognitions.map((recognition, index) => (
            <RecognitionCard key={recognition.title} recognition={recognition} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalRecognitions;
