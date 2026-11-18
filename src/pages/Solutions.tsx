import { ButtonLink, Eyebrow, ImageFrame, PageHero, TextLink } from '../components/Ui'
import { audiences, site } from '../data/content'

export function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="The right entry point for your organisation"
        lead="Different users ask different questions of the same local evidence. Choose a pathway to see what the platform can support, and what to do next."
        image="/images/community-gathering.webp"
        alt="A group of adults and children gathered outdoors for a community meeting. Illustrative stock photograph."
        actions={<><ButtonLink to="/community-risk-explorer">Explore the data</ButtonLink><ButtonLink to="/contact" variant="secondary">Talk to the team</ButtonLink></>}
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><Eyebrow>Five pathways</Eyebrow><h2>Who the platform serves</h2></div>
            <p className="body-text">Every pathway starts from the same principle: local observations should be visible, usable and connected to decisions.</p>
          </div>
          <div className="audience-grid">
            {audiences.map((audience, index) => (
              <article className={`audience-card ${index < 2 ? 'audience-card--large' : 'audience-card--small'}`} key={audience.slug}>
                <div className="audience-card__media"><img src={audience.image} alt={audience.alt} loading="lazy" decoding="async" /></div>
                <div className="audience-card__body">
                  <span className="tag tag--sage" style={{ alignSelf: 'flex-start' }}>{audience.short}</span>
                  <h3 style={{ marginTop: 14 }}>{audience.name}</h3>
                  <p>{audience.summary}</p>
                  <TextLink to={`/solutions/${audience.slug}`}>{audience.next}</TextLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--off">
        <div className="container split">
          <ImageFrame src="/images/field-recording.webp" alt="A participant taking notes during a session in Burundi. Illustrative stock photograph." className="split__media" hover />
          <div>
            <Eyebrow>Not sure where to start?</Eyebrow>
            <h2 style={{ marginTop: 16 }}>Begin with the open data</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              The Community Risk Explorer requires no account. It is the simplest way to understand what community-level indicators look like before deciding whether to train analysts or run your own assessments.
            </p>
            <ol className="numbered-list" style={{ marginTop: 28 }}>
              <li><b>1</b><div><strong>Explore an existing community report</strong><p>Use the live map and filters to see the structure of the published indicators.</p></div></li>
              <li><b>2</b><div><strong>Read the data integrity statement</strong><p>Understand validation, thresholds and limitations before interpreting values.</p></div></li>
              <li><b>3</b><div><strong>Choose a pathway or contact the team</strong><p>Ask about training, sponsorship, pilots or access for your organisation.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-band__inner">
          <Eyebrow>Work together</Eyebrow>
          <h2 style={{ marginTop: 16 }}>Have a different use case?</h2>
          <p className="body-text" style={{ marginTop: 16 }}>Universities, research institutes, government agencies and international NGOs can explore structured collaboration, sponsored pilots or joint grant applications.</p>
          <div className="hero__actions"><ButtonLink to="/contact">Get in touch</ButtonLink><ButtonLink to={site.partnershipUrl} variant="secondary" external>Partnership form</ButtonLink></div>
        </div>
      </section>
    </>
  )
}
