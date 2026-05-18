import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rounds — Privacy Policy',
  description:
    'How Rounds, a physician billing app by matmul inc., collects, uses, and protects information.',
};

const EFFECTIVE_DATE = 'May 17, 2026';
const LAST_UPDATED = 'May 17, 2026';

const labelStyle = { color: 'var(--text-dim)', flexShrink: 0, width: '5.5rem', textTransform: 'uppercase' as const, letterSpacing: '0.1em', fontSize: '12px' };
const valueStyle = { color: 'var(--text)', opacity: 0.7 };
const bodyStyle = { color: 'var(--text)', opacity: 0.75, maxWidth: '40rem', fontSize: '15px', lineHeight: 1.9 };

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="page-pad pb-10 sm:pb-14" id={id}>
      <div className="section-label" style={{ marginBottom: '1.5rem' }}>{title}</div>
      <div className="flex flex-col gap-4" style={bodyStyle}>{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <section className="page-pad reveal pt-16 sm:pt-24 pb-8 sm:pb-12">
        <p style={{ fontSize: '14px', color: 'var(--text)', opacity: 0.5, marginBottom: '0.75rem' }}>
          Rounds — Privacy Policy
        </p>
        <h1 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', lineHeight: 1.4, fontWeight: 700, color: 'var(--accent)', textWrap: 'balance' }}>
          How we handle the information you share with Rounds.
        </h1>
      </section>

      <section className="page-pad reveal reveal-d2 pb-10 sm:pb-16" style={{ fontSize: '14px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
          {[
            ['Operator', 'matmul inc. (Ontario, Canada)'],
            ['Product', 'Rounds — iOS app for physician billing'],
            ['Effective', EFFECTIVE_DATE],
            ['Updated', LAST_UPDATED],
            ['Contact', <a key="c" href="mailto:info@matmul.io" className="link-accent">info@matmul.io</a>],
          ].map(([key, value], i) => (
            <div key={i} className="flex gap-3 sm:gap-6" style={{ lineHeight: 1.85 }}>
              <span style={labelStyle} className="sm:w-28">{key}</span>
              <span style={valueStyle}>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <Section title="WHO THIS POLICY IS FOR">
        <p>
          Rounds is a mobile billing tool used by physicians practising in Ontario, Canada. This Privacy
          Policy describes how matmul inc. (&ldquo;matmul&rdquo;, &ldquo;we&rdquo;) collects, uses, shares, and protects information
          about <em>physicians who use the Rounds app</em>. It is not a notice to the patients those
          physicians treat.
        </p>
        <p>
          Physicians are accountable to their patients as <em>health information custodians</em> under
          Ontario&apos;s <em>Personal Health Information Protection Act, 2004</em> (PHIPA). When a physician
          uses Rounds to process patient billing information, matmul acts as the physician&apos;s
          <em> agent and information manager</em> under PHIPA section 17, subject to the limitations and
          obligations described below.
        </p>
      </Section>

      <Section title="INFORMATION WE COLLECT">
        <p>We collect only what we need to operate the app. Specifically:</p>
        <p>
          <strong>Account information.</strong> Email address used to sign in via one-time code. Your
          name, profile photo URL (optional), CPSO registration number, hospital(s) where you bill, and
          your monthly target number of shifts. All entered by you during onboarding or in profile
          settings.
        </p>
        <p>
          <strong>Shift content.</strong> Photographs of your end-of-shift OHIP code sheets that you
          capture in the app, the encounters and OHIP billing codes extracted from those photographs,
          the billed amounts the app computes, and any annotations or edits you apply. Patient initials
          may appear on the source sheets you upload; the app does not store names or other
          directly-identifying patient information.
        </p>
        <p>
          <strong>Device and diagnostic information.</strong> Device model, OS version, app version,
          locale, time zone, anonymous device identifier, and (if you allow notifications) your Expo
          push notification token. Crash reports and performance traces from the app and our backend
          servers, used to diagnose errors.
        </p>
        <p>
          <strong>Usage analytics.</strong> Product-analytics events about how you interact with the
          app (screens viewed, actions taken, feature usage) and session recordings on a 10% sample
          rate (100% on sessions that encounter an error). These events do not include patient
          information.
        </p>
        <p>
          We do not collect biometric data, precise location, contacts, advertising identifiers, or
          health information about you personally.
        </p>
      </Section>

      <Section title="HOW WE USE INFORMATION">
        <p>
          <strong>To operate the service:</strong> sign you in, store your shifts and profile, extract
          encounters from your photos using a vision model, price encounters against the published
          Ontario Schedule of Benefits, and return summaries you can edit, save, and export.
        </p>
        <p>
          <strong>To improve reliability and quality:</strong> diagnose crashes, monitor performance,
          and understand which features are useful. Vision-extraction errors are sometimes reviewed by
          our engineers (without patient identifiers) to improve accuracy.
        </p>
        <p>
          <strong>To communicate with you:</strong> deliver push notifications you have opted into
          (e.g. &ldquo;your shift summary is ready&rdquo;) and respond to support requests.
        </p>
        <p>
          We do <em>not</em> use your information to train third-party AI models. We do <em>not</em>{' '}
          sell or rent personal information. We do <em>not</em> display advertising.
        </p>
      </Section>

      <Section title="THIRD-PARTY PROCESSORS">
        <p>
          We rely on the following service providers, each contractually bound to process information
          only on our instructions. Information shared with each is limited to what the named function
          requires.
        </p>
        <p>
          <strong>Supabase</strong> (PostgreSQL hosting + authentication, ca-central-1 / Montréal).
          Stores your account, profile, shifts, device tokens, and uploaded sheets.
        </p>
        <p>
          <strong>Anthropic</strong> (Claude vision model, hosted in the United States). Processes
          uploaded photographs to extract encounters and codes. Anthropic states it does not train its
          models on API content. Information is transient — Anthropic does not durably store the
          photographs we send.
        </p>
        <p>
          <strong>Google Cloud Platform</strong> (Cloud Run + Secret Manager, northamerica-northeast1 /
          Montréal). Hosts our backend service.
        </p>
        <p>
          <strong>PostHog</strong> (product analytics + session replay, United States data residency).
          Receives usage events and replays. No patient information is sent.
        </p>
        <p>
          <strong>Sentry</strong> (error and performance monitoring, United States). Receives crash
          reports, stack traces, and request metadata. No patient information is sent.
        </p>
        <p>
          <strong>Pydantic Logfire</strong> (server-side observability, United States). Receives
          backend traces and structured logs.
        </p>
        <p>
          <strong>Expo</strong> (push notification delivery, United States). Receives your push token
          and the title/body/payload of any push we send. Push titles and bodies are generic; specific
          content is loaded only after you open the app.
        </p>
      </Section>

      <Section title="WHERE INFORMATION IS STORED">
        <p>
          Your account, profile, shifts, and uploaded images are stored in Supabase&apos;s Montréal
          (ca-central-1) region. Backend services run in Google Cloud&apos;s Montréal
          (northamerica-northeast1) region. Both keep your primary data in Canada.
        </p>
        <p>
          Diagnostic and analytics data (PostHog, Sentry, Logfire, Expo) is stored in the United
          States, in accordance with each provider&apos;s data-processing terms. These services receive no
          patient information.
        </p>
      </Section>

      <Section title="HOW LONG WE KEEP INFORMATION">
        <p>
          We retain your account and shifts for as long as your account remains active. You can request
          deletion at any time by writing to info@matmul.io, and we will action the request within 30
          days. After deletion, anonymous aggregate counts of usage may remain in our analytics
          systems indefinitely.
        </p>
        <p>
          Backups of our database are retained for 30 days after deletion before being permanently
          purged.
        </p>
      </Section>

      <Section title="YOUR RIGHTS">
        <p>You have the right to:</p>
        <p>
          <strong>Access</strong> the personal information we hold about you, and to receive a copy in
          a portable format.
        </p>
        <p>
          <strong>Correct</strong> information that is inaccurate. Most fields are editable directly in
          the app.
        </p>
        <p>
          <strong>Delete</strong> your account and the information associated with it. The Profile
          screen includes an in-app account deletion option; you can also email info@matmul.io.
        </p>
        <p>
          <strong>Withdraw consent</strong> for non-essential processing (analytics, notifications).
          Settings in the app and your device let you toggle these.
        </p>
        <p>
          If you believe we have not handled your information appropriately, you can complain to the
          Office of the Information and Privacy Commissioner of Ontario (IPC) at{' '}
          <a className="link-accent" href="https://www.ipc.on.ca/">ipc.on.ca</a>.
        </p>
      </Section>

      <Section title="SECURITY">
        <p>
          We use industry-standard safeguards: TLS for all network traffic, row-level access controls
          in our database, encrypted storage at rest, and strict service-account isolation. Application
          and infrastructure secrets are managed in Google Cloud Secret Manager and never embedded in
          source code or logs.
        </p>
        <p>
          No system is perfectly secure. If we ever experience a privacy breach that affects your
          information, we will notify you and, where required, the IPC under PHIPA.
        </p>
      </Section>

      <Section title="CHILDREN">
        <p>
          Rounds is a tool for licensed physicians. We do not knowingly collect information from anyone
          under the age of 18. If you believe a minor has provided us information, please contact
          info@matmul.io and we will delete it.
        </p>
      </Section>

      <Section title="CHANGES TO THIS POLICY">
        <p>
          We may update this policy from time to time. When we make material changes, we will notify
          you in the app, by email, or both, and update the &ldquo;Updated&rdquo; date at the top of this page.
        </p>
      </Section>

      <Section title="CONTACT">
        <p>
          Questions, requests, or complaints regarding this policy or your information:{' '}
          <a className="link-accent" href="mailto:info@matmul.io">info@matmul.io</a>.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-dim)' }}>
          matmul inc. is a Canadian corporation. This policy is governed by the laws of the Province of
          Ontario and the federal laws of Canada applicable therein.
        </p>
      </Section>
    </>
  );
}
