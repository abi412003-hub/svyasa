import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Calendar, CreditCard, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { upcomingBatches, trainingCourses } from "@/data/trainingData";

const enrollSteps = [
  "Browse courses and select your program",
  "Fill the online registration form",
  "Pay the course fee",
  "Receive LMS credentials via email",
  "Start learning!",
];

const feeData = [
  { course: "YIC", fee: "₹15,000" },
  { course: "YTIC (per module)", fee: "₹5,000" },
  { course: "SMET", fee: "₹2,500" },
  { course: "ANTC", fee: "₹8,000" },
  { course: "Ayurveda Training", fee: "₹6,000" },
];

const TrainingAdmissions = () => (
  <>
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/50 text-xs mb-3">
          <Link to="/training" className="hover:text-gold transition-colors">Home</Link> &gt; Admissions
        </p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl text-white font-bold">
          Admissions
        </motion.h1>
      </div>
    </section>

    {/* How to Enrol */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8">How to Enrol</h2>
        <div className="space-y-4">
          {enrollSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </div>
              <p className="text-foreground pt-1">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Course Calendar */}
    <section className="py-16 bg-[hsl(40,100%,97%)]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-gold" /> Course Calendar
        </h2>
        <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="text-left px-5 py-3 font-medium">Course</th>
                <th className="text-left px-5 py-3 font-medium">Next Batch</th>
                <th className="text-left px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {upcomingBatches.map((b, i) => (
                <tr key={i} className="border-t border-border/50">
                  <td className="px-5 py-3 font-medium text-foreground">{b.course}</td>
                  <td className="px-5 py-3 text-muted-foreground">{b.nextBatch}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${b.status === "Open" ? "bg-green-100 text-green-700" : b.status === "Registering" ? "bg-gold/10 text-gold" : "bg-muted text-muted-foreground"}`}>
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Fees & Payment */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-gold" /> Fees & Payment
        </h2>
        <div className="bg-card rounded-xl border border-border/50 overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="text-left px-5 py-3 font-medium">Course</th>
                <th className="text-left px-5 py-3 font-medium">Fee</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((f, i) => (
                <tr key={i} className="border-t border-border/50">
                  <td className="px-5 py-3 text-foreground">{f.course}</td>
                  <td className="px-5 py-3 text-gold font-semibold">{f.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-xs italic mb-4">Institutional/PSU pricing on request</p>
        <p className="text-muted-foreground text-sm mb-4">Payment modes: Online (UPI, Cards, Net Banking)</p>
      </div>
    </section>

    {/* Certification Process */}
    <section className="py-16 bg-[hsl(40,100%,97%)]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-gold" /> Certification Process
        </h2>
        <div className="space-y-3">
          {[
            "Complete all modules/sessions",
            "Pass online assessment (minimum passing criteria)",
            "Certificate generated through CODE",
            "Digital certificate emailed; physical copy on request",
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">{s}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/training/courses">
            <Button className="bg-primary text-primary-foreground rounded-full px-8">Enrol Now</Button>
          </Link>
          <Button variant="outline" className="border-secondary text-secondary rounded-full px-8">
            <Download className="w-4 h-4 mr-2" /> Download Brochure
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default TrainingAdmissions;
