import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useMemo, useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { eventsData, eventCategories, EventItem } from "./newsEventsData";

const EventsTimeline = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const filteredEvents = useMemo(() => {
    if (activeCategory === "all") return eventsData;
    return eventsData.filter((e) => e.category === activeCategory);
  }, [activeCategory]);

  const isRecent = (dateStr: string) => {
    const eventDate = new Date(dateStr.split(" ").reverse().join(" "));
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    return eventDate >= threeMonthsAgo;
  };

  const getImageUrl = (eventId: number, hasImage: boolean) => {
    if (!hasImage) return null;
    return `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80&sig=event${eventId}`;
  };

  const parseDateDisplay = (dateStr: string) => {
    const parts = dateStr.split(" ");
    return {
      day: parts[0],
      monthYear: parts.slice(1).join(" "),
    };
  };

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap justify-center gap-2"
      >
        {eventCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-primary text-white shadow-md"
                : "bg-white text-muted-foreground border border-border hover:border-primary hover:text-primary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative py-8">
        {/* Central Line (desktop only) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2">
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Mobile line */}
        <div className="lg:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-border">
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Events */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                isLeft={index % 2 === 0}
                isRecent={isRecent(event.date)}
                getImageUrl={getImageUrl}
                parseDateDisplay={parseDateDisplay}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {filteredEvents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-lg text-muted-foreground">No events found in this category.</p>
        </motion.div>
      )}
    </div>
  );
};

const EventCard = ({
  event,
  index,
  isLeft,
  isRecent,
  getImageUrl,
  parseDateDisplay,
}: {
  event: EventItem;
  index: number;
  isLeft: boolean;
  isRecent: boolean;
  getImageUrl: (id: number, hasImage: boolean) => string | null;
  parseDateDisplay: (date: string) => { day: string; monthYear: string };
}) => {
  const dateDisplay = parseDateDisplay(event.date);
  const imageUrl = getImageUrl(event.id, event.hasImage);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      className={`relative flex items-center ${
        isLeft ? "lg:flex-row-reverse" : ""
      } lg:justify-center`}
    >
      {/* Timeline Node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
        className={`absolute w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10
          left-4 lg:left-1/2 lg:-translate-x-1/2`}
      />

      {/* Card */}
      <div
        className={`ml-12 lg:ml-0 lg:w-5/12 ${isLeft ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"}`}
      >
        <Link
          to={`/${event.url}`}
          className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Image or Placeholder */}
          <div className="relative h-40 overflow-hidden bg-cream">
            {imageUrl ? (
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${imageUrl}')` }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4 }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-navy">
                    <path
                      fill="currentColor"
                      d="M50 10 C30 30, 10 50, 50 90 C90 50, 70 30, 50 10 Z"
                    />
                  </svg>
                </div>
              </div>
            )}

            {/* Recent Badge */}
            {isRecent && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="absolute top-3 left-3 px-2 py-0.5 bg-primary text-white text-xs font-medium rounded-full"
              >
                RECENT
              </motion.div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-semibold text-navy line-clamp-2 mb-3 group-hover:text-primary transition-colors">
              {event.title}
            </h3>

            {/* Date Display */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-2xl font-bold text-navy">{dateDisplay.day}</span>
                <span className="text-sm">{dateDisplay.monthYear}</span>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
              View More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default EventsTimeline;
