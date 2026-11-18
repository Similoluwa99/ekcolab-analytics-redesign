import { ReportPreview } from '../components/ProductMock'
import { ButtonLink, Eyebrow, PageHero, SectionHead, TextLink } from '../components/Ui'
import { imageCredits, site } from '../data/content'

const resources = [
  {
    title: 'Community Risk Explorer',
    body: 'The live, no-account tool for exploring community-level WASH and climate risk indicators.',
    label: 'Live tool',
    to: site.explorerUrl,
    external: true,
  },
  {
    title: 'Data integrity statement',
    body: 'Validation, indicator interpretation, climate context and limitations, published on the Explorer page.',
    label: 'Published methodology',
    to: `${site.explorerUrl}#data-integrity-methodology`,
    external: true,
  },
  {
    title: 'Partnership enquiry',
    body: 'The current site invites structured collaboration, sponsored pilots and joint grant applications.',
    label: 'Current form',
    to: site.partnershipUrl,
    external: true,
  },
  {
    title: 'Training enquiries',
    body: 'Training is offered for individuals and organisations. Ask the team about current options.',
    label: 'Contact',
    to: '/contact',
    external: false,
  },
  {
    title: 'Terms of service',
    body: 'Account eligibility, subscriptions, data rights, acceptable use and liability.',
    label: 'Published document',
    to: site.termsUrl,
    external: true,
  },
  {
    title: 'Privacy policy',
    body: 'Information collected, use and sharing, security measures and user rights.',
    label: 'Published document',
    to: site.privacyUrl,
    external: true,
  },
]

export function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Public information, clearly signposted"
        lead="Everything here is either a link to information published by EKCÖLAB or an honestly labelled illustration. No sample reports or datasets are invented."
        plain
        actions={<><ButtonLink to="/methodology">Read the methodology</ButtonLink><ButtonLink to="/contact" variant="secondary">Request documentation</ButtonLink></>}
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Useful links" title="Where to go next" body="External links open the current EKCÖLAB Analytics website." />
          <div className="card-grid">
            {resources.map((resource) => (
              <article className="info-card" key={resource.title}>
                <span className="tag tag--sage" style={{ alignSelf: 'flex-start' }}>{resource.label}</span>
                <h3 style={{ marginTop: 14 }}>{resource.title}</h3>
                <p>{resource.body}</p>
                <TextLink to={resource.to} external={resource.external}>Open resource</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--off">
        <div className="container report__grid">
          <ReportPreview />
          <div>
            <Eyebrow>Report structure</Eyebrow>
            <h2 style={{ marginTop: 16 }}>What a community report can contain</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Based on the published description, a report brings together risk metrics, field documentation and tailored recommendations. The preview opposite contains no real findings.
            </p>
            <ul className="detail-list">
              <li>Community-level risk themes and visual summaries</li>
              <li>Geolocated observations and field photographs</li>
              <li>Climate context and environmental conditions</li>
              <li>Recommended actions for discussion and planning</li>
            </ul>
            <p className="small" style={{ marginTop: 20 }}>No public sample report or case study is currently linked from the EKCÖLAB website.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><Eyebrow>Transparency</Eyebrow><h2>Photography and illustration credits</h2></div>
            <p className="body-text">This redesign uses stock photography as illustrative placeholder imagery. These images are not EKCÖLAB project photographs and the people shown are not identified as EKCÖLAB beneficiaries or staff.</p>
          </div>
          <div className="feature-list">
            {imageCredits.map((credit) => (
              <div className="feature-list__item" key={credit.id}>
                <b>{credit.subject}</b>
                <p>Pexels · image ID {credit.id}</p>
              </div>
            ))}
          </div>
          <p className="small" style={{ marginTop: 22 }}>Maps, dashboards, forms and reports shown in this concept are frontend compositions, not live platform interfaces or outputs.</p>
        </div>
      </section>

      <section className="section section--sage">
        <div className="container cta-band__inner">
          <Eyebrow>Need something specific?</Eyebrow>
          <h2 style={{ marginTop: 16 }}>Ask the EKCÖLAB team directly.</h2>
          <p style={{ marginTop: 16 }}>Technical documentation, community reports, data access requests and validation collaboration are handled by the research team.</p>
          <div className="cta-band__actions"><ButtonLink to="/contact">Contact the team</ButtonLink><ButtonLink to="/support" variant="secondary">Support the work</ButtonLink></div>
        </div>
      </section>
    </>
  )
}
