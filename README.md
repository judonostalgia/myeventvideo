# My Event Video

Clean static rebuild for [myeventvideo.com](https://myeventvideo.com/).

## Structure

- `index.html` is the deployable website entry point.
- `assets/` contains the current CSS, JavaScript, brand images and portfolio assets.
- `robots.txt` and `sitemap.xml` are served from the site root.

## Local Preview

Open `index.html` directly in a browser, or serve the repository root with any simple static web server.

## Deployment Target

The intended deployment target is Cloudflare Pages connected to GitHub.

Recommended Cloudflare Pages settings:

- Build command: leave blank
- Build output directory: `/`

Cloudflare Workers static assets are configured in `wrangler.jsonc`.
