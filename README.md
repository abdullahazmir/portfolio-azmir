# Portfolio — Abdullah Azmir

Full-stack developer portfolio. Next.js + TypeScript + Tailwind + HeroUI frontend, Express + TypeScript + MongoDB Atlas backend.

## Structure

```
client/   Next.js app (frontend)
server/   Express API (projects + contact form)
```

## Local development

**Server**

```bash
cd server
cp .env.example .env   # fill in MONGODB_URI
npm install
npm run seed            # one-time: populates the projects collection
npm run dev              # http://localhost:5000
```

**Client**

```bash
cd client
npm install
npm run dev              # http://localhost:3000
```

`client/.env.local` should contain:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Before submitting

Replace these placeholders:

- `client/public/profile.jpg` — your real photo
- `client/public/resume.pdf` — your real resume
- `client/src/lib/content.ts` — contact email/phone/WhatsApp, social links, education year
- `server/scripts/seed.ts` — project `liveLink` / `githubClientLink` once available, then re-run `npm run seed`

## Deployment

- **Client** → Vercel. Set env var `NEXT_PUBLIC_API_URL` to the deployed server URL.
- **Server** → Render (Node service). Set env vars `MONGODB_URI` and `CLIENT_ORIGIN` (the deployed client URL). Build command `npm run build`, start command `npm start`.
