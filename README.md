# Ifeanyi Anago & Co. — Website

A fully responsive Next.js 16 website built with Tailwind CSS and TypeScript.

## Quick Start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build & Deploy

```bash
npm run build   # production build
npm start       # start production server
```

## Project Structure

```
src/
├── app/                    # All pages (App Router)
│   ├── layout.tsx
│   ├── page.tsx            # Homepage
│   ├── about/
│   ├── practice-areas/[slug]/
│   ├── services/
│   ├── team/
│   ├── insights/
│   ├── contact/
│   ├── privacy-policy/
│   ├── disclaimer/
│   └── cookie-policy/
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Homepage sections
│   └── ui/                 # Reusable components
└── data/
    └── siteData.ts         # ALL site content lives here
```

## Customisation

### Content
Edit `src/data/siteData.ts` to update team members, practice areas, services, insights, and stats.

### Images
Add images to `public/images/`:
- `hero-bg.jpg` — homepage hero (1920x1080)
- `team/[name].jpg` — team portraits

### Contact Form
Wire `src/app/contact/ContactClient.tsx` to a backend.
Recommended: [Resend](https://resend.com) or [Formspree](https://formspree.io).

### Google Maps
Replace the map placeholder in `ContactClient.tsx` with a Google Maps `<iframe>` embed.

### Analytics
Add Google Analytics via `@next/third-parties` or a `<script>` tag in `layout.tsx`.

## Design Tokens

| Color | Hex | Use |
|-------|-----|-----|
| `charcoal` | #1A1A1A | Primary text, nav |
| `iac-gold` | #8C7320 | Brand gold, links |
| `brass` | #C49A3C | Buttons, accents |
| `slate` | #2C2C3A | Dark backgrounds |
| `linen` | #FAF8F4 | Light backgrounds |
| `graphite` | #5A5A5A | Body text |

Fonts: **Playfair Display** (headings) + **Inter** (body)

## Deploy to Vercel

```bash
npx vercel
```

© Ifeanyi Anago & Co. All rights reserved.
