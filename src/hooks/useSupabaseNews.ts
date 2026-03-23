import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { NewsItem } from "@/lib/newsEventsTypes";

interface DbNews {
  id: number;
  title: string;
  slug: string;
  body: string;
  date: string;
  campus: string;
  category: string;
  thumbnail_url: string;
  gallery_urls: string[];
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

function dbToUi(row: DbNews): NewsItem {
  return {
    id: String(row.id),
    title: row.title,
    slug: row.slug,
    body: row.body || "",
    date: row.date,
    campus: row.campus as NewsItem["campus"],
    category: row.category,
    thumbnailUrl: row.thumbnail_url || "",
    galleryUrls: row.gallery_urls || [],
    isFeatured: row.is_featured,
    isPublished: row.is_published,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function useSupabaseNews() {
  const [data, setData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    const { data: rows, error: err } = await supabase
      .from("svyasa_news")
      .select("*")
      .order("date", { ascending: false });
    if (err) setError(err.message);
    else setData((rows as DbNews[]).map(dbToUi));
    setLoading(false);
  }, []);

  useEffect(() => { fetch(); }, [fetch]);

  return { data, loading, error, refetch: fetch };
}
