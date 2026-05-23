# Malayalam App — To-Do & Decision Log

> Update this file whenever a significant change is made or a decision is reached.
> Format: `[x]` = done, `[ ]` = pending, `[~]` = partially done / in progress.

---

## ✅ Completed

### Core Engine
- [x] Practice engine with 5 scaffolds: Guided, Reduced guidance, Cumulative, Review, Unguided
- [x] Section-based unlock system (`section:` integer on every lesson)
- [x] Admin mode (long-press logo 3 s → bypasses all locks; badge visible; `renderModules()` called on toggle)
- [x] Express Lane — last section (reviews) accessible in any module, including locked ones
- [x] Dynamic streak counter (`mal_streak` in localStorage; updates on lesson complete)
- [x] Dynamic module stat bar (shows highest unlocked module number)
- [x] Scroll-to-top on all screen / tab transitions
- [x] Previous button hidden at task index 0

### Task Types
- [x] Discrimination (same / different, 2 options)
- [x] Identification — **always 6 cards**, 4 variants (guided / reducedA / reducedB / unguided)
- [x] Matching — up to 5 pairs, 4 variants
- [x] Handwriting — 3 guidance levels (full ghost / half ghost / no guide + self-eval)
- [x] Transliteration — on-screen ISO 15919 diacritic keyboard
- [x] Overview screen — Chillu Review intro card ("Let's practice →")
- [x] Recognition ("Find the letter in a word") — **removed** from all scaffolds

### Review Scaffold (task counts)
- [x] 1–2 Discrimination tasks
- [x] 2 Identification tasks (6 cards each)
- [x] 2 Matching tasks (romanization→letter + sound→letter)
- [x] N Transliteration tasks (1 per character in set)
- [x] 3 Handwriting tasks (unguided)
- [x] Optional Overview card prepended (Chillu Reviews only)

### Content — Modules 1–13
- [x] All 13 modules with full lesson data
- [x] `categoryName` romanizations for every section in all 13 modules
- [x] Module Reviews converted from static matching games to full Review scaffold sessions
- [x] Module 9 title: Sinhala SHA (U+0DC1) → correct Malayalam SHA (U+0D36)
- [x] Sinhala character scan script (PowerShell) — catches non-Malayalam Unicode

### UI / Navigation
- [x] Nav bar tab switching fixed — `.section { display:none }` CSS rule added
- [x] Reference tab — full Phoneme Contrast Matrix (vowel + consonant tables, colour-coded)
- [x] Settings tab — placeholder with greyed-out toggles
- [x] Progress tab — lessons completed + modules completed (live)
- [x] Progress tab — Overall Accuracy (cumulative, tracked in `mal_accuracy` localStorage)
- [x] Progress tab — Badges Earned (computed from module progression milestones)
- [x] Progress tab — Badge panel: 13 named badges in 4 categories (Vowels × 3, Consonants × 4, Chillus × 3, Clusters × 3); earned = colour + icon, unearned = greyed lock; `computeBadges()` returns descriptor array; `renderBadgePanel()` called from `updateProgressCards()` and on tab switch
- [x] Revise tab — module checkboxes dynamically generated for all unlocked modules (1–13)

