export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  body: string;
  date: string;
  campus: "GCC" | "Prashanti" | "Both";
  category: string;
  thumbnailUrl: string;
  galleryUrls: string[];
  isFeatured: boolean;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  body: string;
  date: string;
  endDate: string;
  campus: "GCC" | "Prashanti" | "Both";
  category: string;
  thumbnailUrl: string;
  galleryUrls: string[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export const NEWS_CATEGORIES = [
  "Academic", "Event", "Conference", "Workshop", "Sports", "Cultural",
  "Celebration", "Achievement", "Awareness", "Competition", "Infrastructure",
  "Media", "Heritage", "Student Life", "Celebrity Visit", "Milestone", "Other"
] as const;

export const EVENT_CATEGORIES = [
  "Conference", "Workshop", "Sports", "Cultural", "Yoga", "Academic",
  "Seminar", "Competition", "Monthly Report", "Awareness", "Other"
] as const;

export const CAMPUS_OPTIONS = ["GCC", "Prashanti", "Both"] as const;

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}
