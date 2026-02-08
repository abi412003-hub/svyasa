import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Building2 } from "lucide-react";

const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};

const AIUAboutAIU = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-cream rounded-2xl p-8 border-l-4 border-navy shadow-md">
            {/* Heading */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-display text-navy mb-2">
                  About AIU (Association of Indian Universities)
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full" />
              </div>
            </div>

            {/* Content */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              AIU, established in 1925, connects{" "}
              <span className="font-bold text-primary text-xl">
                <AnimatedCounter value={527} />
              </span>{" "}
              universities across India. Through its academic initiatives, policy leadership, 
              student development programs, and annual sports calendar, AIU fosters excellence 
              in higher education and competitive sports nationwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIUAboutAIU;
