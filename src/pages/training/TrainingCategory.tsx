import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Clock, Users, Award, CheckCircle2, ArrowRight, AlertCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trainingCategories, trainingCourses } from "@/data/trainingData";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TrainingCategory = () => {
  const { category } = useParams<{ category: string }>();
  const cat = trainingCategories.find((c) => c.slug === category);
  const courses = trainingCourses.filter((c) => c.category === category);

  if (!cat) {
    return (
      <div className="py-32 text-center">
        <h1 className="font-heading text-3xl text-foreground">Category not found</h1>
        <Link to="/training/courses" className="text-primary mt-4 inline-block">View All Courses</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 text-xs mb-3">
            <Link to="/training" className="hover:text-gold transition-colors">Home</Link> &gt;{" "}
            <Link to="/training/courses" className="hover:text-gold transition-colors">Courses</Link> &gt; {cat.title}
          </p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-3xl md:text-5xl text-white font-bold mb-3">
            {cat.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/60 max-w-2xl mx-auto">
            {cat.description}
          </motion.p>
        </div>
      </section>

      {/* Category-specific note */}
      {cat.note && (
        <section className="py-4 bg-gold/10 border-b border-gold/20">
          <div className="container mx-auto px-4 flex items-center gap-2 justify-center">
            <AlertCircle className="w-4 h-4 text-gold" />
            <p className="text-sm text-foreground font-medium">{cat.note}</p>
          </div>
        </section>
      )}

      {/* Government-specific section */}
      {category === "government-psu" && (
        <section className="py-12 bg-[hsl(40,100%,97%)]">
          <div className="container mx-auto px-4 text-center">
            <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">For Institutional Training</h2>
            <p className="text-muted-foreground text-sm mb-4 max-w-xl mx-auto">
              These programs are conducted as capacity-building / in-service training. Contact us for custom program design and scheduling.
            </p>
            <Link to="/training/institutions-psu">
              <Button className="bg-primary text-primary-foreground rounded-full">Contact for Institutional Training</Button>
            </Link>
          </div>
        </section>
      )}

      {/* Course List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {courses.map((course, i) => (
              <AccordionItem key={course.id} value={course.id} className="bg-card rounded-xl border border-border/50 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex-1 text-left">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-heading font-semibold text-foreground">{course.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Clock className="w-3 h-3" /> {course.duration}
                      </span>
                      <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded-full">{course.mode}</span>
                      <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">{course.fee}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground text-sm mb-4">{course.description}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Users className="w-3 h-3 text-gold" /> Who It's For
                      </h4>
                      <p className="text-muted-foreground text-xs">{course.targetAudience}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Award className="w-3 h-3 text-gold" /> Certification
                      </h4>
                      <p className="text-muted-foreground text-xs">{course.certification}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">What You'll Learn</h4>
                    <div className="space-y-1.5">
                      {course.learningPoints.map((point, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-xs">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3 items-center">
                    <Link to="/training/admissions">
                      <Button size="sm" className="bg-primary text-primary-foreground rounded-full">Enrol Now</Button>
                    </Link>
                    <p className="text-[10px] text-muted-foreground italic">
                      This is a short-term certificate/training program, not a degree or diploma.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default TrainingCategory;
