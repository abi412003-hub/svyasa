import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UserPlus, BookOpen, Award, MonitorSmartphone, Headphones, AlertCircle, ArrowRight } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Enrol", desc: "Register and access your course on the LMS" },
  { icon: BookOpen, title: "Learn", desc: "Video lectures, live sessions, reading materials, practice modules" },
  { icon: Award, title: "Certify", desc: "Complete assessments and receive your certificate" },
];

const lmsFeatures = [
  "24/7 access to course materials",
  "Video lectures by S-VYASA faculty",
  "Live interactive sessions",
  "Practice assignments and quizzes",
];

const TrainingDelivery = () => (
  <>
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/50 text-xs mb-3">
          <Link to="/training" className="hover:text-gold transition-colors">Home</Link> &gt; Delivery (CODE)
        </p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl text-white font-bold mb-3">
          Online Learning via CODE
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/60 max-w-2xl mx-auto">
          All online delivery, assessments, and certificates are managed through CODE, S-VYASA University
        </motion.p>
      </div>
    </section>

    {/* What is CODE */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What is CODE?</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Centre for Open & Distance Education (CODE) is S-VYASA University's official platform for technology-enabled learning. CODE provides the Learning Management System (LMS), conducts assessments, and issues certificates for all short-term training programs.
          </p>
        </motion.div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-16 bg-[hsl(40,100%,97%)]">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                <step.icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-gold text-white text-xs font-bold rounded-full flex items-center justify-center">{i + 1}</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
              {i < steps.length - 1 && <ArrowRight className="w-5 h-5 text-gold mx-auto mt-4 hidden md:block" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* LMS */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <MonitorSmartphone className="w-8 h-8 text-gold mb-3" />
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Learning Management System</h2>
            <ul className="space-y-2">
              {lmsFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Award className="w-8 h-8 text-primary mb-3" />
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Assessment & Certification</h2>
            <ul className="space-y-2">
              {[
                "Online assessments through CODE",
                "Certificates issued under S-VYASA University authority",
                "Certificate of Participation / Completion / Proficiency",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Student Support */}
    <section className="py-16 bg-[hsl(40,100%,97%)]">
      <div className="container mx-auto px-4 max-w-3xl">
        <Headphones className="w-8 h-8 text-gold mb-3" />
        <h2 className="font-heading text-xl font-bold text-foreground mb-4">Student Support</h2>
        <ul className="space-y-2 mb-8">
          {["Dedicated training coordinator", "Email and phone support", "Technical help desk for LMS issues"].map((s) => (
            <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" /> {s}
            </li>
          ))}
        </ul>

        {/* Note */}
        <div className="bg-card rounded-xl p-5 border border-gold/20 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <p className="text-muted-foreground text-sm">
            Using CODE's online delivery does not make these programs degree/credit-bearing. CODE serves as the technology platform and assessment tool for non-degree training programs.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default TrainingDelivery;
