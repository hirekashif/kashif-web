# Feature Catalog

Every shipped capability, grouped by area. "Where" points to the part of the app or the public
surface it lives in. For how to use each, follow the linked user guide.

## 1. Jobs & careers pages
[User guide →](../guide/jobs-and-careers.md)

- **Job management** — create, edit, pause, fill, cancel, archive roles; fields for department,
  location, employment type, seniority, description, required/nice-to-have skills, hiring manager.
- **AI job-description drafting** — turn a one-line brief into a full description plus suggested
  skills and apply questions ("✨ Draft with AI").
- **Role calibration** — define the success criteria the AI scores against; can be AI-extracted
  from a job description.
- **One-click publish** — mint a stable public careers link; unpublish stops applications.
- **Branded per-job careers page** — mobile-first apply page themed with the workspace logo,
  colors, and tagline.
- **Company careers page** — one branded URL (`/careers/company/:slug`) listing all open roles.
- **Apply questions** — typed questions (text, number, select, boolean, etc.) collected at apply.
- **Deterministic knockout rules** — hard gates on apply questions that decline disqualified
  applicants instantly, without an AI call.
- **SEO** — indexable job pages with `JobPosting` structured data (Google Jobs), a sitemap, and
  `410 Gone` for closed roles.

## 2. Applications & AI screening
[User guide →](../guide/applicants-and-pipeline.md)

- **Public application capture** — unauthenticated apply with resume upload or LinkedIn URL,
  consent, honeypot, IP rate limiting, per-job/day and per-org/day caps, and re-apply cooldown.
- **Resume parsing** — PDF/DOCX parsed into structured candidate fields.
- **Automatic AI fit scoring** — every inbound applicant is screened without recruiter action;
  produces score, confidence, summary, strengths, gaps, missing-data, risks, and cited evidence.
- **Reproducible AI** — inputs snapshotted; provider/model/prompt-version/input-hash/output/cost
  persisted for every run.
- **Screening rules (opt-in)** — auto-shortlist above a threshold and/or auto-reject below one;
  off by default (human-in-the-loop).
- **Async pre-screen questions** — extra questions answered later via the status page and folded
  into the fit evidence.
- **Duplicate detection** — flags likely duplicate candidates.

## 3. Pipeline & collaboration
[User guide →](../guide/applicants-and-pipeline.md)

- **Kanban pipeline** — applied → shortlisted → interview → offer → hired / rejected.
- **Ranked shortlist** — applicants ordered by AI fit.
- **Bulk actions** — bulk stage move, bulk rescore, bulk reject (with optional templated email).
- **Comments & structured scorecards** — competency ratings and recommendations per candidate.
- **Hiring decisions** — advance/reject/offer/hire with a required rationale.
- **AI interview guide** — per-candidate focus areas and questions.
- **Scorecard consensus** — synthesizes scorecards, comments, and AI context into a recommendation.
- **Action queue** — a prioritized "what to do next" list on the dashboard.
- **Talent pool** — save candidates for future roles; job-aware re-engagement suggestions.
- **Candidate self-withdrawal** — candidates can withdraw; the recruiter sees a clear "Withdrawn
  by candidate" badge and the entry is locked from further moves.

## 4. Candidate communications
[User guide →](../guide/candidate-communications.md)

- **Application confirmation email** — sent on apply, with the private status link.
- **Decision notifications** — a human-in-the-loop, editable pre-send email on reject / interview
  / offer moves (per-stage toggles, default on).
- **Bulk polite rejection** — templated decline to many candidates at once.
- **Interview reminders** — a ~24h-before reminder with a reschedule link.
- **Candidate status page** — a private, tokenized page showing progress; supports answering
  pre-screen questions and self-withdrawal.
- **Email templates** — system defaults plus workspace-custom templates with variable substitution.
- **All candidate mail flows through the workspace's own mailbox** (Google/Microsoft), never a
  platform relay.

## 5. Interviews & scheduling
[User guide →](../guide/interviews-and-scheduling.md)

- **Candidate self-scheduling** — tokenized "pick a slot" links; booking writes a real calendar
  event and advances the pipeline.
- **Direct booking** — recruiter books an interview straight onto the connected calendar.
- **Free/busy slot suggestions** — "Suggest open slots" proposes genuinely open working-hour times
  from the connected calendar, avoiding conflicts.
- **Reschedule** — rebooking cancels the prior calendar event.

## 6. Defensible & fair AI
[User guide →](../guide/fairness-and-compliance.md)

- **Non-removable fairness rules** — a fairness/anti-discrimination preamble prepended to every
  scoring prompt, outside any editable override.
- **Deterministic knockouts** — hard gates stay under human control, off the probabilistic path.
- **Blind screening (opt-in)** — hides candidate identity from the model input only.
- **Screening health** — per-job view of auto vs. knockout vs. human-reviewed decisions.
- **Compliance pack** — per-role JSON/CSV export of every decision, evidence, prompt version,
  stage history, consent, and audit trail.

## 7. Sourcing & outreach (supporting)
[User guide →](../guide/applicants-and-pipeline.md)

- **Candidate web search** — dual-provider (Serper primary, Brave fallback) sourcing.
- **Profile enrichment** — LinkedIn enrichment via Apify.
- **AI-drafted outreach** — tone-controlled outreach drafts; send through the workspace mailbox.

## 8. Team, roles & security
[User guide →](../guide/team-roles-and-security.md)

- **Roles** — Owner (admin) and Member (recruiter) by default; hr_manager, hiring_manager, and
  interviewer unlock behind an "advanced teams" flag.
- **Invites & seats** — email invites with seat-limit enforcement.
- **MFA** — opt-in TOTP with backup codes, enforced on both password and Google sign-in.
- **Email verification** — required before inviting teammates.
- **Sessions** — server-backed, revocable; httpOnly cookies.

## 9. Billing & monetization
[User guide →](../guide/billing-and-plans.md)

- **14-day Pro trial** on signup.
- **Self-serve checkout via Moyasar** — hosted payment page; plan activates on payment.
- **Cancel anytime** — keeps the plan until period end.
- **Usage metering** — active published jobs and applicants screened, with quota-aware upsell.
- **Invoices** — real invoice history in the Billing view.

## 10. Analytics & ROI
[User guide →](../guide/analytics-and-roi.md)

- **ROI dashboard card** — recruiter-hours saved, estimated net savings, applicants auto-screened,
  median time-to-hire, with assumptions shown.
- **Org & per-job analytics** — funnel with conversion, time-to-hire, transition-based
  time-in-stage, source effectiveness, automation share.
- **Job Insights** — per-role funnel, score bands, screening health, time-to-hire.
- **Exports** — CSV/JSON analytics and per-role report exports.

## 11. Integrations
[User guide →](../guide/integrations.md)

- **Google Workspace** — Gmail send + Calendar (production-grade).
- **Microsoft 365** — Outlook mail + Calendar via Microsoft Graph.
- **Slack** — internal pipeline notifications.
- **ATS / job board** — provider-neutral placeholders (config only, not yet syncing).

## 12. Platform & trust (operators)

- **Audit log** across material actions; cross-org admin actions mirrored into the target org.
- **Data retention** — nightly purge past a per-org retention window, with legal hold.
- **Privacy export** — full per-workspace data export.
- **Encrypted credentials & MFA secrets** at rest.
- **Malware scanning** of resume uploads (fail-closed when required).
- **Background job infrastructure** — Postgres queue with retries, backoff, dead-letter, per-org
  caps, and provider circuit breakers.
- **Super-admin console** — org health, feature flags, plan/seat/limit overrides, worker health,
  dead-letter retry, session revocation.
