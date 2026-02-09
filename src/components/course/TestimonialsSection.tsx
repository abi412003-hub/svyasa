import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "The cybersecurity labs and industry mentorship at S-VYASA gave me skills I couldn't have learned anywhere else. I landed my dream job before graduation.",
    name: "Priya R.",
    program: "BCA 2024",
    initials: "PR"
  },
  {
    quote: "The dual specialization MBA allowed me to combine marketing and analytics. The yoga sessions kept me grounded during the intense coursework.",
    name: "Arun K.",
    program: "MBA 2024",
    initials: "AK"
  },
  {
    quote: "Studying yoga therapy at Prashanti Kutiram was a life-changing experience. The blend of ancient wisdom and modern research is truly unique.",
    name: "Meera S.",
    program: "B.Sc. Yoga Therapy 2024",
    initials: "MS"
  }
];

const TestimonialsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [studentCount, setStudentCount] = useState(0);

  // Auto-play
  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, shouldReduceMotion]);

  // Counter animation
  useEffect(() => {
    if (!isInView) return;
    const target = 5000;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setStudentCount(target);
        clearInterval(timer);
      } else {
        setStudentCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section 
      ref={sectionRef} 
      id="testimonials" 
      className="py-16 md:py-20 bg-cream"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8 }}
              className="h-0.5 bg-primary"
            />
            <span className="text-primary text-sm uppercase tracking-[3px] font-medium">
              STUDENT VOICES
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8 }}
              className="h-0.5 bg-primary"
            />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Hear From Our Community
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Card */}
          <motion.div
            key={current}
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-2xl shadow-md p-8 relative"
          >
            <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/30" />
            <p className="text-lg text-foreground italic leading-relaxed mb-6 pl-8">
              "{testimonials[current].quote}"
            </p>
            <div className="flex items-center gap-4 pl-8">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-semibold">
                {testimonials[current].initials}
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                <p className="text-primary text-sm">{testimonials[current].program}</p>
              </div>
            </div>
          </motion.div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === index ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Student Counter */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground">
            Join{" "}
            <span className="text-2xl font-bold text-secondary tabular-nums">
              {studentCount.toLocaleString()}+
            </span>{" "}
            students who chose S-VYASA
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
