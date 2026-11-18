/**
 * Exact campus locations, taken from S-VYASA's own Google Maps place listings.
 * `cid` is Google's place ID; embedding by cid shows the official place card
 * and pin (no API key needed).
 */
export type CampusLocation = {
  name: string;
  address: string;
  lat: number;
  lng: number;
  cid: string;
  /** Opens the Google Maps place page (directions, reviews, photos). */
  directionsUrl: string;
  /** For <iframe src>. */
  embedUrl: string;
  /** Descriptive iframe title for screen readers. */
  mapTitle: string;
};

const embed = (cid: string) => `https://maps.google.com/maps?cid=${cid}&z=16&hl=en&output=embed`;

export const GLOBAL_CITY_CAMPUS: CampusLocation = {
  name: "S-VYASA Global City Campus",
  address: "Sattva Global City, Mysore Road, Rajarajeshwari Nagar, Bengaluru, Karnataka – 560059",
  lat: 12.9197523,
  lng: 77.5040593,
  cid: "15824369913705846483",
  directionsUrl: "https://maps.app.goo.gl/a2xnnRABVzQQnHvWA",
  embedUrl: embed("15824369913705846483"),
  mapTitle: "Map – S-VYASA Global City Campus, Mysore Road, Bengaluru",
};

export const PRASHANTI_KUTIRAM: CampusLocation = {
  name: "Prashanti Kutiram Campus",
  address: "Prashanti Kutiram, Vivekananda Road, Kalluballu Post, Jigani, Anekal, Bengaluru – 560105",
  lat: 12.7570073,
  lng: 77.6264977,
  cid: "13157831254167335931",
  directionsUrl: "https://maps.app.goo.gl/xZnMUxhGfGBW3WsT9",
  embedUrl: embed("13157831254167335931"),
  mapTitle: "Map – S-VYASA Prashanti Kutiram Campus, Jigani, Bengaluru",
};
