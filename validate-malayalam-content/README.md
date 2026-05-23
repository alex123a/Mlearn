# Malayalam Content Validator Skill

Simple, native Claude skill to validate that your Malayalam lesson files only contain Malayalam script.

## Quick Start

Just ask Claude:

> "Check my lesson files for non-Malayalam script"

Claude will read your `data/` files and verify the content.

## What It Does

✅ Scans lesson JSON files for non-Malayalam Unicode  
✅ Reports any Tamil, Arabic, Sinhala, Khmer, or other scripts found  
✅ Shows exact location (file, field, character)  
✅ Uses Claude's native abilities (no code execution)  

## Installation

1. Copy this folder to your Claude Code project
2. In Claude Code, run: `/skill-install ./validate-malayalam-content/SKILL.md`
3. Done!

## Usage Examples

**Check all lessons:**
```
"Validate that my data/module1-lessons.json only has Malayalam script"
```

**Check specific field:**
```
"Check the 'description' fields in my lessons - make sure there's no Tamil or Arabic mixed in"
```

**After editing:**
```
"I just edited lesson 1.2. Can you verify it's pure Malayalam?"
```

## How It Works

Claude:
1. Reads your JSON lesson files
2. Extracts text content
3. Checks for non-Malayalam Unicode characters
4. Reports findings with context

No Python, no complex setup, no CI/CD needed. Just Claude.

## Detected Scripts

If accidentally mixed in, the validator identifies:
- Tamil, Kannada, Telugu, Gujarati, Punjabi
- Arabic, Hebrew
- Sinhala, Khmer
- Chinese, Japanese, Korean
- Greek, Cyrillic, and others

## See Also

- `SKILL.md` - Full skill documentation
- `data/module1-lessons.json` - Your lesson files (what gets validated)
