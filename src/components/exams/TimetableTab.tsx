import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, FileText, Download, ExternalLink } from "lucide-react";
import { timetableGroups } from "./examsData";

interface TimetableTabProps {
  searchQuery: string;
}

const TimetableTab = ({ searchQuery }: TimetableTabProps) => {
  const [openGroup, setOpenGroup] = useState<string | null>(timetableGroups[0]?.id || null);

  const filteredGroups = timetableGroups.filter(
    (group) =>
      group.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.items.some((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleGroup = (groupId: string) => {
    setOpenGroup(openGroup === groupId ? null : groupId);
  };

  return (
    <div className="space-y-4">
      {filteredGroups.map((group, groupIndex) => {
        const isOpen = openGroup === group.id;
        const isMatch = searchQuery
          ? group.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            group.items.some((item) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : true;

        return (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMatch ? 1 : 0.3, y: 0 }}
            transition={{ delay: groupIndex * 0.08 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleGroup(group.id)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-cream/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-navy">{group.title}</h3>
                <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                  {group.items.length} {group.items.length === 1 ? "item" : "items"}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            </button>

            {/* Accordion Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-2 border-t border-border">
                    <div className="space-y-2">
                      {group.items.map((item, itemIndex) => {
                        const itemMatch = searchQuery
                          ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
                          : true;

                        return (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: itemMatch ? 1 : 0.3, x: 0 }}
                            transition={{ delay: itemIndex * 0.05 }}
                          >
                            {item.externalUrl ? (
                              <a
                                href={item.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-3 rounded-lg hover:bg-cream transition-colors"
                              >
                                <span className="text-navy group-hover:text-primary transition-colors">
                                  {item.title}
                                </span>
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                              </a>
                            ) : (
                              <a
                                href={item.pdfUrl as string}
                                download
                                className="group flex items-center justify-between p-3 rounded-lg hover:bg-cream transition-colors"
                              >
                                <span className="text-navy group-hover:text-primary transition-colors">
                                  {item.title}
                                </span>
                                <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                              </a>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      {/* Empty State */}
      {filteredGroups.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <FileText className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
          <p className="text-lg text-muted-foreground">No timetables match your search.</p>
        </motion.div>
      )}
    </div>
  );
};

export default TimetableTab;
