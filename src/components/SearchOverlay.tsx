import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { allRoutes } from "@/config/navigation";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof allRoutes>([]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length > 1) {
      const filtered = allRoutes.filter((route) =>
        route.label.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 10));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleClose = () => {
    setQuery("");
    setResults([]);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 pt-20">
            {/* Close button */}
            <motion.button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <X size={32} />
            </motion.button>

            <div className="max-w-2xl mx-auto">
              {/* Heading */}
              <motion.h2
                className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Search Now
              </motion.h2>

              {/* Search Input */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Search programs, departments, research..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-14 pr-4 py-6 text-lg border-2 border-primary/20 focus:border-primary rounded-2xl bg-card shadow-soft transition-all duration-300 focus:shadow-glow-saffron"
                />
              </motion.div>

              {/* Search Results */}
              <AnimatePresence>
                {results.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-8 bg-card rounded-2xl shadow-medium overflow-hidden"
                  >
                    <ul className="divide-y divide-border">
                      {results.map((result, index) => (
                        <motion.li
                          key={result.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={result.href}
                            onClick={handleClose}
                            className="block px-6 py-4 hover:bg-muted transition-colors group"
                          >
                            <span className="text-foreground group-hover:text-primary transition-colors">
                              {result.label}
                            </span>
                            <span className="text-sm text-muted-foreground ml-2">
                              {result.href}
                            </span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* No results */}
              {query.length > 1 && results.length === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-muted-foreground mt-8"
                >
                  No results found for "{query}"
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
