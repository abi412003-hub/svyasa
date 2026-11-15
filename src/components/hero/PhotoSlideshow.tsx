import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PHOTO_DURATION, type EventPhoto } from "@/data/eventPhotos";

const SLIDE_EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Photo layer for the heroes. Each photo is shown in full (never cropped),
 * inside `frameClassName`, over a blurred + darkened copy of itself that fills
 * the hero. Photos slide in from the right and out to the left, then hold
 * with a gentle zoom.
 */
export const PhotoSlideshow = ({
  photos,
  index,
  frameClassName = "inset-x-4 top-6 bottom-36 md:inset-x-16 md:top-8 md:bottom-44",
}: {
  photos: EventPhoto[];
  index: number;
  frameClassName?: string;
}) => {
  const reduceMotion = useReducedMotion();
  const current = photos[index];
  const holdSeconds = (PHOTO_DURATION + 1100) / 1000;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Blurred backdrop of the same photo, filling the hero */}
      <AnimatePresence initial={false}>
        <motion.img
          key={`backdrop-${index}`}
          src={current.src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl brightness-[0.45] saturate-125"
          style={{ objectPosition: current.focus }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Full, uncropped photo sliding through the frame */}
      <div className={`absolute ${frameClassName}`}>
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-center"
            initial={reduceMotion ? { opacity: 0 } : { x: "70%", opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { x: "-70%", opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.1, ease: SLIDE_EASE }}
          >
            <motion.img
              src={current.src}
              alt={current.caption}
              className="block max-w-full max-h-full w-auto h-auto object-contain rounded-xl md:rounded-2xl shadow-2xl ring-1 ring-white/20"
              initial={false}
              animate={reduceMotion ? undefined : { scale: [0.97, 1] }}
              transition={{ duration: holdSeconds, ease: "easeOut" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/** Slim progress indicator: one dot per photo; the current one fills while it shows. */
export const HeroProgress = ({
  photoIndex,
  photoCount,
  className = "absolute bottom-6 inset-x-0 z-10 flex justify-center pointer-events-none",
}: {
  photoIndex: number;
  photoCount: number;
  className?: string;
}) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      {Array.from({ length: photoCount }).map((_, i) => {
        const done = i < photoIndex;
        const active = i === photoIndex;
        return (
          <div key={i} className="relative h-1 w-3 md:w-5 rounded-full bg-white/25 overflow-hidden">
            {(done || active) && (
              <motion.div
                key={active ? `active-${photoIndex}` : `done-${i}`}
                className="absolute inset-y-0 left-0 bg-gold"
                initial={{ width: active ? "0%" : "100%" }}
                animate={{ width: "100%" }}
                transition={{ duration: active ? PHOTO_DURATION / 1000 : 0, ease: "linear" }}
              />
            )}
          </div>
        );
      })}
    </div>
  </div>
);
