import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import { Loader2, ImageOff } from "lucide-react";
import { useEventsFromStorage, StorageEventItem } from "@/hooks/useStorageFolderContent";

const EventsTimeline = () => {
  const { items, loading } = useEventsFromStorage();
  const [searchQuery, setSearchQuery] = useState("");
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const filtered = useMemo(() =>
    items.filter((e) => e.title.toLowerCase().includes(searchQuery.toLowerCase())),
    [items, searchQuery]
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <p className="text-muted-foreground">Loading events from image library…</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-muted-foreground">
        <ImageOff className="w-12 h-12 opacity-30" />
        <p className="font-medium">No events found</p>
        <p className="text-sm">Upload images to the <code className="bg-muted px-1 rounded">events/</code> folders in the Image Manager to populate this section.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex gap-4 bg-white p-4 rounded-xl shadow-md"
      >
        <input
          type="text"
          placeholder="Search events…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 border-b-2 border-border focus:border-primary outline-none transition-colors bg-transparent"
        />
      </motion.div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative py-8">
        {/* Central Line desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2">
          <motion.div className="absolute top-0 left-0 w-full bg-primary origin-top" style={{ height: lineHeight }} />
        </div>
        {/* Mobile line */}
        <div className="lg:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-border">
          <motion.div className="absolute top-0 left-0 w-full bg-primary origin-top" style={{ height: lineHeight }} />
        </div>

        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((event, index) => (
              <EventCard key={event.slug} event={event} index={index} isLeft={index % 2 === 0} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">No events matching your search.</div>
      )}
    </div>
  );
};

/** Auto-cycling image slideshow for a card */
const CardSlideshow = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 2500);
    return () => clearInterval(id);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <ImageOff className="w-8 h-8 opacity-20" />
      </div>
    );
  }

  return (
    <>
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[current]}')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};

const EventCard = ({
  event,
  index,
  isLeft,
}: {
  event: StorageEventItem;
  index: number;
  isLeft: boolean;
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
    className={`relative flex items-center ${isLeft ? "lg:flex-row-reverse" : ""} lg:justify-center`}
  >
    {/* Timeline Node */}
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
      className="absolute w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10 left-4 lg:left-1/2 lg:-translate-x-1/2"
    />

    {/* Card */}
    <div className={`ml-12 lg:ml-0 lg:w-5/12 ${isLeft ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"}`}>
      <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Square slideshow */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <CardSlideshow images={event.images} />
          {/* Photo count badge */}
          <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/50 text-white text-xs font-medium rounded-full z-10">
            {event.fileCount} photo{event.fileCount !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Title */}
        <div className="p-4">
          <h3 className="font-semibold text-navy line-clamp-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
        </div>
      </div>
    </div>
  </motion.div>
);

export default EventsTimeline;
