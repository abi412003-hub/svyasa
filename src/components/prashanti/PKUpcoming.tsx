import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Republic Day",
    isNew: true,
    image: "/images/campus/republic-day-prashan_145.jpg",
  },
  {
    title: "All India Inter-University Yogasana Championships (Women) 2026",
    isNew: true,
    image: "/images/campus/21-day-yoga-day-cele_94.jpg",
  },
  {
    title: "Faculty Development Program on Quantum Computing & Cybersecurity",
    isNew: false,
    image: "/images/campus/seminar-hall_2.jpeg",
  },
  {
    title: "Karnataka Rajyotsava 2025",
    isNew: false,
    image: "/images/campus/kannada-rajyotsava_132.jpg",
  },
];

const PKUpcoming = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, rotateY: -180 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Calendar className="w-10 h-10 text-primary" />
          </motion.div>
          <motion.h2
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-secondary"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Upcoming Events
          </motion.h2>
        </div>

        {/* Events list */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="group relative flex items-center gap-6 p-4 bg-white rounded-xl border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ x: 10 }}
            >
              {/* Animated left border on hover */}
              <motion.div
                className="absolute left-0 top-0 w-1 bg-primary rounded-l-xl"
                initial={{ height: 0 }}
                whileHover={{ height: "100%" }}
                transition={{ duration: 0.3 }}
              />

              {/* Thumbnail */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  {event.isNew && (
                    <motion.span
                      className="px-2 py-0.5 bg-primary text-white text-xs font-medium rounded-full"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      NEW
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Read more link */}
              <a
                href="#"
                className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Read more
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PKUpcoming;
