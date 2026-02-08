import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { programs, Program } from "./programsData";
import ProgramFilters from "./ProgramFilters";
import ProgramCard from "./ProgramCard";

interface Filters {
  campus: string[];
  level: string[];
  discipline: string[];
  course: string[];
}

const ProgramCatalog = () => {
  const [filters, setFilters] = useState<Filters>({
    campus: [],
    level: [],
    discipline: [],
    course: [],
  });

  const activeFilterCount = useMemo(() => {
    return (
      filters.campus.length +
      filters.level.length +
      filters.discipline.length +
      filters.course.length
    );
  }, [filters]);

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      if (filters.campus.length > 0 && !filters.campus.includes(program.campus)) {
        return false;
      }
      if (filters.level.length > 0 && !filters.level.includes(program.level)) {
        return false;
      }
      if (filters.discipline.length > 0 && !filters.discipline.includes(program.discipline)) {
        return false;
      }
      if (filters.course.length > 0 && !filters.course.includes(program.course)) {
        return false;
      }
      return true;
    });
  }, [filters]);

  // Group programs by campus and level for section headers
  const groupedPrograms = useMemo(() => {
    const groups: { title: string; programs: Program[] }[] = [];
    
    // Global Campus - Undergraduate
    const globalUG = filteredPrograms.filter(
      (p) => p.campus === "global" && p.level === "undergraduate"
    );
    if (globalUG.length > 0) {
      groups.push({ title: "Undergraduate — Global City Campus", programs: globalUG });
    }

    // Global Campus - Postgraduate
    const globalPG = filteredPrograms.filter(
      (p) => p.campus === "global" && p.level === "postgraduate"
    );
    if (globalPG.length > 0) {
      groups.push({ title: "Postgraduate — Global City Campus", programs: globalPG });
    }

    // Global Campus - Ph.D
    const globalPhD = filteredPrograms.filter(
      (p) => p.campus === "global" && p.level === "phd"
    );
    if (globalPhD.length > 0) {
      groups.push({ title: "Ph.D — Global City Campus", programs: globalPhD });
    }

    // Prashanti Campus - Undergraduate
    const prashantiUG = filteredPrograms.filter(
      (p) => p.campus === "prashanti" && p.level === "undergraduate"
    );
    if (prashantiUG.length > 0) {
      groups.push({ title: "Undergraduate — Prashanti Campus", programs: prashantiUG });
    }

    // Prashanti Campus - Postgraduate
    const prashantiPG = filteredPrograms.filter(
      (p) => p.campus === "prashanti" && p.level === "postgraduate"
    );
    if (prashantiPG.length > 0) {
      groups.push({ title: "Postgraduate — Prashanti Campus", programs: prashantiPG });
    }

    // Prashanti Campus - Ph.D
    const prashantiPhD = filteredPrograms.filter(
      (p) => p.campus === "prashanti" && p.level === "phd"
    );
    if (prashantiPhD.length > 0) {
      groups.push({ title: "Ph.D — Prashanti Campus", programs: prashantiPhD });
    }

    // Certificates
    const certificates = filteredPrograms.filter((p) => p.level === "certificate");
    if (certificates.length > 0) {
      groups.push({ title: "Certificate Programs", programs: certificates });
    }

    // Distance Learning
    const distance = filteredPrograms.filter((p) => p.level === "distance");
    if (distance.length > 0) {
      groups.push({ title: "Distance Learning Programs", programs: distance });
    }

    return groups;
  }, [filteredPrograms]);

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <ProgramFilters
            filters={filters}
            onFilterChange={setFilters}
            activeCount={activeFilterCount}
          />

          {/* Programs Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <motion.p
                key={filteredPrograms.length}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-muted-foreground"
              >
                Showing <span className="font-semibold text-navy">{filteredPrograms.length}</span>{" "}
                programs
              </motion.p>
            </div>

            <AnimatePresence mode="wait">
              {filteredPrograms.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-16"
                >
                  <p className="text-lg text-muted-foreground">
                    No programs match your filters. Try adjusting your criteria.
                  </p>
                </motion.div>
              ) : (
                <motion.div layout className="space-y-10">
                  {groupedPrograms.map((group) => (
                    <div key={group.title}>
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl font-display text-navy mb-6 pb-2 border-b-2 border-gold/30"
                      >
                        {group.title}
                      </motion.h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {group.programs.map((program, index) => (
                          <ProgramCard
                            key={program.id}
                            program={program}
                            index={index}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramCatalog;
