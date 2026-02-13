import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, Target, CheckCircle2, AlertCircle } from "lucide-react";

const TrainingAbout = () => (
  <>
    {/* Hero */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/50 text-xs mb-3">
          <Link to="/training" className="hover:text-gold transition-colors">Home</Link> &gt; About
        </p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl text-white font-bold">
          About S-VYASA Training Programs
        </motion.h1>
      </div>
    </section>

    {/* About */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">About S-VYASA Short-Term Programs</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            These short-term programs are offered under the academic and training outreach of S-VYASA University and delivered online through CODE. They are designed for working professionals, yoga instructors, government officials, and anyone seeking research-backed training in Yoga, Ayurveda, and holistic wellness.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Vision & Objectives */}
    <section className="py-16 bg-[hsl(40,100%,97%)]">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Vision & Objectives</h2>
          <div className="space-y-4">
            {[
              "Make Yoga training accessible to all through technology-enabled delivery",
              "Offer evidence-based, research-driven short-term programs",
              "Support government capacity building through DOPT and PSU partnerships",
              "Uphold S-VYASA's legacy of combining the Best of the East with the Best of the West",
            ].map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <Target className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{obj}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Certification */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Certification & Academic Oversight</h2>
          <div className="space-y-3 mb-8">
            {[
              "All programs are academically overseen by S-VYASA University faculty",
              "Certificates issued under S-VYASA University authority",
              "Online delivery, assessments, and certification managed through CODE",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="bg-[hsl(40,100%,97%)] rounded-xl p-5 border border-gold/20 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground text-sm">
              These are short-term certificate/training programs. They are not degree, diploma, or credit-bearing programs under UGC/DEB regulations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default TrainingAbout;
