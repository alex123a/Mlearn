---
name: validate-malayalam-content
description: Check ALL Malayalam lesson files across all modules to ensure content only uses Malayalam script, not accidentally mixed Tamil, Arabic, Sinhala, Khmer, or other non-Malayalam Unicode. Use this skill whenever you want to validate lesson data (JSON files in the data/ folder) is pure Malayalam — across every module, every lesson, every field. Triggers on phrases like "validate Malayalam", "check lesson files", "scan for non-Malayalam", "check all modules".
compatibility: None (uses Claude's native abilities)
---

# Malayalam Content Validator

## Purpose

Ensure **all** Malayalam lesson files across **all modules** contain only Malayalam script, without accidental mixing of Tamil, Arabic, Sinhala, Khmer, or other scripts.

## Where the Data Lives

All 13 modules live in `data/` as separate JSON files:

- `data/module1-lessons.json` through `data/module13-lessons.json` — all lesson content
- `data/iso15919-reference.json` — character reference (Latin transliteration only, skip)
- `data/handwriting-geometry.json` — geometry rules (no Malayalam script content)

## How It Works

When triggered, always:

1. **Glob `data/module*-lessons.json`** — find all 13 module files
2. **Read each file** one by one
3. **Scan every content field** for non-Malayalam Unicode characters
4. **Report per module** — group findings by module number (1–13)
5. **Summarise** at the end with total issues found

## What Gets Checked

✅ **Scan these fields for non-Malayalam script:**
- `malayalam` — the character itself (most important)
- `description` — character descriptions
- `insight` — teaching insight text
- `prompt` — quiz/task prompts
- `options` — answer options shown to learner
- `heading` — step headings
- `title` — module/lesson titles that contain Malayalam inline
- `chars` — array entries
- `categoryName` — contains inline Malayalam characters
- `character` — character in handwriting tasks
- `intro` — introduction paragraphs
- `text` — option text in identification tasks
- `hint` — hint text
- `step1`, `step2`, `step3` — syllable examples
- `guidanceDescription` — handwriting guidance text

❌ **Skip these (English is expected):**
- `iso15919`, `iso` — always Latin transliteration
- `correctAnswer`, `correct`, `scaffold` — structural values
- `taskId`, `lessonId`, `id`, `category` — identifiers
- `audioPath`, `sound`, `sound1`, `sound2` — file paths
- `taskMix`, `type`, `status`, `inputMethod`, `taskType` — structural fields
- `animation`, `visualPattern` — animation descriptions

## When to Use

- **Full audit**: "Check all my lesson files for non-Malayalam script"
- **Before publishing**: "Validate all 13 modules before I push"
- **After editing**: "I just edited module 7 — check it's pure Malayalam"
- **Spot-check**: "Is there any Tamil or Arabic in my lessons?"

## Example Usage

### Check all modules
"Validate all my lesson files across every module."

### Check specific module
"Check module 9 for any non-Malayalam characters."

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

Module 3, Lesson 1.0: "Vowels: Short 'a' and Long 'ā'"
File: data/module3-lessons.json
Field: description
Script: Tamil (U+0BA4) - "த"
Context: "...Malayalam has two தமிழ் versions..."

Action: Remove or replace the Tamil character with the Malayalam equivalent.
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
