import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Layers, X, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Course } from "@/data/courses";

interface CompareWidgetProps {
  currentCourse: Course;
  categoryCourses: Course[];
}

const CompareWidget = ({ currentCourse, categoryCourses }: CompareWidgetProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string>("");
  
  const otherCourses = categoryCourses.filter(c => c.slug !== currentCourse.slug);
  const selectedCourse = otherCourses.find(c => c.slug === selectedSlug);

  if (otherCourses.length === 0) return null;

  return (
    <>
      {/* FAB Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 lg:bottom-6 right-4 z-30 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg flex items-center justify-center"
        animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <Layers className="w-5 h-5" />
      </motion.button>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 z-40"
            />

            {/* Drawer - Desktop */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="hidden lg:block fixed right-0 top-0 bottom-0 w-[420px] bg-background z-50 shadow-2xl rounded-l-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Compare Programs
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Current Program Card */}
                <div className="bg-cream rounded-xl p-4 mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Current</p>
                  <h4 className="font-semibold text-foreground">{currentCourse.shortTitle}</h4>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                      {currentCourse.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {currentCourse.campusType === "gcc" ? "GCC" : "Prashanti"}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border my-4" />

                {/* Compare With Select */}
                <div className="mb-6">
                  <label className="text-sm text-muted-foreground mb-2 block">Compare with:</label>
                  <Select value={selectedSlug} onValueChange={setSelectedSlug}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      {otherCourses.map((course) => (
                        <SelectItem key={course.slug} value={course.slug}>
                          {course.shortTitle}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Comparison Table */}
                {selectedCourse && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {/* Headers */}
                      <div className="font-semibold text-foreground">{currentCourse.shortTitle}</div>
                      <div className="font-semibold text-primary">{selectedCourse.shortTitle}</div>

                      {/* Duration */}
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Duration</p>
                        <p className="text-foreground">{currentCourse.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Duration</p>
                        <p className={currentCourse.duration !== selectedCourse.duration ? "text-primary font-medium" : ""}>
                          {selectedCourse.duration}
                        </p>
                      </div>

                      {/* Eligibility */}
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Eligibility</p>
                        <p className="text-foreground text-xs">{currentCourse.eligibility.primary}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Eligibility</p>
                        <p className="text-xs">{selectedCourse.eligibility.primary}</p>
                      </div>

                      {/* Highlights */}
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Key Highlights</p>
                        <ul className="text-xs text-foreground space-y-0.5">
                          {currentCourse.highlights.slice(0, 3).map((h, i) => (
                            <li key={i}>• {h.title}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Key Highlights</p>
                        <ul className="text-xs space-y-0.5">
                          {selectedCourse.highlights.slice(0, 3).map((h, i) => (
                            <li key={i}>• {h.title}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Careers */}
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Top Careers</p>
                        <ul className="text-xs text-foreground space-y-0.5">
                          {currentCourse.careers.slice(0, 3).map((c, i) => (
                            <li key={i}>• {c.title}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Top Careers</p>
                        <ul className="text-xs space-y-0.5">
                          {selectedCourse.careers.slice(0, 3).map((c, i) => (
                            <li key={i}>• {c.title}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white rounded-xl"
                    >
                      <Link to={`/courses/${selectedCourse.slug}`} onClick={() => setIsOpen(false)}>
                        View {selectedCourse.shortTitle}
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Drawer - Mobile (Bottom Sheet) */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="lg:hidden fixed left-0 right-0 bottom-0 max-h-[70vh] bg-background z-50 shadow-2xl rounded-t-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Handle */}
                <div className="w-12 h-1 bg-border rounded-full mx-auto mb-4" />

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Compare Programs
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Current Program */}
                <div className="bg-cream rounded-xl p-4 mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Current</p>
                  <h4 className="font-semibold text-foreground">{currentCourse.shortTitle}</h4>
                </div>

                {/* Compare With Select */}
                <div className="mb-4">
                  <label className="text-sm text-muted-foreground mb-2 block">Compare with:</label>
                  <Select value={selectedSlug} onValueChange={setSelectedSlug}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      {otherCourses.map((course) => (
                        <SelectItem key={course.slug} value={course.slug}>
                          {course.shortTitle}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedCourse && (
                  <Button
                    asChild
                    className="w-full bg-primary text-white rounded-xl"
                  >
                    <Link to={`/courses/${selectedCourse.slug}`} onClick={() => setIsOpen(false)}>
                      View {selectedCourse.shortTitle}
                    </Link>
                  </Button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CompareWidget;
