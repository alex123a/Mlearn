# Mlearn - Malayalam Script Learning App

An interactive web application for learning the Malayalam script with lessons on character identification, handwriting, discrimination, transliteration, and review.

## Features

- 📚 Interactive lessons for learning Malayalam characters
- ✍️ Handwriting practice with canvas-based drawing
- 🎯 Character discrimination exercises
- 🔄 Transliteration practice
- 📊 Progress tracking
- 🎓 Review lessons to reinforce learning

## Project Structure

- `src/` - React TypeScript components and styles
- `data/` - Lesson content and reference data
- `public/` - Static assets
- Various `.html` files for different views (app, home, admin, standalone)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Technology Stack

- **Frontend**: React with TypeScript
- **Styling**: CSS
- **Build Tool**: Vite
- **Data Format**: JSON

## Malayalam Script Validation

This project includes a universal **Malayalam Script Validator** skill to ensure only Malayalam characters are used in the codebase.

```bash
python validate-malayalam-script/scripts/validate_malayalam.py --path .
```

See `validate-malayalam-script/README.md` for more details.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
