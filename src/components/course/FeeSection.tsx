import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Info, ArrowRight, Wallet, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course } from "@/data/courses";

interface FeeSectionProps {
  course: Course;
}

const FeeSection = ({ course }: FeeSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { fee } = course;
  const hasFullTable = fee.fullTable && fee.fullTable.headers.length > 0 && fee.fullTable.rows.length > 0;

  return (
    <section ref={sectionRef} id="fee" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(42 65% 55%), transparent)" }}
      />

      <div className="container mx-auto px-4 max-w-5xl relative">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1 }}
              className="h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)))" }}
            />
            <span className="text-sm uppercase tracking-[4px] font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              INVESTMENT
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 1 }}
              className="h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(var(--accent)), transparent)" }}
            />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Program Fee Structure
          </h2>
        </motion.div>

        {/* Full Multi-Column Table */}
        {hasFullTable ? (
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 rounded-3xl" />
            <div className="absolute inset-[1px] bg-card rounded-3xl" />

            <div className="relative overflow-x-auto rounded-3xl">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-gradient-to-r from-secondary to-secondary/90">
                    {fee.fullTable!.headers.map((header, i) => (
                      <th
                        key={i}
                        className={`px-5 py-4 font-semibold text-white text-sm ${i === 0 ? "text-center w-16" : i === 1 ? "text-left" : "text-center"}`}
                      >
                        {i === 0 && <Wallet className="w-4 h-4 text-accent inline mr-1" />}
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fee.fullTable!.rows.map((row, rIdx) => (
                    <motion.tr
                      key={rIdx}
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + rIdx * 0.1 }}
                      className="group hover:bg-primary/[0.03] transition-colors"
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`px-5 py-4 border-b border-border/50 text-sm ${
                            cIdx === 0 ? "text-center text-muted-foreground font-medium" :
                            cIdx === 1 ? "text-left text-foreground font-medium" :
                            "text-center"
                          }`}
                        >
                          {cIdx > 1 && cIdx < row.length - 1 ? (
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-base">
                              {fee.fullTable!.headers[cIdx]?.includes("USD") || cell.includes("$")
                                ? `$${cell.replace(/[^0-9.,]/g, "")}`
                                : /^\d/.test(cell) ? `₹${cell}` : cell}
                            </span>
                          ) : (
                            <span className="text-muted-foreground">{cell}</span>
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                  {/* Total Row */}
                  {fee.fullTable!.totalRow && (() => {
                    const headerCount = fee.fullTable!.headers.length;
                    const totalCells = fee.fullTable!.totalRow!;
                    // totalRow typically has fewer cells (e.g. "Total | 11,00,000 | 11,00,000 | 13,500")
                    // We need to align amounts under the correct columns
                    // First cell is "Total" label, rest are amounts that should align to amount columns (skipping Sl No & Particulars)
                    const label = totalCells[0]?.replace(/\*/g, "").trim() || "Total";
                    const amounts = totalCells.slice(1);
                    // Amount columns start at index 2 (after Sl No and Particulars)
                    const amountStartIdx = 2;
                    
                    return (
                      <tr className="bg-secondary/5 border-t-2 border-secondary/20">
                        {/* Span first two columns for "Total" label */}
                        <td colSpan={2} className="px-5 py-5 font-bold text-foreground uppercase tracking-wide text-left">
                          {label}
                        </td>
                        {/* Render amount cells aligned to their respective columns */}
                        {Array.from({ length: headerCount - 2 }).map((_, i) => {
                          const cellValue = amounts[i] || "";
                          const hasNumber = /\d/.test(cellValue);
                          return (
                            <td key={i} className="px-5 py-5 text-center font-bold">
                              {hasNumber ? (
                                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-lg">
                                  {fee.fullTable!.headers[i + 2]?.includes("USD") || cellValue.includes("$")
                                    ? `$${cellValue.replace(/[^0-9.,]/g, "")}`
                                    : `₹${cellValue.replace(/[^0-9,]/g, "")}`}
                                </span>
                              ) : (
                                <span className="text-muted-foreground">{cellValue}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })()}
                </tbody>
              </table>
            </div>
          </motion.div>
        ) : (
          /* Simple 2-column fallback */
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden max-w-3xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 rounded-3xl" />
            <div className="absolute inset-[1px] bg-card rounded-3xl" />

            <div className="relative overflow-hidden rounded-3xl">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-8 py-5 text-left font-semibold text-white bg-gradient-to-r from-secondary to-secondary/90">
                      <div className="flex items-center gap-3">
                        <Wallet className="w-5 h-5 text-accent" />
                        Year
                      </div>
                    </th>
                    <th className="px-8 py-5 text-right font-semibold text-white bg-gradient-to-r from-secondary/90 to-secondary">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fee.yearlyFees.map((f, index) => (
                    <motion.tr
                      key={f.year}
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="group hover:bg-primary/[0.03] transition-colors"
                    >
                      <td className="px-8 py-5 text-foreground font-medium border-b border-border/50">{f.year}</td>
                      <td className="px-8 py-5 text-right font-bold text-foreground border-b border-border/50">
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-lg">
                          {f.amount}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Registration + Application Fee Notes */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
          {fee.registration && (
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex-1 rounded-2xl p-5 flex items-start gap-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Info className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">Registration Fee:</span> {fee.registration}
              </p>
            </motion.div>
          )}

          {fee.applicationFee && (
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex-1 rounded-2xl p-5 flex items-start gap-4 bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/10"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Wallet className="w-4 h-4 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">Application Fee:</span> {fee.applicationFee}
              </p>
            </motion.div>
          )}
        </div>

        {/* Perks */}
        {fee.perks && (
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 max-w-3xl mx-auto rounded-2xl p-5 flex items-start gap-4 bg-gradient-to-r from-emerald-500/5 to-emerald-500/10 border border-emerald-500/15"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
              <Gift className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-sm text-foreground/80">
              <span className="font-bold text-foreground">Included:</span> {fee.perks}
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-2xl px-10 py-3 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all"
          >
            <a href={course.applyLink} target="_blank" rel="noopener noreferrer">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeeSection;
