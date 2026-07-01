# Instagram Downloader - Chrome Extension

Download Instagram photos, videos, stories, reels, and highlights directly in your browser. A free and open-source Chrome extension with no ads.

## Features

- Download **Instagram photos & videos** from feed, profile, and post detail pages
- Download **Instagram Stories** before they disappear
- Download **Instagram Reels** with original quality
- Download **Instagram Highlights**
- Download **Threads** media (photos & videos)
- **ZIP download** — download all media from a multi-image/video post as a ZIP file
- **Open in new tab** — preview media before downloading
- **Custom filename format** — use `{username}`, `{id}`, `{datetime}`, `{type}` tags
- **Video controls** — enable native browser controls on Instagram videos
- **Dark mode support** — button icons adapt to color scheme
- **Privacy-first** — no tracking, no analytics, no ads, open source

## Installation

### Chrome Web Store (recommended)

1. Go to the [Chrome Web Store page]()
2. Click **Add to Chrome**

### Manual installation (developer mode)

1. Download the latest `dist/chrome.zip` from [Releases](https://github.com/chunsal/instagram-downloader-chromium/releases)
2. Extract the ZIP file
3. Open `chrome://extensions/` in Chrome
4. Enable **Developer mode** (top right)
5. Click **Load unpacked** and select the extracted folder

## Usage

After installation, visit any Instagram or Threads page. Download buttons will appear next to the like/share buttons on posts, stories, reels, and profile pages.

### Buttons

| Button | Action |
|--------|--------|
| ⬇️ Download | Downloads the media directly |
| 📂 Open in new tab | Opens the media in a new tab |
| 📦 ZIP download | Downloads all media in a post as ZIP |

## Build from source

```bash
npm install
npm run build
```

Build output is in `dist/chrome/`. Load as unpacked extension in Chrome.

## Tech Stack

- **Preact** — UI (popup settings)
- **TypeScript** — type-safe codebase
- **esbuild** — fast bundler
- **zip.js** — client-side ZIP generation
- **dayjs** — date formatting

## License

MIT License. See [LICENSE](./LICENSE).
