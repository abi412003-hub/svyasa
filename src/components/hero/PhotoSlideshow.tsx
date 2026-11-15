import type React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PHOTO_DURATION, type EventPhoto } from "@/data/eventPhotos";

const SLIDE_EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Full-background photo layer for the heroes (where the video used to be).
 * Each photo covers the full width and height of the hero; each photo's
 * `focus` point keeps the people in frame when the wide hero trims the top
 * and bottom. Photos slide in from the right and out to the left, then hold
 * with a gentle zoom. A blurred copy of the photo sits behind the slide so
 * there is never an empty edge mid-transition.
 */
export const PhotoSlideshow = ({ photos, index }: { photos: EventPhoto[]; index: number }) => {
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

      {/* Photo covering the full width of the hero background */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0 overflow-hidden"
            initial={reduceMotion ? { opacity: 0 } : { x: "60%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { x: "-60%", opacity: 0 }}
            transition={{ duration: 1.1, ease: SLIDE_EASE }}
          >
            <motion.img
              src={current.src}
              alt={current.caption}
              // Phones: whole photo across the full width at the top. Tablet/desktop: cover the hero, kept on the faces.
              className="block w-full h-full object-contain object-top md:object-cover md:[object-position:var(--focus)]"
              style={{ "--focus": current.focus, transformOrigin: current.focus } as React.CSSProperties}
              initial={false}
              animate={reduceMotion ? undefined : { scale: [1, 1.05] }}
              transition={{ duration: holdSeconds, ease: "linear" }}
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
