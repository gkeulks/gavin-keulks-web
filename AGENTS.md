# gavinkeulks.com

Personal / professional site for Gavin Keulks, Professor of Literature and Film
at Western Oregon University. Built with Astro; deployed to Cloudflare Pages at
**gavinkeulks.com** (auto-deploy on push to `main`).

This is a **separate project** from the Martin Amis Web. It shares that project's
working conventions — Astro, self-hosted fonts, Pagefind search, the same verify
loop and editorial standards — but has its own repo, domain, and design system.

## What this site is

Replaces the current WordPress page at `wp.wou.education/keulksg/`, preserving its
material (biography, publications, teaching, consulting) and adding:

- **Irish Traumatic Spaces** — ~50 of Gavin's own photographs of place, toward a
  future scholarly monograph. His images, his rights; the book is not yet written.
- **Creative Work** — the novel *Flight* (targeted for publication 2027–28) and
  published poems.

Class material may be added to Teaching later; the information architecture is
built so that can slot in without restructuring.

## Design system (first pass, Sept 2026)

- Type: **Newsreader** (variable, optical sizes) for display and body; **Inter**
  (variable) for UI labels and navigation.
- Colour: near-monochrome, warm-neutral paper, one restrained teal-green accent.
  Colour is meant to come from the photographs, not the chrome.
- Light header with a hairline rule (not a dark masthead — that's the MA Web).
- Three-tier theming in `src/styles/global.css`: `:root` light,
  `prefers-color-scheme: dark`, and `[data-theme]` overrides.

## Development

```
npm run dev
```

`npm run build` runs `astro build` then `pagefind --site dist` (postbuild).

## Structure

- `src/data/nav.ts` — section list; each has a `live` flag. Placeholder sections
  (`live: false`) render via the `src/pages/[slug].astro` dynamic route. When a
  section gets real content, give it its own file and flip `live: true`.
- `src/layouts/Layout.astro` — the single layout.
- `src/components/` — `SiteHeader`, `SiteFooter`, `SectionPlaceholder`.

## Documentation

Full docs: https://docs.astro.build — routing, components, content collections,
styling.
