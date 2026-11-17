import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { Loader2, ImageOff, Images } from "lucide-react";
import { format, parseISO, isValid } from "date-fns";
import { useSupabaseEvents } from "@/hooks/useSupabaseEvents";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import type { GalleryPhoto } from "@/components/gallery/galleryData";
import { jubileeEvents, jubileePhotos } from "@/data/jubileeEvents";

interface EventItemUI {
  id: string;
  title: string;
  slug: string;
  date: string;
  dateLabel?: string;
  campus: string;
  category: string;
  thumbnailUrl: string;
  /** Photos shown in the lightbox when the card is opened. */
  photos: GalleryPhoto[];
}

const normalise = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const formatDate = (iso: string) => {
  const d = parseISO(iso);
  return isValid(d) ? format(d, "dd MMM yyyy") : iso;
};

const localEvents: EventItemUI[] = jubileeEvents.map((e) => ({
  id: `local-${e.slug}`,
  title: e.title,
  slug: e.slug,
  date: e.date,
  dateLabel: e.dateLabel,
  campus: e.campus,
  category: e.category,
  thumbnailUrl: e.photos[0]?.src ?? "",
  photos: e.photos.map((p, i) => ({ id: `${e.slug}-${i}`, src: p.src, alt: p.caption, category: p.caption })),
}));

const EventsTimeline = () => {
  const { data: items, loading } = useSupabaseEvents();
  const [searchQuery, setSearchQuery] = useState("");
  const [lightbox, setLightbox] = useState<{ photos: GalleryPhoto[]; index: number } | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const events = useMemo(() => {
    const remote: EventItemUI[] = items
      .filter((e) => e.isPublished)
      .map((e) => {
        const urls = [e.thumbnailUrl, ...(e.galleryUrls ?? [])].filter(Boolean);
        return {
          id: e.id,
          title: e.title,
          slug: e.slug,
          date: e.date,
          campus: e.campus,
          category: e.category,
          thumbnailUrl: e.thumbnailUrl,
          photos: [...new Set(urls)].map((src, i) => ({ id: `${e.id}-${i}`, src, alt: e.title, category: e.title })),
        };
      });

    // Bundled photo sets take priority; drop a database entry for the same event.
    const localKeys = new Set(localEvents.flatMap((e) => [e.slug, normalise(e.title)]));
    const merged = [
      ...localEvents,
      ...remote.filter((e) => !localKeys.has(e.slug) && !localKeys.has(normalise(e.title))),
    ];
    return merged.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  }, [items]);

  const filtered = useMemo(
    () => events.filter((e) => e.title.toLowerCase().includes(searchQuery.toLowerCase())),
    [events, searchQuery],
  );

  const highlightPhotos: GalleryPhoto[] = useMemo(
    () => jubileePhotos.map((p) => ({ id: p.id, src: p.src, alt: p.caption, category: p.caption })),
    [],
  );

  const openPhotos = (photos: GalleryPhoto[], index = 0) => {
    if (photos.length) setLightbox({ photos, index });
  };

  return (
    <div className="space-y-8">
      {/* Golden Jubilee highlights */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md p-5 md:p-6"
        aria-labelledby="jubilee-highlights"
      >
        <div className="flex flex-wrap items-end justify-between gap-2 mb-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">Event Highlights</p>
            <h2 id="jubilee-highlights" className="text-2xl md:text-3xl font-heading text-navy">
              Golden Jubilee of Prashanti Kutiram
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">{highlightPhotos.length} photos · November 2026</p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:thin]">
          {highlightPhotos.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => openPhotos(highlightPhotos, i)}
              className="no-scale group relative shrink-0 snap-start w-48 h-32 md:w-60 md:h-40 rounded-xl overflow-hidden bg-muted focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Open photo: ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-left text-[11px] leading-tight text-white line-clamp-2">
                {p.alt}
              </span>
            </button>
          ))}
        </div>
      </motion.section>

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

      {loading && (
        <div className="flex items-center justify-center gap-3 py-6 text-muted-foreground">
          <Loader2 className="w-5 h-5 text-primary animate-spin" />
          <span className="text-sm">Loading more events…</span>
        </div>
      )}

      {/* Timeline */}
      <div ref={timelineRef} className="relative py-8">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2">
          <motion.div className="absolute top-0 left-0 w-full bg-primary origin-top" style={{ height: lineHeight }} />
        </div>
        <div className="lg:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-border">
          <motion.div className="absolute top-0 left-0 w-full bg-primary origin-top" style={{ height: lineHeight }} />
        </div>

        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                isLeft={index % 2 === 0}
                onOpen={() => openPhotos(event.photos)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {!loading && filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground">
          <ImageOff className="w-10 h-10 opacity-30" />
          <p>{searchQuery ? "No events matching your search." : "No events found"}</p>
        </div>
      )}

      {createPortal(
        <GalleryLightbox
          photos={lightbox?.photos ?? []}
          currentIndex={lightbox?.index ?? 0}
          isOpen={lightbox !== null}
          onClose={() => setLightbox(null)}
          onNavigate={(index) => setLightbox((lb) => (lb ? { ...lb, index } : lb))}
          />,
        document.body,
      )}
    </div>
  );
};

const EventCard = ({
  event,
  index,
  isLeft,
  onOpen,
}: {
  event: EventItemUI;
  index: number;
  isLeft: boolean;
  onOpen: () => void;
}) => {
  const hasPhotos = event.photos.length > 0;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      className={`relative flex items-center ${isLeft ? "lg:flex-row-reverse" : ""} lg:justify-center`}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
        className="absolute w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10 left-4 lg:left-1/2 lg:-translate-x-1/2"
      />

      <div className={`ml-12 lg:ml-0 lg:w-5/12 ${isLeft ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"}`}>
        <button
          type="button"
          onClick={onOpen}
          disabled={!hasPhotos}
          className="no-scale group block w-full text-left bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:cursor-default"
          aria-label={hasPhotos ? `View photos: ${event.title}` : event.title}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            {event.thumbnailUrl ? (
              <img
                src={event.thumbnailUrl}
                alt={event.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageOff className="w-8 h-8 opacity-20" />
              </div>
            )}
            {event.category && (
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/50 text-white text-xs font-medium rounded-full z-10">
                {event.category}
              </div>
            )}
            {event.photos.length > 1 && (
              <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-0.5 bg-black/55 text-white text-xs font-medium rounded-full z-10">
                <Images className="w-3.5 h-3.5" /> {event.photos.length} photos
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-navy line-clamp-2 group-hover:text-primary transition-colors">
              {event.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {event.dateLabel ?? formatDate(event.date)} · {event.campus}
            </p>
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default EventsTimeline;
