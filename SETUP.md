# AV Contracts Website — Setup Guide

## Stack
- **Next.js 16** (App Router)
- **Tailwind CSS** (styling)
- **Sanity CMS** (blog articles — client manages this)
- **FormSubmit** (contact form — no backend needed)
- **Vercel** (hosting)

---

## Step 1 — Create Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and create a free account
2. Create a new project named `av-contracts`
3. Choose dataset name: `production`
4. Copy your **Project ID** from the project settings

---

## Step 2 — Set Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Fill in:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## Step 3 — Run Locally

```bash
npm install
npm run dev
```

- Website: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

---

## Step 4 — Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
4. Deploy — Vercel builds automatically on every push

---

## Step 5 — Give Client Access to Sanity Studio

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project → Members
3. Invite the client's email with **Editor** role
4. Client logs into: `https://yoursite.com/studio`

---

## How the Client Publishes Articles

1. Go to `yoursite.com/studio`
2. Log in with her Sanity account
3. Click **Artikull** → **+ New**
4. Fill in:
   - Titulli (Title)
   - Slug (auto-generated from title)
   - Kategoria (Category)
   - Foto Kryesore (Cover image)
   - Përmbledhje e shkurtër (Short excerpt)
   - Përmbajtja (Body content — rich text editor)
5. Click **Publish**
6. Article appears live on the website immediately

---

## Contact Form

The contact form uses **FormSubmit.co** — completely free, no backend.
Submissions go directly to: `av.contracts.ks@gmail.com`

No setup needed — works out of the box.

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Kryefaqja | `/` | Homepage with hero, services, values |
| Shërbimet | `/sherbimet` | Full services list (6 categories) |
| Artikuj | `/blog` | Blog listing |
| Kontakt | `/kontakt` | Contact form + info |
| Studio | `/studio` | Sanity CMS (client only) |

---

## Colors (Brand)
- Dark navy: `#1a1f2e` / `#2d3440`
- Gold: `#b8976a`
- Cream text: `#f0e6d3`
