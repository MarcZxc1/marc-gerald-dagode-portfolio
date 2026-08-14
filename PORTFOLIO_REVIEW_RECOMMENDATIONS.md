# Portfolio Review Recommendations

Reviewed: 2026-07-28  
Live deployment: <https://marc-dagode-portfolio.vercel.app/>

## Overall Verdict

The portfolio is already strong enough to include in applications. Its visual
direction is restrained, coherent, and more credible than a generic animated
student portfolio.

The main opportunity is not a visual redesign. The portfolio should present
stronger engineering evidence sooner and position Marc more precisely as a
backend-first full-stack developer who builds reliable developer tools,
security-conscious systems, and carefully scoped AI features.

## What Already Works

- Deliberate GitHub-inspired visual direction without feeling like a template.
- Clear desktop hierarchy and a compact résumé-style presentation.
- Responsive design, dark and light themes, print styles, visible focus states,
  and reduced-motion support.
- Selective project presentation instead of an unfocused coursework archive.
- Concrete Qwykz usage evidence.
- Security-specific DiffGuard details such as webhook signature verification
  and hybrid deterministic/LLM analysis.
- Clear availability, location, contact information, education, and leadership.
- TypeScript checking passes and the existing tests pass.

## Priority 0 — Fix Before Promoting the Portfolio Widely

### 1. Correct the public metadata URL

`app/layout.tsx` uses `https://marczxc1.dev` as `metadataBase`, but that domain
does not currently resolve. The live Open Graph and Twitter image URLs
therefore point to an unavailable domain.

Recommended action:

- Use `https://marc-dagode-portfolio.vercel.app` until the custom domain is
  configured.
- If `marczxc1.dev` is the intended permanent domain, configure and verify it
  before restoring it as `metadataBase`.
- Add a canonical URL after choosing the permanent domain.
- Test the resulting Open Graph image URL directly.

Acceptance criteria:

- The configured metadata domain resolves.
- The Open Graph and Twitter image URLs return HTTP 200.
- Shared links show the expected title, description, and portrait.

### 2. Deploy the Qwykz case study with its related changes

The local project contains a new `/projects/qwykz` case study and card-linking
changes, but the live route currently returns HTTP 404.

Recommended action:

- Review and commit the case-study route, project-card changes, data changes,
  and required styles together.
- Run the type check, tests, and production build before deployment.
- Verify the live project card and case-study route after deployment.

The current case study is a strong start. Strengthen it further with:

- Architecture or module diagram.
- Important design alternatives and why they were rejected.
- Failure modes and unsupported combinations.
- Testing strategy and risky paths covered.
- Release or delivery workflow.
- Specific responsibilities and implementation ownership.
- Lessons or product changes caused by real usage.

Acceptance criteria:

- `/projects/qwykz` returns HTTP 200 in production.
- The Qwykz card clearly leads to the case study.
- Repository and npm links remain separately discoverable.
- Every published metric has a date or linked evidence.

## Priority 1 — Improve Recruiter Comprehension

### 3. Move selected work earlier on mobile

On mobile, the page presents the core toolkit, education, leadership, activity,
and civic engagement before selected projects. This buries the strongest hiring
evidence several screens below the introduction.

Recommended mobile order:

1. Identity and focused profile
2. Selected projects
3. Project evidence or metrics
4. Toolkit
5. Education and leadership
6. Civic engagement
7. Contact call to action

Acceptance criteria:

- At least one selected project appears within the first two mobile viewports.
- Desktop can retain the two-column résumé composition.
- Keyboard and screen-reader reading order remains logical.

### 4. Sharpen the positioning

“Full-stack developer” is accurate but broad. The current summary also leads
with using AI to ship sooner, which may accidentally suggest dependency on AI
instead of engineering ownership.

Suggested headline:

> Backend-first full-stack developer building reliable APIs, developer tools,
> and carefully scoped AI features.

Suggested summary direction:

