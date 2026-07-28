# Marc Dagode — Portfolio

A GitHub-inspired, resume-style portfolio built with Next.js 16, TypeScript,
Tailwind CSS v4, and Bun.

## Run locally

```bash
bun install
bun run dev
```

Useful checks:

```bash
bun test
bun run typecheck
bun run build
```

## Enable the contact form

The form uses the Resend REST API directly from `app/api/contact/route.ts`, so
no additional email package is required.

1. Create a Resend account and API key at <https://resend.com>.
2. Copy `.env.example` to `.env.local`.
3. Add the API key to `RESEND_API_KEY`.
4. Set `CONTACT_EMAIL` to the inbox that should receive portfolio messages.
5. For production, verify a sending domain in Resend and update
   `CONTACT_FROM_EMAIL` to an address on that domain.
6. Add the same environment variables in the deployment provider.

Until the API key is configured, the form displays a helpful fallback and the
direct `mailto:` link remains available.

## Content

Portfolio content is centralized in `lib/portfolio-data.ts`. Update project,
skills, profile, and timeline information there instead of duplicating it
across pages.
