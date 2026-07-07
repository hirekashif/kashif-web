# Fairness & Compliance

AI hiring screens are regulated (e.g. NYC Local Law 144, the EU AI Act's high-risk classification,
Title VII disparate-impact standards in the US). Kashif is built so you can use AI screening and
still defend every decision.

## Non-removable fairness rules

Every AI fit score runs under a fixed **fairness and safety rule set** that is prepended to the
scoring prompt **outside** any editable prompt override. It cannot be turned off or edited away.
It instructs the model to:

- evaluate **only job-relevant evidence** (skills, experience, qualifications, demonstrated
  ability);
- **never consider or infer** race, ethnicity, national origin, gender, gender identity, sexual
  orientation, age, religion, disability, pregnancy, marital/family status, or any protected
  characteristic — and to ignore names and photos as signals;
- **flag proxies** (e.g. "recent graduate", "cultural fit" used as a stand-in) rather than weight
  them;
- **never fabricate** facts, and separate genuine gaps from merely missing data;
- base every evidence claim on a specific candidate field.

Even if a workspace or operator customizes the scoring prompt, this preamble always leads it.

## Deterministic knockout rules

Hard, non-negotiable gates (work authorization, minimum experience, location) belong to humans,
not a probabilistic model. **Knockout rules** on apply questions decline disqualified applicants
**before any AI call**. This removes the "everything rides on an AI score" objection and keeps the
gates auditable. Configure them per apply question — see [Jobs & careers pages](jobs-and-careers.md).

## Blind screening (optional)

Turn on **blind screening** under **Settings → AI Fairness** to hide the candidate's name from the
**model input only**. Your team still sees the full record; only what the AI sees is redacted.
Evidence still works because it cites fields, not names. The redaction is reflected in the run's
input hash for auditability.

> The fairness rules above always apply. Blind screening is an additional, optional layer.

## Screening health

Each job's **Insights** modal has a **Screening health** section showing how decisions were made:
auto-shortlisted, auto-rejected, knocked-out, and **% human-reviewed**. This is decision-pattern
visibility — it reports how the funnel was operated, and never infers protected characteristics.

## Compliance pack

For any role, an admin or HR manager can export a **compliance pack** from the job Insights modal
(JSON, or CSV for the decision table). It bundles everything needed to explain and defend the
role's screening:

- the job and its calibration,
- the **prompt version(s)** and fairness posture used,
- every scored candidate's score, confidence, and cited evidence,
- the full **stage-transition history**,
- **consent** timestamps,
- the automation settings in force,
- the scoped **audit trail**.

The export is access-controlled (admin/HR only), audited, and served no-store.

## Consent & candidate rights

- Applicants explicitly **consent** at apply time; the timestamp is recorded.
- Candidates can **withdraw** at any time from their status page.
- Workspace data can be **exported** and is subject to **retention** purging — see
  [Team, roles & security](team-roles-and-security.md).
