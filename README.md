# Marc Dagode Portfolio

A compact, A4-inspired portfolio and web résumé for Marc Gerald Dagode. It
presents selected projects, technical skills, education, leadership, and civic
involvement without turning the homepage into a long landing page.

> The live deployment URL will be added after launch.

<!--
After deployment, save a screenshot as docs/portfolio-preview.png and replace
this comment with:

![Marc Dagode portfolio preview](docs/portfolio-preview.png)
-->

## Features

- A4-inspired résumé layout with focused secondary pages
- GitHub-dark default theme with persistent light mode
- Responsive mobile and printable layouts
- Selected project case summaries and verified Qwykz metrics
- Dedicated Work, Toolkit, About, and Contact pages
- Contact form with validation, spam protection, and direct-email fallback
- Browser favicon, web-app manifest, and social-sharing metadata
- Keyboard-visible focus states and reduced-motion support

## Technology

| Area | Tools |
| --- | --- |
| Framework | Next.js 16, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, semantic CSS tokens |
| Runtime and package manager | Bun |
| Validation | Zod |
| Email delivery | Resend REST API |

## Pages

| Route | Purpose |
| --- | --- |
| `/` | A4-style portfolio résumé |
| `/projects` | Extended project details |
| `/skills` | Full technical toolkit |
| `/about` | Background, education, and leadership |
| `/contact` | Contact form and direct email |

## Quality checks

```bash
bun test
bun run typecheck
bun run build
```

## Configure email delivery

The contact route calls the Resend REST API directly, so it does not require an
additional email package.

1. Create a Resend account and API key at <https://resend.com>.
2. Copy `.env.example` to `.env.local`.
3. Add the API key and recipient information:

```env
RESEND_API_KEY=re_your_api_key
CONTACT_EMAIL=you@example.com
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

For production, verify a sending domain in Resend and replace the onboarding
sender with an address on that domain. If Resend is not configured, the direct
email link remains available.

## Deploy to Vercel

Connect the GitHub repository to Vercel and select the **Next.js** framework
preset.

Recommended build settings:

| Setting | Value |
| --- | --- |
| Root Directory | Repository root |
| Build Command | `next build` |
| Output Directory | Next.js default |
| Install Command | Automatic |

The committed `bun.lock` file lets Vercel detect Bun and install dependencies
without a custom Install Command.

Add these variables under **Project Settings → Environment Variables**:

```env
RESEND_API_KEY
CONTACT_EMAIL
CONTACT_FROM_EMAIL
```

Apply them to Production and Preview environments as needed, then redeploy.

## Update portfolio content

Profile information, projects, skills, résumé entries, and scholarship details
are centralized in [`lib/portfolio-data.ts`](lib/portfolio-data.ts). Update that
file instead of duplicating content across pages.

The durable visual direction is documented in
[`docs/UI-PREFERENCES.md`](docs/UI-PREFERENCES.md).
