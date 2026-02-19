import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const BUCKET = "site-images";

const getPublicUrl = (path: string) => {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
};

/** Convert a slug like "academic-calendar-ay-2025-26" → "Academic Calendar AY 2025-26" */
export const slugToTitle = (slug: string) =>
  slug
    .split("-")
    .map((w) => (w.match(/^\d+$/) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ")
    .replace(/\bay\b/gi, "AY")
    .replace(/\bphd\b/gi, "PhD")
    .replace(/\buga\b/gi, "UGA")
    .replace(/\bpg\b/gi, "PG")
    .replace(/\bug\b/gi, "UG")
    .replace(/\bvyasa\b/gi, "VYASA")
    .replace(/\bs vyasa\b/gi, "S-VYASA")
    .replace(/\baiu\b/gi, "AIU")
    .replace(/\baiiu\b/gi, "AIIU")
    .replace(/\bmba\b/gi, "MBA");

export interface StorageNewsItem {
  folderPath: string; // "news/academic-calendar-ay-2025-26"
  slug: string;       // "academic-calendar-ay-2025-26"
  title: string;      // "Academic Calendar AY 2025-26"
  coverUrl: string | null;
  fileCount: number;
}

export interface StorageEventItem {
  folderPath: string; // "events/kalavilasa"
  slug: string;
  title: string;
  coverUrl: string | null;
  fileCount: number;
}

async function listSubfolders(prefix: string): Promise<string[]> {
  const { data } = await supabase.storage.from(BUCKET).list(prefix, {
    limit: 200,
    sortBy: { column: "name", order: "asc" },
  });
  // Folders appear as items with no metadata (size 0, id null) or as .emptyFolderPlaceholder parent
  return (data || [])
    .filter((f) => f.name && f.name !== ".emptyFolderPlaceholder" && f.id === null)
    .map((f) => f.name);
}

async function getFirstImage(folderPath: string): Promise<string | null> {
  const { data } = await supabase.storage.from(BUCKET).list(folderPath, {
    limit: 5,
    sortBy: { column: "created_at", order: "asc" },
  });
  const file = (data || []).find(
    (f) => f.name && f.name !== ".emptyFolderPlaceholder" && f.id !== null
  );
  return file ? getPublicUrl(`${folderPath}/${file.name}`) : null;
}

async function getFolderFileCount(folderPath: string): Promise<number> {
  const { data } = await supabase.storage.from(BUCKET).list(folderPath, { limit: 200 });
  return (data || []).filter((f) => f.name !== ".emptyFolderPlaceholder" && f.id !== null).length;
}

export function useNewsFromStorage() {
  const [items, setItems] = useState<StorageNewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const slugs = await listSubfolders("news");
      const results = await Promise.all(
        slugs.map(async (slug) => {
          const folderPath = `news/${slug}`;
          const [coverUrl, fileCount] = await Promise.all([
            getFirstImage(folderPath),
            getFolderFileCount(folderPath),
          ]);
          return { folderPath, slug, title: slugToTitle(slug), coverUrl, fileCount };
        })
      );
      if (!cancelled) {
        // Sort newest-looking folders first (reverse alphabetical on slug usually works for dated names)
        setItems(results.filter((r) => r.fileCount > 0).reverse());
        setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return { items, loading };
}

export function useEventsFromStorage() {
  const [items, setItems] = useState<StorageEventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const slugs = await listSubfolders("events");
      const results = await Promise.all(
        slugs.map(async (slug) => {
          const folderPath = `events/${slug}`;
          const [coverUrl, fileCount] = await Promise.all([
            getFirstImage(folderPath),
            getFolderFileCount(folderPath),
          ]);
          return { folderPath, slug, title: slugToTitle(slug), coverUrl, fileCount };
        })
      );
      if (!cancelled) {
        setItems(results.filter((r) => r.fileCount > 0).reverse());
        setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return { items, loading };
}
