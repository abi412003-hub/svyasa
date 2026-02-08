import { motion } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";
import { resultsGroups } from "./examsData";

interface ResultsTabProps {
  searchQuery: string;
}

const ResultsTab = ({ searchQuery }: ResultsTabProps) => {
  const filteredGroups = resultsGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="space-y-8">
      {/* Result Lookup Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 text-white"
      >
        {/* Animated glow border */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(232, 117, 26, 0.3)",
              "0 0 40px rgba(232, 117, 26, 0.5)",
              "0 0 20px rgba(232, 117, 26, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-2xl"
        />
        
        <div className="relative z-10">
          <h3 className="text-xl font-display mb-2">Check Your Results</h3>
          <p className="text-white/80 mb-4 text-sm">
            Enter your registration/roll number to find your results on India Results
          </p>
          <a
            href="https://www.indiaresults.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary rounded-full font-medium
                       hover:bg-white/90 transition-colors"
          >
            <Search className="w-4 h-4" />
            Search Results
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* Result Groups */}
      {filteredGroups.map((group, groupIndex) => (
        <motion.div
          key={group.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: groupIndex * 0.1 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Category Header */}
          <div className="bg-navy text-white px-5 py-3">
            <h3 className="font-semibold">{group.category}</h3>
          </div>

          {/* Result Items */}
          <div className="divide-y divide-border">
            {group.items.map((item, itemIndex) => {
              const isMatch = searchQuery
                ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
                : true;

              return (
                <motion.a
                  key={itemIndex}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isMatch ? 1 : 0.3, x: 0 }}
                  transition={{ delay: itemIndex * 0.05 }}
                  className="group flex items-center justify-between p-4 hover:bg-cream transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {item.isNew && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary text-white text-xs font-medium rounded-full">
                        <motion.span
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                        New
                      </span>
                    )}
                    <span className="text-navy group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      ))}

      {/* Empty State */}
      {filteredGroups.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Search className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
          <p className="text-lg text-muted-foreground">No results match your search.</p>
        </motion.div>
      )}
    </div>
  );
};

export default ResultsTab;
