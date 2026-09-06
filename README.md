# Personal Website

### 🔗 Live site: **[personal-website-eta-drab-26.vercel.app](https://personal-website-eta-drab-26.vercel.app)**

The personal website and portfolio of N. Barış Çelik, Computer Engineering student
at Yıldız Teknik Üniversitesi.

Y2K / frutiger-aero aesthetic — boot sequence, chrome-gradient display type, a
CD-rack music player, animated stats, and a PS2-style memory-card skill loader —
built as a Next.js app so the site can keep growing past a single HTML file.

This branch (`nextjs`) is a from-scratch port of the original static
`index.html` (kept in this repo for reference) into Next.js, TypeScript,
Tailwind CSS and a few shadcn/ui primitives for accessible structure (mobile
nav). The visual identity — every color, animation and piece of copy — is
carried over unchanged.

## Sections
- Introduction and profile, with a rotating role line
- Project showcase with custom SVG iconography
- Experience and community involvement
- An interactive music player (50 Nujabes-radio tracks, Spotify previews)
- A PS2 memory-card skill loader
- Contact links

## Stack
Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
```

## Structure

```
app/               root layout, page composition, global styles
components/        sections, the music player, shadcn/ui primitives
content/            typed content: projects, experience, stats, tracks
hooks/              scroll-reveal, count-up, magnetic buttons, etc.
```

## Contact
- Email: nbariscelikk@gmail.com
- LinkedIn: https://www.linkedin.com/in/barış-çelik-12979a252/
- GitHub: https://github.com/bariscelikk1
