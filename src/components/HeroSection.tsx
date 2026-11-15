import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { eventPhotos, EVENT_PHOTO_EYEBROW } from "@/data/eventPhotos";
import { usePhotoSlideshow } from "@/hooks/usePhotoSlideshow";
import { PhotoSlideshow } from "@/components/hero/PhotoSlideshow";

const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-gold/60 rounded-full"
    initial={{
      x: Math.random() * 100 + "%",
      y: "110%",
      opacity: 0
    }}
    animate={{
      y: "-10%",
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 8 + Math.random() * 4,
      delay: delay,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      left: `${Math.random() * 100}%`,
    }}
  />
);

const HeroSection = ({ active = true }: { active?: boolean }) => {
  // Golden Jubilee photos, scrolling through on a loop.
  const { photoIndex } = usePhotoSlideshow(eventPhotos, active);
  const photo = eventPhotos[photoIndex];

  return (
    // Phones: full screen, photo on top. Tablet/desktop: 3:2, close to the photos' own shape, so they show whole.
    <section className="relative h-[calc(100svh-72px)] min-h-[500px] md:h-auto md:min-h-0 md:aspect-[3/2] overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <PhotoSlideshow photos={eventPhotos} index={photoIndex} />
        {/* Shade along the bottom, behind the text */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 md:h-2/5 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Content */}
      {/* Content: kept at the very bottom of the photo, below the faces */}
      <div className="relative h-full container mx-auto px-4 flex items-end pb-24 md:pb-8 lg:pb-10">
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="sr-only">S-VYASA Deemed to be University</h1>

            {/* Photo caption, changing with each photo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`photo-${photoIndex}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="border-l-2 border-gold pl-4 md:pl-5 mb-4 md:mb-5"
              >
                <p className="text-gold-light text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium mb-1.5 text-shadow">
                  {EVENT_PHOTO_EYEBROW}
                </p>
                <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground text-shadow-lg leading-tight">
                  {photo.caption}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA + badges */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="flex flex-wrap items-center gap-3 md:gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-saffron hover:scale-105 transition-all duration-300 text-sm md:text-lg px-5 md:px-8"
              >
                Explore Programs
              </Button>
              <span className="px-3 py-1 md:px-4 md:py-1.5 bg-gold/20 backdrop-blur-sm text-gold-light text-xs md:text-sm font-medium rounded-full border border-gold/30">
                NAAC 'A+' Grade
              </span>
              <span className="px-3 py-1 md:px-4 md:py-1.5 bg-gold/20 backdrop-blur-sm text-gold-light text-xs md:text-sm font-medium rounded-full border border-gold/30">
                UGC Recognized
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
