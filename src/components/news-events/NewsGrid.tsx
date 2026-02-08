import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { ArrowRight, Search, Calendar, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { newsData, NewsItem } from "./newsEventsData";

const NewsGrid = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("all");

  const years = useMemo(() => {
    const uniqueYears = [...new Set(newsData.map((n) => n.date.split(" ").pop()))];
    return uniqueYears.sort((a, b) => Number(b) - Number(a));
  }, []);

  const filteredNews = useMemo(() => {
    return newsData.filter((news) => {
      const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear = yearFilter === "all" || news.date.includes(yearFilter);
      return matchesSearch && matchesYear;
    });
  }, [searchQuery, yearFilter]);

  const visibleNews = filteredNews.slice(0, visibleCount);
  const featuredNews = filteredNews.find((n) => n.featured);
  const regularNews = visibleNews.filter((n) => !n.featured);

  const handleLoadMore = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setVisibleCount((prev) => prev + 12);
    setIsLoading(false);
  };

  const getImageUrl = (newsId: number) => {
    return `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80&sig=${newsId}`;
  };

  return (
    <div className="space-y-8">
      {/* Search and Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl shadow-md"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-b-2 border-border focus:border-primary outline-none transition-colors bg-transparent"
          />
        </div>
        <div className="relative w-full sm:w-48">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-b-2 border-border focus:border-primary outline-none appearance-none bg-transparent cursor-pointer"
          >
            <option value="all">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Featured News Card */}
      {featuredNews && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          <Link to={`/${featuredNews.url}`} className="block">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${getImageUrl(featuredNews.id)}')` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <motion.span
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-3"
                >
                  Featured • {featuredNews.date}
                </motion.span>
                <h2 className="text-2xl md:text-4xl font-display text-white mb-4">
                  {featuredNews.title}
                </h2>
                <span className="inline-flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* News Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {regularNews.map((news, index) => (
            <NewsCard key={news.id} news={news} index={index} getImageUrl={getImageUrl} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button */}
      {visibleCount < filteredNews.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center pt-8"
        >
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold
                       hover:bg-primary hover:text-white transition-all duration-300 pulse-glow disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Loading...
              </>
            ) : (
              `Load More (${filteredNews.length - visibleCount} remaining)`
            )}
          </button>
        </motion.div>
      )}

      {/* No results */}
      {filteredNews.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-lg text-muted-foreground">No news found matching your criteria.</p>
        </motion.div>
      )}
    </div>
  );
};

const NewsCard = ({
  news,
  index,
  getImageUrl,
}: {
  news: NewsItem;
  index: number;
  getImageUrl: (id: number) => string;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: (index % 12) * 0.08, duration: 0.4 }}
    >
      <Link
        to={`/${news.url}`}
        className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${getImageUrl(news.id)}')` }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
          {/* Date Badge */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute top-3 right-3 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full"
          >
            {news.date}
          </motion.div>
          {/* Left border on hover */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 bg-primary origin-top"
            initial={{ scaleY: 0 }}
            whileHover={{ scaleY: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-semibold text-navy line-clamp-2 mb-3 group-hover:text-primary transition-colors">
            {news.title}
          </h3>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            View More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsGrid;
