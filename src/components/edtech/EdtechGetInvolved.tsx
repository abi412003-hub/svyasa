import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendForm } from "@/lib/sendForm";

const partnershipTypes = [
  "Curriculum & certification",
  "Internships & live projects",
  "Guest lectures & industry exposure",
  "Scholarships & research funding",
  "Other",
];

type FormState = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  partnershipType: string;
  message: string;
};

const empty: FormState = { name: "", organization: "", email: "", phone: "", partnershipType: "", message: "" };

const EdtechGetInvolved = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!form.organization.trim()) next.organization = "Please enter your organization.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Please enter a valid email address.";
    if (form.phone.trim() && !/^[+\d][\d\s-]{7,18}$/.test(form.phone.trim())) next.phone = "Please enter a valid phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    const honeypot = (e.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value;
    setSending(true);
    try {
      await sendForm(
        "edtech-partner",
        {
          name: form.name,
          organization: form.organization,
          email: form.email,
          phone: form.phone,
          partnershipType: form.partnershipType,
          message: form.message,
        },
        honeypot,
      );
      setSubmitted(true);
      setForm(empty);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not send your enquiry.");
    } finally {
      setSending(false);
    }
  };

  const errorText = (field: keyof FormState) =>
    errors[field] ? (
      <p id={`partner-${field}-error`} className="text-destructive text-xs mt-1">
        {errors[field]}
      </p>
    ) : null;

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
              Build the <span className="text-primary">Future Together</span>
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
                <p className="text-muted-foreground text-sm mb-6">
                  We've received your enquiry. Our partnerships team will reach out within 2–3 business days.
                </p>
                <Button variant="outline" className="rounded-full" onClick={() => setSubmitted(false)}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-foreground mb-1">Partner with Us</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill in your details and we'll get in touch shortly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot: hidden from people, filled in by spam bots */}
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                  <div>
                    <Label htmlFor="partner-name" className="text-foreground font-medium">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="partner-name"
                      type="text"
                      placeholder="Your full name"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      maxLength={100}
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "partner-name-error" : undefined}
                      className="mt-1.5"
                    />
                    {errorText("name")}
                  </div>
                  <div>
                    <Label htmlFor="partner-organization" className="text-foreground font-medium">
                      Organization <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="partner-organization"
                      type="text"
                      placeholder="Company or institution name"
                      autoComplete="organization"
                      value={form.organization}
                      onChange={(e) => update("organization", e.target.value)}
                      maxLength={100}
                      required
                      aria-invalid={!!errors.organization}
                      aria-describedby={errors.organization ? "partner-organization-error" : undefined}
                      className="mt-1.5"
                    />
                    {errorText("organization")}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="partner-email" className="text-foreground font-medium">
                        Work Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="partner-email"
                        type="email"
                        placeholder="you@company.com"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        maxLength={255}
                        required
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "partner-email-error" : undefined}
                        className="mt-1.5"
                      />
                      {errorText("email")}
                    </div>
                    <div>
                      <Label htmlFor="partner-phone" className="text-foreground font-medium">
                        Phone
                      </Label>
                      <Input
                        id="partner-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        maxLength={20}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "partner-phone-error" : undefined}
                        className="mt-1.5"
                      />
                      {errorText("phone")}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="partner-type" className="text-foreground font-medium">
                      Partnership Interest
                    </Label>
                    <select
                      id="partner-type"
                      value={form.partnershipType}
                      onChange={(e) => update("partnershipType", e.target.value)}
                      className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select an option</option>
                      {partnershipTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="partner-message" className="text-foreground font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="partner-message"
                      placeholder="Tell us briefly about the partnership you have in mind"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      maxLength={1500}
                      rows={4}
                      className="mt-1.5"
                    />
                  </div>
                  <Button type="submit" disabled={sending} className="w-full gap-2 rounded-full">
                    {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {sending ? "Sending…" : "Partner with Us"}
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
