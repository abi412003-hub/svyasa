import { useCallback, useEffect, useRef, useState } from "react";
import { PHOTO_DURATION } from "@/data/eventPhotos";

export type HeroPhase = "video" | "photos";

/**
 * Drives a hero that first steps through `photos` (PHOTO_DURATION each), then
 * plays the background video once, then starts the photos again.
 * Nothing advances until `active` is true (e.g. after the page loader is gone).
 * If the video can't play (error / autoplay blocked) it goes back to the photos.
 */
export function useVideoThenPhotos(photos: { src: string }[], active = true) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<HeroPhase>("photos");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const photoCount = photos.length;

  const startPhotos = useCallback(() => {
    videoRef.current?.pause();
    setPhotoIndex(0);
    setPhase("photos");
  }, []);

  const startVideo = useCallback(() => {
    const video = videoRef.current;
    setVideoProgress(0);
    setPhase("video");
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => startPhotos());
  }, [startPhotos]);

  // Preload the photos so every slide is ready when its turn comes.
  useEffect(() => {
    photos.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, [photos]);

  // Photo slideshow timer; after the last photo, play the video.
  useEffect(() => {
    if (!active || phase !== "photos") return;
    const timer = window.setTimeout(() => {
      if (photoIndex < photoCount - 1) setPhotoIndex((i) => i + 1);
      else startVideo();
    }, PHOTO_DURATION);
    return () => window.clearTimeout(timer);
  }, [active, phase, photoIndex, photoCount, startVideo]);

  const videoProps = {
    onEnded: startPhotos,
    onError: () => {
      if (phase === "video") startPhotos();
    },
    onTimeUpdate: () => {
      const video = videoRef.current;
      if (video && video.duration) setVideoProgress(video.currentTime / video.duration);
    },
  };

  return { videoRef, phase, isVideo: phase === "video", photoIndex, videoProgress, videoProps };
}
