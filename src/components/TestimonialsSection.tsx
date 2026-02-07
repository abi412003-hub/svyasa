import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "PhD Graduate, 2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    quote: "S-VYASA transformed my understanding of yoga from mere practice to a profound science. The research opportunities here are unparalleled.",
    rating: 5,
  },
  {
    name: "Raj Kumar",
    role: "MSc Yoga Therapy, 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    quote: "The holistic curriculum and experienced faculty helped me develop both as a practitioner and a therapist. I now run my own wellness center.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "International Student, Taiwan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    quote: "Coming from abroad, I found a second home at S-VYASA. The cultural immersion and authentic teachings exceeded all my expectations.",
    rating: 5,
  },
  {
    name: "Dr. Michael Roberts",
    role: "Visiting Faculty, USA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    quote: "The research infrastructure at S-VYASA rivals top international universities. Their contribution to yoga science is truly remarkable.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-20 bg-cream relative overflow-hidden">
      {/* Gradient Blobs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-primary font-medium mb-4"
          >
            Student Voices
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            Testimonials
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10"
          >
            <Quote className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          {/* Cards Container */}
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-card rounded-3xl shadow-large p-8 md:p-12"
              >
                <div className="text-center">
                  {/* Avatar */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20"
                  >
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Stars */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center gap-1 mb-4"
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-gold text-gold" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed"
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.p>

                  {/* Name & Role */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="font-heading text-xl font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-secondary/90 transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-secondary/90 transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
