import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useMemo, useRef, useEffect, forwardRef } from "react";
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

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false,
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
};

/** Auto-scrolling, seamlessly looping photo strip. Pauses on hover/touch, supports drag and swipe. */
const HighlightsReel = ({ photos, onOpen }: { photos: GalleryPhoto[]; onOpen: (index: number) => void }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const resumeTimer = useRef<number>();

  useEffect(() => {
    const el = trackRef.current;
    if (!el || photos.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const SPEED = 45; // px per second
    let pos = el.scrollLeft;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const first = el.children[0] as HTMLElement | undefined;
      const clone = el.children[photos.length] as HTMLElement | undefined;
      const loop = first && clone ? clone.offsetLeft - first.offsetLeft : 0;

      if (paused.current || drag.current) {
        pos = el.scrollLeft;
      } else {
        pos += (SPEED * dt) / 1000;
      }
      if (loop > 0) {
        if (pos >= loop) pos -= loop;
        else if (pos < 0) pos += loop;
      }
      if (!paused.current && !drag.current) el.scrollLeft = pos;
      else if (loop > 0 && Math.abs(el.scrollLeft - pos) > 1) el.scrollLeft = pos; // wrap during manual scroll
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [photos.length]);

  const pause = () => {
    window.clearTimeout(resumeTimer.current);
    paused.current = true;
  };
  const resumeSoon = (ms = 0) => {
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => (paused.current = false), ms);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { x: e.clientX, left: trackRef.current?.scrollLeft ?? 0, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    const el = trackRef.current;
    if (!d || !el) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 5) d.moved = true;
    if (d.moved) el.scrollLeft = d.left - dx;
  };
  const endDrag = () => {
    if (drag.current?.moved) suppressClick.current = true;
    drag.current = null;
  };

  const loopPhotos = [...photos, ...photos];

  return (
    <div className="relative -mx-5 md:-mx-6">
      <div
        ref={trackRef}
        onMouseEnter={pause}
        onMouseLeave={() => {
          endDrag();
          resumeSoon();
        }}
        onTouchStart={pause}
        onTouchEnd={() => resumeSoon(2500)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onFocus={pause}
        onBlur={() => resumeSoon()}
        className="scrollbar-hide flex gap-4 overflow-x-auto px-5 md:px-6 py-5 cursor-grab active:cursor-grabbing select-none [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
      >
        {loopPhotos.map((p, i) => {
          const isClone = i >= photos.length;
          return (
            <button
              key={`${p.id}-${i}`}
              type="button"
              tabIndex={isClone ? -1 : 0}
              aria-hidden={isClone || undefined}
              onClick={() => {
                if (suppressClick.current) {
                  suppressClick.current = false;
                  return;
                }
                onOpen(i % photos.length);
              }}
              onDragStart={(e) => e.preventDefault()}
              className="no-scale group relative shrink-0 w-56 h-36 md:w-72 md:h-48 rounded-xl overflow-hidden bg-muted shadow-md ring-0 ring-primary/0 transition-all duration-500 ease-out hover:z-10 hover:scale-[1.07] hover:shadow-2xl hover:ring-2 hover:ring-primary/70 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Open photo: ${p.alt}`}
            >
              <img
                src={p.src}
                alt={isClone ? "" : p.alt}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-2.5 pt-8 text-left text-xs leading-tight text-white line-clamp-2 transition-transform duration-500 group-hover:-translate-y-0.5">
                {p.alt}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const EventsTimeline = () => {
  const { data: items, loading } = useSupabaseEvents();
  const [lightbox, setLightbox] = useState<{ photos: GalleryPhoto[]; index: number } | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

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

  const filtered = events;

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
        <HighlightsReel photos={highlightPhotos} onOpen={(i) => openPhotos(highlightPhotos, i)} />
      </motion.section>

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

        {isDesktop ? (
          /* Two staggered columns: the right column starts half a card lower, so cards interlock
             along the centre line instead of each one leaving an empty half-row beside it. */
          <div className="grid grid-cols-2 gap-x-24 max-w-5xl mx-auto [perspective:1400px]">
            {[0, 1].map((col) => (
              // Card height ≈ 0.75 × column width (4:3 photo) + ~104px caption, so this offset is half a card.
              <div key={col} className={`space-y-12 ${col === 1 ? "pt-[calc(37.5%+52px)]" : ""}`}>
                <AnimatePresence mode="popLayout">
                  {filtered.map((event, index) =>
                    index % 2 === col ? (
                      <EventCard
                        key={event.id}
                        event={event}
                        side={col === 0 ? "left" : "right"}
                        onOpen={() => openPhotos(event.photos)}
                      />
                    ) : null,
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-10 [perspective:1000px]">
            <AnimatePresence mode="popLayout">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} side="mobile" onOpen={() => openPhotos(event.photos)} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {!loading && filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground">
          <ImageOff className="w-10 h-10 opacity-30" />
          <p>No events found</p>
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

type EventCardProps = {
  event: EventItemUI;
  side: "left" | "right" | "mobile";
  onOpen: () => void;
};

// forwardRef: AnimatePresence mode="popLayout" measures each child through its ref.
const EventCard = forwardRef<HTMLDivElement, EventCardProps>(({ event, side, onOpen }, ref) => {
  const hasPhotos = event.photos.length > 0;
  // Cards fly in from their own edge of the screen, tilted away in 3D, then swing flat into the centre plane.
  const dir = side === "left" ? -1 : 1;
  const travel = side === "mobile" ? 90 : 220;

  // Dot sits on the centre line: half the 6rem column gap beyond the card's inner edge.
  const dotPos = side === "left" ? "-right-12" : side === "right" ? "-left-12" : "-left-8";
  const connector =
    side === "left" ? "left-full w-12" : side === "right" ? "right-full w-12" : "right-full w-8";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: dir * travel, rotateY: dir * -38, scale: 0.82, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 70, damping: 15, mass: 0.9 }}
      style={{ transformOrigin: side === "left" ? "right center" : "left center" }}
      className={`relative ${side === "mobile" ? "ml-12" : ""}`}
    >
      {/* Connector + dot on the timeline */}
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: side === "left" ? "left" : "right" }}
        className={`absolute top-10 h-0.5 bg-primary/40 ${connector}`}
      />
      <motion.span
        aria-hidden="true"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: "spring", bounce: 0.6 }}
        style={{ x: side === "left" ? "50%" : "-50%", y: "-50%" }}
        className={`absolute top-10 z-10 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-[0_0_0_4px_hsl(var(--primary)/0.2)] ${dotPos}`}
      />

      <div>
        <button
          type="button"
          onClick={onOpen}
          disabled={!hasPhotos}
          className="no-scale group block w-full text-left bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:cursor-default"
          aria-label={hasPhotos ? `View photos: ${event.title}` : event.title}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            {event.thumbnailUrl ? (
              <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-110">
                <motion.img
                  src={event.thumbnailUrl}
                  alt={event.title}
                  loading="lazy"
                  initial={{ scale: 1.35 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                />
              </div>
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
});
EventCard.displayName = "EventCard";

export default EventsTimeline;
