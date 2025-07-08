# Shubh Gupta Portfolio

A polished, end-to-end developer portfolio built with Next.js, React, Tailwind CSS, and Framer Motion. Showcases 15 impactful projects, a downloadable résumé, and modern web best practices.

## Features
- **Landing Page**: Hero section with profile, bio, and social links
- **Projects Gallery**: 15 project cards with images, titles, and summaries
- **Project Detail Pages**: In-depth descriptions, tech stack badges, repo/demo links
- **Resume Page**: Embedded PDF and download button
- **REST API**: `/api/projects` and `/api/projects/[id]` serve project data
- **Optimized & Animated**: Next.js `<Image>`, Framer Motion, and responsive design
- **SEO & Deployment**: `<Head>` metadata, `sitemap.xml`, `robots.txt`, Vercel-ready
- **Dark Mode**: Toggle in Navbar

## Routes
- `/` — Landing page
- `/projects` — Projects gallery
- `/projects/[id]` — Project detail
- `/resume` — Résumé view/download
- `/api/projects` — All projects (JSON)
- `/api/projects/[id]` — Single project (JSON)
- `/sitemap.xml` — Dynamic sitemap

## Getting Started
1. `yarn install`
2. `yarn dev`

## Deployment
- Deploy to [Vercel](https://vercel.com/) for best results
- Set `NEXT_PUBLIC_BASE_URL` in environment for correct sitemap/SEO

---

© Shubh Gupta
