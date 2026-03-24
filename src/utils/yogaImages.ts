// Shared yoga image map for course slugs
const slugToFile: Record<string, string> = {
  "bsc-yoga-therapy": "yoga-therapy-01",
  "msc-yoga-therapy": "yoga-therapy-02",
  "bsc-yoga-vedic-therapy": "yoga-vedic-01",
  "msc-yoga-vedic-therapy": "yoga-vedic-01",
  "bachelor-of-naturopathy-yogic-sciences": "yoga-naturopathy-01",
  "bnys": "yoga-naturopathy-01",
  "doctor-of-medicine-yoga": "yoga-doctor-01",
  "pg-diploma-yoga-therapy": "yoga-therapy-03",
  "pg-diploma-yoga-for-doctors": "yoga-doctor-01",
  "yoga-instructor-course": "yoga-therapy-01",
  "non-residential-yic": "yoga-therapy-03",
  "self-management-excessive-tension": "yoga-meditation-01",
  "ayurveda-lifestyle-management": "yoga-vedic-01",
  "aerial-yoga-teacher-training": "yoga-aerial-01",
  "master-of-arts-yoga-darshanam": "yoga-meditation-01",
  "division-yoga-humanities": "yoga-therapy-01",
  "phd-yoga": "yoga-meditation-01",
};

const mod = import.meta.glob("@/assets/course-images/yoga-*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const yogaImageMap: Record<string, string> = Object.fromEntries(
  Object.entries(slugToFile).map(([slug, img]) => {
    const match = Object.entries(mod).find(([path]) => path.includes(img));
    return [slug, match ? match[1] : ""];
  })
);

export const getYogaImage = (slug: string): string | null => {
  return yogaImageMap[slug] || null;
};
