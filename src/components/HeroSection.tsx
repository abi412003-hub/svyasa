import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventPhotos, EVENT_PHOTO_EYEBROW } from "@/data/eventPhotos";
import { usePhotoSlideshow } from "@/hooks/usePhotoSlideshow";
import { PhotoSlideshow, HeroProgress } from "@/components/hero/PhotoSlideshow";

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
    <section className="relative h-screen min-h-[500px] md:h-[90vh] md:min-h-[600px] overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        {/* Photos shown in full: above the text on small screens, beside it on large */}
        <PhotoSlideshow
          photos={eventPhotos}
          index={photoIndex}
          frameClassName="left-3 right-3 top-4 bottom-[54%] lg:left-[50%] lg:right-10 lg:top-12 lg:bottom-20"
        />
        {/* Shade behind the text */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent lg:inset-y-0 lg:left-0 lg:right-auto lg:h-auto lg:w-1/2 lg:bg-gradient-to-r lg:from-black/50 pointer-events-none" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-end lg:items-center pb-16 lg:pb-0">
        <div className="w-full max-w-3xl lg:max-w-[calc(50%-2rem)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="sr-only">S-VYASA Deemed to be University</h1>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-4 md:mb-6"
            >
              <span className="px-3 py-1 md:px-4 md:py-1.5 bg-gold/20 backdrop-blur-sm text-gold-light text-xs md:text-sm font-medium rounded-full border border-gold/30">
                NAAC 'A+' Grade
              </span>
              <span className="px-3 py-1 md:px-4 md:py-1.5 bg-gold/20 backdrop-blur-sm text-gold-light text-xs md:text-sm font-medium rounded-full border border-gold/30">
                UGC Recognized
              </span>
            </motion.div>

            {/* Photo caption, changing with each photo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`photo-${photoIndex}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="border-l-2 border-gold pl-4 md:pl-6 mb-6 md:mb-8"
              >
                <p className="text-gold-light text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium mb-2 text-shadow">
                  {EVENT_PHOTO_EYEBROW}
                </p>
                <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground text-shadow-lg leading-tight">
                  {photo.caption}
                </p>
                <p className="mt-2 text-primary-foreground/70 text-sm tabular-nums">
                  {String(photoIndex + 1).padStart(2, "0")} / {String(eventPhotos.length).padStart(2, "0")}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-saffron hover:scale-105 transition-all duration-300 text-sm md:text-lg px-5 md:px-8"
              >
                Explore Programs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 text-sm md:text-lg px-5 md:px-8"
              >
                Virtual Tour
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <HeroProgress
        photoIndex={photoIndex}
        photoCount={eventPhotos.length}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10 pointer-events-none"
      />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-primary-foreground/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
