# BARIŞ ÇELIK — y2k / ps2 personal site

A Y2K / PS2 / 2000s-Japan aesthetic personal site. Single self-contained `index.html`
(vanilla HTML / CSS / JS, no build step, no frameworks).

## Features
- PS2-style boot loader
- Chrome + holographic display type
- A big spinning "disc" music player wired to a Nujabes Radio set (Spotify 30s previews),
  with a scrollable cover catalog
- Chrome-hex SVG project logos
- A PS2 memory-card skill loader
- Sparkle cursor, scroll reveals, count-up stats

## Run locally
Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Fonts load from Google Fonts and the music covers/previews from Spotify's CDN,
so those parts need an internet connection; everything else works offline.

## Stack
Plain HTML, CSS and JavaScript. No dependencies.
