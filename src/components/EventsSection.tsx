import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { useSupabaseNews } from "@/hooks/useSupabaseNews";
import { useSupabaseEvents } from "@/hooks/useSupabaseEvents";
import { format, parseISO } from "date-fns";

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { data: allNews, loading: newsLoading } = useSupabaseNews();
  const { data: allEvents, loading: eventsLoading } = useSupabaseEvents();

  const publishedEvents = allEvents.filter(e => e.isPublished).slice(0, 3);
  const publishedNews = allNews.filter(n => n.isPublished).slice(0, 2);

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Events Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Events
              </h2>
            </div>

            <div className="space-y-4">
              {eventsLoading ? (
                <p className="text-muted-foreground">Loading events…</p>
              ) : publishedEvents.length === 0 ? (
                <p className="text-muted-foreground">No upcoming events.</p>
              ) : (
                publishedEvents.map((event, index) => {
                  const d = parseISO(event.date);
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ x: 8 }}
                    >
                      <Link
                        to="/news-events"
                        className="group flex gap-4 p-4 bg-muted rounded-xl cursor-pointer hover:bg-muted/80 transition-all border-l-4 border-transparent hover:border-primary"
                      >
                        {/* Date Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                          className="shrink-0 w-16 h-16 bg-primary rounded-xl flex flex-col items-center justify-center text-primary-foreground"
                        >
                          <span className="text-2xl font-bold">{format(d, "dd")}</span>
                          <span className="text-xs uppercase">{format(d, "MMM")}</span>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                            {event.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {format(d, "h:mm a")}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {event.campus || "Campus"}
                            </span>
                          </div>
                        </div>

                        <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity self-center" />
                      </Link>
                    </motion.div>
                  );
                })
              )}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/news-events"
                className="inline-flex items-center gap-2 mt-6 text-primary font-medium group"
              >
                <span>View All Events</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* News Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Newspaper className="w-6 h-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Latest News
              </h2>
            </div>

            <div className="space-y-6">
              {newsLoading ? (
                <p className="text-muted-foreground">Loading news…</p>
              ) : publishedNews.length === 0 ? (
                <p className="text-muted-foreground">No news available.</p>
              ) : (
                publishedNews.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    whileHover={{ y: -4 }}
                  >
                    <Link
                      to="/news-events"
                      className="group flex gap-4 cursor-pointer"
                    >
                      {/* Thumbnail */}
                      <div className="shrink-0 w-32 h-24 rounded-xl overflow-hidden">
                        <motion.img
                          src={item.thumbnailUrl || "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Content */}
                      <div>
                        <span className="text-xs text-primary font-medium">
                          {format(parseISO(item.date), "MMMM d, yyyy")}
                        </span>
                        <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item.body?.replace(/<[^>]*>/g, "").slice(0, 120)}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/news-events"
                className="inline-flex items-center gap-2 mt-6 text-primary font-medium group"
              >
                <span>View All News</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
