import { ContactForm } from '../components/ContactForm'
import { ButtonLink, Eyebrow, PageHero, TextLink } from '../components/Ui'
import { site } from '../data/content'

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would like to hear from you"
        lead="Ask a question about the platform, request technical documentation, explore training or start a partnership conversation."
        plain
      />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <Eyebrow>Direct details</Eyebrow>
            <h2 style={{ marginTop: 16 }}>Reach the EKCÖLAB team</h2>
            <p className="body-text" style={{ marginTop: 18 }}>
              The details below are those published on the current EKCÖLAB Analytics website. This concept site does not replace them.
            </p>
            <div className="contact-details">
              <div><span>Location</span><strong>{site.location}</strong></div>
              <div><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
              <div><span>Telephone</span><a href={site.phoneHref}>{site.phone}</a></div>
              <div><span>Working hours</span><strong>{site.hours}</strong></div>
            </div>
            <div style={{ marginTop: 28 }}>
              <ul className="detail-list" style={{ marginTop: 0 }}>
                <li>Partnerships, sponsored pilots and joint grant applications</li>
                <li>Technical documentation, model specifications and validation statistics</li>
                <li>Training for individuals and organisations</li>
              </ul>
            </div>
            <div style={{ marginTop: 24 }}><TextLink to={site.partnershipUrl} external>Use the published partnership form</TextLink></div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section section--off">
        <div className="container cta-band__inner">
          <Eyebrow>Before you write</Eyebrow>
          <h2 style={{ marginTop: 16 }}>You may find the answer in the open data.</h2>
          <p className="body-text" style={{ marginTop: 16 }}>The Community Risk Explorer needs no account and includes a detailed statement on data integrity and limitations.</p>
          <div className="hero__actions"><ButtonLink to="/community-risk-explorer">Explore the Explorer</ButtonLink><ButtonLink to="/pricing" variant="secondary">Pricing & access</ButtonLink></div>
        </div>
      </section>
    </>
  )
}
