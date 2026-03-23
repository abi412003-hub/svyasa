
CREATE TABLE public.svyasa_news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  body text NOT NULL DEFAULT '',
  date date NOT NULL DEFAULT CURRENT_DATE,
  campus text NOT NULL DEFAULT 'Both',
  category text NOT NULL DEFAULT 'Other',
  thumbnail_url text NOT NULL DEFAULT '',
  gallery_urls jsonb NOT NULL DEFAULT '[]'::jsonb,
  is_featured boolean NOT NULL DEFAULT false,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.svyasa_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  body text NOT NULL DEFAULT '',
  date date NOT NULL DEFAULT CURRENT_DATE,
  end_date date,
  campus text NOT NULL DEFAULT 'Both',
  category text NOT NULL DEFAULT 'Other',
  thumbnail_url text NOT NULL DEFAULT '',
  gallery_urls jsonb NOT NULL DEFAULT '[]'::jsonb,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.svyasa_news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.svyasa_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published news" ON public.svyasa_news FOR SELECT USING (is_published = true);
CREATE POLICY "Admins can manage news" ON public.svyasa_news FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public can view published events" ON public.svyasa_events FOR SELECT USING (is_published = true);
CREATE POLICY "Admins can manage events" ON public.svyasa_events FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_svyasa_news_updated_at BEFORE UPDATE ON public.svyasa_news FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_svyasa_events_updated_at BEFORE UPDATE ON public.svyasa_events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
