import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Clock, GraduationCap, MapPin, ClipboardCheck, IndianRupee, Phone, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Course } from "@/data/courses";

interface OverviewSectionProps {
  course: Course;
}

const OverviewSection = ({ course }: OverviewSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const quickFacts = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: GraduationCap, label: "Degree", value: course.degree },
    { icon: MapPin, label: "Campus", value: course.campusType === "gcc" ? "Global City Campus" : "Prashanti Kutiram" },
    { icon: ClipboardCheck, label: "Eligibility", value: course.eligibility.primary.length > 40 ? course.eligibility.primary.slice(0, 40) + "..." : course.eligibility.primary },
    { icon: IndianRupee, label: "Registration", value: "₹25,000" },
  ];

  return (
    <section ref={sectionRef} id="overview" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Overview */}
          <div className="lg:w-[55%]">
            {/* Section Label */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-primary text-sm uppercase tracking-[3px] font-medium">
                OVERVIEW
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 40 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-0.5 bg-primary"
              />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8"
            >
              Why {course.shortTitle}?
            </motion.h2>

            {/* Overview Paragraphs */}
            <div className="space-y-6">
              {course.overview.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className={`text-muted-foreground leading-relaxed ${index === 0 ? "font-medium text-foreground" : ""}`}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stat Callout */}
            {course.statCallout && (
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                className="mt-8 bg-cream rounded-xl p-6 border-l-4 border-primary relative"
              >
                <Quote className="absolute top-4 left-4 w-8 h-8 text-accent/30" />
                <p className="text-foreground italic text-lg pl-8">
                  {course.statCallout.text}
                </p>
                <p className="text-muted-foreground text-sm mt-2 pl-8">
                  — {course.statCallout.source}
                </p>
              </motion.div>
            )}
          </div>

          {/* Right Column - Sticky Quick Facts */}
          <div className="lg:w-[45%]">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:sticky lg:top-24 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Quick Facts
              </h3>

              <div className="space-y-4">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <fact.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{fact.label}</p>
                      <p className="text-sm font-medium text-foreground">{fact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="h-px bg-border my-6" />

              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl"
                >
                  <a href={course.applyLink} target="_blank" rel="noopener noreferrer">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white rounded-xl"
                >
                  <Link to="/contact-us">Enquire Now</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                <span>Or call: +91-9070907066</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
