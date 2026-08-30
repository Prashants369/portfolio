# Prashant Sagathiya — Portfolio

Personal site for **Prashant Sagathiya** — environment artist, game designer, and full-stack / AI developer.

Live source: [github.com/Prashants369/portfolio](https://github.com/Prashants369/portfolio)

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 4
- Motion (Framer Motion)
- React Router

## Run locally

```bash
pnpm install
pnpm dev
```

App runs at `http://localhost:3000`.

```bash
pnpm build    # production build
pnpm preview  # preview dist
pnpm lint     # tsc --noEmit
```

## Content

Project copy, resume bullets, and galleries live in `src/data.ts`.  
Screenshots live in `public/projects/`.

Persona switcher (3D / AI / Full) filters work and the resume.

## Deploy

Connected to **Vercel** from this GitHub repo. Push to `main` to ship.

`vercel.json` rewrites unknown routes to `index.html` so `/project/:id` and `/resume` work on refresh.
