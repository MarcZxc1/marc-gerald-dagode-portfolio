# Marc Gerald Dagode Portfolio

A responsive portfolio for Marc Gerald Dagode, a full-stack developer and
Computer Science student based in Quezon City. The homepage introduces selected
work; focused project pages explain engineering decisions and supporting evidence.

## Features

- Clean editorial layout, visible portrait, and concise project summaries
- Dark default theme with a persistent light-mode option
- Qwykz case study with a browsable CLI capture and dated npm download evidence
- Supply Chain Portal case study with an anonymized stock-concurrency regression
- Nutrimap thesis overview, with planned work distinguished from completed work
- Experience timeline and second-brain / AI workflow on About
- GitHub contribution activity with loading and failure states
- Direct email, LinkedIn, and downloadable résumé on Contact
- Keyboard focus states, responsive layouts, and reduced-motion support

## Development

Install [Bun](https://bun.sh), then run:

```sh
bun install --frozen-lockfile
bun run dev
```

Open `http://localhost:3000`. Reuse an existing development server on that port.

```sh
bun run typecheck  # Check application TypeScript
bun test           # Health and contact API tests; email calls are mocked
bun run build      # Production build, isolated in .next-build
bun run start      # Serve the production build
```

The application uses Next.js, React, TypeScript, Tailwind CSS, and semantic CSS
variables. Manrope is hosted locally; its license is in `public/fonts/`.

## Routes

| Route                    | Purpose                                              |
| ------------------------ | ---------------------------------------------------- |
| `/`                      | Introduction and selected work                       |
| `/projects`              | Project collection                                   |
| `/projects/qwykz`        | CLI walkthrough, decisions, and dated usage evidence |
| `/projects/supply-chain` | SharePoint replacement and stock-consistency case    |
| `/projects/nutrimap`     | Thesis scope, architecture, and current status       |
| `/skills`                | Technical toolkit and knowledge workflows            |
| `/about`                 | Experience, education, and working methods           |
| `/contact`               | Direct contact links and résumé                      |
| `/api/health`            | JSON health response                                 |
| `/api/contact`           | Validated email submission endpoint                  |

## Optional email configuration

The Contact page uses direct email links and needs no API key. The retained
`POST /api/contact` endpoint can send email through Resend when configured.
Copy `.env.example` to `.env.local` and set:

| Variable             | Purpose                                            |
| -------------------- | -------------------------------------------------- |
| `RESEND_API_KEY`     | Resend API key; required for API email delivery    |
| `CONTACT_EMAIL`      | Recipient; defaults to the portfolio contact email |
| `CONTACT_FROM_EMAIL` | Sender; use a verified domain for production       |

Without an API key, valid submissions return `503` with a direct-email fallback
message. Invalid submissions return `400`. Provider failures return `502`.
The endpoint includes a honeypot field and input validation; it has no rate limiter.
Tests replace the email provider with a local mock and never send real email.

## Evidence and publication boundaries

See [docs/PROJECT-EVIDENCE.md](docs/PROJECT-EVIDENCE.md) for sources, capture
methods, and verification limits. Public captures are available in
`public/evidence/`. The Qwykz walkthrough is recorded output, not a hosted CLI.
Its command can be run locally to reproduce the configuration.

The supply-chain example uses synthetic quantities and a verification summary.
It includes no internal source-code export, customer data, or application access.
Nutrimap's pilot and evaluation remain planned work.

Download counts are dated observations, not counts of active users. Content
updates should retain source URLs, reporting periods, and known limitations.
