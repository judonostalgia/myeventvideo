# My Event Video

Clean static rebuild for [myeventvideo.com](https://myeventvideo.com/).

## Structure

- `site/` contains the new deployable website.
- The original downloaded template files are still present in the repository root for reference while the rebuild is in progress.
- `site/assets/images/` contains only the current useful brand and portfolio assets.

## Local Preview

Open `site/index.html` directly in a browser, or serve the `site` folder with any simple static web server.

## Deployment Target

The intended deployment target is Cloudflare Pages connected to GitHub.

Recommended Cloudflare Pages settings:

- Build command: leave blank
- Build output directory: `site`
