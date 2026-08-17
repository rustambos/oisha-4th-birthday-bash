CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  attending BOOLEAN NOT NULL DEFAULT true,
  guests INTEGER NOT NULL DEFAULT 1,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.rsvps TO anon;
GRANT SELECT, INSERT ON public.rsvps TO authenticated;
GRANT ALL ON public.rsvps TO service_role;
ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an rsvp" ON public.rsvps FOR INSERT TO anon, authenticated WITH CHECK (char_length(name) BETWEEN 1 AND 100 AND guests BETWEEN 0 AND 20 AND (message IS NULL OR char_length(message) <= 1000));
CREATE POLICY "Anyone can view rsvps" ON public.rsvps FOR SELECT TO anon, authenticated USING (true);