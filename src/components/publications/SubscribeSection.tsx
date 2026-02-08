import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Floating lotus petal component
const FloatingPetal = ({ delay, startX }: { delay: number; startX: number }) => (
  <motion.div
    className="absolute text-4xl opacity-20 pointer-events-none"
    initial={{ x: startX, y: "100%", rotate: 0 }}
    animate={{
      x: [startX, startX + 50, startX - 30, startX + 20],
      y: ["100%", "-10%"],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 15,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    🪷
  </motion.div>
);

const SubscribeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate submission (placeholder for actual logic)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive Yoga Sudha updates in your inbox.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-24 overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-gold to-primary"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      />

      {/* Floating lotus petals */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPetal delay={0} startX={100} />
        <FloatingPetal delay={5} startX={300} />
        <FloatingPetal delay={10} startX={600} />
      </div>

      {/* Sparkle particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="w-4 h-4 text-white/40" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            className="font-heading text-3xl md:text-4xl text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Stay Connected with Yoga Sudha
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-white/80 mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Receive the latest edition directly in your inbox every month.
          </motion.p>

          {/* Email form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 py-6 bg-white/95 border-0 shadow-lg focus:ring-2 focus:ring-gold text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary hover:bg-secondary/90 text-gold font-semibold px-8 py-6 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </motion.form>

          {/* Privacy note */}
          <motion.p
            className="text-white/60 text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We respect your privacy. Unsubscribe anytime.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
