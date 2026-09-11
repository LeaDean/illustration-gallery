# Illustrations

A calm, single-page illustration gallery built with **Vite + React + TypeScript**. Drop images into a folder, list them in a data file, and they appear in a responsive grid with a keyboard-accessible lightbox.

## How to run

```bash
cd illustration-gallery
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview   # optional local preview of the build
```

## How to add illustrations

1. Put your image files in `public/illustrations/`  
   (JPG, PNG, WebP, SVG, etc. are fine.)

2. Open `src/data/illustrations.ts` and add an entry:

```ts
{
  id: 'my-piece',
  title: 'My Piece',
  description: 'Optional short note.',
  src: '/illustrations/my-piece.jpg',
  // omit placeholder, or set placeholder: false
},
```

3. Save — with `npm run dev` running, the gallery updates automatically.

You can remove or keep the six placeholder entries. Placeholders are clearly labeled in the UI (`placeholder: true`).

## How to change the site title

1. **Page heading:** edit `SITE_TITLE` in `src/App.tsx`.
2. **Browser tab title:** edit the `<title>` in `index.html`.

Optionally update the short intro paragraph under the heading in `src/App.tsx`.

## Project structure

```
illustration-gallery/
├── public/
│   └── illustrations/     # image files live here
├── src/
│   ├── components/
│   │   ├── Gallery.tsx
│   │   └── Lightbox.tsx
│   ├── data/
│   │   └── illustrations.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── README.md
```

## Notes

- No backend — everything is static.
- Lightbox: click a card to enlarge; press **Escape** to close; focus is trapped while open.
- Light dependencies only (React + Vite).
