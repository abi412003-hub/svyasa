import bookReleaseStage from "@/assets/university-hero/01-book-release-stage.jpg";
import bookReleaseCloseup from "@/assets/university-hero/02-book-release-closeup.jpg";
import prashantiDais from "@/assets/university-hero/03-prashanti-kutiram-dais.jpg";
import felicitationPeta from "@/assets/university-hero/04-felicitation-peta.jpg";
import namaste from "@/assets/university-hero/05-namaste.jpg";
import vivekanandaMemento from "@/assets/university-hero/06-vivekananda-memento.jpg";
import greeting from "@/assets/university-hero/07-greeting.jpg";
import svyasaMemento from "@/assets/university-hero/08-svyasa-memento.jpg";
import floralTribute from "@/assets/university-hero/09-floral-tribute.jpg";

/** How long each photo stays on screen in the hero slideshows (ms). */
export const PHOTO_DURATION = 3000;

export const EVENT_PHOTO_EYEBROW = "Golden Jubilee of Prashanti Kutiram · 13 November 2026";

export type EventPhoto = {
  src: string;
  /** CSS object-position, tuned so faces stay in frame when cropped to a wide hero. */
  focus: string;
  caption: string;
};

export const eventPhotos: EventPhoto[] = [
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
