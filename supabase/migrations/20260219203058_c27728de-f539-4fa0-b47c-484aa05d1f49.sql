
-- Admin roles system
CREATE TYPE public.app_role AS ENUM ('admin', 'editor');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE(user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS: only admins can read/write user_roles
CREATE POLICY "Admins can manage roles" ON public.user_roles
FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Courses table
CREATE TABLE public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  short_title TEXT NOT NULL,
  degree TEXT NOT NULL DEFAULT '',
  duration TEXT NOT NULL DEFAULT '',
  campus TEXT NOT NULL DEFAULT '',
  campus_type TEXT NOT NULL DEFAULT 'gcc' CHECK (campus_type IN ('gcc', 'prashanti')),
  category TEXT NOT NULL DEFAULT '',
  banner_image TEXT DEFAULT '',
  hook_line TEXT DEFAULT '',
  overview JSONB DEFAULT '[]',
  stat_callout JSONB DEFAULT NULL,
  eligibility JSONB DEFAULT '{}',
  highlights JSONB DEFAULT '[]',
  careers JSONB DEFAULT '[]',
  related_programs JSONB DEFAULT '[]',
  fee JSONB DEFAULT '{}',
  apply_link TEXT DEFAULT '',
  brochure_link TEXT DEFAULT NULL,
  domain_theme TEXT NOT NULL DEFAULT 'tech' CHECK (domain_theme IN ('tech','business','yoga','health','research','arts')),
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Public can read published courses
CREATE POLICY "Public can view published courses" ON public.courses
FOR SELECT USING (is_published = TRUE);

-- Admins can do everything
CREATE POLICY "Admins can manage courses" ON public.courses
FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Categories table
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  short_title TEXT NOT NULL,
  subtitle TEXT DEFAULT '',
  banner_image TEXT DEFAULT '',
  level TEXT NOT NULL DEFAULT 'undergraduate',
  campus_type TEXT NOT NULL DEFAULT 'gcc',
  program_slugs JSONB DEFAULT '[]',
  why_study JSONB DEFAULT '[]',
  domain_theme TEXT NOT NULL DEFAULT 'tech',
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published categories" ON public.categories
FOR SELECT USING (is_published = TRUE);

CREATE POLICY "Admins can manage categories" ON public.categories
FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON public.courses
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON public.categories
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
