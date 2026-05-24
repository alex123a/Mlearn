# Malayalam Content Validator Skill

A native Claude skill that validates all 13 Malayalam lesson modules to ensure only Malayalam script is used — no accidental Tamil, Arabic, Sinhala, Khmer, or other scripts mixed in.

## Quick Start

Just ask Claude:

> "Validate all my lesson files for non-Malayalam script"

Claude reads every `data/module*-lessons.json` file and reports any issues.

## What It Does

- Scans all 13 module JSON files for non-Malayalam Unicode
- Reports any Tamil, Arabic, Sinhala, Khmer, or other scripts found
- Shows exact location (file, field, character, context)
- Uses Claude's native abilities — no code execution required

## Installation

Place `SKILL.md` in your Claude skills folder:

```
~/.claude/skills/validate-malayalam-content/SKILL.md
```

That's it. Claude picks it up automatically.

## Usage Examples

**Check all 13 modules:**
```
"Validate all my lesson files across every module"
```

**After editing a specific module:**
```
"I just edited module 7 — check it's pure Malayalam"
```

**Spot-check a field:**
```
"Check the 'description' fields in my lessons — make sure there's no Tamil or Arabic mixed in"
```

## How It Works

Claude:
1. Globs `data/module*-lessons.json` to find all 13 module files
2. Reads each file one by one
3. Checks content fields (`malayalam`, `description`, `insight`, `prompt`, `options`, etc.) for non-Malayalam Unicode
4. Skips non-content fields (`iso15919`, `audioPath`, `type`, identifiers, etc.)
5. Reports findings grouped by module, with a summary at the end

No Python, no complex setup, no CI/CD needed. Just Claude.

## Detected Scripts

If accidentally mixed in, the validator identifies:
- Tamil (U+0B80–0BFF)
- Arabic (U+0600–U+06FF)
- Sinhala (U+0D80–U+0DFF)
- Khmer (U+1780–U+17FF)
- Kannada, Telugu, Gujarati, Hindi
- Chinese, Japanese, Korean
- Greek, Cyrillic, Hebrew, and others

## See Also

- `SKILL.md` — Full skill documentation and field reference
- `data/module1-lessons.json` … `data/module13-lessons.json` — lesson files that get validated
