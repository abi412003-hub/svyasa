import { useEffect, useState } from "react";
import { PHOTO_DURATION } from "@/data/eventPhotos";

/**
 * Loops through `photos` forever, PHOTO_DURATION each.
 * Nothing advances until `active` is true (e.g. after the page loader is gone).
 */
export function usePhotoSlideshow(photos: { src: string }[], active = true) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photoCount = photos.length;

  // Preload the photos so every slide is ready when its turn comes.
  useEffect(() => {
    photos.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, [photos]);

  useEffect(() => {
    if (!active || photoCount < 2) return;
    const timer = window.setTimeout(() => setPhotoIndex((i) => (i + 1) % photoCount), PHOTO_DURATION);
    return () => window.clearTimeout(timer);
  }, [active, photoIndex, photoCount]);

  return { photoIndex };
}
