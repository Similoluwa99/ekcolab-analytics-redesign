import { ButtonLink, Eyebrow, ImageFrame, PageHero, SectionHead } from '../components/Ui'
import { site } from '../data/content'

export function Support() {
  return (
    <>
      <PageHero
        eyebrow="Support the work"
        title="Back open, community-level environmental evidence"
        lead="EKCÖLAB publishes a donation route on its current website. This concept page explains the options without recreating a payment flow."
        image="/images/farmland-aerial.webp"
        alt="Aerial view of farmland and a village in Kenya. Illustrative stock photograph."
        actions={<><ButtonLink to={site.donationUrl} external>Visit the donation page</ButtonLink><ButtonLink to="/contact" variant="secondary">Discuss a partnership</ButtonLink></>}
      />

      <section className="section">
        <div className="container split">
          <ImageFrame src="/images/community-pump.webp" alt="A young man using a community water pump. Illustrative stock photograph." className="split__media" hover />
          <div>
            <Eyebrow>Why support matters</Eyebrow>
            <h2 style={{ marginTop: 16 }}>Local evidence has a long way to travel</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Community-level observations can make water, sanitation and climate risks visible where broad monitoring stops. Training local analysts and keeping explorer data open are central to that work.
            </p>
            <p className="body-text" style={{ marginTop: 18 }}>
              The public website invites support for its mission and lists a donation page. Any payment should be made through that official page, not through this design concept.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <SectionHead eyebrow="Ways to contribute" title="Choose the route that fits" body="All external links lead to pages on the current EKCÖLAB Analytics website." />
          <div className="card-grid">
            <article className="info-card"><h3>Donate</h3><p>Use the organisation's published donation page. No payment is collected here.</p><ButtonLink to={site.donationUrl} variant="secondary" small external>Go to donation page</ButtonLink></article>
            <article className="info-card"><h3>Sponsor a pilot</h3><p>The site welcomes structured collaboration, sponsored pilots and joint grant applications.</p><ButtonLink to={site.partnershipUrl} variant="secondary" small external>Partnership enquiry</ButtonLink></article>
            <article className="info-card"><h3>Support training</h3><p>Training is offered to individuals and organisations; ask the team about current options.</p><ButtonLink to="/contact" variant="secondary" small>Ask about training</ButtonLink></article>
          </div>
        </div>
      </section>

      <section className="section section--sage">
        <div className="container cta-band__inner">
          <Eyebrow>Explore first</Eyebrow>
          <h2 style={{ marginTop: 16 }}>See the open data before you decide.</h2>
          <p style={{ marginTop: 16 }}>The Community Risk Explorer is available without an account.</p>
          <div className="cta-band__actions"><ButtonLink to="/community-risk-explorer">Explore the data</ButtonLink><ButtonLink to="/about" variant="secondary">About EKCÖLAB</ButtonLink></div>
        </div>
      </section>
    </>
  )
}
