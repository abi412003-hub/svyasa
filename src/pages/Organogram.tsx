import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Building2, GraduationCap, FlaskConical, Globe, BookOpen, Heart, Monitor, Briefcase, Music, Brain } from "lucide-react";

const divisions = [
  {
    name: "Division of Yoga Spirituality",
    icon: Heart,
    color: "from-primary to-primary/80",
    schools: [
      { name: "School of Yogic Sciences" },
      { name: "Varahamihira Advanced Center for Vedic Technology and Research (VMAC)" },
    ],
  },
  {
    name: "Division of Yoga and Life Sciences",
    icon: FlaskConical,
    color: "from-primary to-primary/80",
    schools: [
      { name: "School of Yoga and Naturopathic Medicine" },
      { name: "School of Physiotherapy" },
      { name: "School of Allied and Healthcare Profession" },
    ],
  },
  {
    name: "Division of Yoga & Physical Sciences",
    icon: Monitor,
    color: "from-primary to-primary/80",
    schools: [
      { name: "School of Engineering" },
      { name: "School of Computer Sciences" },
    ],
  },
  {
    name: "Division of Yoga & Management Studies",
    icon: Briefcase,
    color: "from-primary to-primary/80",
    schools: [
      { name: "School of Commerce and Management" },
    ],
  },
  {
    name: "Division of Yoga & Humanities",
    icon: BookOpen,
    color: "from-primary to-primary/80",
    schools: [
      { name: "School of Performing Arts" },
    ],
  },
  {
    name: "CODE – Center for Online and Distance Education",
    icon: Globe,
    color: "from-primary to-primary/80",
    schools: [],
  },
  {
    name: "ANVESANA – Advanced Research Laboratories",
    icon: Brain,
    color: "from-primary to-primary/80",
    schools: [
      { name: "Centre for Advanced Research in Integrative Medicine" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Organogram = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <motion.img
          src="https://spkbypslhjqvnvnujpwd.supabase.co/storage/v1/object/public/site-images/city-campus/campus/1771447208564-dglvlnveuq.jpg"
          alt="S-VYASA Campus"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 14, ease: "linear" }}
        />
        {/* Dark overlay — solid centre to ensure text legibility */}
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/40" />
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 bg-gold/20 backdrop-blur-sm text-gold-light text-sm font-medium rounded-full border border-gold/30 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              University Structure
            </motion.span>
            <motion.h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Organogram
            </motion.h1>
            <motion.p
              className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              The academic and administrative structure of S-VYASA Deemed to be University
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Root Node */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* University Root */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-primary to-accent rounded-2xl shadow-xl shadow-primary/20">
              <Building2 className="w-8 h-8 text-primary-foreground" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
                S-VYASA Deemed to be University
              </h2>
            </div>
            {/* Connector Line */}
            <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-muted-foreground/30 mx-auto mt-0" />
          </motion.div>

          {/* Horizontal connector */}
          <div className="hidden lg:block w-full max-w-6xl mx-auto h-0.5 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent mb-0 -mt-4" />

          {/* Division Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  {/* Vertical connector */}
                  <div className="hidden lg:block w-0.5 h-6 bg-muted-foreground/30 mx-auto" />

                  {/* Division Card */}
                  <div className="relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${division.color} p-5`}>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <h3 className="font-heading text-sm md:text-base font-semibold text-primary-foreground leading-tight">
                          {division.name}
                        </h3>
                      </div>
                    </div>

                    {/* Schools */}
                    {division.schools.length > 0 && (
                      <div className="p-4 space-y-2">
                        {/* Connector dot */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Schools & Centers
                          </span>
                        </div>
                        {division.schools.map((school, sIndex) => (
                          <motion.div
                            key={sIndex}
                            whileHover={{ x: 4 }}
                            className="flex items-start gap-2 pl-3 border-l-2 border-accent/40 hover:border-accent transition-colors"
                          >
                            <GraduationCap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground/80 leading-snug">
                              {school.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {division.schools.length === 0 && (
                      <div className="p-4">
                        <p className="text-xs text-muted-foreground italic">
                          Autonomous center
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Organogram;
