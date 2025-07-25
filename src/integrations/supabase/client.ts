// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://aaxgifvlgketisegolku.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFheGdpZnZsZ2tldGlzZWdvbGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MDE4OTYsImV4cCI6MjA2ODA3Nzg5Nn0.9T694-eAVKwcuUz6Y270nFfrmRPMCT9b1fmeWAq98x8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});