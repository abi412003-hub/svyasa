import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { ArrowRight, Search, Loader2, ImageOff } from "lucide-react";
import { useNewsFromStorage, StorageNewsItem } from "@/hooks/useStorageFolderContent";

const NewsGrid = () => {
  const { items, loading } = useNewsFromStorage();
  const [visibleCount, setVisibleCount] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const filtered = useMemo(() =>
    items.filter((n) => n.title.toLowerCase().includes(searchQuery.toLowerCase())),
    [items, searchQuery]
  );

  const visible = filtered.slice(0, visibleCount);
  const featured = visible[0];
  const rest = visible.slice(1);

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    await new Promise((r) => setTimeout(r, 400));
    setVisibleCount((p) => p + 12);
    setIsLoadingMore(false);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <p className="text-muted-foreground">Loading news from image library…</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-muted-foreground">
        <ImageOff className="w-12 h-12 opacity-30" />
        <p className="font-medium">No news found</p>
        <p className="text-sm">Upload images to the <code className="bg-muted px-1 rounded">news/</code> folders in the Image Manager to populate this section.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex gap-4 bg-white p-4 rounded-xl shadow-md"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search news…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-b-2 border-border focus:border-primary outline-none transition-colors bg-transparent"
          />
        </div>
      </motion.div>

      {/* Featured */}
      {featured && (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative group">
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
            {featured.coverUrl ? (
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${featured.coverUrl}')` }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-navy/60" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-3">
                Latest News
              </span>
              <h2 className="text-2xl md:text-4xl font-display text-white mb-4">{featured.title}</h2>
              <span className="inline-flex items-center gap-2 text-gold font-medium">
                {featured.fileCount} photo{featured.fileCount !== 1 ? "s" : ""} <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {rest.map((item, index) => (
            <NewsCard key={item.slug} item={item} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More */}
      {visibleCount < filtered.length && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center pt-8">
          <button
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold
                       hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50"
          >
            {isLoadingMore ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Loading…</>
            ) : (
              `Load More (${filtered.length - visibleCount} remaining)`
            )}
          </button>
        </motion.div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">No news matching your search.</div>
      )}
    </div>
  );
};

const NewsCard = ({ item, index }: { item: StorageNewsItem; index: number }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ delay: (index % 12) * 0.06, duration: 0.4 }}
  >
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-default">
      <div className="relative h-48 overflow-hidden bg-muted">
        {item.coverUrl ? (
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${item.coverUrl}')` }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageOff className="w-10 h-10 opacity-20" />
          </div>
        )}
        <div className="absolute top-3 right-3 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
          {item.fileCount} photo{item.fileCount !== 1 ? "s" : ""}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-navy line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
          View Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  </motion.div>
);

export default NewsGrid;
