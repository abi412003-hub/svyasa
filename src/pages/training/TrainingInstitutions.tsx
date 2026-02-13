import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, CheckCircle2, Handshake, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { institutionalPartners } from "@/data/trainingData";
import { useState } from "react";
import { toast } from "sonner";

const offerings = [
  "Customised training modules aligned to organizational goals",
  "Online, hybrid, or on-campus delivery",
  "Certified by S-VYASA University",
  "Capacity building, stress management, wellness programs",
  "Flexible scheduling for batch training",
];

const TrainingInstitutions = () => {
  const [form, setForm] = useState({ org: "", person: "", email: "", phone: "", requirement: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your request has been submitted. Our team will contact you shortly.");
    setForm({ org: "", person: "", email: "", phone: "", requirement: "" });
  };

  return (
    <>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 text-xs mb-3">
            <Link to="/training" className="hover:text-gold transition-colors">Home</Link> &gt; Institutions & PSUs
          </p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl text-white font-bold mb-3">
            Training for Government & PSUs
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/60">
            Customised Yoga, wellness, and capacity-building programs
          </motion.p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-[hsl(40,100%,97%)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">Our Institutional Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {institutionalPartners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-5 text-center border border-border/50"
              >
                <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  {p.name.slice(0, 2)}
                </div>
                <h3 className="font-semibold text-foreground text-sm">{p.name}</h3>
                <p className="text-muted-foreground text-[10px] mt-0.5">{p.full}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">What We Offer</h2>
          <div className="space-y-3">
            {offerings.map((o) => (
              <div key={o} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MoUs */}
      <section className="py-12 bg-[hsl(40,100%,97%)]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Handshake className="w-8 h-8 text-gold mx-auto mb-3" />
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">MoUs & Collaborations</h2>
          <p className="text-muted-foreground text-sm">
            S-VYASA has active MoUs with multiple government bodies and PSUs for regular training programs.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">Contact for Institutional Training</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Organization Name" value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} required />
            <Input placeholder="Contact Person" value={form.person} onChange={(e) => setForm({ ...form, person: e.target.value })} required />
            <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <Input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            <Textarea placeholder="Training Requirement" value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })} rows={4} required />
            <Button type="submit" className="w-full bg-primary text-primary-foreground rounded-full">
              <Send className="w-4 h-4 mr-2" /> Submit Request
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default TrainingInstitutions;
