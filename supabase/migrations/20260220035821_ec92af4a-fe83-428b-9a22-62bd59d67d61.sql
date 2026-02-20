
-- Create a public bucket for publications (PDFs allowed)
INSERT INTO storage.buckets (id, name, public, allowed_mime_types)
VALUES (
  'publications',
  'publications',
  true,
  ARRAY['application/pdf', 'image/jpeg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  allowed_mime_types = ARRAY['application/pdf', 'image/jpeg', 'image/png', 'image/webp'];

-- RLS: allow public read
CREATE POLICY "Publications are publicly readable"
ON storage.objects FOR SELECT
USING (bucket_id = 'publications');

-- RLS: allow authenticated admins to upload
CREATE POLICY "Admins can upload publications"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'publications'
  AND auth.role() = 'authenticated'
);

-- RLS: allow authenticated admins to delete
CREATE POLICY "Admins can delete publications"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'publications'
  AND auth.role() = 'authenticated'
);