### Brand Guidelines Application (2026-05)
- [x] Applied brand color palette — 17 CSS :root tokens (orange #E8720C, teal #1A7A6E, gold #C8922A, etc.)
- [x] Typography: DM Sans (UI), Noto Sans Malayalam (characters), Literata serif (ISO transliteration)
- [x] Button styling — pill-shaped (border-radius: 999px) for primary/secondary/action buttons
- [x] Module header illustrations (SVG inline): Kerala Backwaters (Module 1), Spice Market (Module 2), Western Ghats Rainforest (Module 3)
- [x] Animations: nodeUnlock (scale + glow), correctFlash (teal), wrongShake (red); prefers-reduced-motion support
- [x] Tab renamed: "Reference" to "Overview" (data-tab/internal routing remain "reference")

---

## 🚧 In Progress / Partially Done

- [~] Module 1 — only Module Review (no Cumulative Review); decision pending on whether to add one

---

## 📋 Pending

### High Priority
- [ ] Settings tab: wire up real preferences (TTS on/off, font size, reset progress)
- [ ] Validation: save PowerShell scan script as `validate_script.ps1` in project root
- [ ] Revise tab checkboxes: show module short title alongside number (e.g. "Module 3 — ന / ണ")
- [ ] Identification tasks: always show 6 cards (currently shows only 2 in guided scaffold — violates spec)
- [ ] Handwriting UX: canvas + reference + Clear/Submit must all fit in one viewport — reduce canvas size or restructure layout so user never has to scroll while drawing
- [ ] Mobile nav: add Overview and Settings to bottom tab bar (currently only accessible via desktop top bar)
- [ ] Settings page "COMING SOON" badge: replace purple/lavender colour with brand palette (orange or teal)

### Medium Priority
- [ ] Progress tab: per-character accuracy breakdown (weakest characters list)
- [x] Progress tab: full badge display (list earned badges with names, not just count)
- [ ] Accuracy tracking: per-lesson accuracy stored alongside `mal_progress` completion flag
- [ ] Module 1: decide whether to add Cumulative Review lesson
- [ ] Discrimination task: show a text label of the two sounds being compared (e.g. "ka vs ma") as a fallback when TTS is unavailable or audio is off
- [ ] Introduction lesson: Continue button is below the fold — consider a sticky CTA or auto-scroll after Quick Check is answered
- [ ] Section category label repeats in lesson list when a section has both an intro and practice lessons — de-duplicate the header
- [ ] Express Lane copy: replace generic "unlock the next module" with specific text, e.g. "Complete this review to skip to Module 3"
- [ ] Lesson Complete stats: "1 Tasks" is grammatically wrong — use singular/plural correctly ("1 Task", "2 Tasks")
- [ ] Practice screen dead space: ~140px of header+tab-bar consumes viewport on every task — evaluate whether practice should go full-screen (hiding nav) or reduce header height
- [ ] Practice session peeking below intro lesson: before user clicks Continue, the practice progress bar is visible below the fold — hide practiceScreen until explicitly entered

### Lower Priority / Future
- [ ] Spaced repetition Track 2 (due-items queue, SRS schedule)
- [ ] Rest Days mechanic (streak protection; 1 rest day per 5 lessons)
- [ ] Diphthong vowels ഐ (ai) and ഔ (au) — Module 14+
- [ ] Modules 14+ content (aspirated consonants: ഖ ഘ ഠ ഢ ധ ഥ ഭ ഛ ഝ ഫ)
- [ ] Consonant-vowel ligatures: ്യ, ്ര, ്ല (Module 14+)
- [ ] Module 23+ comprehensive consonant cluster module
- [ ] Machine learning handwriting recognition (currently placeholder shape-based)
- [ ] Native Malayalam speaker audio recordings (currently TTS)
- [ ] Notifications system (daily reminder at user-chosen time)
- [ ] Leaderboard / social features — explicitly NOT planned (personal stats only)

---

## 🎯 Open Design Decisions

| # | Question | Status |
|---|----------|--------|
| 1 | Module 1: add Cumulative Review, or keep Module Review as the sole gate? | Open |
| 2 | Overall Accuracy: rolling 30-day average, or lifetime cumulative total? Currently lifetime. | Decided (lifetime) |
| 3 | Consonant matrix: show aspirated consonants (Module 14+) greyed out, or hide them? | Decided (show greyed) |
| 4 | Settings: which settings should be wired up first — TTS toggle or progress reset? | Open |
| 5 | Revise tab: should locked modules be hidden or shown as disabled checkboxes? | Decided (hidden) |

---

## 📝 Decision Log (recent)

| Date | Decision |
|------|----------|
| 2026-05 | Identification task: always exactly **6 cards** across all scaffolds |
| 2026-05 | Review scaffold: **2 identification tasks** per session (not 1 per character) |
| 2026-05 | Review scaffold: **1 transliteration per character** (not capped at 3) |
| 2026-05 | Review scaffold: **3 handwriting tasks** (was 2) |
| 2026-05 | Recognition task ("Find the letter in a word") removed — placeholder, never implemented |
| 2026-05 | Express Lane: Module Review + Cumulative Review accessible in **any** module, including locked ones |
| 2026-05 | Nav tabs: added `display:none` CSS for `.section` — was causing all tabs to stack visibly |
| 2026-05 | Module 9 title: fixed Sinhala character (U+0DC1) that had slipped in during authoring |
| 2026-05 | Revise tab checkboxes: dynamically generated from unlocked modules (not hardcoded 1–5) |
| 2026-05 | Progress tab accuracy: tracked cumulatively in `mal_accuracy` localStorage key |
| 2026-05 | Reference tab: full Phoneme Contrast Matrix (vowel + consonant), colour-coded by status |
| 2026-05 | Progress tab: badge panel — 13 named badges (Vowels × 3, Consonants × 4, Chillus × 3, Clusters × 3); earned = colour tile + emoji, unearned = greyed lock |
