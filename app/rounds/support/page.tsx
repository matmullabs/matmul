import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rounds — Support',
  description: 'Get help with Rounds, the physician billing app by matmul inc.',
};

const labelStyle = { color: 'var(--text-dim)', flexShrink: 0, width: '5.5rem', textTransform: 'uppercase' as const, letterSpacing: '0.1em', fontSize: '12px' };
const valueStyle = { color: 'var(--text)', opacity: 0.7 };
const bodyStyle = { color: 'var(--text)', opacity: 0.75, maxWidth: '40rem', fontSize: '15px', lineHeight: 1.9 };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="page-pad pb-10 sm:pb-14">
      <div className="section-label" style={{ marginBottom: '1.5rem' }}>{title}</div>
      <div className="flex flex-col gap-4" style={bodyStyle}>{children}</div>
    </section>
  );
}

export default function SupportPage() {
  return (
    <>
      <section className="page-pad reveal pt-16 sm:pt-24 pb-8 sm:pb-12">
        <p style={{ fontSize: '14px', color: 'var(--text)', opacity: 0.5, marginBottom: '0.75rem' }}>
          Rounds — Support
        </p>
        <h1 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', lineHeight: 1.4, fontWeight: 700, color: 'var(--accent)', textWrap: 'balance' }}>
          We&apos;re a small team. We&apos;ll get back to you within one business day.
        </h1>
      </section>

      <section className="page-pad reveal reveal-d2 pb-10 sm:pb-16" style={{ fontSize: '14px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
          {[
            ['Email', <a key="e" href="mailto:hello@matmul.io" className="link-accent">hello@matmul.io</a>],
            ['Response', 'Usually within one business day. Often faster.'],
            ['Hours', 'Monday–Friday, 9am–6pm Eastern (Toronto)'],
            ['Privacy', <a key="p" href="/rounds/privacy" className="link-accent">/rounds/privacy</a>],
          ].map(([key, value], i) => (
            <div key={i} className="flex gap-3 sm:gap-6" style={{ lineHeight: 1.85 }}>
              <span style={labelStyle} className="sm:w-28">{key}</span>
              <span style={valueStyle}>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <Section title="WHAT TO INCLUDE">
        <p>
          The more context you give us up front, the faster we can help. When emailing about a
          problem, please mention:
        </p>
        <p>
          <strong>What you were trying to do.</strong> &ldquo;I uploaded six sheets from a Saturday shift and
          the total came out wrong&rdquo; is more useful than &ldquo;the math is off.&rdquo;
        </p>
        <p>
          <strong>The shift date</strong> the problem relates to, if any. We can look up that shift in
          our system and reproduce the issue.
        </p>
        <p>
          <strong>Device + app version.</strong> Settings → About in the app shows both. We support iOS
          17 and later.
        </p>
        <p>
          <strong>Screenshots or screen recordings.</strong> If a screen looked wrong, a picture saves
          a lot of back-and-forth.
        </p>
      </Section>

      <Section title="COMMON ISSUES">
        <p>
          <strong>Sign-in code didn&apos;t arrive.</strong> Check your spam folder. Codes expire after 1
          hour; request a new one if the old one stopped working. If the email never arrives at all,
          email us with the address you used.
        </p>
        <p>
          <strong>Sheet wasn&apos;t extracted correctly.</strong> Photos work best in good light, with the
          sheet flat (no curl), filling most of the frame. If extraction still fails, you can edit
          encounters in the review screen before saving, or email us the photo and we&apos;ll investigate
          (your patient identifiers will not be shared with third parties).
        </p>
        <p>
          <strong>Wrong code priced.</strong> Rounds prices against the published Ontario Schedule of
          Benefits. If a code is missing or the price seems wrong, email us the code and the date —
          schedules update periodically and we may have caught a stale entry.
        </p>
        <p>
          <strong>Account deletion.</strong> Email hello@matmul.io. We will action the request
          within 30 days; backups are purged 30 days later. An in-app deletion option is on the
          roadmap.
        </p>
      </Section>

      <Section title="WE DO NOT PROVIDE">
        <p>
          <strong>Medical advice.</strong> Rounds is a billing tool. Clinical decisions are yours.
        </p>
        <p>
          <strong>Tax or accounting advice.</strong> We compute what an OHIP submission would pay
          against the published schedule; how you treat that for tax purposes is between you and your
          accountant.
        </p>
        <p>
          <strong>OHIP appeal services.</strong> If MOH adjusts or rejects a code, we can help you
          understand <em>what</em> Rounds computed, but we don&apos;t represent physicians in disputes with
          the Ministry.
        </p>
      </Section>
    </>
  );
}
