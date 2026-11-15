import { motion, AnimatePresence } from "framer-motion";
import { eventPhotos, EVENT_PHOTO_EYEBROW } from "@/data/eventPhotos";
import { usePhotoSlideshow } from "@/hooks/usePhotoSlideshow";
import { PhotoSlideshow, HeroProgress } from "@/components/hero/PhotoSlideshow";

const UniversityHero = ({ active = true }: { active?: boolean }) => {
  const { photoIndex } = usePhotoSlideshow(eventPhotos, active);
  const current = eventPhotos[photoIndex];

  return (
    // Hero fills the screen below the header + breadcrumb
    <section className="relative h-[calc(100svh-180px)] min-h-[480px] max-h-[1000px] overflow-hidden bg-secondary">
      <h1 className="sr-only">S-VYASA Deemed to be University</h1>

      {/* Golden Jubilee photos filling the background, uncropped */}
      <PhotoSlideshow photos={eventPhotos} index={photoIndex} />

      {/* Bottom shade so the caption stays readable */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      {/* Animated mandala background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        {[...Array(3)].map((_, ring) => (
          <motion.div
            key={ring}
            className="absolute border border-gold/30 rounded-full"
            style={{ width: 300 + ring * 200, height: 300 + ring * 200 }}
            animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 40 + ring * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Photo caption */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`caption-${photoIndex}`}
          className="absolute inset-x-0 bottom-14 md:bottom-16 z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl border-l-2 border-gold pl-4 md:pl-6">
              <p className="text-gold text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium mb-2">
                {EVENT_PHOTO_EYEBROW}
              </p>
              <p className="font-heading text-xl sm:text-2xl md:text-4xl text-white font-semibold leading-snug">
                {current.caption}
              </p>
              <p className="mt-2 text-white/60 text-sm tabular-nums">
                {String(photoIndex + 1).padStart(2, "0")} / {String(eventPhotos.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <HeroProgress photoIndex={photoIndex} photoCount={eventPhotos.length} />
    </section>
  );
};

export default UniversityHero;
