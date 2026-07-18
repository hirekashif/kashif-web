# Product Overview

## What Kashif is

Kashif is an **inbound hiring platform**. It replaces the
spreadsheet-plus-email-plus-five-tools stack that most teams use to hire, with one workspace that
takes a role from *"we need to hire someone"* to *"they start Monday"*.

The product's promise, in one line:

> **The hiring platform that never ghosts and always shows its work.**

Three commitments follow from that positioning, and the whole product is built around them:

1. **Every applicant gets an answer.** Confirmation on apply, a decision notification on every
   stage change, a private status page they can check any time.
2. **Every AI decision can be shown to a lawyer.** Scores come with cited evidence, a
   non-removable fairness rule set, optional blind screening, and a per-role compliance export.
3. **Anyone can go from blank page to booked interviews in one sitting** — and pay for it
   self-serve, without talking to sales.

## Who it's for

- **Primary segment:** companies hiring salaried roles (not agencies, not
  high-volume hourly).
- **Primary domain:** IT and tech roles first — screening defaults, calibration, and skill
  matching are tuned for technical candidates, though the platform is domain-agnostic.
- **Primary users:** hiring managers, HR/recruiting teams, and founders who want a fast,
  modern hiring workflow without a clunky legacy ATS.

## The core motion (inbound)

```
Post a job  →  Applicants apply on a branded careers page  →  Auto-screened + AI-ranked with
reasons  →  Team reviews the shortlist  →  Interviews are self-scheduled  →  Hire, with every
candidate kept informed at each step.
```

Outbound web-search **sourcing** (search + enrichment) is a supporting flow that feeds the same
unified pipeline; it is not the front door.

## What makes it different

- **Explainable AI with a paper trail.** Every fit score carries evidence citations and a full
  provenance record (provider, model, prompt version, input hash, output, cost). Most ATSs
  give you a black-box number or nothing.
- **Workspace-owned communication.** Candidate email and interview invites go through the
  company's *own* connected Google Workspace or Microsoft 365 mailbox — better deliverability,
  real calendar invites, and the candidate hears from the company, not a platform relay.
- **Defensible by default.** A hardcoded fairness preamble the AI can never be told to ignore,
  deterministic knockout rules that keep hard gates under human control, optional blind screening,
  and an exportable compliance pack.
- **Honest pricing.** Metering is on units anyone understands — active published jobs and
  applicants screened — not seats or sourcing credits.
- **Cost-controlled AI.** A Postgres-backed job queue with per-org caps, per-job/day screening
  limits, circuit breakers, and dead-lettering means AI spend can't run away.

## Plans & pricing

Kashif has four plan tiers. Entitlements are metered on **active published jobs** and
**applicants screened per month** (the units anyone understands):

| Plan | Active published jobs | Applicants screened / month | Typical fit |
| --- | --- | --- | --- |
| **Free** | 1 | 25 | Publishing your first role |
| **Starter** | 3 | 150 | A few concurrent roles |
| **Pro** | 10 | 750 | Active, growing hiring |
| **Enterprise** | Unlimited | Unlimited | High-volume / scaling teams |

- **Every new workspace starts on a 14-day full-feature Pro trial** — no card required. At the
  end of the trial it moves to Free unless a plan is purchased.
- **Billing runs through Moyasar** (Saudi/MENA gateway: mada, Visa/Mastercard, Apple Pay,
  STC Pay). Prices are configured per deployment (in SAR by default); the in-app plan cards show
  indicative pricing for the deployment.
- Per-customer limit exceptions can be granted by platform operators without a code change.

See the [Billing & plans guide](../guide/billing-and-plans.md) for details.

## Glossary

| Term | Meaning |
| --- | --- |
| **Workspace / organization** | A tenant. Every record is scoped to one workspace; data never crosses workspaces. |
| **Pipeline** | The stages a candidate moves through for a job: applied → shortlisted → interview → offer → hired (or rejected). |
| **Pipeline entry** | One candidate's position in one job's pipeline. |
| **Applicant vs. candidate** | An *applicant* applied via the careers page; a *candidate* is the underlying person record (may also be sourced). |
| **AI fit score** | A 0–100 score with confidence, summary, strengths, gaps, risks, and cited evidence, produced against the job's calibration. |
| **Calibration** | The role's success criteria (must-have/nice-to-have skills, deal-breakers, target companies, rubric) that the AI scores against. |
| **Knockout rule** | A deterministic hard gate on an apply question (e.g. "not authorized to work → decline") evaluated before any AI call. |
| **Screening** | Auto AI evaluation of an inbound applicant. |
| **Talent pool** | Saved candidates kept for future roles. |
| **Careers page** | The public, branded, per-job apply page; the **company careers page** lists all of a workspace's open roles. |
| **Compliance pack** | A per-role export of every screening decision (scores, evidence, prompt versions, stage history, consent, audit trail). |
