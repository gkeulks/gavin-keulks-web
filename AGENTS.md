# gavinkeulks.com

Gavin Keulks's professional site — writer and scholar. Astro, deployed to
**Cloudflare Workers** at **gavinkeulks.com**.

Separate project from the Martin Amis Web: its own repo, domain, and design
system. It shares that project's working conventions (Astro, self-hosted fonts,
Pagefind, the same verify loop and editorial standards).

**Every push to `main` publishes to the live site.** Workers Builds auto-deploys
in about 1–2 minutes. There is no staging. Commit accordingly.

## Status

All eight sections are built and live; there are no placeholders left. The site
replaced the WordPress page at `wp.wou.education/keulksg/`, preserving its
material and adding the sections below.

- **Home** — portrait, lede, and a single-column index of the sections.
- **About** — bio, Key Appointments and Service, Select Grants and Awards, CV.
- **Books** — the three books, newest first, with covers.
- **Scholarship** — chapters, essays, and the Martin Amis Web, grouped by theme.
- **Fieldwork** — Gavin's own site-based photographs, for a book he is writing on
  the reclamation of traumatic spaces in Ireland. **The photographs are not yet
  uploaded** — the page is currently text only. His images, his rights.
- **Creative Work** — the novel *Flight* (under agent review) and published poems.
- **Consulting** — external program review, assessment, and curricular reform.
- **Teaching** — course list. Header reads *Teaching Portfolio*; nav says
  *Teaching*. That split is deliberate, ruled by Gavin.

Plus a custom 404. **Contact was retired** — it is folded into the footer, and
`/contact/` 301s to `/`. Class material may be added to Teaching later; the IA is
built so that can slot in without restructuring.

## Design system

Chosen Sept 2026 from three built preview directions ("Review + Field" hybrid).
Positioning: understate the professorship, lead with writer/scholar.

- **Type:** **Spectral** (`@fontsource/spectral`) for display *and* body; **Inter**
  (`@fontsource-variable/inter`) for nav, small UI labels, eyebrows.
- **Colour:** true monochrome — `--color-accent` *is* the ink. Cool-bone
  `#faf8f4` on ink `#1a1a17` (light); cream `#ece7dc` on warm near-black `#15140f`
  (dark). Colour is meant to come from the photographs, not the chrome.
- **Layout:** one book-like column. `--content-width: 50rem`,
  `--page-width: 53rem`; `--page-width-wide: 78rem` reserved for the Fieldwork
  gallery. Header, nav, content and footer share one left edge.
- **Theming:** three tiers in `src/styles/global.css` — `:root` light,
  `prefers-color-scheme: dark`, and `[data-theme]` overrides. Never give a colour
  its only definition inside a media query.
- **Footer:** three columns (Contact / Address / Elsewhere) plus a colophon. The
  column *trio* centres on the page, but each column's own text stays flush left
  so the address keeps its left edge. Colophon centres on the same axis as the
  pages' centred CV lines. Columns stack full-width below 34rem.
- **Content-page pattern:** `Layout` + `.wrap` + `header.page-head` (h1 +
  `.page-intro`), and where a page carries one, a centred `.cv-line` at the foot.

## Development

```
npm run dev -- --port 4323
```

Port 4323 avoids the Martin Amis Web's 4321. `.claude/launch.json` defines this
as `gavinkeulks-dev`. **Stop the dev server at close-out.**

`npm run build` runs `astro build` then `pagefind --site dist` (postbuild).
Pagefind only exists after a full build — it never works under `astro dev`.

**The dev server can lie about CSS.** When a style appears not to apply, build and
check `dist/` before "fixing" it.

## Editorial rules

- **Voice:** first person. Gavin is the authority on all biographical and
  bibliographic content — never invent facts, citations, dates, or page numbers.
- **HTML entities only** in `.astro` prose: `&rsquo; &ldquo; &rdquo; &mdash;
  &ndash;` — never raw Unicode curly punctuation. Use `&nbsp;` to hold phrases
  together across line breaks.
- **External links open in a new tab:** `target="_blank"` plus
  `rel="noopener noreferrer"`. Internal links and `mailto:` stay in-tab.
- **No email addresses in the served markup.** The footer assembles them at
  runtime from pieces; keep it that way.
- **Astro eats whitespace at inline-tag boundaries.** A line break sitting
  against `<em>`, `<a>` or `<strong>` is deleted, silently joining words. Keep one
  word attached to the tag, or use `{' '}`. Verify after every build:

```
grep -rEo '.{0,10}[A-Za-z0-9;]<(a|em|strong|i|b)[ >]' dist --include='*.html' | grep -vE '&nbsp;<a |&ldquo;<em '
```

## Verify loop

Required for any content or markup edit: read → edit → `npm run build` →
whitespace scan → asset check → desktop (~1280) *and* mobile (375, including the
hamburger) in light *and* dark → commit → push → confirm live.

Check wrap points by reading the *rendered* lines, not by eye or by line count —
walk the text nodes taking a `Range` rect per character and group by rounded
`top`. Gavin is sensitive to column alignment and line breaks.

## Structure

- `src/pages/` — one file per section, plus `404.astro`. `[slug].astro` is the
  placeholder route; every section is now `live: true`, so it generates nothing.
  Left in place for any future placeholder.
- `src/data/nav.ts` — section list with a `live` flag per entry.
- `src/layouts/Layout.astro` — the single layout.
- `src/components/` — `SiteHeader`, `SiteFooter`, `SectionPlaceholder`.
- `src/styles/global.css` — tokens and base typography.
- `public/_headers` — HSTS, CSP, nosniff, X-Frame-Options, Referrer-Policy,
  Permissions-Policy, COOP, immutable `/_astro/*`.
- `public/_redirects` — `/spatial-trauma/` → `/fieldwork/`, `/contact/` → `/`.
- `wrangler.jsonc` — Workers Static Assets. `not_found_handling: "404-page"` is
  what makes the custom 404 reachable; Workers' default never serves it.
- `_edits.md` (gitignored) — Gavin's editorial scratch file. He types under
  per-page headings and says "go".
- `_incoming/` (gitignored) — source material he supplies.

`CLAUDE.md` is a symlink to this file. Edit **`AGENTS.md`**; both are tracked.

## Documentation

Full docs: https://docs.astro.build
