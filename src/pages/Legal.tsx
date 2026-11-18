import { ButtonLink, PageHero, TextLink } from '../components/Ui'
import { site } from '../data/content'

export function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const isPrivacy = kind === 'privacy'
  const fullUrl = isPrivacy ? site.privacyUrl : site.termsUrl
  const title = isPrivacy ? 'Privacy policy, summarised' : 'Terms of service, summarised'

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        lead={isPrivacy
          ? 'A plain-language summary of the privacy policy published on the EKCÖLAB Analytics website. The published policy is the authoritative version.'
          : 'A plain-language summary of the terms published on the EKCÖLAB Analytics website. The published terms are the authoritative version.'}
        plain
        actions={<ButtonLink to={fullUrl} external>Read the full published document</ButtonLink>}
      />

      <section className="section">
        <div className="container legal-doc">
          <div className="callout">
            <b>i</b>
            <div><strong>Design concept notice</strong><p>This page is a readable summary created for the redesign. It is not a replacement for the legal documents published by EKCÖLAB, which were last updated on 24 June 2025.</p></div>
          </div>

          {isPrivacy ? (
            <>
              <h2>What information the policy covers</h2>
              <p>The published policy describes personal information (name, email, contact details, username, profile and payment details), non-personal information (browser, IP address, device and usage statistics) and user-generated analytical data.</p>
              <h2>How information is used</h2>
              <p>Stated uses include improving services and user experience, communicating news and support, analysing trends for community resilience, and preventing fraud.</p>
              <h2>Sharing and security</h2>
              <p>The policy says data is not sold, and describes disclosure for legal compliance or where a user elects to sell or share their own data. It states compliance with EU GDPR and Cameroonian data protection law, with SSL/TLS encryption, secure infrastructure, audits and access controls.</p>
              <h2>Rights and transfers</h2>
              <p>Users may access, correct or request deletion of personal data and unsubscribe from marketing. International transfers are described as subject to applicable laws such as GDPR and CCPA.</p>
            </>
          ) : (
            <>
              <h2>Services and eligibility</h2>
              <p>The terms describe community insights, risk and trend analysis, data aggregation and automated analysis, a customisable dashboard, rapid detection of WASH and environmental problems, and vulnerability reporting. Users must be 18 or over; organisations must be registered or provide a letter of recognition from a community leader, and must designate an admin.</p>
              <h2>Subscriptions and payment</h2>
              <p>Subscriptions are monthly or annual, fees are non-refundable, prices exclude taxes, and cancellation is only on the expiry day of the current plan through the subscription panel.</p>
              <h2>Data rights and export</h2>
              <p>Users retain full ownership of submitted data. CSV export can be requested by email through the platform support section. Users grant EKCÖLAB a non-exclusive licence to process data for service delivery.</p>
              <h2>Interpretation and liability</h2>
              <p>The terms state that analysis is for information purposes, is not guaranteed to be 100% accurate, and that users are responsible for results determined by the data and knowledge applied during collection.</p>
              <h2>Governing law</h2>
              <p>The terms are governed by the laws in force in Cameroon, and disputes are to be raised by email within 45 days.</p>
            </>
          )}

          <h2>Contact</h2>
          <p>Privacy-related inquiries and general questions can be sent to <a href={`mailto:${site.email}`} style={{ textDecoration: 'underline' }}>{site.email}</a>.</p>
          <div style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap', gap: 18 }}>
            <ButtonLink to={fullUrl} external>View published document</ButtonLink>
            <TextLink to={isPrivacy ? '/terms' : '/privacy'}>Read the {isPrivacy ? 'terms' : 'privacy'} summary</TextLink>
          </div>
        </div>
      </section>
    </>
  )
}
