# Learn Malayalam Script
## App Design & Product Specification Document
**Version 1.0 — For Developer Reference**

---

## Table of Contents

1. Overview
2. Target Audience
3. Pedagogical Goals & Design Philosophy
4. Script Coverage
5. Transliteration Standard (ISO 15919)
6. Handwriting Recognition
7. Task Types
8. Lesson Structure
9. Course Structure — Complete Module Plan
10. Guidance Fading System
11. Phoneme Contrast Matrix
12. Revision System (Track 2)
13. Gamification & User Retention
14. App Structure & Navigation

---

## 1. Overview

Learn Malayalam Script is a mobile application for iOS and Android that teaches the Malayalam script to complete beginners through structured, handwriting-based practice combined with listening and transliteration tasks.

The app is a self-learning tool — there is no teacher interface. A learner who completes the course will be able to read, write, and transliterate the full Malayalam script, including all vowels, consonants, chillu letters, the anusvara, the virama, and common consonant clusters.

The app is built in English. It assumes no prior knowledge of Malayalam. It does assume that learners can read a Roman alphabet, since ISO 15919 transliteration is used throughout as the reference standard.

---

## 2. Target Audience

- Complete beginners to the Malayalam script
- No prior knowledge of the script assumed
- Any age, any background
- Typical users: heritage speakers reconnecting with the language, language learners, students, curious individuals
- The app does not assume any spoken knowledge of Malayalam

---

## 3. Pedagogical Goals & Design Philosophy

