---
name: validate-malayalam-content
description: Check ALL Malayalam lesson files across all modules to ensure content only uses Malayalam script, not accidentally mixed Tamil, Arabic, Sinhala, Khmer, or other non-Malayalam Unicode. Use this skill whenever you want to validate lesson data (JSON files in the data/ folder) is pure Malayalam — across every module, every lesson, every field. Triggers on phrases like "validate Malayalam", "check lesson files", "scan for non-Malayalam", "check all modules".
compatibility: None (uses Claude's native abilities)
---

# Malayalam Content Validator

## Purpose

Ensure **all** Malayalam lesson files across **all modules** contain only Malayalam script, without accidental mixing of Tamil, Arabic, Sinhala, Khmer, or other scripts.

## Where the Data Lives

This app has **two sources** of Malayalam content — both must be scanned:

### 1. `app.html` — Primary source (all 13 modules)
All 13 modules are embedded directly in `app.html` as a JavaScript `modulesData` array (lines ~1863–4670). This is the live app data. Each module has lessons with `malayalam:` fields, `description`, `insight`, `prompt`, `options`, etc.

### 2. `data/*.json` — Reference data
- `data/module1-lessons.json` — older React format, module 1 only
- `data/iso15919-reference.json` — full character reference
- `data/handwriting-geometry.json` — handwriting geometry rules

## How It Works

When triggered, always scan **both sources**:

1. **`app.html`** — Read the file and grep for all `malayalam:` values across all 13 modules. Check surrounding fields (`description`, `insight`, `prompt`, `options`, `title`, `heading`, `chars`) for non-Malayalam script.
2. **`data/*.json`** — Read each JSON file and scan content fields.
3. **Report per module** — group findings by module number (1–13).
4. **Summarise** at the end with total issues found.

## What Gets Checked

✅ **Scan these for non-Malayalam script:**
- `malayalam:` — the character itself (most important)
- `description` — character descriptions
- `insight` — teaching insight text
- `prompt` — quiz/task prompts
- `options` — answer options shown to learner
- `heading` — step headings
- `title` (module/lesson titles that contain Malayalam inline)
- `chars` array entries
- `categoryName` — contains inline Malayalam characters

❌ **Skip these (English is expected):**
- `iso15919`, `iso` — always Latin transliteration
- `correctAnswer`, `correct`, `scaffold` — structural values
- `taskId`, `lessonId`, `id`, `category` — identifiers
- `audioPath`, `sound`, `sound1`, `sound2` — file paths
- `taskMix`, `type`, `status` — structural fields
- CSS, HTML tags, JavaScript code — not content

## When to Use

- **Full audit**: "Check all my lesson files for non-Malayalam script"
- **Before publishing**: "Validate all 13 modules before I push"
- **After editing**: "I just edited module 7 — check it's pure Malayalam"
- **Spot-check**: "Is there any Tamil or Arabic in my lessons?"

## Example Usage

### Check all modules
"Validate all 13 modules in app.html and the data files."

### Check specific module
"Check module 9 in app.html for any non-Malayalam characters."

## What's Detected

The validator identifies these non-Malayalam scripts if found:
- Tamil (U+0B80–0BFF)
- Arabic (U+0600–U+06FF)
- Sinhala (U+0D80–U+0DFF)
- Khmer (U+1780–U+17FF)
- Kannada, Telugu, Gujarati, Hindi, and others
- Chinese, Japanese, Korean
- Greek, Cyrillic, Hebrew

## Expected Output

**If clean:**
```
✅ No issues found. All lesson content uses only Malayalam script.
```

**If issues found:**
```
❌ Found 1 non-Malayalam character:

Lesson 1.0: "Vowels: Short 'a' and Long 'ā'"
Field: description
Position: Line 12, character 45
Script: Tamil (U+0BA4) - "த"
Context: "...Malayalam has two தமிழ் versions..."

Action: Remove or replace the Tamil character with Malayalam equivalent.
```

## Tips

- English text in descriptions is **fine** — it's expected for teaching
- Numbers, punctuation, and common symbols are **allowed**
- Only actual Malayalam script characters (U+0D00–U+0D7F) should appear in the Malayalam content fields
- If unsure about a character, ask Claude: "What script is this character: ..."

## Notes

- This skill uses Claude's native ability to read files and detect Unicode scripts
- No external tools or code execution required
- Works best with JSON lesson files with clear structure
