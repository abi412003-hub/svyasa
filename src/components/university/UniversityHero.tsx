import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "@/assets/hero-video-new.mp4";
import { eventPhotos, EVENT_PHOTO_EYEBROW } from "@/data/eventPhotos";
import { useVideoThenPhotos } from "@/hooks/useVideoThenPhotos";
import { PhotoSlideshow, HeroProgress } from "@/components/hero/PhotoSlideshow";

const UniversityHero = () => {
  const { videoRef, isVideo, photoIndex, videoProgress, videoProps } = useVideoThenPhotos(eventPhotos);
  const current = eventPhotos[photoIndex];

  return (
    <section className="relative h-[calc(100svh-180px)] min-h-[480px] max-h-[1000px] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Hero fills the screen below the header + breadcrumb, like a full-screen video */}
      {/* Background video (kept mounted so it never reloads) */}
      <motion.video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        {...videoProps}
        className="absolute inset-0 w-full h-full object-cover"
        initial={false}
        animate={{ opacity: isVideo ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <PhotoSlideshow photos={eventPhotos} index={photoIndex} show={!isVideo} />

      {/* Overlays: even darkening for the video, bottom gradient for photos */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={false}
        animate={{ opacity: isVideo ? 1 : 0 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20"
        initial={false}
        animate={{ opacity: isVideo ? 0 : 1 }}
        transition={{ duration: 1.2 }}
      />

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

      {/* Main title: shown over the video */}
      <motion.div
        className="container mx-auto px-4 relative z-10 text-center py-20"
        initial={false}
        animate={{ opacity: isVideo ? 1 : 0, y: isVideo ? 0 : -20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        aria-hidden={!isVideo}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gold text-sm uppercase tracking-[0.3em] mb-4 font-medium"
        >
          Swami Vivekananda Yoga Anusandhana Samsthana
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight"
        >
          S-VYASA Deemed to be
          <br />
          <span className="text-gold">University</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto"
        >
          India's First Full-Fledged Higher Education Yoga Institution
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-24 h-0.5 bg-gold mx-auto mt-8"
        />
      </motion.div>

      {/* Photo caption: shown during the slideshow */}
      <AnimatePresence mode="wait">
        {!isVideo && (
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
        )}
      </AnimatePresence>

      <HeroProgress
        isVideo={isVideo}
        videoProgress={videoProgress}
        photoIndex={photoIndex}
        photoCount={eventPhotos.length}
      />
    </section>
  );
};

export default UniversityHero;
