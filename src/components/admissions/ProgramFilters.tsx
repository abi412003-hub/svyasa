import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Filter } from "lucide-react";
import { useState } from "react";
import { filterOptions } from "./programsData";

interface Filters {
  campus: string[];
  level: string[];
  discipline: string[];
  course: string[];
}

interface ProgramFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  activeCount: number;
}

const ProgramFilters = ({ filters, onFilterChange, activeCount }: ProgramFiltersProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(["campus", "level"]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const handleCheckboxChange = (category: keyof Filters, value: string) => {
    const current = filters[category];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange({ ...filters, [category]: updated });
  };

  const clearAll = () => {
    onFilterChange({ campus: [], level: [], discipline: [], course: [] });
  };

  const filterSections = [
    { key: "campus" as const, title: "Campuses", options: filterOptions.campus },
    { key: "level" as const, title: "Level/Type", options: filterOptions.level },
    { key: "discipline" as const, title: "Discipline/Area of Study", options: filterOptions.discipline },
    { key: "course" as const, title: "Course", options: filterOptions.course },
  ];

  const FilterContent = () => (
    <div className="space-y-4">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-display text-navy relative inline-block"
      >
        Choose your interest
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold" />
      </motion.h3>

      {activeCount > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={clearAll}
          className="text-primary text-sm hover:underline flex items-center gap-1"
        >
          <X className="w-3 h-3" /> Clear All Filters
        </motion.button>
      )}

      <div className="space-y-2">
        {filterSections.map((section) => (
          <div key={section.key} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(section.key)}
              className="w-full flex items-center justify-between p-3 bg-muted/50 hover:bg-muted transition-colors"
            >
              <span className="font-medium text-navy">{section.title}</span>
              <motion.div
                animate={{ rotate: expandedSections.includes(section.key) ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </motion.div>
            </button>
            <AnimatePresence>
              {expandedSections.includes(section.key) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-3 space-y-2 bg-white">
                    {section.options.map((option) => (
                      <label
                        key={option.id}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={filters[section.key].includes(option.id)}
                            onChange={() => handleCheckboxChange(section.key, option.id)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                              filters[section.key].includes(option.id)
                                ? "bg-primary border-primary"
                                : "border-muted-foreground/30 group-hover:border-primary/50"
                            }`}
                          >
                            <AnimatePresence>
                              {filters[section.key].includes(option.id) && (
                                <motion.svg
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  className="w-3 h-3 text-white"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </motion.svg>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg"
        >
          <Filter className="w-4 h-4" />
          Filters
          {activeCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center"
            >
              {activeCount}
            </motion.span>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden overflow-y-auto p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-lg text-navy">Filters</h3>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                </button>
              </div>
              <FilterContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-72 flex-shrink-0">
        <div className="sticky top-24 bg-white rounded-xl p-5 shadow-lg border border-border">
          <FilterContent />
        </div>
      </div>
    </>
  );
};

export default ProgramFilters;
