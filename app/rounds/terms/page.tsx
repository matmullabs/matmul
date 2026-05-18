import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rounds — Terms of Service',
  description:
    'Terms governing use of the Rounds app by matmul inc. — a financial-management and productivity app for physicians.',
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

export default function TermsPage() {
  return (
    <>
      <section className="page-pad reveal pt-16 sm:pt-24 pb-8 sm:pb-12">
        <p style={{ fontSize: '14px', color: 'var(--text)', opacity: 0.5, marginBottom: '0.75rem' }}>
          Rounds — Terms of Service
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
          The agreement between you and matmul when you use Rounds.
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

      <Section num="1" title="ACCEPTANCE">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Rounds
          mobile application and related services (the &ldquo;Service&rdquo;), operated by matmul
          inc. (&ldquo;matmul&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By creating an account
          or using the Service, you agree to these Terms and to our{' '}
          <a className="link-accent" href="/rounds/privacy">Privacy Policy</a>. If you do not
          agree, do not use the Service.
        </p>
      </Section>

      <Section num="2" title="WHO CAN USE ROUNDS">
        <p>
          The Service is intended for physicians who hold a current registration with the College
          of Physicians and Surgeons of Ontario (CPSO) and practice in Ontario, Canada. By using
          the Service you represent that you are such a physician, that the CPSO number and last
          name you provide are your own, and that you have the legal capacity to enter into these
          Terms.
        </p>
      </Section>

      <Section num="3" title="YOUR ACCOUNT">
        <p>
          You are responsible for keeping your sign-in email and the device you use to access the
          Service secure. Activity that occurs under your account is your responsibility. You
          agree to provide accurate, current information during onboarding and to update your
          profile when material details change (e.g. a hospital you no longer bill at).
        </p>
      </Section>

      <Section num="4" title="ACCEPTABLE USE">
        <p>You agree not to:</p>
        <p>
          (a) use the Service for any purpose that is unlawful or that violates the rights of
          others (including the rights of patients whose information appears on sheets you
          upload);
          <br />
          (b) reverse-engineer, decompile, or attempt to extract the source code of the Service,
          except to the limited extent applicable law permits;
          <br />
          (c) probe, scan, or test the security of the Service, or attempt to bypass any
          authentication or access controls;
          <br />
          (d) resell, sublicense, or otherwise commercially exploit the Service;
          <br />
          (e) upload content that contains malware, viruses, or harmful code, or that you do not
          have the right to upload.
        </p>
      </Section>

      <Section num="5" title="WHAT ROUNDS DOES AND DOES NOT GUARANTEE">
        <p>
          Rounds extracts OHIP billing codes from photographs of your end-of-shift sheets and
          prices them against the published Ontario Schedule of Benefits. The computed total is{' '}
          <strong>
            an estimate of what those codes would pay if submitted as written, based on the public
            Schedule
          </strong>
          .
        </p>
        <p>
          <strong>Rounds does not guarantee that:</strong>
        </p>
        <p>
          (a) the OHIP codes extracted from a photograph exactly match what you wrote on the
          sheet;
          <br />
          (b) the amount the Ontario Ministry of Health (MOH) ultimately adjudicates or pays will
          equal the amount Rounds computed;
          <br />
          (c) the Schedule of Benefits data cached in the app is current at the moment of any
          particular submission.
        </p>
        <p>
          <strong>You are solely responsible</strong> for what you submit to MOH. Before
          submitting any claim, review the extracted codes and computed totals in the app, edit
          where they do not match your sheet, and apply your own clinical and professional
          judgment about whether the submission is correct, complete, and ethical. Rounds is a
          tool to help you do that review faster; it is not a replacement for that review.
        </p>
      </Section>

      <Section num="6" title="NOT MEDICAL OR LEGAL ADVICE">
        <p>
          Rounds does not provide medical, clinical, tax, accounting, or legal advice. The
          Service is a productivity and financial-management tool for tracking and reconciling
          your billing — nothing in the app should be relied on for clinical decisions, tax
          treatment of professional income, or for OHIP appeal proceedings.
        </p>
      </Section>

      <Section num="7" title="YOUR CONTENT">
        <p>
          You retain ownership of the photographs you upload, the codes and totals saved on your
          shifts, and any edits or annotations you apply (your &ldquo;Content&rdquo;).
        </p>
        <p>
          You grant matmul a worldwide, non-exclusive, royalty-free license to host, store,
          process, transmit, display, and otherwise use your Content solely to operate and
          improve the Service for you. This license ends when you delete the relevant Content or
          your account, except as needed to honour ongoing legal obligations or for backup
          purposes described in our{' '}
          <a className="link-accent" href="/rounds/privacy">Privacy Policy</a>.
        </p>
        <p>
          You represent that you have the right to upload your Content and that doing so does not
          violate any law, contractual obligation, or third-party right.
        </p>
      </Section>

      <Section num="8" title="OUR INTELLECTUAL PROPERTY">
        <p>
          The Service — including its source code, vision-extraction prompts and models, design,
          brand, and any improvements or derivative works thereof — is owned by matmul or its
          licensors and is protected by Canadian and international intellectual property laws.
          These Terms do not transfer any rights in the Service to you beyond the limited right
          to use it as permitted.
        </p>
      </Section>

      <Section num="9" title="SUSPENSION AND TERMINATION">
        <p>
          You may stop using the Service and request deletion of your account at any time (see
          the Privacy Policy). We may suspend or terminate your access if we reasonably believe
          you have breached these Terms or applicable law, or if continued access would expose
          matmul or other users to legal or operational risk. Where practical we will give notice
          before suspending or terminating; for serious breaches we may act without prior notice.
        </p>
        <p>
          Sections 5, 6, 8, 10, 11, 12, and 13 survive termination.
        </p>
      </Section>

      <Section num="10" title="DISCLAIMER OF WARRANTIES">
        <p>
          To the maximum extent permitted by law, the Service is provided{' '}
          <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong> without warranties
          of any kind, express or implied, including warranties of merchantability, fitness for a
          particular purpose, non-infringement, accuracy, completeness, or uninterrupted
          availability. We do not warrant that the Service will be error-free, that defects will
          be corrected, or that the Service will be free of viruses or harmful components.
        </p>
      </Section>

      <Section num="11" title="LIMITATION OF LIABILITY">
        <p>
          To the maximum extent permitted by law, neither matmul nor its directors, officers,
          employees, or contractors will be liable for any indirect, incidental, special,
          consequential, exemplary, or punitive damages, or for any loss of profit, revenue,
          data, business opportunity, or goodwill, arising out of or in connection with your use
          of the Service — even if we have been advised of the possibility of such damages.
        </p>
        <p>
          Our total aggregate liability arising out of or related to these Terms or the Service
          will not exceed CAD $100. Nothing in these Terms limits any liability that cannot be
          limited under applicable law (including liability for gross negligence, fraud, or
          intentional misconduct).
        </p>
      </Section>

      <Section num="12" title="INDEMNIFICATION">
        <p>
          You agree to indemnify and hold matmul and its affiliates, directors, officers,
          employees, and contractors harmless from any claim, demand, loss, or expense
          (including reasonable legal fees) arising out of or related to (a) your breach of these
          Terms, (b) your use of the Service, (c) any submission you make to MOH or any other
          party based on output of the Service, or (d) your violation of any law or third-party
          right.
        </p>
      </Section>

      <Section num="13" title="GOVERNING LAW AND DISPUTE RESOLUTION">
        <p>
          These Terms and your use of the Service are governed by the laws of the Province of
          Ontario and the federal laws of Canada applicable there, without regard to conflict-of-law
          principles. You agree that the courts located in Toronto, Ontario have exclusive
          jurisdiction over any dispute arising out of or related to these Terms or the Service.
        </p>
      </Section>

      <Section num="14" title="CHANGES TO THESE TERMS">
        <p>
          We may update these Terms from time to time. When we make material changes we will
          notify you in the app, by email, or both, and update the &ldquo;Last updated&rdquo;
          date at the top of this page. Your continued use of the Service after changes take
          effect constitutes acceptance of the revised Terms.
        </p>
      </Section>

      <Section num="15" title="CONTACT">
        <p>
          Questions about these Terms:{' '}
          <a className="link-accent" href="mailto:hello@matmul.io">hello@matmul.io</a>.
        </p>
      </Section>
    </>
  );
}
