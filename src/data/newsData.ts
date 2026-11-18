/**
 * News stories bundled with the site. They are shown alongside any published
 * rows from the `svyasa_news` table; a table row with the same slug or title
 * is dropped in favour of the bundled version.
 */
import jubileeStage from "@/assets/events/golden-jubilee-cultural-evening/11-golden-jubilee-group-photo.jpg";
import type { NewsItem } from "@/lib/newsEventsTypes";

export type NewsSource = { label: string; url: string };

export type LocalNewsItem = NewsItem & {
  /** Human-readable date shown on cards. */
  dateLabel: string;
  imageAlt: string;
  /** Story text, one paragraph per entry. */
  paragraphs: string[];
  /** Media coverage the story is based on. */
  sources: NewsSource[];
};

export const localNews: LocalNewsItem[] = [
  {
    id: "local-pm-modi-golden-jubilee",
    slug: "pm-modi-inaugurates-prashanti-kutiram-golden-jubilee",
    title: "Prime Minister Shri Narendra Modi inaugurates the Golden Jubilee of Prashanti Kutiram",
    date: "2026-11-13",
    dateLabel: "13 November 2026",
    campus: "Prashanti",
    category: "Golden Jubilee",
    thumbnailUrl: jubileeStage,
    imageAlt:
      "Stage at the Golden Jubilee Celebrations of Prashanti Kutiram and Birth Centenary Commemoration of H. V. Sheshadri Ji",
    galleryUrls: [],
    isFeatured: true,
    isPublished: true,
    createdAt: "2026-11-13T00:00:00.000Z",
    updatedAt: "2026-11-18T00:00:00.000Z",
    body: "",
    paragraphs: [
      "Prime Minister Shri Narendra Modi visited Prashanti Kutiram, the residential headquarters campus of S-VYASA at Jigani, Bengaluru, on 13 November 2026. He inaugurated the Golden Jubilee celebrations of the campus together with the birth centenary commemoration of Shri H. V. Sheshadri, one of the visionaries behind S-VYASA.",
      "The Golden Jubilee celebrations run from 13 to 23 November 2026 on the theme “Towards Viksit Bharat 2047”, marking five decades of education, research and service from Prashanti Kutiram.",
      "The programme announced for the Prime Minister's visit also included laying the foundation stone of a Golden Jubilee Administrative Block and launching S-VYASA's off-campus centre in Thiruvananthapuram, Kerala.",
      "Prashanti Kutiram was the first stop of the Prime Minister's two-day visit to Karnataka and Gujarat.",
    ],
    sources: [
      {
        label: "ANI",
        url: "https://www.aninews.in/news/national/general-news/pm-modi-in-bengaluru-participates-in-prashanti-kutiram-jubilee-celebrations-to-inaugurate-namma-metro-pink-line20261113105501/",
      },
      {
        label: "The News Mill",
        url: "https://thenewsmill.com/2026/11/pm-modi-inaugurates-prashanti-kutiram-golden-jubilee-and-hv-sheshadri-centenary-in-bengaluru/",
      },
      {
        label: "DD India",
        url: "https://ddindia.co.in/2026/11/pm-modi-to-visit-karnataka-gujarat-today-unveil-projects-worth-over-rs-15600-crore-in-bengaluru/",
      },
    ],
  },
];
