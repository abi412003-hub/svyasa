import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight, Newspaper } from "lucide-react";

const events = [
  {
    date: "15",
    month: "Mar",
    title: "International Yoga Conference 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
  },
  {
    date: "22",
    month: "Mar",
    title: "Research Symposium on Yoga Therapy",
    time: "10:00 AM - 4:00 PM",
    location: "Conference Hall",
  },
  {
    date: "01",
    month: "Apr",
    title: "Alumni Homecoming 2025",
    time: "11:00 AM - 8:00 PM",
    location: "Campus Grounds",
  },
];

const news = [
  {
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400",
    date: "March 5, 2025",
    title: "S-VYASA Receives National Excellence Award",
    excerpt: "Recognition for outstanding contributions to yoga education and research.",
  },
  {
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
    date: "February 28, 2025",
    title: "New Partnership with Harvard Medical School",
    excerpt: "Collaborative research on yoga's impact on chronic disease management.",
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                Upcoming Events
              </h2>
            </div>

            <div className="space-y-4">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ x: 8 }}
                  className="group flex gap-4 p-4 bg-muted rounded-xl cursor-pointer hover:bg-muted/80 transition-all border-l-4 border-transparent hover:border-primary"
                >
                  {/* Date Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                    className="shrink-0 w-16 h-16 bg-primary rounded-xl flex flex-col items-center justify-center text-primary-foreground"
                  >
                    <span className="text-2xl font-bold">{event.date}</span>
                    <span className="text-xs uppercase">{event.month}</span>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {event.location}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity self-center" />
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-primary font-medium group"
            >
              <span>View All Events</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
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
              {news.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  whileHover={{ y: -4 }}
                  className="group flex gap-4 cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="shrink-0 w-32 h-24 rounded-xl overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-xs text-primary font-medium">{item.date}</span>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-primary font-medium group"
            >
              <span>View All News</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
