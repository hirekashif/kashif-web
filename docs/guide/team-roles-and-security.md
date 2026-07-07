# Team, Roles & Security

Manage who's in your workspace, what they can do, and how accounts are protected.

## Roles

By default Kashif keeps team management simple with two product-facing roles:

- **Owner** (`admin`) — full control: jobs, pipeline, team, billing, settings, integrations.
- **Member** (`recruiter`) — day-to-day hiring work.

Turning on the **Advanced teams** feature unlocks three more granular roles:

- **HR manager** (`hr_manager`) — job/team management similar to admin for hiring workflows.
- **Hiring manager** (`hiring_manager`) — create/edit/publish jobs and run the pipeline.
- **Interviewer** (`interviewer`) — **read** the pipeline and leave **comments and scorecards**;
  cannot move, reject, delete, score, or schedule candidates.

### What each role can do (high level)

| Action | admin | hr_manager | hiring_manager | recruiter | interviewer |
| --- | --- | --- | --- | --- | --- |
| Create / edit / publish jobs | ✅ | ✅ | ✅ | — | — |
| Move / reject / schedule / score in pipeline | ✅ | ✅ | ✅ | ✅ | — |
| Comment & submit scorecards | ✅ | ✅ | ✅ | ✅ | ✅ |
| Manage team & roles | ✅ | — | — | — | — |
| Billing & settings | ✅ | — | — | — | — |
| Compliance pack export | ✅ | ✅ | — | — | — |

> Mutating pipeline actions are role-gated; interviewers are intentionally read-plus-feedback only.

## Inviting teammates

From **Team**, invite by email (Owner/HR manager). Invites:

- require your **email to be verified** first,
- are checked against your workspace's **seat limit** — if all seats are in use (counting active
  users and pending invites), the invite is blocked with an upgrade hint,
- expire after 7 days.

Invited users set their name and password to join and start **already verified** (receiving the
invite proves mailbox ownership).

You can also change a member's role (admin only) or disable a user.

## Seats

Each workspace has a **seat limit**. Active users plus pending invites count against it. Raising
the limit is a plan/operator action. Accepting an invite re-checks seats at the moment of joining,
so two people can't slip past the last seat at once.

## Two-factor authentication (MFA)

Under **Settings → Security**, enable **TOTP MFA**:

1. Scan the QR code with an authenticator app (or enter the secret).
2. Confirm with a 6-digit code.
3. Save your **backup codes** (shown once) — each works once if you lose your device.

Once enabled, both **password and Google sign-in** present a dedicated **two-step verification**
screen asking for the code (or a backup code). MFA secrets are encrypted at rest.

MFA is per-user and opt-in. Disabling it removes the requirement for that account.

## Email verification

Password sign-ups get a verification email. Verification is required to invite teammates (and,
depending on deployment, to connect integrations). Google sign-ups are verified automatically. Request
a fresh link from Settings if the original expired.

## Sessions

Sign-in creates a server-backed session (httpOnly cookie). You can sign out to revoke your
session; operators can revoke sessions for a user or a whole workspace from the admin console.
