# Candidate Communications

Kashif's brand promise is **never ghost a candidate**. Every applicant gets an answer at each
step, and all candidate email is sent through your **own** connected mailbox (Google/Microsoft) —
so it comes from your company, lands reliably, and is never a platform relay.

> **Prerequisite:** connect a workspace mailbox (see [Integrations](integrations.md)). If none is
> connected, candidate emails are skipped and your dashboard shows a **"Connect a mailbox so
> applicants hear back"** nudge. Candidate mail never falls back to the platform's system mailer.

## Application confirmation

The moment someone applies (and isn't knocked out), Kashif emails them a confirmation containing a
**private status link**. This is sent up front, before parsing/scoring, so they hear back fast even
if review takes time.

## Decision notifications (human-in-the-loop)

When you move a candidate to **Rejected, Interview, or Offer**, Kashif opens a **pre-send
confirmation modal**:

- pre-filled from the matching template with the candidate's name, role, and status link,
- fully **editable** before sending,
- with a **Skip** option — nothing is sent unless you confirm.

Per-stage toggles (default **on**) under **Settings → Candidate Communications** control whether
the modal appears for each stage. Every send is logged to the candidate's contact history and the
audit log.

This works from the board and from the review drawer's decision flow. Bulk rejections use the same
templates via **Bulk reject**.

## Interview reminders

For booked interviews, Kashif sends a reminder ~24 hours prior with a reschedule link and the
status link. See [Interviews & scheduling](interviews-and-scheduling.md).

## The candidate status page

Every applicant gets a private, tokenized status page (the link in their confirmation email). It
shows:

- the company and role,
- a friendly status pill and progress steps (Received → Under review → Interview → Offer → Hired) —
  never internal scores, notes, or *why* a rejection happened,
- the applied date,
- (if the role has them) a form to **answer pre-screen questions**,
- a **Withdraw application** action.

The page is themed with your brand color and logo.

## Email templates

Under outreach, you have **system default templates** (Application Received, Interview Invite,
Polite Rejection, Offer Letter Intro) plus the ability to create **workspace-custom templates**.
Templates substitute variables like `{{candidate_name}}`, `{{job_title}}`, `{{company_name}}`, and
`{{status_url}}` at send time.

## What sends automatically vs. on confirmation

| Event | Sent |
| --- | --- |
| Application received | Automatically (best-effort, if a mailbox is connected) |
| Knockout / auto-reject decline | Automatically when reject notifications are on |
| Auto-shortlist notice | Automatically when auto-shortlist is on |
| Manual reject / interview / offer | On your confirmation (editable pre-send modal) |
| Interview reminder | Automatically ~24h before |
| Bulk reject | When you send with a template selected |
