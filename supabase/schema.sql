-- Run this once in the Supabase SQL editor (Project → SQL Editor → New query)
-- to create the table that backs every form on the site.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  full_name text,
  email text not null,
  phone text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists leads_type_idx on public.leads (type);
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Row Level Security is enabled with no policies attached, which blocks all
-- access via the anon/authenticated keys. Only the service_role key
-- (server-side only, see lib/supabase.ts) can read or write this table.
alter table public.leads enable row level security;
