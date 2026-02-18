
-- Drop existing restrictive INSERT/UPDATE/DELETE policies and allow public access
-- since there's no auth system set up yet for this admin tool

DROP POLICY IF EXISTS "Authenticated users can upload site images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update site images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete site images" ON storage.objects;

-- Allow public (anyone) to upload to site-images bucket
CREATE POLICY "Public upload access for site images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'site-images');

-- Allow public to update site images
CREATE POLICY "Public update access for site images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'site-images');

-- Allow public to delete site images
CREATE POLICY "Public delete access for site images"
ON storage.objects FOR DELETE
USING (bucket_id = 'site-images');
