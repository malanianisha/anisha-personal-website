# Design & Engineering Portfolio

A premium, modern portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. It is designed to showcase front-end engineering craft, design systems thinking, and product case studies.

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS (v4)
- Framer Motion
- lucide-react

## Features

- Sticky, accessible navigation with consistent theming
- Dark/light mode via `next-themes`
- Premium hero, tech stack strip, featured case studies, and credibility sections
- Project detail modal with problem → solution → outcome, architecture, and tradeoffs
- Artwork gallery with masonry tiles + hover descriptions + modal viewer
- Contact form with validation states and accessible focus treatment

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Customization map

- **Projects data**: `data/projects.ts`
- **Artwork gallery**: `data/artwork.ts`
- **Site metadata + socials**: `data/siteMeta.ts`
- **Hero + homepage sections**: `app/page.tsx`
- **About page**: `app/about/page.tsx`
- **Projects page**: `app/projects/page.tsx`
- **Artwork page**: `app/artwork/page.tsx`
- **Contact page**: `app/contact/page.tsx`
- **Theme tokens + design system**: `app/globals.css`

## Assets

- Resume: `public/Anisha Malani Resume.pdf`
- Open Graph image: `public/og-image.jpg`
- Favicon: `public/favicon.svg`

## Notes

- Replace `siteConfig.url` in `data/siteMeta.ts` with your deployed URL.
- Update social links and Calendly placeholder in the Contact page.
