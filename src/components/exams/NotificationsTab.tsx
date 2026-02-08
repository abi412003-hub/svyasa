import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FileText, Download, Loader2 } from "lucide-react";
import { notifications } from "./examsData";

interface NotificationsTabProps {
  searchQuery: string;
}

const NotificationsTab = ({ searchQuery }: NotificationsTabProps) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const filteredNotifications = notifications.filter((n) =>
    n.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleNotifications = filteredNotifications.slice(0, visibleCount);

  const handleLoadMore = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setVisibleCount((prev) => prev + 10);
    setIsLoading(false);
  };

  const getPdfUrls = (pdfUrl: string | string[]): string[] => {
    return Array.isArray(pdfUrl) ? pdfUrl : [pdfUrl];
  };

  return (
    <div className="space-y-4">
      <AnimatePresence mode="popLayout">
        {visibleNotifications.map((notification, index) => {
          const isMatch = searchQuery
            ? notification.title.toLowerCase().includes(searchQuery.toLowerCase())
            : true;

          return (
            <motion.div
              key={notification.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMatch ? 1 : 0.3, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.06, duration: 0.3 }}
              className={`group bg-white rounded-xl p-5 shadow-md border-l-4 border-primary
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                           !isMatch ? "pointer-events-none" : ""
                         }`}
            >
              <div className="flex items-start gap-4">
                {/* PDF Icon */}
                <motion.div
                  initial={{ rotateY: 0 }}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.4 }}
                  className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary"
                >
                  <FileText className="w-6 h-6" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-2">
                    {notification.isNew && (
                      <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 bg-primary text-white text-xs font-medium rounded-full">
                        <motion.span
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-navy leading-snug mb-3 group-hover:text-primary transition-colors">
                    {notification.title}
                  </h3>

                  {/* Download Buttons */}
                  <div className="flex flex-wrap gap-2">
                    {getPdfUrls(notification.pdfUrl).map((url, i) => (
                      <a
                        key={i}
                        href={url}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary 
                                   bg-primary/5 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Download className="w-4 h-4 group-hover:animate-bounce" />
                        {getPdfUrls(notification.pdfUrl).length > 1
                          ? `Download PDF ${i + 1}`
                          : "Download PDF"}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Load More Button */}
      {visibleCount < filteredNotifications.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center pt-6"
        >
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold
                       hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Loading...
              </>
            ) : (
              `Show More (${filteredNotifications.length - visibleCount} remaining)`
            )}
          </button>
        </motion.div>
      )}

      {/* Empty State */}
      {filteredNotifications.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <FileText className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
          <p className="text-lg text-muted-foreground">No notifications match your search.</p>
        </motion.div>
      )}
    </div>
  );
};

export default NotificationsTab;
