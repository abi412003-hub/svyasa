import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  campus: z.string().min(1, "Please select a campus"),
  program: z.string().min(1, "Please select a program interest"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

type FormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    campus: "",
    program: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateField = (field: keyof FormData): boolean => {
    try {
      contactSchema.shape[field].parse(formData[field]);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      setSubmitState("loading");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitState("success");
      toast.success("Message sent successfully! We'll get back to you soon.");

      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          campus: "",
          program: "",
          message: "",
        });
        setSubmitState("idle");
      }, 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
        toast.error("Please fix the errors in the form");
      }
    }
  };

  const inputFields: { name: keyof FormData; label: string; type: string; placeholder?: string }[] = [
    { name: "fullName", label: "Full Name", type: "text", placeholder: "John Doe" },
    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
  ];

  const selectFields = [
    {
      name: "campus" as const,
      label: "Campus Interest",
      options: [
        { value: "", label: "Select Campus" },
        { value: "global", label: "Global City Campus" },
        { value: "prashanti", label: "Prashanti Campus" },
        { value: "both", label: "Both Campuses" },
      ],
    },
    {
      name: "program" as const,
      label: "Program Interest",
      options: [
        { value: "", label: "Select Program" },
        { value: "undergraduate", label: "Undergraduate" },
        { value: "postgraduate", label: "Postgraduate" },
        { value: "phd", label: "Ph.D" },
        { value: "yoga", label: "Yoga Programs" },
        { value: "other", label: "Other" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Mandala watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold rotate-slow">
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="5"
              x2="100"
              y2="195"
              stroke="currentColor"
              strokeWidth="0.3"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display text-navy mb-2"
          >
            Send Us a Message
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-gold mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground"
          >
            Have a question? We'd love to hear from you.
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* Text Inputs */}
          {inputFields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <label
                className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  focusedField === field.name || formData[field.name]
                    ? "top-0 text-xs text-primary"
                    : "top-4 text-sm text-muted-foreground"
                }`}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                onFocus={() => setFocusedField(field.name)}
                onBlur={() => setFocusedField(null)}
                placeholder={focusedField === field.name ? field.placeholder : ""}
                className={`w-full pt-6 pb-2 bg-transparent border-b-2 transition-all duration-300 outline-none ${
                  errors[field.name]
                    ? "border-destructive"
                    : focusedField === field.name
                    ? "border-primary"
                    : "border-border"
                }`}
              />
              {/* Validation checkmark */}
              <AnimatePresence>
                {formData[field.name] && validateField(field.name) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    <Check className="w-4 h-4 text-emerald-500" />
                  </motion.div>
                )}
              </AnimatePresence>
              {errors[field.name] && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-destructive text-xs mt-1"
                >
                  {errors[field.name]}
                </motion.p>
              )}
            </motion.div>
          ))}

          {/* Select Dropdowns */}
          <div className="grid md:grid-cols-2 gap-6">
            {selectFields.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <label className="text-xs text-primary mb-1 block">{field.label}</label>
                <select
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className={`w-full py-3 px-0 bg-transparent border-b-2 transition-all duration-300 outline-none appearance-none cursor-pointer ${
                    errors[field.name]
                      ? "border-destructive"
                      : formData[field.name]
                      ? "border-primary"
                      : "border-border"
                  }`}
                >
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                {errors[field.name] && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-xs mt-1"
                  >
                    {errors[field.name]}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Message Textarea */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <label
              className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                focusedField === "message" || formData.message
                  ? "top-0 text-xs text-primary"
                  : "top-4 text-sm text-muted-foreground"
              }`}
            >
              Your Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              rows={4}
              className={`w-full pt-6 pb-2 bg-transparent border-b-2 transition-all duration-300 outline-none resize-none ${
                errors.message
                  ? "border-destructive"
                  : focusedField === "message"
                  ? "border-primary"
                  : "border-border"
              }`}
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-destructive text-xs mt-1"
              >
                {errors.message}
              </motion.p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring", bounce: 0.4 }}
            className="pt-4"
          >
            <button
              type="submit"
              disabled={submitState !== "idle"}
              className={`w-full py-4 rounded-full font-semibold text-white flex items-center justify-center gap-2 
                transition-all duration-300 ${
                  submitState === "success"
                    ? "bg-emerald-500"
                    : "bg-gradient-to-r from-primary to-accent hover:scale-[1.02] hover:shadow-lg pulse-glow"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              <AnimatePresence mode="wait">
                {submitState === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.span>
                )}
                {submitState === "loading" && (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </motion.span>
                )}
                {submitState === "success" && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    Sent!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
