import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import heroVideo from "@/assets/hero-video-new.mp4";
import bookReleaseStage from "@/assets/university-hero/01-book-release-stage.jpg";
import bookReleaseCloseup from "@/assets/university-hero/02-book-release-closeup.jpg";
import prashantiDais from "@/assets/university-hero/03-prashanti-kutiram-dais.jpg";
import felicitationPeta from "@/assets/university-hero/04-felicitation-peta.jpg";
import namaste from "@/assets/university-hero/05-namaste.jpg";
import vivekanandaMemento from "@/assets/university-hero/06-vivekananda-memento.jpg";
import greeting from "@/assets/university-hero/07-greeting.jpg";
import svyasaMemento from "@/assets/university-hero/08-svyasa-memento.jpg";
import floralTribute from "@/assets/university-hero/09-floral-tribute.jpg";

/** How long each photo stays on screen (ms). */
const PHOTO_DURATION = 4500;

/**
 * `focus` is the CSS object-position for each photo, tuned so faces stay
 * in frame when a near-square photo is cropped to the wide hero.
 */
const photos = [
  { src: bookReleaseStage, focus: "50% 35%", caption: "Release of the H. V. Sheshadri Literature Series" },
  { src: bookReleaseCloseup, focus: "50% 35%", caption: "Hon'ble Prime Minister Shri Narendra Modi releases “Mother Awaits” and “Yugavatara”" },
  { src: prashantiDais, focus: "45% 50%", caption: "Dignitaries on the dais at Prashanti Kutiram" },
  { src: felicitationPeta, focus: "55% 35%", caption: "Felicitation with the traditional peta and shawl" },
  { src: namaste, focus: "40% 30%", caption: "A gesture of gratitude at Prashanti Kutiram" },
  { src: vivekanandaMemento, focus: "50% 45%", caption: "Swami Vivekananda memento presented on the Golden Jubilee" },
  { src: greeting, focus: "50% 25%", caption: "Warm greetings with the S-VYASA leadership" },
  { src: svyasaMemento, focus: "50% 40%", caption: "S-VYASA memento presented to the Hon'ble Prime Minister" },
  { src: floralTribute, focus: "50% 45%", caption: "Floral tribute on the birth centenary of Mananeeya H. V. Sheshadri Ji" },
];

type Phase = "video" | "photos";

const UniversityHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("video");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  const startPhotos = useCallback(() => {
    setPhotoIndex(0);
    setPhase("photos");
  }, []);

  // Preload the photos so the first one is ready the moment the video ends.
  useEffect(() => {
    photos.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // If autoplay is blocked, skip straight to the photo slideshow.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => startPhotos());
    }
  }, [startPhotos]);

  // Photo slideshow timer; after the last photo, go back to the video.
  useEffect(() => {
    if (phase !== "photos") return;
    const timer = window.setTimeout(() => {
      if (photoIndex < photos.length - 1) {
        setPhotoIndex((i) => i + 1);
        return;
      }
      const video = videoRef.current;
      setVideoProgress(0);
      setPhase("video");
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => startPhotos());
      }
    }, PHOTO_DURATION);
    return () => window.clearTimeout(timer);
  }, [phase, photoIndex, startPhotos]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) setVideoProgress(video.currentTime / video.duration);
  };

  const isVideo = phase === "video";
  const current = photos[photoIndex];
  const panDirection = photoIndex % 2 === 0 ? 1 : -1;

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
        onEnded={startPhotos}
        onError={startPhotos}
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover"
        initial={false}
        animate={{ opacity: isVideo ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Photo slideshow: crossfade + slow Ken Burns zoom/pan */}
      <AnimatePresence>
        {!isVideo && (
          <motion.div
            key={photoIndex}
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
                      filter: photoIndex === 0 ? "blur(12px)" : "blur(0px)",
                    }
              }
              animate={
                reduceMotion
                  ? undefined
                  : { scale: 1.12, x: `${1.5 * panDirection}%`, filter: "blur(0px)" }
              }
              transition={{
                scale: { duration: (PHOTO_DURATION + 1200) / 1000, ease: "linear" },
                x: { duration: (PHOTO_DURATION + 1200) / 1000, ease: "linear" },
                filter: { duration: 1.2, ease: "easeOut" },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
                  Golden Jubilee of Prashanti Kutiram · 13 November 2026
                </p>
                <p className="font-heading text-xl sm:text-2xl md:text-4xl text-white font-semibold leading-snug">
                  {current.caption}
                </p>
                <p className="mt-2 text-white/60 text-sm tabular-nums">
                  {String(photoIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress: one bar for the video, one dot per photo */}
      <div className="absolute bottom-6 inset-x-0 z-10 flex justify-center pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="relative h-1 w-16 md:w-24 rounded-full bg-white/25 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gold"
              style={{ width: `${isVideo ? videoProgress * 100 : 100}%` }}
            />
          </div>
          {photos.map((_, i) => {
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
    </section>
  );
};

export default UniversityHero;
