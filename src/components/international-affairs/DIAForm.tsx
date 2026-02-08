import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Check, Loader2 } from "lucide-react";
import { socialLinks, countries, programs } from "./diaData";
import { toast } from "@/hooks/use-toast";

const iconMap: Record<string, React.ElementType> = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
};

const DIAForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    program: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFieldValid = (field: string) => {
    const value = formData[field as keyof typeof formData];
    if (!value) return false;
    if (field === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (field === "phone") return /^\+?[\d\s-]{8,}$/.test(value);
    return value.length > 0;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-xl p-6 lg:sticky lg:top-32"
    >
      <h3 className="text-xl font-display text-navy mb-6">Connect with Us</h3>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mb-6">
        {socialLinks.map((social, i) => {
          const Icon = iconMap[social.icon] || Facebook;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              whileHover={{ y: -4, backgroundColor: social.color }}
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          );
        })}
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center"
          >
            <Check className="w-8 h-8 text-green-600" />
          </motion.div>
          <h4 className="text-lg font-semibold text-navy mb-2">Thank you!</h4>
          <p className="text-muted-foreground">We'll be in touch soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full px-4 py-3 border-b-2 border-border focus:border-primary outline-none bg-transparent peer transition-colors"
              placeholder=" "
            />
            <label
              className={`absolute left-4 transition-all pointer-events-none ${
                formData.name || focusedField === "name"
                  ? "top-0 text-xs text-primary"
                  : "top-3 text-muted-foreground"
              }`}
            >
              Name *
            </label>
            {isFieldValid("name") && (
              <Check className="absolute right-3 top-3 w-5 h-5 text-green-500" />
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full px-4 py-3 border-b-2 border-border focus:border-primary outline-none bg-transparent peer transition-colors"
              placeholder=" "
            />
            <label
              className={`absolute left-4 transition-all pointer-events-none ${
                formData.email || focusedField === "email"
                  ? "top-0 text-xs text-primary"
                  : "top-3 text-muted-foreground"
              }`}
            >
              Email *
            </label>
            {isFieldValid("email") && (
              <Check className="absolute right-3 top-3 w-5 h-5 text-green-500" />
            )}
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 border-b-2 border-border focus:border-primary outline-none bg-transparent peer transition-colors"
              placeholder=" "
            />
            <label
              className={`absolute left-4 transition-all pointer-events-none ${
                formData.phone || focusedField === "phone"
                  ? "top-0 text-xs text-primary"
                  : "top-3 text-muted-foreground"
              }`}
            >
              Phone
            </label>
            {isFieldValid("phone") && (
              <Check className="absolute right-3 top-3 w-5 h-5 text-green-500" />
            )}
          </div>

          {/* Country */}
          <div className="relative">
            <select
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              required
              className="w-full px-4 py-3 border-b-2 border-border focus:border-primary outline-none bg-white appearance-none cursor-pointer transition-colors"
            >
              <option value="">Select Country *</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
            {formData.country && (
              <Check className="absolute right-8 top-3 w-5 h-5 text-green-500" />
            )}
          </div>

          {/* Program Interest */}
          <div className="relative">
            <select
              value={formData.program}
              onChange={(e) => handleInputChange("program", e.target.value)}
              required
              className="w-full px-4 py-3 border-b-2 border-border focus:border-primary outline-none bg-white appearance-none cursor-pointer transition-colors"
            >
              <option value="">Program Interest *</option>
              {programs.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
            {formData.program && (
              <Check className="absolute right-8 top-3 w-5 h-5 text-green-500" />
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              rows={3}
              className="w-full px-4 py-3 border-b-2 border-border focus:border-primary outline-none bg-transparent resize-none transition-colors"
              placeholder=" "
            />
            <label
              className={`absolute left-4 transition-all pointer-events-none ${
                formData.message || focusedField === "message"
                  ? "top-0 text-xs text-primary"
                  : "top-3 text-muted-foreground"
              }`}
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
};

export default DIAForm;
