# Applicants & Pipeline

How applicants are screened and ranked, and how your team moves them from applied to hired.

## What happens when someone applies

1. The application is captured (resume upload or LinkedIn URL, plus any apply-question answers).
2. **Knockout rules** are evaluated first. A disqualifying answer declines the applicant instantly
   — no AI call — and (if enabled) sends a polite rejection.
3. Otherwise the applicant gets a **confirmation email** with their private status link.
4. The resume is **parsed** into structured fields.
5. An **AI fit score** is produced against the job's calibration.
6. The applicant appears in the job's pipeline, ranked by fit.

Screening is automatic and bounded by your plan's monthly *applicants screened* limit and
per-job/day caps.

## Reading an AI fit score

Each scored candidate shows:

- **Score (0–100)** and **confidence** (drops when candidate data is thin),
- **Summary**, **strengths**, **gaps**, **missing data**, and **risks**,
- **Evidence** — short claims each tied to a specific candidate field (so you can trust and verify
  the score, not just take a number).

Scores are reproducible: the provider, model, prompt version, input hash, output, and cost are
recorded for every run.

## The pipeline (stages)

Candidates move through: **applied → shortlisted → interview → offer → hired**, or **rejected**.
The board is a kanban with one column per stage; a card shows the candidate, an origin badge
(Applied via careers vs. Sourced), and the fit score.

Move candidates with the card's forward/back arrows, the stage selector in the review drawer, or
the sticky **Advance / Reject** footer. Moving to **reject, interview, or offer** opens the
candidate-notification step (see below).

## Screening rules (opt-in automation)

Off by default — hiring stays human-in-the-loop. Under **Settings → Screening Rules** an admin can
enable:

- **Auto-shortlist** applicants scoring **at or above** a threshold.
- **Auto-reject** applicants scoring **below** a threshold (sends a polite decline).

These apply only at intake (the `applied` stage).

## Reviewing efficiently

- **Ranked shortlist** — applicants are ordered by fit, strongest first.
- **Comments** — discuss a candidate with your team.
- **Scorecards** — structured competency ratings and a recommendation; the review drawer nudges
  you to collect enough scorecards before advancing.
- **Hiring decisions** — advance / reject / offer / hire with a required rationale (recorded).
- **AI interview guide** — generate per-candidate focus areas and questions.
- **Scorecard consensus** — synthesizes scorecards, comments, and AI context into a recommendation.
- **Async pre-screen** — if the job has pre-screen questions, candidates answer them from the
  status page and the answers fold into the fit evidence.

## Bulk actions

- **Bulk stage move** — move up to 50 candidates at once.
- **Bulk rescore** — re-run AI scoring (e.g. after changing calibration).
- **Bulk reject** — decline up to 50 candidates, optionally sending a templated email.

## Talent pool

Save strong candidates you're not hiring right now to the **talent pool**. When you open a new
role, Kashif suggests talent-pool matches based on skill overlap and prior scores, so good people
don't get lost between roles.

## Candidate withdrawals

A candidate can **withdraw** their own application from the status page. When they do:

- their application is marked **withdrawn** and the pipeline entry moves to **rejected**,
- the card shows a red **"Withdrawn by candidate"** badge and the review drawer shows a banner
  explaining it was the candidate's choice (no action needed),
- the entry is **locked** — recruiters can no longer move it through the pipeline (only remove it),
  because the candidate owns that decision.

## Sourcing (supporting flow)

Beyond inbound applications, you can **search** the web for candidates (Serper/Brave), **enrich**
profiles from a LinkedIn URL (Apify), and add them to the same pipeline — where they're scored and
reviewed identically. Sourcing is optional and not the primary motion.
