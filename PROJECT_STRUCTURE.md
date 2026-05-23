# Learn Malayalam Script - Project Structure

## Overview
A React + TypeScript web app for teaching the Malayalam script through structured lessons, handwriting practice, and transliteration tasks.

## Project Organization

### `/data/`
Core content and reference data:
- **iso15919-reference.json** — Complete Malayalam-to-ISO 15919 transliteration mappings (all vowels, consonants, diacritics)
- **module1-lessons.json** — Full lesson sequence for Module 1 (13 lessons covering vowels a/ā, consonants k/m, syllables, introducing the inherent vowel concept)
- **handwriting-geometry.json** — Shape-based handwriting recognition rules (aspect ratios, curve detection, tolerance thresholds)

### `/src/`
Application source code:

#### `types/index.ts`
Type definitions for the entire app:
- `Lesson`, `Module`, `Task` (discrimination, identification, transliteration, handwriting)
- `Character`, `LessonContent`
- `UserProgress` for tracking completion and accuracy

#### `components/`
React components:
- **LessonViewer.tsx** — Main lesson container; routes to correct lesson type
- **ProgressTracker.tsx** — Shows current lesson and completion percentage
- **lessons/IntroductionLesson.tsx** — Introduction screen (character display, audio, insights)
- **lessons/DiscriminationLesson.tsx** — Audio discrimination tasks (placeholder)
- **lessons/IdentificationLesson.tsx** — Audio identification tasks (placeholder)
- **lessons/TransliterationLesson.tsx** — Transliteration tasks (placeholder)
- **lessons/HandwritingLesson.tsx** — Handwriting practice (placeholder for canvas)
- **lessons/ReviewLesson.tsx** — Mixed review tasks (placeholder)

#### `App.tsx`
Main app component:
- Loads module1-lessons.json
- Manages current lesson index and completed lessons
- Handles navigation between lessons

### Root Configuration
- **package.json** — Dependencies (React 18, TypeScript, Vite)
- **tsconfig.json** — TypeScript strict mode, path aliases (@/)
- **vite.config.ts** — Vite configuration, dev server, build settings
- **index.html** — Entry HTML file
- **src/index.css** — Global styles
- **src/App.css** — App-level styles

## Current Status

### ✅ Complete
- ISO 15919 reference data (all 33 consonants, 13 vowels, diacritics)
- Module 1 full lesson structure (13 lessons, 60+ tasks)
- Handwriting geometry rules for Module 1 characters (shape analysis, tolerance)
- React app scaffolding with TypeScript
- Introduction lesson UI (character cards, audio buttons, insights)
- Lesson navigation and progress tracking UI

### 🚧 Placeholders (Ready for Implementation)
- Audio playback (tasks reference `/audio/` paths; paths need to be created)
- Handwriting canvas (HandwritingLesson shows placeholder)
- Discrimination/Identification/Transliteration task UIs (currently skip buttons)
- Spaced repetition logic
- User account/progress persistence
- Actual handwriting recognition algorithm

## To Run

```bash
npm install
npm run dev
```

Vite dev server starts at `http://localhost:5173`. The app displays Module 1, Lesson 0 (vowel introduction) by default. Click "Continue" to progress through lessons.

## Data Schema Notes

### Lessons
- **Introduction (type: "introduction")** — Display characters with audio and explanations
- **Lesson (type: "lesson")** — Specific task type (discrimination, identification, etc.)
- **Review (type: "review")** — Mixed tasks from module content

### Task Structure
All tasks have a `taskId`, language-specific content, and a `correctAnswer` or `correctIso` field. Discrimination tasks have two sounds; identification tasks have options; transliteration has input method; handwriting has guidance level.

### Guidance Levels (Handwriting)
1. Full ghost letter traced
2. Left half shown
3. Dot guides only
4. Hint on 2nd failure
5. No guidance

## Next Steps
1. Record audio files for all characters (native Malayalam speaker)
2. Implement handwriting canvas + shape recognition
3. Build discrimination/identification/transliteration task UIs
4. Add spaced repetition system for revision
5. Build progress persistence (localStorage or backend)
6. Module 2+ lesson content (e + ē vowels, t and retroflex t consonants)
