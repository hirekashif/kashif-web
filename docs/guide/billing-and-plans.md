# Billing & Plans

Kashif is self-serve: start a trial, subscribe, and manage your plan without talking to sales.
Payments run through **Moyasar**.

## The free trial

Every new workspace begins a **14-day full-feature Pro trial** — no card required. The Billing
view shows a banner with days remaining. When the trial ends, the workspace moves to **Free**
unless you subscribe.

## Plans

Entitlements are metered on the two units that matter for SMB hiring:

| Plan | Active published jobs | Applicants screened / month |
| --- | --- | --- |
| **Free** | 1 | 25 |
| **Starter** | 3 | 150 |
| **Pro** | 10 | 750 |
| **Enterprise** | Unlimited | Unlimited |

Usage against these limits is shown on the Billing view. Hitting a limit (for example, trying to
publish a second job on Free) prompts you to upgrade rather than silently failing.

> **Pricing** is configured per deployment through Moyasar (in SAR by default). The plan cards in
> the app show the deployment's indicative pricing.

## Subscribing (upgrade)

1. Go to **Billing** and choose a plan.
2. You're redirected to **Moyasar's secure hosted payment page** (mada, Visa/Mastercard, Apple
   Pay, STC Pay depending on the deployment).
3. On successful payment, your workspace is activated on the chosen plan and a billing period is
   set. This happens automatically via Moyasar's webhook — no manual step.

If billing isn't configured on your deployment yet, the upgrade action explains that and no charge
is attempted.

## Managing your subscription

- **Billing view** shows your current plan, status, trial/renewal date, usage, and invoice
  history.
- **Cancel subscription** (admin) stops auto-renewal. You keep your current plan until the end of
  the paid period, then move to Free.
- **Invoices** are listed with amounts and status as payments are recorded.

## Renewals

Renewal is **invoice-per-period**: near the end of your period Kashif issues the next invoice and
emails the payment link; paying it extends the period. (Fully automatic card auto-charge is a
planned enhancement.) If a period lapses unpaid, the workspace enters a short grace window before
downgrading to Free.

## Roles & billing

Only **Owners (admins)** can start checkout or cancel. Platform operators can also set a plan
directly and grant per-workspace limit exceptions on request.
