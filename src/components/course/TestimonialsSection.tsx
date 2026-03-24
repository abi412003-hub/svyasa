import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "The cybersecurity labs and industry mentorship at S-VYASA gave me skills I couldn't have learned anywhere else. I landed my dream job before graduation.",
    name: "Priya R.",
    program: "BCA 2024",
    initials: "PR",
    rating: 5
  },
  {
    quote: "The dual specialization MBA allowed me to combine marketing and analytics. The yoga sessions kept me grounded during the intense coursework.",
    name: "Arun K.",
    program: "MBA 2024",
    initials: "AK",
    rating: 5
  },
  {
    quote: "Studying yoga therapy at Prashanti Kutiram was a life-changing experience. The blend of ancient wisdom and modern research is truly unique.",
    name: "Meera S.",
    program: "B.Sc. Yoga Therapy 2024",
    initials: "MS",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, [isPaused, shouldReduceMotion]);

  useEffect(() => {
    if (!isInView) return;
    const target = 5000;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let c = 0;
    const timer = setInterval(() => {
      c += increment;
      if (c >= target) { setStudentCount(target); clearInterval(timer); }
      else setStudentCount(Math.floor(c));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 md:py-28 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-cream" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(25 84% 50%), transparent)" }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1 }}
              className="h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, hsl(25 84% 50%))" }}
            />
            <span className="text-sm uppercase tracking-[4px] font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              STUDENT VOICES
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1 }}
              className="h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(42 65% 55%), transparent)" }}
            />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Hear From Our Community
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-12 h-12 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-border/50 items-center justify-center hover:bg-white hover:scale-110 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-secondary" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-12 h-12 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-border/50 items-center justify-center hover:bg-white hover:scale-110 transition-all"
          >
            <ChevronRight className="w-5 h-5 text-secondary" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden"
            >
              {/* Card with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl" />
              <div className="absolute inset-[1px] bg-card/95 backdrop-blur-xl rounded-3xl" />
              
              <div className="relative p-10">
                <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/[0.06]" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                
                <p className="text-xl text-foreground italic leading-relaxed mb-8 font-heading">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">{testimonials[current].name}</p>
                    <p className="text-primary text-sm font-medium">{testimonials[current].program}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  current === index ? "w-8" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                style={current === index ? { background: "linear-gradient(90deg, hsl(25 84% 50%), hsl(42 65% 55%))" } : {}}
              />
            ))}
          </div>
        </div>

        {/* Student Counter */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-lg text-muted-foreground">
            Join{" "}
            <span className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tabular-nums">
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
