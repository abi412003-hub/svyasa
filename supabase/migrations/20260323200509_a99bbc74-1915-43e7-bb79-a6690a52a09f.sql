
ALTER TABLE public.courses 
  ADD COLUMN IF NOT EXISTS quote jsonb DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS learning_journey jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS testimonials jsonb DEFAULT '[]'::jsonb;
