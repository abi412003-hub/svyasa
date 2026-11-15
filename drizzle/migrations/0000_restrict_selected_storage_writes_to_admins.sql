DROP POLICY IF EXISTS "Public update access for site images" ON storage.objects;
CREATE POLICY "Public update access for site images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'site-images' AND public.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (bucket_id = 'site-images' AND public.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can delete publications" ON storage.objects;
CREATE POLICY "Admins can delete publications"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'publications' AND public.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Public delete access for site images" ON storage.objects;
CREATE POLICY "Public delete access for site images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'site-images' AND public.has_role(auth.uid(), 'admin'::public.app_role));