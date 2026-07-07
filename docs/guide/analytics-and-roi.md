# Analytics & ROI

Kashif turns your hiring activity into numbers you can act on — and numbers you can show a manager
or the board.

## The ROI card (dashboard)

Once your team has screened some applicants, the dashboard shows a **"What Kashif has saved you"**
card:

- **Recruiter-hours saved** — from applicants auto-screened by AI (and declined by knockout rules)
  vs. reviewing each résumé by hand.
- **Estimated net savings** — the value of that time minus your actual AI cost.
- **Applicants auto-screened** — the volume the AI handled.
- **Median time to hire** — once you've made hires.

The card **shows its assumptions inline** (e.g. ~6 minutes per résumé at a stated hourly rate,
minus AI cost) so the number is an honest estimate, not a black box. It only appears once there's
real activity to measure.

## Job Insights

Open a job and click **Insights** for a per-role view:

- **Funnel by stage** with candidate counts and conversion.
- **Time to hire** — median, average, and number of hires, computed from the real
  stage-transition history (not just "days in current stage").
- **Time in stage** — how long candidates actually spend in each stage.
- **Score bands** — distribution of AI fit scores.
- **Screening health** — auto-shortlisted vs. auto-rejected vs. knocked-out vs. human-reviewed
  (see [Fairness & compliance](fairness-and-compliance.md)).
- **Source effectiveness** — careers page vs. sourced, by conversion and hires.

## Org-wide analytics

Across all roles, Kashif computes:

- **Funnel & conversion** — how far candidates progress, stage to stage.
- **Time to hire** — average and median, applied → hired.
- **Time in stage** — transition-based, per stage.
- **Source effectiveness** — which channels actually produce hires.
- **Automation share** — how many pipeline moves were automated vs. made by a person.

## Exporting reports

Both the org overview and per-role Insights can be **exported** (CSV / JSON) for sharing or
board decks. Exports are generated server-side, so they aren't capped to a screenful of rows.

> **Note:** these metrics get more meaningful as stage-transition history accumulates. A brand-new
> workspace has little to measure; after a few weeks of real activity the funnel, time-to-hire, and
> ROI numbers become representative.