> Computer Science student shipping TypeScript and Python products with
> PostgreSQL, Docker, automated tests, and security-conscious boundaries.
> Creator of Qwykz and builder of full-stack and AI-assisted workflows.

The final wording should remain concise and only claim skills supported by
projects the learner can explain and rebuild.

Acceptance criteria:

- The first screen communicates the target role and strongest evidence.
- AI is presented as a bounded product capability or verified workflow aid.
- The message is consistent across the title, profile, About page, and social
  metadata.

### 5. Improve mobile navigation

At widths of 390px or below, CSS hides the third navigation link, which is the
About page. A primary route should not disappear without an alternative.

Recommended action:

- Keep all primary routes accessible, or introduce a clearly labelled compact
  menu.
- Do not rely on `nth-child` to hide a navigation item.
- Add a visible current-page state.

Acceptance criteria:

- Work, Toolkit, About, and Contact remain reachable at 320px.
- Navigation has no overlap or horizontal overflow.
- The active route is visually and programmatically identifiable.

### 6. Increase résumé text readability

Several labels and supporting lines use 10–11px text. The dark-theme subtle
color is approximately 3.77:1 against the résumé surface, below the usual 4.5:1
contrast target for normal text.

Recommended action:

- Raise important supporting text to approximately 12–14px.
- Reserve 10–11px text for nonessential labels only.
- Increase the contrast of `--foreground-subtle` where it is used for normal
  text.
- Check zoom at 200% and both color themes.

Acceptance criteria:

- Normal text meets a 4.5:1 contrast target.
- No important content requires unusually small text.
- The résumé remains compact without sacrificing readability.

## Priority 2 — Strengthen Technical Credibility

### 7. Add robots and sitemap metadata routes

The live `/robots.txt` and `/sitemap.xml` routes currently return HTTP 404.

Recommended action:

- Add `app/robots.ts`.
- Add `app/sitemap.ts`.
- Include the homepage, projects, Qwykz case study, toolkit, About, and Contact
  routes as appropriate.

Acceptance criteria:

- `/robots.txt` and `/sitemap.xml` return HTTP 200.
- Sitemap URLs use the selected production domain.
- Only real, public routes are included.

### 8. Replace placeholder tests with meaningful checks

The current suite verifies the health endpoint and basic arithmetic. This does
not substantiate the portfolio's quality and reliability claims.

Recommended tests:

- Health endpoint response contract.
- Contact endpoint invalid JSON and validation failures, if the endpoint stays.
- Project data contains valid URLs and required fields.
- Every internal `caseStudyHref` maps to an existing route.
- Important page content renders.
- Navigation and theme-toggle behavior.
- A small Playwright smoke test for primary routes and mobile overflow.
- Social metadata and manifest smoke checks.

Acceptance criteria:

- Remove the arithmetic placeholder test.
- Risky or public behavior has automated coverage.
- Tests fail when a project links to a missing internal case study.

### 9. Remove or protect the unused contact API

The public Contact page now uses direct email, but `/api/contact` remains
deployed. The endpoint has validation and a honeypot but no rate limiting. An
unused email endpoint creates avoidable spam and provider-quota exposure.

Recommended action:

- Remove the endpoint and unused client form if direct email is the final
  design; or
- Restore the form with server-side rate limiting, request-size controls,
  monitoring, and abuse protection.

Acceptance criteria:

- No unused public email-sending endpoint remains.
- If retained, repeated abusive requests are limited.
- Secrets remain server-side and provider failures do not expose sensitive
  details.

### 10. Date and substantiate usage metrics

“Peak weekly npm downloads” can be legitimate historical evidence, but it needs
context. GitHub clone traffic is also a time-limited snapshot.

Recommended presentation:

- “1,763 peak weekly npm downloads — snapshot captured Month YYYY”
- “423 clones from 131 unique cloners — 14-day snapshot captured Month YYYY”

Keep a private or repository-linked evidence artifact when possible. Do not
silently replace a historical peak with a current-week number; label both
correctly if both are useful.

