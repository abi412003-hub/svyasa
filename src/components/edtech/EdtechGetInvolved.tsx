import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EdtechGetInvolved = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", organization: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!form.name.trim() || !form.organization.trim() || !form.email.trim()) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return;
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full mb-6">
              Get Involved
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight mb-5">
              Build the{" "}
              <span className="text-primary">Future Together</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We're always open to new partnerships with EdTech companies, industry leaders, and research institutions. If you share our commitment to transforming education and empowering the next generation of professionals, let's talk.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Co-develop curriculum and certification programs",
                "Offer internships, live projects & mentorship",
                "Provide guest lectures and industry exposure",
                "Fund scholarships and research initiatives",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="bg-card rounded-2xl border border-border p-8 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground text-sm">
                  We've received your inquiry. Our partnerships team will reach out within 2–3 business days.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-foreground mb-1">Partner with Us</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill in your details and we'll get in touch shortly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <Label htmlFor="partner-name" className="text-foreground font-medium">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="partner-name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      maxLength={100}
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-org" className="text-foreground font-medium">
                      Organization <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="partner-org"
                      type="text"
                      placeholder="Company or institution name"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      maxLength={100}
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-email" className="text-foreground font-medium">
                      Work Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="partner-email"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      maxLength={255}
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Partner with Us
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EdtechGetInvolved;
