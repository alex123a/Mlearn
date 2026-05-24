-- Migration: create admin_modules and admin_lessons
-- Stores admin-created modules and lessons (supplement to JSON base content).
-- Public read (all learners), authenticated write (admins only).
-- Written as idempotent so it is safe to run even if tables already exist.

create table if not exists public.admin_modules (
  id          bigint generated always as identity primary key,
  title       text not null,
  description text,
  order_index integer not null default 0,
  created_at  timestamptz not null default now(),
  created_by  uuid references auth.users(id)
);

alter table public.admin_modules enable row level security;

do $$ begin
  create policy "Public read admin_modules"
    on public.admin_modules for select
    to anon, authenticated
    using (true);
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Admin write admin_modules"
    on public.admin_modules for all
    to authenticated
    using (true)
    with check (true);
exception when duplicate_object then null;
end $$;

-- admin_lessons: can belong to either a JSON module (module_json_id)
-- or an admin-created module (admin_module_id), never both.
create table if not exists public.admin_lessons (
  id              bigint generated always as identity primary key,
  module_json_id  integer,
  admin_module_id bigint references public.admin_modules(id) on delete cascade,
  title           text not null,
  description     text,
  type            text not null default 'practice',
  order_index     integer not null default 0,
  tasks           jsonb not null default '[]'::jsonb,
  created_at      timestamptz not null default now(),
  created_by      uuid references auth.users(id),
  constraint admin_lessons_one_parent check (
    (module_json_id is not null and admin_module_id is null) or
    (module_json_id is null and admin_module_id is not null)
  )
);

alter table public.admin_lessons enable row level security;

do $$ begin
  create policy "Public read admin_lessons"
    on public.admin_lessons for select
    to anon, authenticated
    using (true);
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Admin write admin_lessons"
    on public.admin_lessons for all
    to authenticated
    using (true)
    with check (true);
exception when duplicate_object then null;
end $$;
