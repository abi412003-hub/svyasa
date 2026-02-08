import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const faculty = [
  {
    name: "Prof. M Jayaraman",
    designation: "Dean of Academics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    qualifications: "Ph.D. in Yoga Studies, M.Sc. Yoga, B.Sc. Physics",
  },
  {
    name: "Prof. Karuna Nagarajan",
    designation: "Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    qualifications: "Ph.D. in Psychology, M.A. Yoga, PGDYT",
  },
  {
    name: "Dr. N Sridhar",
    designation: "Vice Principal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    qualifications: "Ph.D. in Yoga Therapy, M.Sc. Yoga Therapy",
  },
  {
    name: "Dr. Manjunath G",
    designation: "Associate Professor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    qualifications: "Ph.D. in Yoga, M.Phil. Yoga, M.Sc. Yoga",
  },
  {
    name: "Dr. Soubhagya Laxmi",
    designation: "Associate Professor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    qualifications: "Ph.D. in Naturopathy, BNYS, YIC",
  },
  {
    name: "Dr. Satya Prakash Purohit",
    designation: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    qualifications: "Ph.D. in Yoga, M.Sc. Yoga, B.Sc. Yoga",
  },
  {
    name: "Mr. Shailesh Pradhan",
    designation: "Assistant Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    qualifications: "MBA, M.Sc. Yoga Therapy, PGDYT",
  },
  {
    name: "Dr. K S Nibedita",
    designation: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    qualifications: "Ph.D. in Psychology, M.A. Clinical Psychology",
  },
];

const PKFaculty = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFaculty, setSelectedFaculty] = useState<typeof faculty[0] | null>(null);
  const visibleCount = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= faculty.length - visibleCount + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? faculty.length - visibleCount : prev - 1
    );
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-px bg-accent w-16"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ originX: 1 }}
            />
            <motion.h2
              className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Faculties
            </motion.h2>
            <motion.div
              className="h-px bg-accent w-16"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ originX: 0 }}
            />
          </motion.div>
        </div>

        {/* Faculty carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Cards container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: -currentIndex * (100 / visibleCount + 1.5) + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {faculty.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-1"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    {/* Animated top border on hover */}
                    <motion.div
                      className="absolute top-0 left-0 h-1 bg-primary z-10"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Photo */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="font-semibold text-lg text-secondary mb-1">
                        {member.name}
                      </h3>
                      <p className="text-accent text-sm mb-3">
                        {member.designation}
                      </p>
                      <button
                        onClick={() => setSelectedFaculty(member)}
                        className="text-primary text-sm font-medium hover:underline flex items-center gap-1 group/link"
                      >
                        Read more
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* View all link */}
        <motion.div
          className="text-right mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/research-faculty"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline group"
          >
            View all faculties
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Faculty modal */}
      <Dialog open={!!selectedFaculty} onOpenChange={() => setSelectedFaculty(null)}>
        <DialogContent className="max-w-lg">
          <AnimatePresence>
            {selectedFaculty && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img
                    src={selectedFaculty.image}
                    alt={selectedFaculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-secondary mb-1">
                    {selectedFaculty.name}
                  </h3>
                  <p className="text-accent font-medium mb-1">
                    {selectedFaculty.designation}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Prashanti Kutiram
                  </p>
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-secondary mb-2">
                      Educational Qualifications
                    </h4>
                    <p className="text-muted-foreground">
                      {selectedFaculty.qualifications}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PKFaculty;
