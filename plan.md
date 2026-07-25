# Portfolio Website — Abdullah Azmir

## Context

Assignment: build responsive developer portfolio, host live, meet 12 requirements (navbar, hero w/ photo+resume button, socials, about, skills, education, experience, 3+ project cards w/ detail pages, contact, footer, full responsiveness). Deadline tight (~8h). Stack locked by user: **TypeScript, Next.js, Node.js, Express.js, HeroUI, Tailwind CSS, MongoDB Atlas (native driver, no Mongoose)**. Backend serves projects data + contact form submissions. Deploy: Vercel (frontend) + Render (backend).

Repo `E:\Projects\portfolio-azmir` is empty (no commits, no files) — building from scratch.

## Architecture

Monorepo, two apps:

```
portfolio-azmir/
├── client/          Next.js (TS) + Tailwind + HeroUI — frontend
├── server/          Express (TS) + MongoDB Atlas native driver — API
└── README.md
```

**client** (Next.js App Router, TypeScript, Tailwind, HeroUI)
- Single-page scroll layout (`/`) with sections: Navbar, Hero, About, Skills, Education, Experience, Projects, Contact, Footer
- Dynamic route `/projects/[id]` — project detail page (tech stack, description, live link, GitHub client link, challenges, future plans)
- Fetches project list from `server` API; contact form POSTs to `server` API
- `.env.local`: `NEXT_PUBLIC_API_URL`

**server** (Express, TypeScript, MongoDB Atlas native `mongodb` driver)
- `GET /api/projects` — list all projects
- `GET /api/projects/:id` — single project detail
- `POST /api/contact` — save contact message to `contacts` collection
- `scripts/seed.ts` — one-time seed of 3 projects into Atlas from content below
- `.env`: `MONGODB_URI`, `PORT`, `CLIENT_ORIGIN` (CORS)

## Content (from user, placeholders marked TODO — fill before submission)

- **Name/Designation:** Abdullah Azmir — Full-Stack Web Developer
- **About:** Mechanical Engineering background, self-taught web dev journey, enjoys problem-solving/learning/knowledge-sharing
- **Skills:** Frontend (HTML5, CSS3, Tailwind, JS ES6+, React, Next.js, React Router, TanStack Query, DaisyUI, HeroUI), Backend (Node.js, Express.js, REST API, JWT, Better Auth), Database (MongoDB, Firebase), Tools (Git, GitHub, VS Code, Postman, Vercel, Netlify, npm)
- **Education:** B.Sc. Mechanical Engineering, KUET — TODO: year
- **Experience:** Axis Safety Engineering (Sales & Service Engineer, 2026–Present), Hadid Global Ltd (Procurement Manager, 2025–2026), Meghna Sugar Refinery Ltd (Assistant Engineer, 2019–2024)
- **Projects (3):** House Rent Management System, Law Firm Management Website, Fire Safety E-Commerce Website — descriptions/tech stack as given; TODO: GitHub client links, live demo links
- **Contact:** TODO email, phone, WhatsApp (location: Bangladesh)
- **Social links:** TODO GitHub/LinkedIn/X/Facebook URLs
- **Assets:** `client/public/profile.jpg`, `client/public/resume.pdf` — user provides files, drop into `public/`
- **Theme:** Primary `#2563EB` blue, slate gray secondary, cyan accent, clean/minimal/modern, light+dark mode, responsive

## Build Steps

1. **Scaffold**
   - `client`: `create-next-app` (TS, Tailwind, App Router, ESLint), install HeroUI + `framer-motion` (HeroUI peer dep), install `next-themes` for dark/light toggle
   - `server`: `npm init`, TypeScript config, install `express`, `mongodb`, `cors`, `dotenv`; dev deps `typescript`, `ts-node-dev`, `@types/*`

2. **Server**
   - `src/db.ts` — MongoDB Atlas client singleton (native driver, `MongoClient`)
   - `src/routes/projects.ts`, `src/routes/contact.ts`
   - `src/index.ts` — Express app, CORS restricted to `CLIENT_ORIGIN`, JSON body parsing, mount routes
   - `scripts/seed.ts` — insert 3 projects (run once via `ts-node scripts/seed.ts`)
   - Basic input validation on `POST /api/contact` (required fields, email format) — boundary input, not paranoia

3. **Client — components**
   - `Navbar` — responsive (HeroUI Navbar or custom w/ mobile drawer), links to all sections, sticky
   - `Hero` — designation, photo (`next/image`), resume download button (`<a href="/resume.pdf" download>`), social icon buttons
   - `About`, `Skills` (grouped cards/badges), `Education`, `Experience` (timeline or cards)
   - `Projects` — grid of cards (image, name, "View More" → `/projects/[id]`), fetched from API
   - `ProjectDetail` (`/projects/[id]/page.tsx`) — tech stack, description, live link, GitHub client link, challenges, future plans
   - `Contact` — form (name/email/message) POSTs to server API, shows success/error state; email/phone/WhatsApp displayed directly too
   - `Footer` — simple, socials + copyright
   - Dark/light mode toggle via `next-themes`

4. **Styling**
   - Tailwind config: primary/secondary/accent theme colors from spec
   - Mobile-first responsive breakpoints throughout; test at 375px/768px/1024px/1440px

5. **Deployment**
   - `server` → Render (Node service), env vars `MONGODB_URI`, `CLIENT_ORIGIN`
   - `client` → Vercel, env var `NEXT_PUBLIC_API_URL` pointing at Render URL
   - Verify live link loads, API calls succeed cross-origin (CORS)

## Remaining inputs needed from user before/during build
- Resume PDF file + profile photo file (paths to copy into `client/public/`)
- Education year; contact email/phone/WhatsApp; social profile URLs; project GitHub client repo links + live demo links (or leave "Coming Soon" placeholders and mark clearly)

## Verification
- `npm run dev` both apps locally, click through every section/navbar link, resize to mobile/tablet/desktop
- Submit contact form → confirm document appears in MongoDB Atlas `contacts` collection
- Click each project "View More" → detail page renders correct data
- Click resume button → downloads/opens PDF
- After deploy: open live Vercel URL fresh (incognito), repeat click-through, confirm API calls to Render succeed (no CORS errors in console)
