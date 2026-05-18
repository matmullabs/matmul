import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rounds — End-of-shift OHIP billing for physicians',
  description:
    'A productivity app for Ontario physicians. Photograph your end-of-shift sheet, see every encounter priced against the Ontario Schedule of Benefits, in seconds.',
  openGraph: {
    title: 'Rounds — End-of-shift OHIP billing for physicians',
    description:
      'Photograph your end-of-shift sheet, see every encounter priced against the Ontario Schedule of Benefits, in seconds.',
    url: 'https://matmul.io/rounds',
    siteName: 'Rounds',
    locale: 'en_CA',
    type: 'website',
  },
};

const bodyStyle = { color: 'var(--text)', opacity: 0.75, maxWidth: '40rem', fontSize: '15px', lineHeight: 1.9 };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="page-pad pb-10 sm:pb-14">
      <div className="section-label" style={{ marginBottom: '1.5rem' }}>
        {title}
      </div>
      <div className="flex flex-col gap-4" style={bodyStyle}>
        {children}
      </div>
    </section>
  );
}

const stepLabelStyle = {
  fontSize: '14px',
  color: 'var(--accent)',
  fontVariantNumeric: 'tabular-nums' as const,
  flexShrink: 0,
  width: '1.5rem',
};

function Step({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex" style={{ gap: '1rem', alignItems: 'flex-start' }}>
      <span style={stepLabelStyle}>{num}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '15px' }}>{title}</div>
        <div style={{ color: 'var(--text)', opacity: 0.7, fontSize: '15px', lineHeight: 1.85 }}>{children}</div>
      </div>
    </div>
  );
}

export default function RoundsHome() {
  return (
    <>
      <section className="page-pad reveal pt-16 sm:pt-24 pb-8 sm:pb-12">
        <p style={{ fontSize: '14px', color: 'var(--text)', opacity: 0.5, marginBottom: '0.75rem' }}>
          For Ontario physicians
        </p>
        <h1
          style={{
            fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
            lineHeight: 1.3,
            fontWeight: 700,
            color: 'var(--accent)',
            textWrap: 'balance',
          }}
        >
          Bill smarter at the end of every shift.
        </h1>
        <p
          style={{
            color: 'var(--text)',
            opacity: 0.75,
            marginTop: '1.5rem',
            fontSize: '17px',
            lineHeight: 1.7,
            maxWidth: '38rem',
          }}
        >
          Rounds turns a photo of your end-of-shift code sheet into a priced summary in seconds. See
          every patient encounter against the published Ontario Schedule of Benefits, catch typos
          and missing codes, and submit to MOH with confidence in your numbers.
        </p>
      </section>

      <Section title="HOW IT WORKS">
        <Step num="01" title="Photograph the sheet">
          Tap the camera. Rounds captures every page in seconds. Glare and slight curl are fine —
          the model handles real-world conditions.
        </Step>
        <Step num="02" title="See it priced">
          Every OHIP code is extracted, grouped by patient encounter, and priced against the
          published Schedule of Benefits. The total updates as you flip through encounters.
        </Step>
        <Step num="03" title="Review and save">
          Edit anything the model missed. Save the shift. Submit to MOH the way you always have —
          but now you know what each shift earned the moment it ended.
        </Step>
      </Section>

      <Section title="WHO IT'S FOR">
        <p>
          Rounds is built for physicians registered with the College of Physicians and Surgeons of
          Ontario (CPSO) who bill OHIP. It's most useful for ER, hospitalist, and inpatient
          physicians who fill out end-of-shift code sheets.
        </p>
        <p>
          On first launch, Rounds verifies your CPSO registration from the{' '}
          <a
            className="link-accent"
            href="https://www.cpso.on.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            public CPSO Doctor Search
          </a>{' '}
          and pulls your hospital privileges so you can switch hospitals in one tap.
        </p>
      </Section>

      <Section title="BUILT FOR PRIVACY">
        <p>
          Your account, profile, shifts, and uploaded sheets are stored in Canada (Montréal). We
          don't sell, rent, or share your information. We don't display advertising. We don't use
          your data to train AI models.
        </p>
        <p>
          Read the full{' '}
          <a className="link-accent" href="/rounds/privacy">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a className="link-accent" href="/rounds/terms">
            Terms of Service
          </a>
          .
        </p>
      </Section>

      <Section title="EARLY ACCESS">
        <p>
          Rounds is in private beta. If you're an Ontario physician who'd like to try it, email{' '}
          <a className="link-accent" href="mailto:hello@matmul.io">
            hello@matmul.io
          </a>{' '}
          with your name and CPSO number and we'll send you a TestFlight invite.
        </p>
      </Section>

      <Section title="SUPPORT">
        <p>
          Already using Rounds and need help? See{' '}
          <a className="link-accent" href="/rounds/support">
            /rounds/support
          </a>{' '}
          or email{' '}
          <a className="link-accent" href="mailto:hello@matmul.io">
            hello@matmul.io
          </a>
          .
        </p>
      </Section>
    </>
  );
}
