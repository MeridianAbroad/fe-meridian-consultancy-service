import { createClient } from "@supabase/supabase-js";

/**
 * Server-only client using the service role key, which bypasses Row Level
 * Security. Never import this from a "use client" component — it must only
 * run in route handlers / server code where SUPABASE_SERVICE_ROLE_KEY is
 * available.
 */
export function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase is not configured: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY"
    );
  }

  return createClient(url, key, { auth: { persistSession: false } });
}
