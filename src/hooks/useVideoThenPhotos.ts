import { useCallback, useEffect, useRef, useState } from "react";
import { PHOTO_DURATION } from "@/data/eventPhotos";

export type HeroPhase = "video" | "photos";

/**
 * Drives a hero that plays a background video once, then steps through
 * `photoCount` photos (PHOTO_DURATION each), then restarts the video.
 * If the video can't play (error / autoplay blocked) it goes straight to photos.
 */
export function useVideoThenPhotos(photos: { src: string }[]) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<HeroPhase>("video");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const photoCount = photos.length;

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
  }, [photos]);

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
      if (photoIndex < photoCount - 1) {
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
  }, [phase, photoIndex, photoCount, startPhotos]);

  const videoProps = {
    onEnded: startPhotos,
    onError: startPhotos,
    onTimeUpdate: () => {
      const video = videoRef.current;
      if (video && video.duration) setVideoProgress(video.currentTime / video.duration);
    },
  };

  return { videoRef, phase, isVideo: phase === "video", photoIndex, videoProgress, videoProps };
}
