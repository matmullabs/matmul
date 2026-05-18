import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rounds — Privacy Policy',
  description:
    'How Rounds, a financial-management and productivity app for physicians by matmul inc., collects, uses, and protects information.',
};

const LAST_UPDATED = 'May 17, 2026';

const labelStyle = {
  color: 'var(--text-dim)',
  flexShrink: 0,
  width: '5.5rem',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.1em',
  fontSize: '12px',
};
const valueStyle = { color: 'var(--text)', opacity: 0.7 };
const bodyStyle = { color: 'var(--text)', opacity: 0.75, maxWidth: '40rem', fontSize: '15px', lineHeight: 1.9 };

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="page-pad pb-10 sm:pb-14">
      <div className="section-label" style={{ marginBottom: '1.5rem' }}>
        {num}. {title}
      </div>
      <div className="flex flex-col gap-4" style={bodyStyle}>
        {children}
      </div>
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
        <h1
          style={{
            fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
            lineHeight: 1.4,
            fontWeight: 700,
            color: 'var(--accent)',
            textWrap: 'balance',
          }}
        >
          How we handle the information you share with Rounds.
        </h1>
      </section>

      <section className="page-pad reveal reveal-d2 pb-10 sm:pb-16" style={{ fontSize: '14px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
          {[
            ['Operator', 'matmul inc. (Ontario, Canada)'],
            ['Product', 'Rounds — financial-management and productivity app for physicians'],
            ['Last updated', LAST_UPDATED],
            ['Contact', <a key="c" href="mailto:hello@matmul.io" className="link-accent">hello@matmul.io</a>],
          ].map(([key, value], i) => (
            <div key={i} className="flex gap-3 sm:gap-6" style={{ lineHeight: 1.85 }}>
              <span style={labelStyle} className="sm:w-28">
                {key}
              </span>
              <span style={valueStyle}>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <Section num="1" title="SCOPE">
        <p>
          This Privacy Policy describes how matmul inc. (&ldquo;matmul&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) collects, uses, shares, and protects personal information of users
          (&ldquo;you&rdquo;) of the Rounds iOS application. Rounds helps physicians track shifts,
          reconcile end-of-shift billing sheets against the Ontario Schedule of Benefits, and
          understand what each shift earned.
        </p>
        <p>
          This policy is governed by the federal{' '}
          <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and the
          laws of the Province of Ontario.
        </p>
      </Section>

      <Section num="2" title="INFORMATION WE COLLECT">
        <p>
          <strong>Account.</strong> Your email address, used to receive a one-time sign-in code.
        </p>
        <p>
          <strong>CPSO verification.</strong> You provide your CPSO registration number and last
          name. We use them to look up your profile in the{' '}
          <a className="link-accent" href="https://www.cpso.on.ca/" target="_blank" rel="noopener noreferrer">
            public CPSO Doctor Search registry
          </a>{' '}
          and store the returned record so we can render your credentials and hospital privileges
          without re-scraping. The record contains your name, specialties, registration history,
          languages, hospital privileges, and any business locations or professional corporation
          details the CPSO publishes about you. We do not edit or augment the record.
        </p>
        <p>
          <strong>Profile preferences.</strong> The subset of your CPSO-listed hospitals where you
          actually bill, the hospital you currently bill from, and your monthly target number of
          shifts. All set by you in the app.
        </p>
        <p>
          <strong>Shift content.</strong> Photographs of your end-of-shift billing sheets, OHIP
          billing codes our model extracts from those photographs, the billed amounts the app
          computes against the Ontario Schedule of Benefits, and any annotations or edits you
          apply. Our model is configured to extract only OHIP billing codes (format{' '}
          <code>[A-Z]NNN</code>) and a positional row label if visible (e.g. &ldquo;Pt 3&rdquo;);
          it does not extract free-form text, names, dates, or identifiers, and we do not store
          those as structured data. The source photographs themselves are stored as you captured
          them — if you wrote initials, names, or other identifiers on the sheet, those visual
          marks remain in the photo until you delete the shift.
        </p>
        <p>
          <strong>Device and push.</strong> Device model, OS version, app version, locale, time
          zone, and a stable per-device identifier issued by your operating system. If you allow
          notifications, the Expo push token issued to your device.
        </p>
        <p>
          <strong>Diagnostics and analytics.</strong> Crash reports, performance traces, and
          product-analytics events (screens viewed, features used). Session recordings at a 10%
          baseline sample rate, 100% on sessions that encounter an error. These streams do not
          include the content of your uploaded photographs.
        </p>
        <p>
          We do not collect biometric data, precise location, contacts, or advertising identifiers.
        </p>
      </Section>

      <Section num="3" title="HOW WE USE INFORMATION">
        <p>
          We use your information to operate the service (sign you in, store your shifts and
          preferences, extract codes from sheet photos, price them against the Ontario Schedule of
          Benefits, return summaries you can edit and save), to diagnose crashes and monitor
          performance, and to deliver push notifications you opt into.
        </p>
        <p>
          Today, notifications are limited to welcome messages and occasional product updates
          (release notes, new features). We will update this policy before sending any
          shift-related, billing-related, or other operational notifications.
        </p>
        <p>
          We do not use your information to train third-party AI models. We do not sell or rent
          personal information. We do not display advertising.
        </p>
      </Section>

      <Section num="4" title="HOW WE SHARE INFORMATION">
        <p>
          We share information only with service providers that help us deliver the app —
          including hosting and database providers, application monitoring and error-tracking
          services, an AI vision provider that extracts billing codes from your sheet photographs,
          a push-notification delivery service, and your authentication provider. Some of these
          providers process data in the United States. Each is contractually bound to{' '}
          <strong>
            provide the same or equal protection of user data as stated in this policy
          </strong>{' '}
          and to process information only on our instructions.
        </p>
        <p>
          We will disclose information when required by law or to enforce our agreements, protect
          our rights, or respond to lawful requests from regulators or law enforcement.
        </p>
        <p>
          We do not share your information with parties unrelated to operating Rounds.
        </p>
      </Section>

      <Section num="5" title="STORAGE, RETENTION, AND DELETION">
        <p>
          Your account, profile, shifts, and uploaded photographs are stored in Canada
          (Montréal). Backend services run in Canada (Montréal). Diagnostic and analytics signals
          are processed by service providers in the United States.
        </p>
        <p>
          We retain information for as long as your account is active. To delete a specific shift
          (including its source photographs), or to delete your account and all associated
          information, email{' '}
          <a className="link-accent" href="mailto:hello@matmul.io">hello@matmul.io</a>; we will
          action the request within 30 days. In-app deletion is on our roadmap. Database backups
          containing your information are retained for 30 days after the deletion is actioned and
          then permanently purged.
        </p>
        <p>
          After deletion, anonymous, non-identifiable usage counts may remain in our analytics
          systems indefinitely.
        </p>
      </Section>

      <Section num="6" title="YOUR RIGHTS">
        <p>
          You have the right to <strong>access</strong> the personal information we hold about
          you, to <strong>correct</strong> inaccurate information (most fields are editable
          directly in the app), to <strong>delete</strong> your account and information (see
          Section 5), and to <strong>withdraw consent</strong> for non-essential processing such
          as analytics and push notifications using your device settings or by contacting us.
        </p>
        <p>
          If you believe we have not handled your information appropriately, you can complain to
          our Privacy Officer (Section 11) or to the Office of the Privacy Commissioner of Canada
          at <a className="link-accent" href="https://www.priv.gc.ca/">priv.gc.ca</a>.
        </p>
      </Section>

      <Section num="7" title="SECURITY">
        <p>
          We use industry-standard safeguards: TLS for all network traffic, row-level access
          controls in our database, encrypted storage at rest, strict service-account isolation,
          and secrets managed in a dedicated key-management service (never embedded in source
          code or logs). Access by matmul personnel is limited to authorized employees on a
          need-to-know basis.
        </p>
        <p>
          No system is perfectly secure. If a breach of security safeguards occurs that creates a
          real risk of significant harm to you, we will notify you and the relevant privacy
          commissioner as required by law.
        </p>
      </Section>

      <Section num="8" title="AUTOMATED PROCESSING">
        <p>
          Rounds uses an AI vision model to extract OHIP billing codes from photographs of your
          end-of-shift sheets. The model produces a structured list of codes and a computed total;
          it does <em>not</em> make decisions on your behalf — you review and edit the result
          before saving.
        </p>
      </Section>

      <Section num="9" title="CHILDREN">
        <p>
          Rounds is a tool for licensed physicians. We do not knowingly collect information from
          anyone under the age of 18. If you believe a minor has provided us information, please
          contact us and we will delete it.
        </p>
      </Section>

      <Section num="10" title="CHANGES TO THIS POLICY">
        <p>
          We may update this policy from time to time. When we make material changes, we will
          notify you in the app, by email, or both, and update the &ldquo;Last updated&rdquo; date
          at the top of this page.
        </p>
      </Section>

      <Section num="11" title="PRIVACY OFFICER">
        <p>
          Questions, requests, or complaints regarding this policy or your information:
        </p>
        <p>
          <strong>Marcel Anis, Privacy Officer</strong>
          <br />
          matmul inc.
          <br />
          <a className="link-accent" href="mailto:hello@matmul.io">hello@matmul.io</a>
        </p>
      </Section>
    </>
  );
}
