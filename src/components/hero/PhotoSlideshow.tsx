import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PHOTO_DURATION, type EventPhoto } from "@/data/eventPhotos";

/** Full-bleed photo layer: crossfade + slow Ken Burns zoom/pan. Renders nothing while `show` is false. */
export const PhotoSlideshow = ({
  photos,
  index,
  show,
}: {
  photos: EventPhoto[];
  index: number;
  show: boolean;
}) => {
  const reduceMotion = useReducedMotion();
  const current = photos[index];
  const panDirection = index % 2 === 0 ? 1 : -1;
  const seconds = (PHOTO_DURATION + 1200) / 1000;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={index}
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.img
            src={current.src}
            alt={current.caption}
            className="w-full h-full object-cover"
            style={{ objectPosition: current.focus, transformOrigin: current.focus }}
            initial={
              reduceMotion
                ? false
                : {
                    scale: 1,
                    x: `${-1.5 * panDirection}%`,
                    filter: index === 0 ? "blur(12px)" : "blur(0px)",
                  }
            }
            animate={
              reduceMotion ? undefined : { scale: 1.12, x: `${1.5 * panDirection}%`, filter: "blur(0px)" }
            }
            transition={{
              scale: { duration: seconds, ease: "linear" },
              x: { duration: seconds, ease: "linear" },
              filter: { duration: 1.2, ease: "easeOut" },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/** Slim progress indicator: one bar for the video, one dot per photo. */
export const HeroProgress = ({
  isVideo,
  videoProgress,
  photoIndex,
  photoCount,
  className = "absolute bottom-6 inset-x-0 z-10 flex justify-center pointer-events-none",
}: {
  isVideo: boolean;
  videoProgress: number;
  photoIndex: number;
  photoCount: number;
  className?: string;
}) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <div className="relative h-1 w-16 md:w-24 rounded-full bg-white/25 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gold"
          style={{ width: `${isVideo ? videoProgress * 100 : 100}%` }}
        />
      </div>
      {Array.from({ length: photoCount }).map((_, i) => {
        const done = !isVideo && i < photoIndex;
        const active = !isVideo && i === photoIndex;
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
