import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import hasmukh from "@/assets/alumni-hasmukh-adhia.jpg";

const alumni = [
  {
    name: "Hasmukh Adhia",
    role: "Former Finance Secretary, Government of India",
    field: "Public Administration",
    image: hasmukh,
    achievement: "PhD from S-VYASA. Served as Finance Secretary of India and played a pivotal role in landmark economic reforms including GST implementation.",
  },
  {
    name: "Smitha Mallaiah, M.Sc.",
    role: "Sr. Mind-Body Intervention Specialist, MD Anderson Cancer Center, Houston",
    field: "Yoga Therapy",
    image: "https://ui-avatars.com/api/?name=Smitha+Mallaiah&background=92400e&color=fff&size=400&bold=true",
    achievement: "M.Sc. Yoga Therapy from S-VYASA. Established the first yoga therapy clinic at MD Anderson. Program Director, SVYASA Houston.",
  },
  {
    name: "Dr. Vijaya Kavuri, Ph.D.",
    role: "Asst. Professor, SVYASA & Joint Director of Research, VYASA-LA, California",
    field: "Yoga Research",
    image: "https://ui-avatars.com/api/?name=Vijaya+Kavuri&background=1e3a5f&color=fff&size=400&bold=true",
    achievement: "Ph.D. in Yoga from SVYASA. 10+ years of yoga therapy research in Los Angeles.",
  },
  {
    name: "Mr. Prosenjit Mopdar",
    role: "Professor of Yoga, Atmiya Educational Institutions",
    field: "Yoga Education",
    image: "https://ui-avatars.com/api/?name=Prosenjit+Mopdar&background=166534&color=fff&size=400&bold=true",
    achievement: "M.Sc. Yoga Therapy graduate of S-VYASA.",
  },
  {
    name: "Ms. Priyanka",
    role: "Yoga Therapist, AIIMS, New Delhi",
    field: "Clinical Yoga Therapy",
    image: "https://ui-avatars.com/api/?name=Priyanka&background=7c3aed&color=fff&size=400&bold=true",
    achievement: "M.Sc. Yoga Therapy graduate of S-VYASA.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % alumni.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + alumni.length) % alumni.length);

  const current = alumni[currentIndex];

  return (
    <section ref={ref} className="py-20 bg-cream relative overflow-hidden">
      {/* Gradient Blobs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
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
            Our Legacy
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            Notable Alumni
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Distinguished graduates who have shaped the world of yoga science, research, and wellness.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Award Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10"
          >
            <Award className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          {/* Card */}
          <div className="relative min-h-[320px] md:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-card rounded-3xl shadow-large pt-10 pb-8 px-8 md:px-12"
              >
                <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                  {/* Avatar */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="flex-shrink-0"
                  >
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-md">
                      <img
                        src={current.image}
                        alt={current.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Field badge */}
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3"
                    >
                      {current.field}
                    </motion.span>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-base md:text-lg text-foreground italic leading-relaxed mb-4"
                    >
                      "{current.achievement}"
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="font-heading text-xl font-semibold text-foreground">
                        {current.name}
                      </p>
                      <p className="text-muted-foreground text-sm">{current.role}</p>
                    </motion.div>
                  </div>
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
              {alumni.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
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
