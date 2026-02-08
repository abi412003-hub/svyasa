export interface GalleryCategory {
  id: string;
  label: string;
  photos: GalleryPhoto[];
}

export interface GalleryPhoto {
  id: string;
  src: string;
  category: string;
  alt: string;
}

const generatePhotos = (category: string, count: number, campus: string): GalleryPhoto[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${campus}-${category}-${i + 1}`,
    src: `https://images.unsplash.com/photo-${1500000000000 + Math.random() * 100000000}?w=600&q=80&sig=${campus}${category}${i}`,
    category,
    alt: `${category} photo ${i + 1}`,
  }));
};

// Use actual placeholder images with variety
const getPlaceholderImage = (index: number, category: string): string => {
  const images = [
    "photo-1562774053-701939374585", // Campus/university
    "photo-1523050854058-8df90110c9f1", // Students
    "photo-1541339907198-e08756dedf3f", // Graduation
    "photo-1519452635265-7b1fbfd1e4e0", // Library
    "photo-1497633762265-9d179a990aa6", // Books
    "photo-1522202176988-66273c2fd55f", // Students working
    "photo-1571260899304-425eee4c7efc", // Lab
    "photo-1532094349884-543bc11b234d", // Research
    "photo-1606761568499-6d2451b23c66", // Computer lab
    "photo-1517245386807-bb43f82c33c4", // Classroom
    "photo-1540575467063-178a50c2df87", // Event
    "photo-1511578314322-379afb476865", // Cultural
    "photo-1461896836934- voices", // Sports
    "photo-1574629810360-7efbbe195018", // Sports
    "photo-1544531586-fde5298cdd40", // Kitchen
    "photo-1567521464027-f127ff144326", // Food
  ];
  const baseImage = images[index % images.length];
  return `https://images.unsplash.com/${baseImage}?w=600&q=80&sig=${category}${index}`;
};

const createPhotos = (category: string, count: number, campus: string): GalleryPhoto[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${campus}-${category.toLowerCase().replace(/\s+/g, "-")}-${i + 1}`,
    src: getPlaceholderImage(i + category.length, category),
    category: category,
    alt: `${category} - Photo ${i + 1}`,
  }));
};

export const prashantiCategories: GalleryCategory[] = [
  { id: "campus", label: "Campus", photos: createPhotos("Campus", 8, "prashanti") },
  { id: "annapurna-kitchen", label: "Annapurna Kitchen", photos: createPhotos("Annapurna Kitchen", 4, "prashanti") },
  { id: "cultural", label: "Cultural", photos: createPhotos("Cultural", 6, "prashanti") },
  { id: "sports", label: "Sports", photos: createPhotos("Sports", 6, "prashanti") },
  { id: "cardio-lab", label: "Cardio Lab", photos: createPhotos("Cardio Lab", 4, "prashanti") },
  { id: "electro-lab", label: "Electro Lab", photos: createPhotos("Electro Lab", 4, "prashanti") },
  { id: "exercise-lab", label: "Exercise Lab", photos: createPhotos("Exercise Lab", 4, "prashanti") },
  { id: "neuro-lab", label: "Neuro Lab", photos: createPhotos("Neuro Lab", 4, "prashanti") },
  { id: "physiology-lab", label: "Physiology Lab", photos: createPhotos("Physiology Lab", 4, "prashanti") },
  { id: "research-lab", label: "Research Lab", photos: createPhotos("Research Lab", 4, "prashanti") },
  { id: "transport", label: "Transport", photos: createPhotos("Transport", 4, "prashanti") },
  { id: "digital-library", label: "Digital Library", photos: createPhotos("Digital Library", 4, "prashanti") },
];

export const globalCityCategories: GalleryCategory[] = [
  { id: "kannada-rajyotsava", label: "Kannada Rajyotsava", photos: createPhotos("Kannada Rajyotsava", 4, "gcc") },
  { id: "occupational-therapy-day", label: "World Occupational Therapy Day", photos: createPhotos("World Occupational Therapy Day", 4, "gcc") },
  { id: "onam", label: "Onam", photos: createPhotos("Onam", 4, "gcc") },
  { id: "ganesh-chaturthi", label: "Ganesh Chaturthi", photos: createPhotos("Ganesh Chaturthi", 4, "gcc") },
  { id: "psychotherapy-day", label: "World Psychotherapy Day", photos: createPhotos("World Psychotherapy Day", 3, "gcc") },
  { id: "deeksharambh-2025", label: "Deeksharambh 2025", photos: createPhotos("Deeksharambh 2025", 4, "gcc") },
  { id: "independence-day", label: "Independence Day", photos: createPhotos("Independence Day", 4, "gcc") },
  { id: "ibm-hackathon", label: "IBM Hackathon", photos: createPhotos("IBM Hackathon", 4, "gcc") },
  { id: "codeverse", label: "Codeverse", photos: createPhotos("Codeverse", 4, "gcc") },
  { id: "lung-cancer-day", label: "Lung Cancer Day", photos: createPhotos("Lung Cancer Day", 3, "gcc") },
  { id: "allied-lab", label: "Allied Lab", photos: createPhotos("Allied Lab", 4, "gcc") },
  { id: "campus", label: "Campus", photos: createPhotos("Campus", 6, "gcc") },
  { id: "classroom", label: "Classroom", photos: createPhotos("Classroom", 4, "gcc") },
  { id: "transportation", label: "Transportation", photos: createPhotos("Transportation", 3, "gcc") },
  { id: "computer-lab", label: "Computer Lab", photos: createPhotos("Computer Lab", 4, "gcc") },
  { id: "library", label: "Library", photos: createPhotos("Library", 4, "gcc") },
  { id: "seminar-hall", label: "Seminar Hall", photos: createPhotos("Seminar Hall", 4, "gcc") },
];

export const getAllPhotos = (categories: GalleryCategory[]): GalleryPhoto[] => {
  return categories.flatMap((cat) => cat.photos);
};
