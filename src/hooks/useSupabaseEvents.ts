import { useState, useEffect, useCallback } from "react";
import { supabaseExternal } from "@/lib/supabaseExternal";
import type { EventItem } from "@/lib/newsEventsTypes";

interface DbEvent {
  id: number;
  title: string;
  slug: string;
  body: string;
  date: string;
  end_date: string | null;
  campus: string;
  category: string;
  thumbnail_url: string;
  gallery_urls: string[];
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

function dbToUi(row: DbEvent): EventItem {
  return {
    id: String(row.id),
    title: row.title,
    slug: row.slug,
    body: row.body || "",
    date: row.date,
    endDate: row.end_date || "",
    campus: row.campus as EventItem["campus"],
    category: row.category,
    thumbnailUrl: row.thumbnail_url || "",
    galleryUrls: row.gallery_urls || [],
    isPublished: row.is_published,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function useSupabaseEvents() {
  const [data, setData] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    const { data: rows, error: err } = await supabaseExternal
      .from("svyasa_events")
      .select("*")
      .order("date", { ascending: false });
    if (err) setError(err.message);
    else setData((rows as DbEvent[]).map(dbToUi));
    setLoading(false);
  }, []);

  useEffect(() => { fetch(); }, [fetch]);

  return { data, loading, error, refetch: fetch };
}
