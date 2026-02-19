import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const BUCKET = "site-images";

const getPublicUrl = (path: string) => {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
};

/**
 * Fetches the first image from each given folder path in the site-images bucket.
 * Returns a map of folderPath -> publicUrl (or null if empty).
 */
export function useStorageImages(folderPaths: string[]) {
  const [imageMap, setImageMap] = useState<Record<string, string | null>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (folderPaths.length === 0) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    const fetchAll = async () => {
      setLoading(true);
      const entries = await Promise.all(
        folderPaths.map(async (folder) => {
          const { data } = await supabase.storage.from(BUCKET).list(folder, {
            limit: 1,
            sortBy: { column: "created_at", order: "asc" },
          });
          const file = data?.find((f) => f.name && f.name !== ".emptyFolderPlaceholder");
          const url = file ? getPublicUrl(`${folder}/${file.name}`) : null;
          return [folder, url] as [string, string | null];
        })
      );

      if (!cancelled) {
        setImageMap(Object.fromEntries(entries));
        setLoading(false);
      }
    };

    fetchAll();
    return () => { cancelled = true; };
  }, [folderPaths.join(",")]);

  return { imageMap, loading };
}
