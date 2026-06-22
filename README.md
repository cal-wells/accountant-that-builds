# The Accountant That Builds

Personal portfolio site for an FP&A Manager and qualified accountant - built to *show*, not just claim, comfort with AI and code. Four pages: Home, CV, Projects, Contact.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4** and **Framer Motion**. Deployed on **Vercel**. Contact form via **Formspree**. Analytics via **Google Analytics 4**.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in values (see below)
npm run dev                        # http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm test        # run the test suite (Vitest)
npm run lint    # ESLint
```

## Environment variables

Both are `NEXT_PUBLIC_` because they're read in the browser. Set them in `.env.local` for local dev and in the Vercel project settings for production. The site builds and runs fine with them blank - analytics no-ops and the form surfaces a "not configured" message.

| Variable | What it is | Where to get it |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID, e.g. `G-XXXXXXXXXX` | Google Analytics → Admin → Data Streams |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | The ID after `formspree.io/f/` | Formspree dashboard → your form |

## Editing content

All copy and data live in plain files - no CMS:

- **Identity, email, LinkedIn, nav** → `lib/site.ts`
- **CV (roles, qualifications, skills)** → `data/cv.ts`
- **Projects** → `data/projects.ts` (add a project by appending to the array; set `demoUrl` to show a demo link)
- **Home hero & about copy** → `app/page.tsx`

Search the project for `TODO(owner)` to find every placeholder that needs your real details before going live.

## Set up the contact form (Formspree, free tier)

1. Create a form at [formspree.io](https://formspree.io). Copy its form ID into `NEXT_PUBLIC_FORMSPREE_FORM_ID`.
2. In the form settings, **enable spam filtering** (on by default). A `_gotcha` honeypot is already wired into the form for extra bot protection.
3. After deploying, add your production domain under the form's **allowed domains / domain restriction** so the public form ID can't be abused from other sites.

Free tier covers 50 submissions/month - plenty for a portfolio.

## Set up analytics (Google Analytics 4)

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com) and add a Web data stream for your site.
2. Copy the measurement ID (`G-…`) into `NEXT_PUBLIC_GA_ID`.

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Import the repo at [vercel.com/new](https://vercel.com/new) - Vercel auto-detects Next.js, no config needed.
3. Add `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_FORMSPREE_FORM_ID` under the project's **Environment Variables**.
4. Deploy. You'll get a `*.vercel.app` URL (a custom domain can be added later).
5. **Verify in production:** all four pages load, navigation/animations work, a test contact submission arrives by email and GA registers the visit in real-time analytics.

## Accessibility & motion

Animations respect `prefers-reduced-motion` - scroll reveals and page transitions are disabled for visitors who request reduced motion.