The design of this app responds to specific shortcomings in existing script-learning tools (such as Duolingo's Hindi module), where:

- Letter combinations are too limited — letters are practiced in isolation and then suddenly appear in complex words, with no scaffolded intermediate stage
- Stroke order is enforced, which hinders learning — a learner who writes a correct shape in a different sequence is unfairly penalised
- Phonological explanations are missing or vague — similar sounds (such as the different types of 't' in Malayalam) are never explained, leaving learners unable to understand the distinctions
- Guidance fading is absent — the same level of support is maintained throughout with no increasing challenge

The app is built on the following principles:

### 3.1 Scaffolded Complexity

Content is introduced in a carefully ordered sequence: isolated vowels first, then consonants, then consonant-vowel syllables, then words. New material is always introduced in the context of what is already known. Consonant clusters and special features (chillu letters, anusvara, virama) are introduced progressively, only when the learner has the required foundation.

### 3.2 Phonological Awareness Before Production

Each new letter or contrast is introduced with explicit discrimination drills before the learner is asked to write anything. The ear is trained before the hand.

- **Discrimination:** "Listen — same or different?" (e.g. [ka] / [kā])
- **Identification:** "Which letter makes this sound?" — choose from options
- **Categorisation:** "Both are t-like sounds — what is different?" — explicit comparison

### 3.3 Learner Autonomy in Motor Execution

Stroke order is never evaluated. The app evaluates only the final shape of a written character. A learner who arrives at a correct shape via a different stroke sequence receives full credit. This respects natural variation in handwriting and reduces cognitive load.

### 3.4 Guidance Fading

Every letter and syllable passes through three levels of writing support, from fully guided to completely unguided. This fading is built into the lesson structure — it is not user-controlled. See Section 10 for the full fading system.

### 3.5 Explicit Phonological Instruction

Every letter is introduced with a clear, accessible description of how it is produced — place and manner of articulation in non-academic language. Minimal pairs are highlighted explicitly: the retroflex/dental distinction (ട vs ത), the alveolar/retroflex nasal distinction (ന vs ണ), and all similar pairs are taught as contrasts, not in isolation. A persistent Phoneme Contrast Matrix (Section 11) makes these relationships visual.

### 3.6 ISO 15919 as the Only Transliteration Standard

Many Malayalam learners encounter inconsistent, non-standard Romanisations online. This app introduces ISO 15919 explicitly in Lesson 1 and uses it as the only reference throughout. Learners are told that other systems exist but are not taught them. This gives learners a single reliable reference and avoids the confusion created by competing systems.

### 3.7 Varied Task Types

Each letter and syllable is practiced through multiple task types, not just writing. This prevents rote learning and builds flexible knowledge. See Section 7 for the full list.

### 3.8 Spiral Curriculum with Mixed Review

Every module ends with a review that mixes all content from the current and all previous modules. From Module 7 onwards, all ten vowels are used in every practice task. This ensures cumulative learning and prevents compartmentalisation.

### 3.9 Implicit Pattern Learning

The structural patterns of the Malayalam script — how vowel diacritics modify a base consonant, how the virama removes the inherent vowel, how some vowels share visual elements — are taught through brief animations and visual highlights at the moment of introduction. Learners absorb these patterns implicitly, supported by a short explicit label at the right moment, rather than being asked to study grammar rules.

---

## 4. Script Coverage

The app teaches the complete Malayalam script:

**Vowels (12 taught)**
അ ആ ഇ ഈ ഉ ഊ എ ഏ ഐ ഒ ഓ ഔ
Taught in short/long pairs: a/ā, e/ē, o/ō, u/ū, i/ī (the ten core vowels, Modules 1–6). The diphthongs ഐ (ai) and ഔ (au) are introduced in a later module (14+). ഋ is not taught in this course.

**Consonants (36 total)**
All 36 Malayalam consonants: the standard 33 Sanskrit-origin consonants plus 3 Kerala-specific letters (ള, ഴ, റ). Introduced in strategic pairs across Modules 1–13+, ordered by frequency and pedagogical contrast.

**Chillu Letters (5 taught)**
ൺ ൻ ർ ൽ ൾ
These are the only chillu forms included. ൿ and the ഴ chillu are not taught.
Each chillu is introduced immediately after its base consonant is learned.

**Virama (്)**
The vowel-removal diacritic. Introduced in Module 2 after the first consonants are established.

**Anusvara (ം)**
The nasal ending mark. Introduced in Module 7.

**Consonant Clusters**
Three clusters introduced in Module 10: ണ്ട, ങ്ങ, and ക്ഷ.
Additional high-frequency ligatures (റ്റ and ന്റ) introduced in Module 12.
A comprehensive cluster module later in the course covers the top 10–12 most common clusters, fast-tracked.

---

## 5. Transliteration Standard — ISO 15919

ISO 15919 is the only transliteration standard used in this app. It is introduced explicitly in Lesson 1 with a short explanation:

> "This is the international standard for writing Indian scripts in Roman letters. Other systems exist, but we use this one throughout the course so there is no confusion."

Learners practice transliteration bidirectionally — from Malayalam to ISO 15919 and from ISO 15919 to Malayalam.

**Key ISO 15919 values used in this course:**

| Malayalam | ISO 15919 | Notes |
|-----------|-----------|-------|
| അ | a | Short a |
| ആ | ā | Long ā |
| ഇ | i | Short i |
| ഈ | ī | Long ī |
| ഉ | u | Short u |
| ഊ | ū | Long ū |
| എ | e | Short e |
| ഏ | ē | Long ē |
| ഒ | o | Short o |
| ഓ | ō | Long ō |
| ത | ta | Dental t — tongue at upper teeth |
| ട | ṭa | Retroflex ṭ — tongue curls back |
| ന | na | Alveolar n |
| ണ | ṇa | Retroflex ṇ |
| ല | la | Alveolar l |
| ള | ḷa | Retroflex ḷ |
| ര | ra | Alveolar r |
| റ | ṟa | Strong alveolar trill |
| ഴ | ḻa | Retroflex approximant — unique to Malayalam |
| ശ | śa | Palatal fricative |
| ഷ | ṣa | Retroflex fricative |
| ം | m | Anusvara — written as final 'm' at word endings |
| ് | (virama) | Vowel removal — not independently transliterated |

**Input method on mobile:** Since ISO 15919 diacritics (ā, ī, ṭ, ṇ, etc.) cannot be typed on standard mobile keyboards, the app uses a multiple-choice diacritic button system. When a transliteration task is presented, the learner sees the base letter and selects the correct diacritic from a set of buttons (e.g. [a] [ā] [e] [ē] [i] [ī] [u] [ū]). This input method also functions as a learning task in itself.

---

## 6. Handwriting Recognition

The app uses **shape-based handwriting recognition**. Stroke order is never evaluated. The system assesses whether the final drawn shape matches the target character, not how it was produced.

Key principles:
- A learner who writes a correct shape via any stroke sequence receives full credit
- The system tolerates messy but legible handwriting — evaluation is not pixel-perfect
- After evaluation, the correct character is overlaid on the learner's attempt, with visual highlighting of deviations
- Results are classified into three categories: **Correct**, **Understandable** (recognisable but imperfect), **Incorrect**

Input is via touchscreen (finger or stylus). The canvas should be large, clean, and distraction-free.

**Implementation note:** A reference prototype using geometric shape analysis (aspect ratio, curvature, loop detection, path normalisation and resampling) has been built. For production, a machine learning approach (e.g. TensorFlow Lite, on-device) should replace or augment the geometric engine. Reference stroke templates should be collected from native Malayalam writers.

---

## 7. Task Types

Each letter, syllable, and cluster is practiced through multiple task types. Not all task types appear in every lesson — they are distributed across the lesson sequence to provide variety and increasing challenge.

| Task Type | Description |
|-----------|-------------|
| **Discrimination** | Hear two sounds: same or different? (e.g. [ka] [kā] → Different) |
| **Identification** | Hear a sound or see a romanization, choose the correct character from **exactly 6 cards**. Four variants: guided (romanization + audio), reducedA (audio → pick romanization), reducedB (romanization → pick letter), unguided (audio → pick letter). |
| **Matching** | Two columns of cards; tap pairs to match sounds/romanizations to letters. Up to 5 pairs (10 cards). Four variants: guided, reducedA, reducedB, unguided. |
| **Handwriting** | Write the character on the touch canvas; shape-based self-evaluation. Three guidance levels: full ghost, half ghost, no guide. |
| **Transliteration** | See a Malayalam character; type the ISO 15919 romanisation using the on-screen diacritic keyboard. |
| **Overview** | Informational card shown at the start of Chillu Reviews — displays all reference characters before practice begins. Learner taps "Let's practice →" to proceed. |

---

## 8. Lesson Structure

### 8.1 Introduction Lesson (Lesson X.0)

Every new letter or pair of letters gets a dedicated introduction screen containing:

- The character displayed large
- ISO 15919 transliteration
- Audio (native Malayalam speaker)
- Accessible description of articulation (non-academic language, e.g. "Tongue curls back — retroflex t")
- For contrasting pairs (e.g. ത and ട): an explicit comparison, highlighting what is different
- The Phoneme Contrast Matrix updated to show the new character as [NEW]

For vowels that have a visual relationship to earlier vowels (e.g. ഇ resembles ഉ with added marks), a brief visual note highlights this connection in the description text.

For syllable introduction lessons, the transformation is shown statically — e.g. ക + ാ → കാ — making the diacritic system visually explicit without animation.

For the vowel substitution principle (when a vowel diacritic replaces the inherent 'a'), a one-time text explanation accompanies the lesson: "When a vowel diacritic is added, it replaces the default 'a' sound."

### 8.2 Sub-Lesson Sequence

After the introduction lesson, each letter or pair passes through the following sub-lessons:

- **Lesson X.1:** Discrimination and identification tasks; writing with half-guide (Level 2)
- **Lesson X.2:** Transliteration and reverse transliteration; writing unguided (Level 3)
- **Lesson X.3:** Writing unguided; mixed recognition tasks combining all content learned so far (Level 3)

### 8.3 Special Lessons

Special lessons are appended to specific modules at the point where the learner has the necessary foundation:

- **Virama lesson** (Module 2): explains that ് removes the inherent vowel; shows transformation with all known consonants; previews its role in clusters
- **Chillu lessons** (Modules 3, 5, 6): introduces the chillu form of consonants just learned; explains the final-position function; discrimination and writing tasks
- **Chillu Review** (Module 8): reviews all five chillus (ൻ, ൺ, ർ, ൽ, ൾ) together with mixed practice
- **Vowel System Overview** (Module 4): shows all three known vowel pairs; highlights the short/long pattern; visual matrix of vowels learned so far vs. coming
- **Anusvara lesson** (Module 7): introduces ം as a nasal word ending; two practice levels — vowels + anusvara and syllables + anusvara
- **Double consonant ligatures** (Modules 9 and 12): introduces repeating consonant forms (e.g. ക്ക, ട്ട, ച്ച, ല്ല); animation shows the same consonant doubled via virama
- **Cluster lessons** (Module 10, Module 23+): introduces three clusters (ണ്ട, ങ്ങ, ക്ഷ) in Module 10; animation shows how virama joins two consonants; discrimination, identification, transliteration, recognition in words, writing
- **Consonant clusters** (Module 11): introduces the two most common consonant clusters റ്റ (ṭṭa) and ന്റ (nṟa/nda)
- **Consonant-vowel ligatures** (Module 14+): introduces ്യ, ്ര, ്ല conjunct forms

### 8.4 Module Review

Every module ends with a mandatory review lesson that mixes all content from the current module and all previous modules. From Module 7 onwards, all ten vowels are used in this review. Task types are varied across the review.

### 8.4a Review Lesson Design

All review lessons (Module Reviews and Cumulative Reviews) are **full unguided practice sessions**, not static displays. They use the "Review" scaffold which generates the following task sequence (shuffled, except the optional overview card):

| Task | Count | Notes |
|------|-------|-------|
| Overview card | 0–1 | Only in Chillu Reviews; shows all 5 chillus before practice |
| Discrimination | 1–2 | Confusable pairs; falls back to 1 if no confusables |
| Identification (unguided) | 2 | 2 random characters, 6 cards each |
| Matching (romanization→letter) | 1 | Up to 5 pairs |
| Matching (sound→letter) | 1 | Up to 5 pairs |
| Transliteration | N | 1 per character in the set |
| Handwriting (unguided) | 3 | 3 random characters, no ghost guide, self-eval |

**Total: 8 + N tasks** per review session, where N = number of characters in the review set.

**Module Review** covers only the new content introduced in that module, including any special lesson characters (chandrakkala forms, chillu forms, anusvara).

**Cumulative Review** covers all characters from all modules completed so far.

**Chillu Reviews** (Module 6 and Module 8) open with an overview screen showing all 5 chillu forms as reference cards. After the learner taps "Let's practice →", the unguided practice session begins.

**Express Lane — reviews accessible in every module, even locked ones.**
The last section (Module Review + Cumulative Review) is always accessible in any module, regardless of whether the module is otherwise locked. This allows a learner who already knows the material to:
1. Go directly to any module's reviews (without completing any earlier lessons)
2. Pass those reviews → unlock the next module
3. Repeat for successive modules

Locked module cards display an "🚀 Express Lane" section showing only the review lessons as clickable. All other sections remain locked until the module is formally unlocked through sequential progression.

`isLessonAccessible()` returns `true` for any lesson in the last section, unconditionally.

### 8.5 Section-Based Unlocking

Every lesson in `modulesData` must have a `section` integer property. Lessons in the same section unlock together. The rules are:

- **Section 1** of a module is always accessible when the module itself is unlocked.
- **Section N+1** unlocks when the last lesson of Section N is completed.
- **The last section** (Module Review ± Cumulative Review) is **always accessible** when the module is unlocked — this is the *skip-module gate*. **Every lesson in the last section must be completed** to unlock the next module.
- **Maximum 3 lessons per section.**

**Module Review + Cumulative Review unlock rule:**

From Module 2 onwards, the last section contains two lessons: the **Module Review** and the **Cumulative Review**. Both must be completed before the next module unlocks. The UI makes this explicit:

```
MODULE REVIEW
  [Module N Review]     🔑 unlock next module
  [Cumulative Review]   🔑 unlock next module
```

Each badge turns to ✓ when that lesson is completed. The next module only unlocks when **both** show ✓. Module 1 is the exception — its last section contains only the Module Review, so completing that single lesson unlocks Module 2.

**Skip modes:**
- *Skip section:* Do only the last lesson in a section (marked 🔑 in the UI) to unlock the next section without completing the earlier optional lessons.
- *Skip module:* Go directly to the last section and complete **all lessons in it** (Module Review + Cumulative Review) — all intermediate sections can be skipped. The next module then unlocks.

**Implementation rules for new modules:**
1. Each lesson object must include `section: N` (integer, starting at 1 per module).
2. The section number is the grouping key in the UI — do **not** rely on `categoryName` string matching for grouping.
3. Sections containing a mix of category types (e.g. intro + practice) use the **first lesson's `categoryName`** as the display label.
4. The Module Review and Cumulative Review always share the **last section number** in their module.
5. `isModuleUnlocked(N)` checks that **all** lessons in Module N−1's last section are completed (`.every(l => l.completed)`), not just the last one.

### 8.6 Lesson Exit Criteria

- The learner must complete all steps in a lesson in sequence
- Any wrong answer on a task immediately re-queues that task to the end of the current session — the learner will see it again before the session ends.
- There is no blocking gate. The learner can skip any task.
- There is no 3-attempt counter in the current implementation. Track 2 auto-flagging is not yet implemented.
- The learner can also manually flag any item for revision

---

## 9. Course Structure — Complete Module Plan

### Vowel Mixing Rules

New consonants are always introduced using the default inherent 'a' syllable only. Vowels are added into practice tasks progressively as they are learned:

- **Module 1:** a/ā only
- **Module 2:** a/ā, e/ē
- **Module 3:** a/ā, e/ē only (no new vowel introduced in Module 3)
- **Module 4:** a/ā, e/ē, o/ō
- **Module 5:** a/ā, e/ē, o/ō, u/ū
- **Module 6:** a/ā, e/ē, o/ō, u/ū, i/ī
- **Module 7 onwards:** ALL ten vowels mixed in ALL practice and review tasks

---

### Module 1
**Vowels introduced:** അ (a) and ആ (ā)
**Consonants introduced:** ക (ka) and മ (ma)
**Syllables practiced:** കാ and മാ
**Vowels in practice:** a/ā only

Introduction lessons for both vowels, discrimination between them, identification, handwriting with full and reduced guide, transliteration. Insight introduced: "a is the short form; ā is the same vowel held longer."

Introduction lessons for both consonants, discrimination, identification, handwriting. The concept that every consonant carries an inherent 'a' sound is introduced here.

Syllable introduction: animation shows ക + ാ → കാ. Tasks cover discrimination (ക vs കാ, മ vs മാ), identification, transliteration, writing with full then reduced guide.

Module 1 Review: all content mixed.

---

### Module 2
**Vowels introduced:** എ (e) and ഏ (ē)
**Consonants introduced:** ത (ta) and ട (ṭa)
**Syllables practiced:** തെ, ടെ, തേ, ടേ
**Vowels in practice:** a/ā, e/ē
**Special lesson:** chandrakkala (്) introduction

Vowel introduction: comparison with a/ā (different vowel height). Discrimination includes three-way contrast: a vs e vs ā.

Consonant introduction: **explicit contrast between ത (dental t) and ട (retroflex t)**. Description: "ത — tongue touches upper teeth; ട — tongue curls back." Discrimination drills make the distinction clear before any writing is attempted.

Syllable introduction: the vowel substitution principle is introduced here for the first time. Animation shows the inherent 'a' being replaced by 'e' when the diacritic is added.

Chandrakkala lesson: explains ് as the vowel-removal mark. Shows transformation of all four known consonants (ക്, മ്, ത്, ട്). Previews clusters. Writing of consonants with chandrakkala.

We should explain that it suppresses the inherent vowel. At the end of the word, it represents a very short vowel, known as "half-u",The exact pronunciation of this vowel varies from dialect to dialect (ə̆), but it is transliterated as ŭ (for example, ന na → ന് nŭ).


Module 2 Review: all content mixed.

---

### Module 3
**Vowels introduced:** none
**Consonants introduced:** ന (na) and ണ (ṇa)
**Syllables practiced:** നാ, ണാ, നെ, ണെ, നേ, ണേ
**Vowels in practice:** a/ā, e/ē only (no new vowel this module)
**Special lesson:** Chillu ൻ and ൺ

Consonant introduction: **explicit contrast between ന (alveolar n) and ണ (retroflex n)**. The same retroflex/alveolar distinction from Module 2 is referenced: "Same place difference as ത and ട."

Chillu lesson: explains that some consonants take a special final form. Animation: ന + ് → ൻ. Shows both ൻ (from ന) and ൺ (from ണ). Discrimination, identification, recognition in word endings, writing.

Module 3 Review: all content from Modules 1–3, vowels a/ā and e/ē only.

---

### Module 4
**Vowels introduced:** ഒ (o) and ഓ (ō)
**Consonants introduced:** പ (pa) and വ (va)
**Syllables practiced:** പോ, വോ, പൊ, വൊ and all combinations with known vowels
**Vowels in practice:** a/ā, e/ē, o/ō
**Special lesson:** Vowel System Overview

Vowel introduction: the visual relationship between o and the earlier vowels a and e is highlighted with an animation. "ഒ combines visual elements of അ and എ."

Vowel System Overview lesson: shows all three known vowel pairs in a visual matrix; highlights the short/long pattern; shows which pairs are still coming (u/ū and i/ī).

Module 4 Review: all content from Modules 1–4, vowels a/ā, e/ē, o/ō.

---

### Module 5
**Vowels introduced:** ഉ (u) and ഊ (ū)
**Consonants introduced:** ല (la) and ള (ḷa)
**Syllables practiced:** all combinations with all known vowels
**Vowels in practice:** a/ā, e/ē, o/ō, u/ū
**Special lesson:** Chillu ൽ and ൾ

Vowel introduction: u and ū are introduced as a new vowel pair — no specific visual relationship to earlier vowels.

Consonant introduction: **explicit contrast between ല (alveolar l) and ള (retroflex l)**. Cross-referenced to earlier retroflex/alveolar pairs.

Chillu lesson: ൽ from ല and ൾ from ള. References the earlier chillu lessons: "Like ൻ and ൺ — same idea, different consonant."

Module 5 Review: all content from Modules 1–5, vowels a/ā, e/ē, o/ō, u/ū.

---

### Module 6
**Vowels introduced:** ഇ (i) and ഈ (ī)
**Consonants introduced:** ര (ra) and റ (ṟa)
**Syllables practiced:** all combinations with all ten vowels
**Vowels in practice:** ALL ten vowels (first module with full vowel set)
**Special lesson:** Chillu ർ and complete chillu review

Vowel introduction: **visual relationship to ഉ (u) highlighted**. Animation shows how ഇ is formed from ഉ with additional marks. "The script has visual logic — similar forms often indicate related sounds." The full vowel matrix is now complete and shown.

Consonant introduction: **explicit contrast between ര (softer alveolar r) and റ (stronger alveolar trill)**.

Chillu lesson: ർ from ര. References the earlier chillu lessons: "Like ൻ and ൺ — same idea, different consonant."

All five chillus (ൻ, ൺ, ർ, ൽ, ൾ) are now known — a short mixed review of all five is included.

Module 6 Review: all content from Modules 1–6, all ten vowels.

---

### Module 7
**Vowels introduced:** none
**Consonants introduced:** യ (ya) and ഴ (ḻa)
**Syllables practiced:** all combinations with ALL vowels
**Vowels in practice:** ALL ten vowels
**Special lesson:** Anusvara (ം) introduction

Anusvara lesson: explains ം as a nasal word ending that nasalises the preceding vowel. Example: നാ (nā) → നാം (nām). ISO 15919 transliteration: anusvara is written as 'm' at word endings. Discrimination, identification with multiple vowels, writing vowel + anusvara, recognition in common words, transliteration tasks.

ഴ (zha) receives special attention: it is a sound unique to Malayalam with no equivalent in English. Description and audio are given extra emphasis.

**From this module onwards, ALL ten vowels are mixed into ALL practice and review tasks for all remaining modules.**

Module 7 Review: all content from Modules 1–7, all ten vowels, anusvara

---

### Module 8
**Vowels introduced:** none
**Consonants introduced:** ങ (ṅa) and ഞ (ña)
**Syllables practiced:** all combinations with ALL vowels
**Vowels in practice:** ALL ten vowels
**Special lesson:** Chillu Review

Consonant introduction: ങ (velar nasal) and ഞ (palatal nasal). Both are nasal sounds at different positions. Description: "ങ — nasal sound at the back of the mouth, like 'ng' in 'sing'; ഞ — nasal sound at the palate, like 'ny' in 'canyon'."


Module 8 Review: all content from Modules 1–8, all ten vowels.

---

### Module 9
**Vowels introduced:** none
**Consonants introduced:** ശ (śa) and ഷ (ṣa)
**Syllables practiced:** all combinations with ALL vowels
**Vowels in practice:** ALL ten vowels
**Special lesson:** Double Consonant Ligatures (Repeating Letters)

Consonant introduction: **explicit contrast between ശ (palatal fricative) and ഷ (retroflex fricative)**. Both are "sh" sounds — palatal vs retroflex distinction.

Double Consonant Ligatures lesson: introduces repeating consonant forms: ക്ക (kka), ട്ട (ṭṭa), ത്ത (tta), ന്ന (nna), മ്മ (mma). Animation shows how the same consonant appears twice with a virama between: consonant + virama + consonant. Three practice lessons (Guided, Reduced, Unguided) covering all five repeating forms with comprehensive exercises.

Module 9 Review: all content from Modules 1–9, all ten vowels, including anusvara.

---

### Module 10
**Vowels introduced:** none
**Consonants introduced:** ദ (da) and ഗ (ga)
**Syllables practiced:** all combinations with ALL vowels
**Vowels in practice:** ALL ten vowels
**Special lesson:** Consonant Clusters — Three clusters: ണ്ട, ങ്ങ, and ക്ഷ

Cluster lesson: all prerequisites are in place by this point — ങ learned in Module 8, ണ in Module 3, ട in Module 2, ക in Module 1, ഷ in Module 9, virama in Module 2.

Explanation and animation for each cluster:
- ണ്ട: "ണ + ് + ട = ണ്ട — the first consonant (ണ) loses its vowel; the second (ട) keeps it."
- ങ്ങ: "ങ + ് + ങ = ങ്ങ — same consonant appears twice with virama between."
- ക്ഷ: "ക + ് + ഷ = ക്ഷ — combination of two different consonants where the first loses its vowel."

Three clusters are introduced together so that discrimination tasks can contrast them against each other. Tasks: discrimination (ണ്ട vs ങ്ങ vs ക്ഷ), identification, recognition in words, transliteration, writing with full and reduced guidance. Two practice lessons (Reduced guidance, Unguided) cover all clusters comprehensively.

Module 10 Review: all content from Modules 1–10, all ten vowels, including clusters.

---

### Module 11
**Vowels introduced:** none
**Consonants introduced:** ച (cha) and ജ (ja)
**Syllables practiced:** all combinations with ALL vowels
**Vowels in practice:** ALL ten vowels
**Special lesson:** Consonant Clusters — റ്റ and ന്റ

Consonant introduction: **explicit contrast between ച (palatal affricate, unvoiced) and ജ (palatal affricate, voiced)**. Same manner of articulation (affricates) but different voicing.

Consonant Clusters lesson: introduces two extremely common written forms:
- **റ്റ** (ṭṭa): "ṟ + ് + ṟa" — geminate of the strong alveolar trill. Appears frequently in Malayalam words (e.g. കറ്റ, പെട്ടി).
- **ന്റ** (nṟa): "n + ് + ṟa" — written ന്റ, pronounced /nda/. One of the most common word endings in Malayalam (e.g. ഒന്റ, നിന്റ).

Both prerequisites (ന from Module 3, റ from Module 6) are in place. Animation shows the virama joining the consonants. Two practice lessons (Reduced guidance, Unguided) covering both ligature forms in syllable and word contexts.

Module 11 Review: all content from Modules 1–11, all ten vowels, including all consonant clusters learned.

---

### Module 12
**Vowels introduced:** none
**Consonants introduced:** സ (sa) and ഡ (ḍa)
**Syllables practiced:** all combinations with ALL vowels
**Vowels in practice:** ALL ten vowels
**Special lesson:** Double Consonant Ligatures (Repeating Letters)

Consonant introduction: സ (alveolar fricative "s") and ഡ (retroflex stop "d").

Double Consonant Ligatures lesson: introduces repeating consonant forms: യ്യ (yya), ച്ച (ccha), ല്ല (lla), പ്പ (ppa). Animation shows how the same consonant appears twice with a virama between. Three practice lessons (Guided, Reduced, Unguided) covering all four repeating forms with comprehensive exercises.

Module 12 Review: all content from Modules 1–12, all ten vowels, including clusters and repeating ligatures.

---

### Module 13
**Vowels introduced:** none
**Consonants introduced:** ബ (ba) and ഹ (ha)
**Syllables practiced:** all combinations with ALL vowels
**Vowels in practice:** ALL ten vowels
**Special lesson:** none

Consonant introduction: ബ (labial voiced stop "b") and ഹ (breathy glottal fricative "h").

Module 13 Review: all content from Modules 1–13, all ten vowels, including all cluster and ligature types.

---

### Modules 14+
**Consonants remaining (10):** ഖ (kha), ഘ (gha), ഠ (ṭha), ഢ (ddha), ധ (dha), ഥ (tha), ഭ (bha), ഛ (chha), ഝ (jha), ഫ (pha) — flexible order, 1–2 per module
**Vowels introduced:** ഐ (ai) and ഔ (au) — the two diphthongs, introduced as a dedicated vowel lesson in one of the Module 14+ modules
**Vowels in practice:** ALL ten core vowels (plus ഐ/ഔ once introduced)
**Special lessons:** Consonant-Vowel Ligatures (്യ, ്ര, ്ല) in an early Module 14 slot; additional consonant clusters as needed

These are the less common consonants, mostly aspirated or rare forms. Order is flexible. The same module structure applies throughout. Module 14+ will be split across multiple numbered modules (to be detailed separately).

---

### Modules 23+: Comprehensive Consonant Clusters
**Content:** Top 10–12 most common consonant clusters
**Structure:** Fast-tracked — introduction + 2 reinforcement lessons per cluster pair
**Vowels in practice:** ALL ten vowels

At this point in the course, the learner has a solid understanding of the virama and cluster formation from Module 10. Each cluster lesson introduces two new clusters, uses the same animation and explanation approach, and focuses on discrimination between the new clusters, identification, recognition in words, transliteration, and writing with full then half guide. No full spiral treatment is needed — the foundation is in place.

---

## 10. Guidance Fading System

Every character and syllable passes through three levels of writing support, distributed across sub-lessons within a module:

| Level | Guide | When used |
|-------|-------|-----------|
| **1** | Full ghost letter in background — learner traces | Introduction lesson (X.0) |
| **2** | Left half of ghost letter shown | Reinforcement lesson (X.1) |
| **3** | No guide, no hint | Free writing in lesson (X.2–X.3) and all reviews |

From Level 2 (half ghost) the learner moves directly to no guide at all. Handwriting tasks in reviews are always unguided. Self-evaluation (learner compares their drawing to the reference) replaces hint-after-failure mechanics.

Learners cannot manually select their guidance level. The levels are built into the lesson sequence.

---

## 11. Phoneme Contrast Matrix

Two persistent reference matrices are accessible from any screen in the app:

**Vowel Matrix:** rows = short/long; columns = vowel quality (a, e, o, u, i)

**Consonant Matrix:** rows = manner of articulation (stop, nasal, fricative, approximant, affricate); columns = place of articulation (labial, alveolar, retroflex, dental, palatal, velar)

Behaviour:
- Visible from Lesson 1 onwards
- Characters are colour-coded by learning status:
  - **Grey** = not yet learned
  - **Orange/Yellow** = in progress (currently being studied)
  - **Green** = mastered (≥85% accuracy across tasks)
- Each cell is tappable — tapping plays the audio for that character
- Newly introduced characters are shown with a [NEW] indicator until the introduction lesson is complete
- The matrix grows as the course progresses — it never appears complete until all characters are learned
- The two matrices are kept separate (vowels and consonants shown independently)

---

## 12. Revision System (Track 2)

The revision system runs in parallel with the main course. It is separate from the module lessons and does not block course progression.

### How items are flagged

Items are added to the revision queue in two ways:
1. **Automatic:** any task where the learner fails 3 times is auto-flagged
2. **Manual:** the learner can flag any item themselves at any time

Learners can also unflag items they feel confident about.

### Spaced Repetition Schedule

Once flagged, an item is reviewed on the following schedule:

- Review 1: 1 day after the lesson where it was flagged
- Review 2: 3 days after Review 1
- Review 3: 7 days after Review 2
- Review 4: 14 days after Review 3

The schedule is counted from the date of the last completed review session, not from the original flagging date.

Each successive review session uses **reduced scaffolding** compared to the previous one — writing guidance moves one level lower each time.

Learners can request an early review at any time — this adds the item to the queue immediately but does not reset the spaced repetition schedule.

### Revision Section in the App

The revision system has a **dedicated section** in the app (a separate tab or screen). It shows:
- Items ready for review now
- Items scheduled for the future (with countdown)
- Items marked as mastered (green)

Learners can also browse and manually trigger review for any previously learned item.

### Revision Session Counting

Completed revision sessions count toward the lesson total for streak and rest day purposes (see Section 13). They also have their own badge milestones (5, 10, 20 revision sessions completed).

### Random Mix Mode

Within the revision section, learners can access a **Random Mix** mode:
- Learner selects what to include: all vowels, all consonants, chillus, anusvara, clusters, or any combination
- Task types rotate randomly: discrimination, identification, transliteration, writing, recognition in words
- Duration is user-set (5 / 10 / 15 minutes)
- No spaced repetition schedule — purely for open practice
- Results identify weak items and offer to add them to the targeted revision queue

---

## 13. Gamification & User Retention

The app uses a light gamification layer — enough to encourage consistency and mark progress, but without the aggressive, anxiety-inducing mechanics of apps like Duolingo.

### Streak System

- A daily streak counter records how many consecutive days the learner has practiced
- Missing a day resets the streak to zero
- Learners can collect **Rest Days** to protect their streak on a missed day
- Every 5 lessons completed earns 1 Rest Day
- A maximum of 2 Rest Days can be equipped at any time
- If a day is missed and a Rest Day is equipped, the streak is preserved automatically and the Rest Day is consumed
- Completed revision sessions (Track 2) count as lessons for the purpose of earning Rest Days

### Progress Path

The course is visualised as a **top-to-bottom path**, similar in concept to Duolingo's course map. Each module appears as a node on the path. Completed modules are marked clearly. The current module is highlighted. Future modules are visible but locked.

### Badges

Badges are awarded at the following milestones:

**Vowels:**
- First vowel learned
- 3 vowels learned
- All vowels learned

**Consonants:**
- 5 consonants learned
- 10 consonants learned
- 25 consonants learned
- All consonants learned

**Chillus:**
- First chillu learned
- 3 chillus learned
- All 5 chillus learned

**Clusters:**
- First cluster learned
- 5 clusters learned
- All clusters learned

**Revision (Track 2):**
- 5 revision sessions completed
- 10 revision sessions completed
- 20 revision sessions completed

### Personal Stats Dashboard

A statistics screen shows:
- Accuracy rate per character and vowel
- Total lessons completed
- Total revision sessions completed
- Weakest characters (those with the lowest average accuracy)
- Current streak and Rest Day count

This is for personal reflection — there are no leaderboards or social comparisons.

### Notifications

Gentle reminders only. Suggested: a single daily reminder at a user-chosen time if no practice has happened that day. No aggressive re-engagement mechanics.

---

## 14. App Structure & Navigation

The app has the following main sections:

**Learn**
The main course path. Top-to-bottom visual of all modules. Learner taps the current module to continue. Completed modules show accuracy indicators.

**Revise**
The Track 2 revision section. Shows items due for review, scheduled items, and access to Random Mix mode. Revision sessions can be started here at any time.

**Progress**
Personal statistics dashboard. Accuracy per character, lessons completed, streak, badges earned, weakest items.

**Reference**
The Phoneme Contrast Matrix — two interactive tables:
- **Vowel Matrix:** 2 rows (short/long) × 5 columns (a, e, o, u, i). Each cell shows the Malayalam vowel character + ISO romanization. Tappable for audio.
- **Consonant Matrix:** rows = manner of articulation (stop unvoiced, stop voiced, nasal, fricative, approximant, rhotic, special); columns = place of articulation (labial, dental, alveolar, retroflex, palatal, velar, glottal). Each cell shows the Malayalam character + ISO romanization.
- Cells are colour-coded by learning status: **grey** = not yet accessible, **amber** = module unlocked/in progress, **green** = module completed.
- Each cell is tappable to hear audio.
- The matrix shows the complete Malayalam consonant inventory including characters from future modules (greyed out), giving learners a full picture of what is coming.

**Settings**
Notification preferences, audio on/off, account management. *(Placeholder — coming in a future update.)*

---

## Appendix: Complete Module Summary Table

| Module | Vowels Introduced | Consonants Introduced | Special Lesson |
|--------|-------------------|-----------------------|----------------|
| 1 | a / ā | ക, മ | — |
| 2 | e / ē | ത, ട | ⭐ Virama (്) |
| 3 | — | ന, ണ | ⭐ Chillu ൻ ൺ |
| 4 | o / ō | പ, വ | ⭐ Vowel System Overview |
| 5 | u / ū | ല, ള | ⭐ Chillu ൽ ൾ |
| 6 | i / ī | ര, റ | ⭐ Chillu ർ |
| 7 | — | യ, ഴ | ⭐ Anusvara (ം) |
| 8 | — | ങ, ഞ | ⭐ Chillu Review |
| 9 | — | ശ, ഷ | ⭐ Double Ligatures (ക്ക, ട്ട, ത്ത, ന്ന, മ്മ) |
| 10 | — | ദ, ഗ | ⭐ Clusters (ണ്ട, ങ്ങ, ക്ഷ) |
| 11 | — | ച, ജ | ⭐ Consonant Clusters (റ്റ, ന്റ) |
| 12 | — | സ, ഡ | ⭐ Double Ligatures (യ്യ, ച്ച, ല്ല, പ്പ) |
| 13 | — | ബ, ഹ | — |
| 14+ | ഐ, ഔ (diphthongs) | ഖ, ഘ, ഠ, ഢ, ധ, ഥ, ഭ, ഛ, ഝ, ഫ (flexible) | ⭐ Ligatures (്യ, ്ര, ്ല); diphthong intro |
| 23+ | — | Top 10–12 clusters | ⭐ Comprehensive Cluster module |

---

*Learn Malayalam Script — App Design Document v1.0*
*Placeholder name — final app name to be decided*
