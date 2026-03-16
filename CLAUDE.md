# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Type-check (astro check) then build to ./dist/
npm run preview   # Preview the built site locally
```

There are no test or lint commands configured beyond the type-check in `build`.

## Architecture

This is a single-page **Astro 4** portfolio site with **Tailwind CSS** and **TypeScript** (strict mode).

- `src/pages/index.astro` — the only page; renders all portfolio sections
- `src/layouts/Layout.astro` — root HTML shell (dark theme, Onest font, `lang="es"`)
- `src/components/` — section components (`Experience`, `Projects`, `About`, etc.) and UI primitives (`Badge`, `Card`, `SocialPill`, etc.)
- `src/icons/` — SVG icon components for tech stack and social links
- `src/helpers/projects.ts` — project data and tag definitions (source of truth for project cards)
- `public/` — static assets: favicon, CV PDF, project images

### Data Flow

Project data lives in `src/helpers/projects.ts` and is imported by `Projects.astro`. Icons are standalone `.astro` components imported individually where needed.

### Styling

Dark theme using Tailwind utility classes with custom hex colors (`bg-[#0a0a0a]`, etc.) and yellow accents (`text-yellow-200`). Custom Tailwind grid templates `auto-fill-300` and `auto-fit-300` are defined in `tailwind.config.mjs`. The font is `Onest Variable` from `@fontsource-variable/onest`, loaded globally in `Layout.astro`.
