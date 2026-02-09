import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import { Search, X, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Course, Category } from "@/data/courses";
import ProgramCard from "./ProgramCard";

interface ProgramGridProps {
  courses: Course[];
  category: Category;
}

const ProgramGrid = ({ courses, category }: ProgramGridProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedCampus, setSelectedCampus] = useState("All");
  const [isSticky, setIsSticky] = useState(false);

  // Extract unique durations
  const durations = useMemo(() => {
    const unique = [...new Set(courses.map(c => c.duration))];
    return ["All", ...unique.sort()];
  }, [courses]);

  // Check if mixed campus types
  const hasMixedCampus = useMemo(() => {
    return category.campusType === "both" || 
      new Set(courses.map(c => c.campusType)).size > 1;
  }, [courses, category]);

  // Filter courses
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = searchQuery.trim() === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.hookLine.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDuration = selectedDuration === "All" || course.duration === selectedDuration;
      
      const matchesCampus = selectedCampus === "All" ||
        (selectedCampus === "Global City" && course.campusType === "gcc") ||
        (selectedCampus === "Prashanti" && course.campusType === "prashanti");
      
      return matchesSearch && matchesDuration && matchesCampus;
    });
  }, [courses, searchQuery, selectedDuration, selectedCampus]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDuration("All");
    setSelectedCampus("All");
  };

  const hasActiveFilters = searchQuery || selectedDuration !== "All" || selectedCampus !== "All";

  // Handle sticky state
  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setIsSticky(rect.top <= 80);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="program-grid"
      className="py-16 md:py-20 bg-background"
      onScroll={handleScroll}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary text-sm uppercase tracking-[3px] font-medium">
              EXPLORE PROGRAMS
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-primary"
            />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Find Your Perfect Program
          </h2>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`sticky top-20 z-30 bg-background/95 backdrop-blur-md border border-border rounded-2xl p-4 mb-8 shadow-sm transition-shadow ${isSticky ? 'shadow-md' : ''}`}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 md:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              <Input
                type="text"
                placeholder="Search programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 rounded-xl border-border focus:border-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Duration Pills */}
            <div className="flex flex-wrap gap-2 flex-1">
              {durations.map((duration) => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedDuration === duration
                      ? "bg-primary text-white"
                      : "border border-secondary text-secondary hover:bg-secondary/10"
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>

            {/* Campus Filter (if mixed) */}
            {hasMixedCampus && (
              <div className="flex gap-2">
                {["All", "Global City", "Prashanti"].map((campus) => (
                  <button
                    key={campus}
                    onClick={() => setSelectedCampus(campus)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedCampus === campus
                        ? "bg-primary text-white"
                        : "border border-secondary text-secondary hover:bg-secondary/10"
                    }`}
                  >
                    {campus}
                  </button>
                ))}
              </div>
            )}

            {/* Results Count */}
            <div className="text-sm text-muted-foreground whitespace-nowrap">
              Showing {filteredCourses.length} of {courses.length} programs
            </div>
          </div>
        </motion.div>

        {/* Program Cards Grid */}
        <AnimatePresence mode="popLayout">
          {filteredCourses.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCourses.map((course, index) => (
                <ProgramCard key={course.slug} course={course} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <Search className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                No programs match your search
              </h3>
              <p className="text-muted-foreground mb-6">
                Try a different keyword or clear filters
              </p>
              <Button
                onClick={clearFilters}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-xl"
              >
                <Filter className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProgramGrid;
