CREATE TABLE public.faculty_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contentful_id text UNIQUE NOT NULL,
  name text NOT NULL,
  slug text NOT NULL,
  designation text DEFAULT '',
  department text DEFAULT '',
  qualifications text DEFAULT '',
  bio text DEFAULT '',
  photo_url text DEFAULT '',
  research_interests jsonb DEFAULT '[]'::jsonb,
  publications text DEFAULT '',
  email text DEFAULT '',
  phone text DEFAULT '',
  google_scholar_url text DEFAULT '',
  orcid_id text DEFAULT '',
  display_order integer DEFAULT 999,
  achievements text DEFAULT '',
  area_of_expertise jsonb DEFAULT '[]'::jsonb,
  responsibility text DEFAULT '',
  research text DEFAULT '',
  faculty_category text DEFAULT 'staff',
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.faculty_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published faculty"
  ON public.faculty_profiles FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage faculty"
  ON public.faculty_profiles FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_faculty_profiles_updated_at
  BEFORE UPDATE ON public.faculty_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();