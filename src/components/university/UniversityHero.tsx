import { motion, AnimatePresence } from "framer-motion";
import { eventPhotos, EVENT_PHOTO_EYEBROW } from "@/data/eventPhotos";
import { usePhotoSlideshow } from "@/hooks/usePhotoSlideshow";
import { PhotoSlideshow, HeroProgress } from "@/components/hero/PhotoSlideshow";

const UniversityHero = ({ active = true }: { active?: boolean }) => {
  const { photoIndex } = usePhotoSlideshow(eventPhotos, active);
  const current = eventPhotos[photoIndex];

  return (
    // Phones: fills the screen below the header. Tablet/desktop: 3:2, close to the photos' own shape, so they show whole.
    <section className="relative h-[calc(100svh-180px)] min-h-[480px] md:h-auto md:min-h-0 md:aspect-[3/2] overflow-hidden bg-secondary">
      <h1 className="sr-only">S-VYASA Deemed to be University</h1>

      {/* Golden Jubilee photos, fitted whole */}
      <PhotoSlideshow photos={eventPhotos} index={photoIndex} />

      {/* Bottom shade so the caption stays readable */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 md:h-1/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

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

      {/* Photo caption, at the very bottom of the photo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`caption-${photoIndex}`}
          className="absolute inset-x-0 bottom-10 md:bottom-8 lg:bottom-10 z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl border-l-2 border-gold pl-4 md:pl-6">
              <p className="text-gold text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium mb-1.5">
                {EVENT_PHOTO_EYEBROW}
              </p>
              <p className="font-heading text-xl sm:text-2xl lg:text-4xl text-white font-semibold leading-snug">
                {current.caption}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <HeroProgress
        photoIndex={photoIndex}
        photoCount={eventPhotos.length}
        className="absolute bottom-3 md:bottom-3 inset-x-0 z-10 flex justify-center pointer-events-none"
      />
    </section>
  );
};

export default UniversityHero;
