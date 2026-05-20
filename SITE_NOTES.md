# Site Notes

Use this file as the quick-start context for future editing sessions.

## Project

- Local repo: `/Users/paulhigham/Documents/Codex/2026-05-20/myeventvideo`
- GitHub repo: `https://github.com/judonostalgia/myeventvideo`
- Branch: `main`
- The site is a static HTML/CSS/JS build served from the repository root.

## Files

- `index.html` is the main page.
- `assets/css/styles.css` contains the site styling.
- `assets/js/main.js` contains the small navigation and portfolio modal behaviour.
- `assets/images/` contains logos, portfolio images and supporting photography.

## Deployment

- Cloudflare should deploy from the repository root.
- Recommended Cloudflare Pages settings:
  - Build command: leave blank
  - Build output directory: `.`
- `wrangler.jsonc` also points static assets at `.`.

## Workflow

- Inspect the repo before making changes.
- Make small, focused commits after each requested change.
- Do not push from terminal unless explicitly asked.
- Paul uses GitHub Desktop to push commits.

## Current Image Setup

Portfolio thumbnails use uniform portrait WebP crops:

- `assets/images/portfolio-awards.webp`
- `assets/images/portfolio-conferences.webp`
- `assets/images/portfolio-exhibitions.webp`
- `assets/images/portfolio-motion-graphics.webp`

The homepage hero background and Open Graph image currently use `assets/images/hero.webp`.