Acceptance criteria:

- Each metric identifies its period or snapshot date.
- The portfolio does not imply that a historical peak is the current value.
- Evidence is reproducible or archived where practical.

### 11. Keep the Toolkit selective when adding dependencies

The Toolkit page should remain a recruiter-facing overview, not a visual copy
of `package.json`. Adding selected dependencies can be beneficial when they
communicate an important capability, but listing routine project plumbing will
make the stronger signals harder to find.

Add a dependency to the global Toolkit only when:

- Recruiters or relevant job descriptions recognize the capability it
  represents.
- It was used substantially rather than merely installed or configured.
- It supports the backend-first full-stack, AI-assisted product, or
  security-conscious positioning.
- Marc can explain how it works, where it fails, and why it was selected over
  an alternative.
- It is useful across multiple projects or central to one flagship project.

Strong Toolkit-level examples include:

- Prisma for type-safe relational data access and migrations.
- Redis for caching or background-processing workflows.
- PostGIS for geospatial data workloads.
- Zod for runtime validation at trust boundaries.
- Playwright, Vitest, and Pytest for meaningful automated testing.

Dependencies such as Axios, dotenv, CORS middleware, React Icons, Nodemon,
bcrypt, and `jsonwebtoken` generally do not need global Toolkit placement.
Mention them in a project or case study only when their use demonstrates a
meaningful engineering decision.

Prefer this evidence hierarchy:

1. **Toolkit:** transferable technologies and capabilities.
2. **Project card:** the project's primary stack.
3. **Case study:** important dependencies, why they were chosen, alternatives,
   risks, and failure behavior.

For example, a case study statement such as “Implemented short-lived JWT
authentication with server-side authorization checks and explicit expired,
malformed, and missing-token tests” is stronger evidence than adding
`jsonwebtoken` to a list.

Acceptance criteria:

- Each Toolkit item represents a defensible capability rather than package
  familiarity.
- Each group stays concise and quickly scannable.
- Project-specific dependencies appear in their relevant project evidence.
- No tool is claimed solely because it was generated, installed, or used by an
  agent.

## Small Correctness and Maintenance Fixes

- Change the portrait alt text from “Illustrated profile picture” because the
  rendered asset is a photograph.
- Update `README.md` with the live URL.
- Reconcile the README’s contact-form claim with the direct-email page.
- Ensure the footer technology statement matches the implementation.
- Use one consistent identity for the header label, deployment domain, metadata
  domain, GitHub handle, and intended personal domain.
- Consider a professional-domain email after the domain is configured, but do
  not block applications on this.

## Suggested Execution Order

1. Correct `metadataBase` and verify social images.
2. Review, test, commit, and deploy the Qwykz case study.
3. Reorder mobile content so selected work appears earlier.
4. Restore access to every mobile navigation item.
5. Sharpen the homepage positioning.
6. Improve small-text readability and contrast.
7. Add robots and sitemap routes.
8. Replace placeholder tests with route, link, metadata, and validation tests.
9. Remove or protect the unused contact API.
10. Update the README and date all public metrics.
11. Add only capability-signaling dependencies to the Toolkit; keep
    project-specific packages in project evidence.

## Definition of Done

The portfolio is ready for broader promotion when:

- Its permanent metadata domain and social-preview assets resolve.
- Every internal project link works in production.
- Selected engineering evidence appears early on desktop and mobile.
- Positioning matches a backend-first junior full-stack target.
- At least one project has a defensible case study with decisions, tests,
  failures, ownership, and evidence.
- Primary navigation works at 320px and keyboard focus remains visible.
- Important text is readable and meets normal-text contrast targets.
- Robots and sitemap routes are live.
- Tests cover meaningful public behavior instead of placeholders.
- Public endpoints are necessary, protected, monitored, or removed.
- Metrics are honest, dated, and supportable.
- Toolkit entries remain concise, defensible, and supported by project
  evidence.
