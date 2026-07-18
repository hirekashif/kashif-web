# Jobs & Careers Pages

Everything about creating roles, drafting them with AI, publishing them, and the public pages
applicants see.

## Creating a job

Create a job from the Jobs view. Fields:

- **Title** (required), **department**, **location**, **employment type**, **seniority**
- **Description** — the full role write-up
- **Required skills** / **nice-to-have skills**
- **Hiring manager** (informational)

### Draft with AI

Instead of writing from scratch, enter the title (and optionally seniority/location/employment
type) and click **✨ Draft with AI**. Kashif generates:

- a full **description**,
- suggested **required / nice-to-have skills**,
- suggested **apply questions** (typed).

It prefills the form; edit anything before saving. Drafting is available to Owners/admins and
hiring-role members, and counts against your plan's AI usage.

## Calibration (what the AI scores against)

Each job has a **calibration** — the success criteria the AI uses to score fit: must-have and
nice-to-have skills, deal-breakers, target companies/industries, seniority signals, location and
work-authorization constraints, compensation range, and an interview rubric.

You can fill it in manually or click **Suggest** to have the AI extract it from the job
description. Good calibration is the single biggest lever on score quality. When you change
calibration on a role with already-scored candidates, Kashif offers to **rescore** them.

## Apply questions

Add typed questions applicants answer when applying (max ~12):

- **Text / textarea** — short or long free text
- **Number** — e.g. years of experience
- **Select / multi-select** — from options you list
- **Yes/No (boolean)**

Answers are shown to the AI screener and stored on the application.

## Knockout rules (deterministic hard gates)

Any boolean, number, or select apply question can carry an **auto-decline** rule. When an
applicant's answer matches the disqualifying condition, they are declined **instantly, before any
AI call** — and, if decision notifications are on, sent a polite rejection.

Examples:

- **Yes/No** — "Authorized to work here?" → decline when the answer is **No**.
- **Number** — "Years of relevant experience" → decline when **less than** 3.
- **Select** — "Preferred location" → decline when the answer is a specific disqualifying option.

Knockouts keep the hard, non-negotiable gates under human control and off the probabilistic AI
path — cheaper and less bias-prone. Configure them under each question in the job form.

## Publishing

Click **Publish role**. Kashif:

- mints a **stable public slug** (reused if you unpublish and re-publish),
- makes the per-job careers page live at `/careers/<slug>`,
- starts accepting applications.

The publish controls then show:

- a **live state chip** with the applicant count,
- **Copy link** — the per-job apply page,
- **Copy careers page** — your company careers page (all open roles),
- **Unpublish** — stops applications (the slug is retained).

> **Free plan note:** Free workspaces can have **1** active published job. Publishing beyond your
> plan limit is blocked with an upgrade prompt.

## The public careers pages

- **Per-job apply page** (`/careers/<slug>`) — a mobile-first, branded, 4-step apply flow
  (contact → job questions → resume or LinkedIn → review & consent). Themed with your logo,
  primary color, and tagline (set under **Settings → Branding**, on paid plans).
- **Company careers page** (`/careers/company/<workspace-slug>`) — one branded URL listing all
  your open roles, each linking to its apply page. Every role page also cross-links back to this
  list ("More open roles at your company").
- **Careers subdomain** — the same company careers page is served at
  `<workspace-slug>.hirekashif.com`, with each role at `<workspace-slug>.hirekashif.com/<role>`.
  It's a cleaner link to share; find it under **Settings → Workspace**.

### Search-engine discoverability (SEO)

Published pages are indexable and include `JobPosting` structured data (Google Jobs eligibility),
and the platform serves a `sitemap.xml`. When a role is unpublished or filled, its page returns
`410 Gone` so search engines drop it promptly.

## Embed your open roles on your own website

Put your live openings directly on your company site — no iframe, no manual updates. Copy the
snippet from **Settings → Workspace → Embed on your website** and paste it where the roles should
appear:

```html
<script src="https://app.hirekashif.com/embed.js" data-org="your-workspace-slug" async></script>
```

- Renders your **currently published roles**, updated automatically as you publish or close them.
- Themed to your brand color and **isolated in a shadow root**, so it can't clash with your site's
  styles. Works on Webflow, WordPress, Framer, or any custom HTML.
- Each role links to its hosted apply page, so screening, anti-spam, and compliance stay handled
  by Kashif.

Optional attributes: `data-target="#css-selector"` to choose the mount point, and `data-limit="10"`
to cap how many roles show.

> The widget is available on **Pro and above**. For a fully server-rendered careers page on your
> own domain (`careers.yourcompany.com`), talk to us about custom domains.

## Job lifecycle

Statuses: **open → paused → filled → cancelled → archived**. Archiving hides a job from active
views. Publishing state (`is_published`) is independent of status — a job must be `open` and
published to accept applications.
