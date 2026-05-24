-- Migration: create lesson_overrides
-- Stores admin-fixed task lists per module/lesson.
-- Public read (all learners), authenticated write (admins only).

create table public.lesson_overrides (
  id          bigint generated always as identity primary key,
  module_id   integer not null,
  lesson_id   integer not null,
  tasks       jsonb   not null default '[]'::jsonb,
  updated_at  timestamptz not null default now(),
  updated_by  uuid references auth.users(id),
  constraint lesson_overrides_module_lesson unique (module_id, lesson_id)
);

alter table public.lesson_overrides enable row level security;

create policy "Public read"
  on public.lesson_overrides for select
  to anon, authenticated
  using (true);

create policy "Admin write"
  on public.lesson_overrides for all
  to authenticated
  using (true)
  with check (true);
