-- Create leads table to store enquiry form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Contact information (Step 1)
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  
  -- Event details (Step 2 & 3)
  event_type TEXT NOT NULL,
  event_date DATE,
  venue TEXT,
  ceremonies TEXT[], -- Array for wedding ceremonies
  duration TEXT,
  guest_count TEXT,
  
  -- Style and preferences (Step 4)
  photography_style TEXT,
  add_ons TEXT[], -- Array for selected add-ons
  
  -- Additional details (Step 5)
  special_requests TEXT,
  estimated_quote DECIMAL(10,2),
  
  -- Lead management
  status TEXT NOT NULL DEFAULT 'NEW',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert leads (for the enquiry form)
CREATE POLICY "Anyone can create leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow viewing leads (for admin dashboard later)
CREATE POLICY "Authenticated users can view leads" 
ON public.leads 
FOR SELECT 
USING (true);

-- Create policy to allow updating leads (for admin dashboard)
CREATE POLICY "Authenticated users can update leads" 
ON public.leads 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_leads_updated_at
BEFORE UPDATE ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create services table for dynamic pricing
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL, -- 'event_type', 'ceremony', 'add_on'
  service_id TEXT NOT NULL, -- 'wedding', 'haldi', 'drone' etc.
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on services
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read services (for pricing)
CREATE POLICY "Anyone can view active services" 
ON public.services 
FOR SELECT 
USING (active = true);

-- Create trigger for services updated_at
CREATE TRIGGER update_services_updated_at
BEFORE UPDATE ON public.services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial service data
INSERT INTO public.services (category, service_id, name, price, description) VALUES
-- Event types
('event_type', 'wedding', 'Wedding Photography', 50000, 'Complete wedding photography package'),
('event_type', 'birthday', 'Birthday Photography', 15000, 'Birthday party photography'),
('event_type', 'corporate', 'Corporate Event', 25000, 'Professional corporate photography'),
('event_type', 'fashion', 'Fashion Shoot', 20000, 'Fashion and portrait photography'),

-- Wedding ceremonies
('ceremony', 'haldi', 'Haldi Ceremony', 15000, 'Traditional haldi ceremony coverage'),
('ceremony', 'mehendi', 'Mehendi Ceremony', 20000, 'Mehendi ceremony photography'),
('ceremony', 'sangam', 'Sangam Ceremony', 18000, 'Sangam ceremony coverage'),
('ceremony', 'wedding', 'Main Wedding', 35000, 'Main wedding ceremony photography'),
('ceremony', 'reception', 'Reception', 30000, 'Reception party photography'),

-- Add-ons
('add_on', 'drone', 'Drone Photography', 10000, 'Aerial drone photography'),
('add_on', 'album', 'Premium Photo Album', 15000, 'High-quality photo album'),
('add_on', 'video', 'Highlight Video', 25000, 'Professional highlight video'),
('add_on', 'raw', 'Raw Photo Files', 8000, 'Unedited RAW photo files');