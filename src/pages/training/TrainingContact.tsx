import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import HoneypotField from "@/components/HoneypotField";
import { useSendForm } from "@/hooks/useSendForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { PRASHANTI_KUTIRAM } from "@/config/campusLocations";

const TrainingContact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const { sending, submit } = useSendForm("training-contact");

  const subjectLabels: Record<string, string> = {
    general: "General",
    course: "Course Enquiry",
    institutional: "Institutional Training",
    technical: "Technical Support",
    other: "Other",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const ok = await submit(
      e,
      { ...form, subject: subjectLabels[form.subject] ?? form.subject },
      "Message sent! We'll respond shortly.",
    );
    if (ok) setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 text-xs mb-3">
            <Link to="/training" className="hover:text-gold transition-colors">Home</Link> &gt; Contact
          </p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl text-white font-bold">
            Contact Us
          </motion.h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <HoneypotField />
                <Input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <Input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                <Select value={form.subject} onValueChange={(v) => setForm({ ...form, subject: v })}>
                  <SelectTrigger><SelectValue placeholder="Subject" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="course">Course Enquiry</SelectItem>
                    <SelectItem value="institutional">Institutional Training</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Your message..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} required />
                <Button type="submit" disabled={sending} className="w-full bg-primary text-primary-foreground rounded-full">
                  {sending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                  {sending ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Contact Details</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-2">Training Coordinator</h3>
                  <div className="space-y-2">
                    <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-4 h-4 text-gold" /> +91-98765-43210
                    </a>
                    <a href="mailto:training@svyasa.edu.in" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-4 h-4 text-gold" /> training@svyasa.edu.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">Monday – Saturday, 9:30 AM – 5:30 PM IST</p>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">S-VYASA University, Prashanti Kutiram, Bengaluru – 560105</p>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden border border-border/50 h-[250px]">
                  <iframe
                    src={PRASHANTI_KUTIRAM.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={PRASHANTI_KUTIRAM.mapTitle}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingContact;
