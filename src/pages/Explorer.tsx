import { ExplorerPreview } from '../components/ExplorerPreview'
import { ButtonLink, Eyebrow, PageHero, TextLink } from '../components/Ui'
import { explorerCountries, site } from '../data/content'

const integrity = [
  {
    title: 'Field data validation',
    body: 'Registered analysts use standardised instruments aligned with WHO and WHO/UNICEF JMP definitions for SDG 6 monitoring. Submissions pass automated range, consistency and completeness checks.',
  },
  {
    title: 'Sufficiency thresholds',
    body: 'The platform does not publish a value where the available sample falls below the minimum threshold for stable estimation. A missing value is a deliberate safeguard, not a gap.',
  },
  {
    title: 'Climate stress indicators',
    body: 'Automated climate indicators follow WMO standards for baselines and trends. They are designed for screening and prioritisation, not regulatory determination or engineering design.',
  },
  {
    title: 'Interpretation and limits',
    body: 'Values are starting points for inquiry and action, most useful alongside local knowledge and independent ground-truthing. Measurement error and sampling variability cannot be eliminated.',
  },
]

export function Explorer() {
  return (
    <>
      <PageHero
        eyebrow="Community Risk Explorer"
        title="Community-level risk intelligence, open to all"
        lead="The EKCÖLAB Community Risk Explorer provides geo-located insight into water security, sanitation, public health and climate vulnerability. No account is required to view data."
        image="/images/city-maputo.webp"
        alt="High-angle aerial view of buildings and streets in Maputo, Mozambique. Illustrative stock photograph."
        actions={<><ButtonLink to={site.explorerUrl} external>Open the live explorer</ButtonLink><ButtonLink to="/methodology" variant="secondary">Read the methodology</ButtonLink></>}
      />

      <section className="section">
        <div className="container explorer__grid">
          <div className="split__sticky">
            <Eyebrow>Explore the interface</Eyebrow>
            <h2 style={{ marginTop: 16 }}>Select a place, then open its report</h2>
            <p className="body-text" style={{ marginTop: 18 }}>
              In the live tool, you can click a community data point or use the country and community filters, then open a report with risk metrics, field documentation and tailored recommendations.
            </p>
            <p className="small" style={{ marginTop: 18 }}>
              The preview here is a frontend demonstration. It does not contain live community data, and the “example community” labels are placeholders.
            </p>
            <div style={{ marginTop: 24 }}>
              <ul className="detail-list" style={{ marginTop: 0 }}>
                <li>Open access — no account needed to view data</li>
                <li>Guided filters for country and community</li>
                <li>Published data integrity statement on the live page</li>
              </ul>
            </div>
          </div>
          <ExplorerPreview />
        </div>
      </section>

      <section className="section section--off" id="data-integrity-methodology">
        <div className="container">
          <div className="section-head">
            <div><Eyebrow>Data integrity</Eyebrow><h2>How to read the indicators</h2></div>
            <p className="body-text">
              This section summarises the “Data Integrity, Methodology, and Use Statement” published on the Community Risk Explorer page.
            </p>
          </div>
          <ol className="numbered-list">
            {integrity.map((item, index) => (
              <li key={item.title}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                <div><strong>{item.title}</strong><p>{item.body}</p></div>
              </li>
            ))}
          </ol>
          <div className="callout" style={{ marginTop: 34 }}>
            <b>!</b>
            <div><strong>Use with local knowledge</strong><p>The Explorer itself asks users to treat displayed values as empirical starting points, and to combine them with local knowledge and, where available, independent ground-truthing.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <Eyebrow>Coverage</Eyebrow>
            <h2 style={{ marginTop: 16 }}>Countries in the public filter</h2>
            <p className="body-text" style={{ marginTop: 18 }}>
              The country selector on the current Community Risk Explorer lists the following. Availability of a specific community report depends on the data published in the live tool.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignContent: 'start' }}>
            {explorerCountries.map((country) => <span className="tag tag--sage" key={country}>{country}</span>)}
          </div>
        </div>
      </section>

      <section className="section section--sage">
        <div className="container cta-band__inner">
          <Eyebrow>Open access</Eyebrow>
          <h2 style={{ marginTop: 16 }}>View the data, then decide what to do with it.</h2>
          <p style={{ marginTop: 16 }}>No sign-up is needed to explore. For technical documentation, community reports or validation collaboration, contact the research team directly.</p>
          <div className="cta-band__actions">
            <ButtonLink to={site.explorerUrl} external>Open the live explorer</ButtonLink>
            <ButtonLink to="/contact" variant="secondary">Contact the research team</ButtonLink>
          </div>
          <div style={{ marginTop: 22 }}><TextLink to="/resources">More public resources</TextLink></div>
        </div>
      </section>
    </>
  )
}
