import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { trainingCourses, trainingCategories } from "@/data/trainingData";
import { useState, useEffect } from "react";

const tabs = [
  { key: "all", label: "All" },
  { key: "yoga-wellness", label: "Yoga & Wellness" },
  { key: "ayurveda", label: "Ayurveda" },
  { key: "government-psu", label: "Government & PSU" },
  { key: "signature", label: "Signature Programs" },
];

const TrainingCourses = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? trainingCourses : trainingCourses.filter((c) => c.category === active);

  return (
    <>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 text-xs mb-3">
            <Link to="/training" className="hover:text-gold transition-colors">Home</Link> &gt; Courses
          </p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl text-white font-bold">
            All Courses & Programs
          </motion.h1>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[48px] z-30 bg-card border-b border-border/50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  active === tab.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border/50 p-5 hover:shadow-large hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                  {course.categoryLabel}
                </span>
                <h3 className="font-heading font-semibold text-foreground mt-3 mb-2">{course.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Clock className="w-3 h-3" /> {course.duration}
                  </span>
                  <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded-full">{course.mode}</span>
                </div>
                <p className="text-muted-foreground text-xs line-clamp-2 mb-4">{course.description}</p>
                <Link
                  to={`/training/courses/${course.category}`}
                  className="text-primary text-xs font-medium hover:underline inline-flex items-center gap-1"
                >
                  View Details <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingCourses;
