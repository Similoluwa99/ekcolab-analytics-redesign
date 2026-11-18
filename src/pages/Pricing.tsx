import { Accordion } from '../components/Accordion'
import { ButtonLink, Eyebrow, PageHero, TextLink } from '../components/Ui'
import { faqs, site } from '../data/content'

const subscriptionFacts = [
  ['Subscription period', 'Monthly or annual, as described in the published terms.'],
  ['Fees', 'Non-refundable; prices exclude taxes and users are responsible for additional taxes such as VAT.'],
  ['Payment', 'Stripe or other payment systems, subject to their terms.'],
  ['Cancellation', 'Only on the day of expiry of the current plan, via the subscription panel.'],
  ['Field analysts', 'Organization Basic: up to 5. Organization Premium: up to 10. (Published FAQ.)'],
  ['Number of analyses', 'Depends on the subscription plan. No limits are published on the site.'],
  ['Data ownership', 'Users retain full ownership of submitted data; CSV export can be requested by email.'],
]

export function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & access"
        title="What is free, and what needs a subscription"
        lead="The open Community Risk Explorer is available without an account. Account features and subscription terms are described publicly, but prices are not published."
        plain
        actions={<><ButtonLink to={site.explorerUrl}>Explore the open data</ButtonLink><ButtonLink to="/contact" variant="secondary">Ask about plans</ButtonLink></>}
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><Eyebrow>Two levels of access</Eyebrow><h2>Explore freely. Analyse with an account.</h2></div>
            <p className="body-text">This resolves the apparent tension between “open-access” language in the hero and the subscription terms in the FAQ.</p>
          </div>
          <div className="access-grid">
            <div className="access-card">
              <span className="access-card__label">Open access</span>
              <h3>Community Risk Explorer</h3>
              <p>Free to view, with no sign-up. Use the map, filters and published methodology statement.</p>
              <ul>
                <li>Community-level risk indicators</li>
                <li>Field documentation and recommendations in reports</li>
                <li>Data integrity and limitations statement</li>
              </ul>
              <div style={{ marginTop: 'auto', paddingTop: 28 }}><TextLink to={site.explorerUrl} external>Open the live Explorer</TextLink></div>
            </div>
            <div className="access-card access-card--accent">
              <span className="access-card__label">Account & subscription</span>
              <h3>Run your own assessments</h3>
              <p>Collect field data, manage analysts and generate reports inside the platform.</p>
              <ul>
                <li>Individual / student and organisation account types are presented</li>
                <li>Organisation teams can add field analysts</li>
                <li>Training is available for individuals and organisations</li>
              </ul>
              <div style={{ marginTop: 'auto', paddingTop: 28 }}><TextLink to="/contact">Ask for current pricing</TextLink></div>
            </div>
          </div>
          <div className="callout" style={{ marginTop: 30 }}>
            <b>!</b>
            <div><strong>No prices are published</strong><p>The redesign deliberately does not invent plan prices or feature limits. Contact EKCÖLAB for current subscription details.</p></div>
          </div>
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <div className="section-head">
            <div><Eyebrow>Published terms</Eyebrow><h2>Subscription facts from the terms and FAQ</h2></div>
            <p className="body-text">Summarised for clarity. The full legal documents are linked from Resources and the footer.</p>
          </div>
          <div className="feature-list">
            {subscriptionFacts.map(([label, value]) => (
              <div className="feature-list__item" key={label}>
                <b>{label}</b>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><Eyebrow>Common questions</Eyebrow><h2>Access and fieldwork</h2></div>
            <p className="body-text">Answers reflect the current public FAQ, including the 30-minute inactivity timeout.</p>
          </div>
          <Accordion items={faqs.slice(0, 7)} />
        </div>
      </section>

      <section className="section section--sage">
        <div className="container cta-band__inner">
          <Eyebrow>Take the next step</Eyebrow>
          <h2 style={{ marginTop: 16 }}>Start open, then talk about what you need.</h2>
          <p style={{ marginTop: 16 }}>Explore the live data first. When you need run your own assessments, ask EKCÖLAB about training, plans and organisation accounts.</p>
          <div className="cta-band__actions">
            <ButtonLink to={site.explorerUrl} external>Explore the data</ButtonLink>
            <ButtonLink to="/contact" variant="secondary">Ask about access</ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
