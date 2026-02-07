import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bell, ArrowRight, ExternalLink } from "lucide-react";

const announcements = [
  { title: "Admissions Open for 2025-26 Academic Year", isNew: true },
  { title: "International Yoga Day Celebrations - June 21st", isNew: true },
  { title: "Research Grant Awarded for Yoga & Mental Health Study", isNew: false },
  { title: "Campus Placement Drive - Top Wellness Companies", isNew: false },
  { title: "New PhD Program in Yoga Neuroscience Launched", isNew: true },
  { title: "Alumni Meet 2025 - Registration Now Open", isNew: false },
];

const AnnouncementsTicker = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-8 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <Bell className="w-5 h-5 text-gold" />
            </motion.div>
            <h3 className="font-heading text-lg font-semibold text-secondary-foreground">
              Announcements
            </h3>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            href="#"
            className="flex items-center gap-2 text-gold text-sm font-medium group"
          >
            <span>View All</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.a>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary to-transparent z-10" />

        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 whitespace-nowrap"
        >
          {[...announcements, ...announcements].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-secondary-foreground/5 rounded-full border border-secondary-foreground/10 hover:bg-secondary-foreground/10 hover:border-gold/30 transition-all group"
            >
              {item.isNew && (
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full"
                >
                  NEW
                </motion.span>
              )}
              <span className="text-secondary-foreground text-sm">{item.title}</span>
              <ExternalLink size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnnouncementsTicker;
