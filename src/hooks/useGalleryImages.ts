import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { GalleryCategory, GalleryPhoto } from "@/components/gallery/galleryData";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const BUCKET = "site-images";

function getPublicUrl(path: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path}`;
}

async function listFolder(prefix: string): Promise<GalleryPhoto[]> {
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .list(prefix, { limit: 200, sortBy: { column: "created_at", order: "desc" } });

  if (error || !data) return [];

  return data
    .filter((f) => f.name && !f.name.endsWith("/"))
    .map((f, i) => ({
      id: `${prefix}-${f.id ?? f.name}`,
      src: getPublicUrl(`${prefix}/${f.name}`),
      category: prefix
        .split("/")
        .pop()!
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      alt: `${prefix} photo ${i + 1}`,
    }));
}

// Folder structure in site-images bucket
const PRASHANTI_FOLDERS = [
  "prashanti/campus",
  "prashanti/annapurna-kitchen",
  "prashanti/cultural",
  "prashanti/sports",
  "prashanti/cardio-lab",
  "prashanti/electro-lab",
  "prashanti/exercise-lab",
  "prashanti/neuro-lab",
  "prashanti/physiology-lab",
  "prashanti/research-lab",
  "prashanti/transport",
  "prashanti/digital-library",
];

const GCC_FOLDERS = [
  "gcc/kannada-rajyotsava",
  "gcc/occupational-therapy-day",
  "gcc/onam",
  "gcc/ganesh-chaturthi",
  "gcc/psychotherapy-day",
  "gcc/deeksharambh-2025",
  "gcc/independence-day",
  "gcc/ibm-hackathon",
  "gcc/codeverse",
  "gcc/lung-cancer-day",
  "gcc/allied-lab",
  "gcc/campus",
  "gcc/classroom",
  "gcc/transportation",
  "gcc/computer-lab",
  "gcc/library",
  "gcc/seminar-hall",
];

// Also check for a flat folder structure (e.g. just "gallery/..." or "campus/...")
const FLAT_FOLDERS: { id: string; label: string; prefix: string }[] = [
  { id: "gallery", label: "Gallery", prefix: "gallery" },
  { id: "campus", label: "Campus", prefix: "campus" },
  { id: "news-events", label: "News & Events", prefix: "news-events" },
  { id: "about", label: "About", prefix: "about" },
  { id: "heroes", label: "Heroes", prefix: "heroes" },
  { id: "misc", label: "Miscellaneous", prefix: "misc" },
];

async function buildCategories(folders: string[]): Promise<GalleryCategory[]> {
  const results = await Promise.all(
    folders.map(async (prefix) => {
      const photos = await listFolder(prefix);
      const id = prefix.split("/").pop()!;
      const label = id
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return { id, label, photos };
    })
  );
  return results.filter((cat) => cat.photos.length > 0);
}

async function buildFlatCategories(): Promise<GalleryCategory[]> {
  const results = await Promise.all(
    FLAT_FOLDERS.map(async ({ id, label, prefix }) => {
      const photos = await listFolder(prefix);
      return { id, label, photos };
    })
  );
  return results.filter((cat) => cat.photos.length > 0);
}

export function useGalleryImages() {
  const [prashantiCategories, setPrashantiCategories] = useState<GalleryCategory[]>([]);
  const [globalCityCategories, setGlobalCityCategories] = useState<GalleryCategory[]>([]);
  const [flatCategories, setFlatCategories] = useState<GalleryCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const [prashanti, gcc, flat] = await Promise.all([
        buildCategories(PRASHANTI_FOLDERS),
        buildCategories(GCC_FOLDERS),
        buildFlatCategories(),
      ]);
      setPrashantiCategories(prashanti);
      setGlobalCityCategories(gcc);
      setFlatCategories(flat);
      setLoading(false);
    };
    load();
  }, []);

  return { prashantiCategories, globalCityCategories, flatCategories, loading };
}
