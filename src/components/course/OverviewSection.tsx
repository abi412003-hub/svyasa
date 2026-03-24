import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Clock, GraduationCap, MapPin, ClipboardCheck, IndianRupee, Phone, Quote, ArrowRight, Sparkles } from "lucide-react";
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
    { icon: Clock, label: "Duration", value: course.duration, gradient: "from-primary/20 to-accent/10" },
    { icon: GraduationCap, label: "Degree", value: course.degree, gradient: "from-secondary/20 to-teal/10" },
    { icon: MapPin, label: "Campus", value: course.campusType === "gcc" ? "Global City Campus" : "Prashanti Kutiram", gradient: "from-accent/20 to-gold/10" },
    { icon: ClipboardCheck, label: "Eligibility", value: course.eligibility.primary.length > 40 ? course.eligibility.primary.slice(0, 40) + "..." : course.eligibility.primary, gradient: "from-teal/20 to-primary/10" },
    { icon: IndianRupee, label: "Registration", value: "₹25,000", gradient: "from-gold/20 to-accent/10" },
  ];

  return (
    <section ref={sectionRef} id="overview" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(25 84% 50%), transparent)" }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[80px]"
        style={{ background: "radial-gradient(circle, hsl(42 65% 55%), transparent)" }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Overview */}
          <div className="lg:w-[55%]">
            {/* Section Label with gradient line */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-sm uppercase tracking-[4px] font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                OVERVIEW
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 60 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-[2px] rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(25 84% 50%), hsl(42 65% 55%))" }}
              />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight"
            >
              Why <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{course.shortTitle}</span>?
            </motion.h2>

            {/* Overview Paragraphs with stagger */}
            <div className="space-y-6">
              {course.overview.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className={`leading-[1.8] ${index === 0 ? "text-lg font-medium text-foreground" : "text-muted-foreground"}`}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stat Callout - Premium glassmorphism */}
            {course.statCallout && (
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                className="mt-10 relative rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
                <div className="relative p-8">
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-accent/15" />
                  <p className="text-foreground italic text-xl leading-relaxed font-heading">
                    "{course.statCallout.text}"
                  </p>
                  <p className="text-muted-foreground text-sm mt-4 flex items-center gap-2">
                    <span className="w-6 h-[1px] bg-accent" />
                    {course.statCallout.source}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Premium Sticky Quick Facts */}
          <div className="lg:w-[45%]">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-24"
            >
              <div className="relative rounded-3xl overflow-hidden">
                {/* Card background with gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl" />
                <div className="absolute inset-[1px] bg-card/95 backdrop-blur-2xl rounded-3xl" />
                
                <div className="relative p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      Quick Facts
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {quickFacts.map((fact, index) => (
                      <motion.div
                        key={fact.label}
                        initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className={`flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r ${fact.gradient} hover:scale-[1.02] transition-transform`}
                      >
                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                          <fact.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">{fact.label}</p>
                          <p className="text-sm font-semibold text-foreground mt-0.5">{fact.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Gradient divider */}
                  <div className="h-[1px] my-8 bg-gradient-to-r from-transparent via-border to-transparent" />

                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-2xl py-3 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-[1.02]"
                    >
                      <a href={course.applyLink} target="_blank" rel="noopener noreferrer">
                        Apply Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-secondary/20 text-secondary hover:bg-secondary hover:text-white rounded-2xl py-3 text-base transition-all"
                    >
                      <Link to="/contact-us">Enquire Now</Link>
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground text-sm">
                    <Phone className="w-4 h-4" />
                    <span>Or call: +91-9070907066</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
