# Giselle Pacheco — Portfolio

Next.js (App Router) · TypeScript · CSS Modules

    npm install
    npm run dev      # http://localhost:3000
    npm run build

## Where to edit content
All copy lives in `src/data/`. Add a project by adding an object to `projects.ts`
(put screenshots in `public/projects/` and set `imageSrc`).

## Structure
- `src/app/` – layout, page, global tokens (colors, fonts, theme)
- `src/components/sections/` – one component per page section
- `src/components/ui/` – small reusable pieces (Icon, Reveal, Button, ...)
- `src/data/` + `src/types/` – typed content
