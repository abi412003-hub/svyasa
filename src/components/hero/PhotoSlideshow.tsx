import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PHOTO_DURATION, type EventPhoto } from "@/data/eventPhotos";

const SLIDE_EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Full-background photo layer for the heroes (where the video used to be).
 * Each photo is fitted whole (never cropped or zoomed in). The heroes use a
 * 3:2 shape on tablet/desktop, close to the photos' own shape, so a photo
 * spans (nearly) the full width; any small leftover margin is filled by a
 * blurred copy of the same photo. On phones the photo sits at the top.
 * Photos slide in from the right and out to the left.
 */
export const PhotoSlideshow = ({ photos, index }: { photos: EventPhoto[]; index: number }) => {
  const reduceMotion = useReducedMotion();
  const current = photos[index];

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

      {/* Whole photo, fitted to the hero background, with softly faded edges */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0 flex justify-center items-start md:items-center"
            initial={reduceMotion ? { opacity: 0 } : { x: "60%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { x: "-60%", opacity: 0 }}
            transition={{ duration: 1.1, ease: SLIDE_EASE }}
          >
            {/* The image box matches the visible photo, so the edge fades sit exactly on the photo's
                edges: bottom edge on phones (photo at the top), left/right edges on tablet/desktop. */}
            <img
              src={current.src}
              alt={current.caption}
              className={[
                "block object-contain",
                "w-full h-auto max-h-full",
                "md:h-full md:w-auto md:max-w-full",
                "[mask-image:linear-gradient(to_bottom,#000_78%,transparent)]",
                "[-webkit-mask-image:linear-gradient(to_bottom,#000_78%,transparent)]",
                "md:[mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]",
                "md:[-webkit-mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]",
              ].join(" ")}
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
