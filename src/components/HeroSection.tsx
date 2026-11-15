import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video-new.mp4";
import { useRef, useState, useEffect } from "react";
import { eventPhotos, EVENT_PHOTO_EYEBROW } from "@/data/eventPhotos";
import { useVideoThenPhotos } from "@/hooks/useVideoThenPhotos";
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

const slides = [
  {
    title: (
      <>
        Where Indian Knowledge Systems<br />
        <span>Meet Modern Science</span>
      </>
    ),
    subtitle: "India's Premier Yoga University since 2002",
  },
  {
    title: <>Education Meets Industry</>,
    subtitle: "A University Inside a Tech Park",
  },
];

const HeroSection = () => {
  // Video plays once, then the Golden Jubilee photos, then the video again.
  const { videoRef, isVideo, photoIndex, videoProgress, videoProps } = useVideoThenPhotos(eventPhotos);
  const [slideIndex, setSlideIndex] = useState(0);
  const hasShownSecond = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const t = video.currentTime;

      // At or past 24s → show second slide (once per loop)
      if (t >= 24 && !hasShownSecond.current) {
        hasShownSecond.current = true;
        setSlideIndex(1);
      }

      // Video looped back to near beginning → reset to first slide
      if (t < 1 && hasShownSecond.current) {
        hasShownSecond.current = false;
        setSlideIndex(0);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [videoRef]);

  const current = slides[slideIndex];
  const photo = eventPhotos[photoIndex];

  return (
    <section className="relative h-screen min-h-[500px] md:h-[90vh] md:min-h-[600px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
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
        {/* Golden Jubilee photo slideshow after the video */}
        <PhotoSlideshow photos={eventPhotos} index={photoIndex} show={!isVideo} />
        {/* Overlay */}
        <div className="absolute inset-0 bg-hero-pattern" />
        {/* Extra shade behind the text while photos show */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 md:bg-gradient-to-r md:from-black/75 md:via-black/30 md:to-transparent"
          initial={false}
          animate={{ opacity: isVideo ? 0 : 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-end md:items-center pb-16 md:pb-0">
        <div className="max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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

            {/* Title + Subtitle with crossfade */}
            <AnimatePresence mode="wait">
              {isVideo ? (
                <motion.div
                  key={`slide-${slideIndex}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                >
                  <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 md:mb-4 text-shadow-lg leading-tight">
                    {current.title}
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 mb-6 md:mb-8 text-shadow">
                    {current.subtitle}
                  </p>
                </motion.div>
              ) : (
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
                  <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-shadow-lg leading-tight">
                    {photo.caption}
                  </p>
                  <p className="mt-2 text-primary-foreground/70 text-sm tabular-nums">
                    {String(photoIndex + 1).padStart(2, "0")} / {String(eventPhotos.length).padStart(2, "0")}
                  </p>
                </motion.div>
              )}
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
        isVideo={isVideo}
        videoProgress={videoProgress}
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
