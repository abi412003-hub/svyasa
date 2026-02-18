import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Republic Day Celebration",
    date: "26 Jan 2025",
    image: "/images/campus/republic-day-prashan_144.jpg",
  },
  {
    id: 2,
    title: "All India Inter-University Yogasana Championships (Women) 2026",
    date: "Feb 2026",
    image: "/images/campus/21-day-yoga-day-cele_94.jpg",
  },
  {
    id: 3,
    title: "Faculty Development Program on Quantum Computing & Cybersecurity",
    date: "March 2025",
    image: "/images/campus/computer-lab_3.jpeg",
  },
  {
    id: 4,
    title: "Karnataka Rajyotsava 2025",
    date: "Nov 2025",
    image: "/images/campus/kannada-rajyotsava_131.jpg",
  },
];

const GCCUpcoming = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="flex items-center gap-3 mb-8">
          <Calendar className="w-6 h-6 text-accent" />
          <motion.h2
            className="font-playfair text-2xl md:text-3xl font-bold text-secondary"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Upcoming Events
          </motion.h2>
          <motion.div
            className="flex-1 h-0.5 bg-accent/30 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </div>

        {/* Events list */}
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <motion.a
              key={event.id}
              href="/news-events#events"
              className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:bg-cream transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Thumbnail */}
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors line-clamp-2 mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground">{event.date}</p>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </motion.a>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="/news-events#events"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All Events
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GCCUpcoming;
