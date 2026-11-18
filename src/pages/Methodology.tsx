import { ButtonLink, Eyebrow, ImageFrame, PageHero, SectionHead, TextLink } from '../components/Ui'
import { methodSteps, site } from '../data/content'

export function Methodology() {
  return (
    <>
      <PageHero
        eyebrow="Methodology"
        title="A hybrid method: field evidence, climate context, careful interpretation"
        lead="EKCÖLAB publishes a four-stage analytical approach and a data integrity statement alongside its Community Risk Explorer. Both are summarised here."
        image="/images/farmland-aerial.webp"
        alt="Aerial view of farmland and a village in Kenya under low cloud. Illustrative stock photograph."
        actions={<><ButtonLink to={site.explorerUrl} external>View the live Explorer</ButtonLink><ButtonLink to="/contact" variant="secondary">Request documentation</ButtonLink></>}
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="The analytical pipeline" title="Four stages from observation to report" body="A summary of the methodology described on the EKCÖLAB website and Explorer page." />
          <ol className="numbered-list">
            {methodSteps.map((step) => (
              <li key={step.n}>
                <b>{step.n}</b>
                <div><strong>{step.title}</strong><p>{step.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--off">
        <div className="container split">
          <ImageFrame src="/images/landscape-dry.webp" alt="Dry landscape in Kaduna, Nigeria. Illustrative stock photograph." className="split__media" hover />
          <div>
            <Eyebrow>Standards and alignment</Eyebrow>
            <h2 style={{ marginTop: 16 }}>JMP indicators, climate baselines and local protocols</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Field instruments are described as aligned with WHO/UNICEF JMP indicator definitions for SDG 6 monitoring, alongside EKCÖLAB field protocols. Climate stress indicators follow WMO standards for baselines and trends.
            </p>
            <ul className="detail-list">
              <li>Participatory collection by trained local analysts</li>
              <li>Range, consistency and completeness checks before analysis</li>
              <li>Cross-referencing with downscaled, peer-reviewed climate projections</li>
              <li>Support for SDG 3, 6 and 13 interventions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="madib-ai">
        <div className="container">
          <div className="section-head">
            <div><Eyebrow>Madib AI</Eyebrow><h2>What the site says about the AI layer</h2></div>
            <p className="body-text">Precise language matters here, especially for research and institutional audiences.</p>
          </div>
          <div className="access-grid">
            <div className="access-card">
              <span className="access-card__label">Described capability</span>
              <h3>Synthesis and recommendations</h3>
              <p>Madib AI is described as EKCÖLAB’s proprietary risk intelligence engine. It cross-references field observations with downscaled climate models and global health indicators to produce a community report with insights and recommendations.</p>
            </div>
            <div className="access-card access-card--accent">
              <span className="access-card__label">Stated limits</span>
              <h3>Information, not certainty</h3>
              <p>The published terms state that analysis is for information purposes and must not be treated as 100% accurate. The Explorer says climate indicators are for screening and prioritisation, not regulatory determination or engineering design.</p>
              <p className="small" style={{ marginTop: 18 }}>No independent validation statistics are published on the public site. The Explorer invites requests for technical documentation and validation statistics by email.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sage" id="data-integrity">
        <div className="container">
          <div className="section-head">
            <div><Eyebrow>Data integrity</Eyebrow><h2>Why a missing value can be a good result</h2></div>
            <p className="body-text">The Explorer’s use statement is unusually explicit about uncertainty. Its principles are central to this redesign.</p>
          </div>
          <div className="card-grid">
            <article className="info-card"><h3>Sufficiency thresholds</h3><p>Values are withheld when the available sample is below the stated threshold for stable estimation.</p></article>
            <article className="info-card"><h3>Transparent definitions</h3><p>The platform points to documented indicator definitions and quality-control procedures.</p></article>
            <article className="info-card"><h3>Epistemic honesty</h3><p>No monitoring system removes measurement error; the stated commitment is to minimise and disclose it.</p></article>
          </div>
          <div className="callout" style={{ marginTop: 30 }}>
            <b>i</b>
            <div><strong>Interpretation guidance</strong><p>The live Explorer asks users to treat values as empirical starting points for inquiry and action, and to combine them with local knowledge and independent ground-truthing where available.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-band__inner">
          <Eyebrow>Documentation</Eyebrow>
          <h2 style={{ marginTop: 16 }}>Need the technical detail?</h2>
          <p className="body-text" style={{ marginTop: 16 }}>Model specifications, input datasets and validation statistics can be requested from the EKCÖLAB research team using the email published on the live Explorer page.</p>
          <div className="hero__actions">
            <ButtonLink to="/contact">Request documentation</ButtonLink>
            <ButtonLink to={site.explorerUrl} variant="secondary" external>Read the published statement</ButtonLink>
          </div>
          <div style={{ marginTop: 20 }}><TextLink to="/resources">More resources</TextLink></div>
        </div>
      </section>
    </>
  )
}
