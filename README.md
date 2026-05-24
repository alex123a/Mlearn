# Mlearn - Malayalam Script Learning App

An interactive web application for learning the Malayalam script, with lessons on character identification, handwriting, discrimination, transliteration, and review.

## Live Demo

**https://alex123a.github.io/Mlearn/**

## Features

- 📚 13 modules covering the full Malayalam script
- ✍️ Handwriting practice with canvas-based drawing
- 🎯 Character discrimination exercises
- 🔄 Transliteration practice
- 📊 Progress tracking
- 🎓 Review lessons to reinforce learning

## Project Structure

```
data/
  module1-lessons.json      ← Module 1 lesson content
  module2-lessons.json      ← Module 2 lesson content
  ...
  module13-lessons.json     ← Module 13 lesson content
  iso15919-reference.json   ← Full character reference
  handwriting-geometry.json ← Handwriting geometry rules

src/                        ← React/TypeScript components (legacy)
public/                     ← Static assets

app.html                    ← Main standalone app (all 13 modules via fetch)
home.html                   ← Home/landing page
admin.html                  ← Admin view
standalone.html             ← Standalone lesson view

validate-malayalam-content/ ← Claude skill for content validation
.github/workflows/          ← GitHub Actions deploy workflow
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open **http://localhost:5173/app.html** — the dev server serves `app.html` and
all `data/` JSON files correctly via relative paths.

> Note: `http://localhost:5173/` redirects automatically to `app.html`.

## Deployment

The app deploys automatically to GitHub Pages on every push to `main` via
`.github/workflows/deploy.yml`. It copies `app.html` and the `data/` folder
into a `_site/` directory and publishes it.

To deploy manually: push any commit to `main`.

## Technology Stack

- **Main app**: Vanilla HTML/CSS/JS (`app.html`) — no build step required
- **Fonts**: Google Fonts (DM Sans, Noto Sans Malayalam, Literata)
- **Data**: JSON (one file per module, fetched at runtime via `Promise.all`)
- **Deployment**: GitHub Actions → GitHub Pages
- **Legacy React app**: React + TypeScript + Vite (in `src/`)

## Malayalam Script Validation

This project uses a Claude skill to validate that lesson content only contains
Malayalam Unicode — no accidental Tamil, Arabic, Sinhala, Khmer, or other scripts.

Just ask Claude (in any session in this project):

> "Validate all my lesson files for non-Malayalam script"

The skill reads all 13 `data/module*-lessons.json` files and reports any issues.
See `validate-malayalam-content/SKILL.md` for full documentation.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
