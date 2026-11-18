import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, forwardRef } from "react";
import { Loader2, ImageOff, ExternalLink, Newspaper } from "lucide-react";
import { format, parseISO, isValid } from "date-fns";
import { useSupabaseNews } from "@/hooks/useSupabaseNews";
import { localNews, type NewsSource } from "@/data/newsData";

interface NewsItemUI {
  id: string;
  title: string;
  slug: string;
  date: string;
  dateLabel: string;
  campus: string;
  category: string;
  thumbnailUrl: string;
  imageAlt: string;
  isFeatured: boolean;
  paragraphs: string[];
  sources: NewsSource[];
}

const normalise = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const formatDate = (iso: string) => {
  const d = parseISO(iso);
  return isValid(d) ? format(d, "dd MMMM yyyy") : iso;
};

const campusLabel = (c: string) => (c === "Prashanti" ? "Prashanti Kutiram, Jigani" : c === "GCC" ? "Global City Campus" : c);

const NewsGrid = () => {
  const { data: items, loading } = useSupabaseNews();
  const [visibleCount, setVisibleCount] = useState(12);

  const news = useMemo(() => {
    const local: NewsItemUI[] = localNews.map((n) => ({
      id: n.id,
      title: n.title,
      slug: n.slug,
      date: n.date,
      dateLabel: n.dateLabel,
      campus: n.campus,
      category: n.category,
      thumbnailUrl: n.thumbnailUrl,
      imageAlt: n.imageAlt,
      isFeatured: n.isFeatured,
      paragraphs: n.paragraphs,
      sources: n.sources,
    }));
    const localKeys = new Set(local.flatMap((n) => [n.slug, normalise(n.title)]));
    const remote: NewsItemUI[] = items
      .filter((n) => n.isPublished && !localKeys.has(n.slug) && !localKeys.has(normalise(n.title)))
      .map((n) => ({
        id: n.id,
        title: n.title,
        slug: n.slug,
        date: n.date,
        dateLabel: formatDate(n.date),
        campus: n.campus,
        category: n.category,
        thumbnailUrl: n.thumbnailUrl,
        imageAlt: n.title,
        isFeatured: n.isFeatured,
        paragraphs: n.body ? n.body.split(/\n\s*\n/).filter(Boolean) : [],
        sources: [],
      }));
    const all = [...local, ...remote].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
    // A featured story leads; otherwise the latest one does.
    const lead = all.find((n) => n.isFeatured) ?? all[0];
    return lead ? [lead, ...all.filter((n) => n !== lead)] : all;
  }, [items]);

  const visible = news.slice(0, visibleCount);
  const featured = visible[0];
  const rest = visible.slice(1);

  if (news.length === 0) {
    return loading ? (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <p className="text-muted-foreground">Loading news…</p>
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-muted-foreground">
        <ImageOff className="w-12 h-12 opacity-30" />
        <p className="font-medium">No news found</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {featured && <FeaturedStory item={featured} />}

      {rest.length > 0 && (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {rest.map((item, index) => (
              <NewsCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {visibleCount < news.length && (
        <div className="flex justify-center pt-8">
          <button
            onClick={() => setVisibleCount((p) => p + 12)}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            Load More ({news.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
};

const FeaturedStory = ({ item }: { item: NewsItemUI }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-2xl overflow-hidden shadow-xl"
    aria-labelledby={`news-${item.id}`}
  >
    <div className="relative group h-[300px] md:h-[460px] overflow-hidden">
      {item.thumbnailUrl ? (
        <motion.img
          src={item.thumbnailUrl}
          alt={item.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-navy/60" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
            {item.isFeatured ? "Featured" : "Latest News"}
          </span>
          {item.category && (
            <span className="inline-block px-3 py-1 bg-white/15 text-white text-sm font-medium rounded-full backdrop-blur-sm">
              {item.category}
            </span>
          )}
        </div>
        <h2 id={`news-${item.id}`} className="text-2xl md:text-4xl font-display text-white mb-2 max-w-4xl leading-tight">
          {item.title}
        </h2>
        <p className="text-white/75 text-sm">
          {item.dateLabel} · {campusLabel(item.campus)}
        </p>
      </div>
    </div>

    {(item.paragraphs.length > 0 || item.sources.length > 0) && (
      <div className="p-6 md:p-10 grid gap-8 lg:grid-cols-[1fr_240px]">
        <div className="space-y-4 text-foreground/85 leading-relaxed md:text-lg">
          {item.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={i === 0 ? "first-letter:text-5xl first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:leading-none" : ""}
            >
              {p}
            </motion.p>
          ))}
        </div>
        {item.sources.length > 0 && (
          <aside className="lg:border-l lg:border-border lg:pl-6">
            <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              <Newspaper className="w-4 h-4" /> In the news
            </p>
            <ul className="space-y-2">
              {item.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-navy font-medium hover:text-primary transition-colors"
                  >
                    {s.label}
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    )}
  </motion.article>
);

// forwardRef: AnimatePresence mode="popLayout" measures each child through its ref.
const NewsCard = forwardRef<HTMLDivElement, { item: NewsItemUI; index: number }>(({ item, index }, ref) => (
  <motion.div
    ref={ref}
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ delay: (index % 12) * 0.06, duration: 0.4 }}
  >
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-default">
      <div className="relative aspect-square overflow-hidden bg-muted">
        {item.thumbnailUrl ? (
          <img src={item.thumbnailUrl} alt={item.imageAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageOff className="w-8 h-8 opacity-20" />
          </div>
        )}
        {item.category && (
          <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/50 text-white text-xs font-medium rounded-full z-10">
            {item.category}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-navy line-clamp-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{item.dateLabel} · {campusLabel(item.campus)}</p>
      </div>
    </div>
  </motion.div>
));
NewsCard.displayName = "NewsCard";

export default NewsGrid;
