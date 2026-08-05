-- Run this once in the Supabase SQL editor (Project → SQL Editor → New query)
-- to (re)create the tables that back every form on the site.
--
-- Replaces the earlier single `leads` table (type + jsonb payload) with one
-- table per form, each with real named columns, so the data is readable
-- directly in the Table Editor without opening a JSON blob.

drop table if exists public.leads;
drop table if exists public.fee_inquiry_leads;

create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.consultation_leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  destination_country text not null,
  study_level text not null,
  message text,
  created_at timestamptz not null default now()
);

create table if not exists public.newsletter_leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.visa_leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  destination_country text not null,
  current_status text not null,
  message text,
  created_at timestamptz not null default now()
);

create table if not exists public.application_leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  destination_country text not null,
  university text,
  intake text not null,
  message text,
  created_at timestamptz not null default now()
);

create index if not exists contact_leads_created_at_idx on public.contact_leads (created_at desc);
create index if not exists consultation_leads_created_at_idx on public.consultation_leads (created_at desc);
create index if not exists newsletter_leads_created_at_idx on public.newsletter_leads (created_at desc);
create index if not exists visa_leads_created_at_idx on public.visa_leads (created_at desc);
create index if not exists application_leads_created_at_idx on public.application_leads (created_at desc);

-- Row Level Security is enabled with no policies attached on every table,
-- which blocks all access via the anon/publishable key. Only the secret /
-- service_role key (server-side only, see lib/supabase.ts) can read or write.
alter table public.contact_leads enable row level security;
alter table public.consultation_leads enable row level security;
alter table public.newsletter_leads enable row level security;
alter table public.visa_leads enable row level security;
alter table public.application_leads enable row level security;
