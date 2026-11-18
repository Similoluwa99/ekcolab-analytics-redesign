import { useState } from 'react'
import { Accordion } from '../components/Accordion'
import { ExplorerPreview } from '../components/ExplorerPreview'
import { MapVisual } from '../components/MapVisual'
import { ProductMock, ReportPreview, type MockVariant } from '../components/ProductMock'
import { ButtonLink, Eyebrow, ImageFrame, IllustrativeNote, SectionHead, TextLink } from '../components/Ui'
import { audiences, faqs, methodSteps, site } from '../data/content'

const features: { title: string; body: string; variant: MockVariant }[] = [
  {
    title: 'Offline field collection',
    body: 'Collect surveys, GPS positions and photographs where connectivity is poor. Data syncs once a connection returns.',
    variant: 'field',
  },
  {
    title: 'Validation and boundary drawing',
    body: 'Automated checks prepare submissions for analysis. A boundary can be drawn on a phone without a GIS specialist.',
    variant: 'validate',
  },
  {
    title: 'Community risk analysis',
    body: 'Observations are organised into comparable risk themes across water, sanitation, health, environment and climate.',
    variant: 'risk',
  },
  {
    title: 'AI-supported reporting',
    body: 'Madib AI synthesises the evidence into a community report with insights and recommendations for action.',
    variant: 'report',
  },
]

export function Home() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <Eyebrow>Open-access environmental intelligence</Eyebrow>
            <h1>Satellite dashboards see the storm. <em>They do not see the street.</em></h1>
            <p className="lead hero__lead">
              EKCÖLAB Analytics turns field observations into community-level evidence about water, sanitation, environmental health and climate risk — so action can be targeted where people actually live.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/community-risk-explorer">Explore the data</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">Work with EKCÖLAB</ButtonLink>
            </div>
            <ul className="hero__signals">
              <li>No account to explore</li>
              <li>Offline fieldwork</li>
              <li>Madib AI reporting</li>
            </ul>
          </div>

          <div className="hero__media">
            <ImageFrame
              className="hero__image"
              src="/images/hero-aerial.webp"
              alt="Aerial view of green hills and a village in Makete, Tanzania. Illustrative stock photograph, not an EKCÖLAB project image."
              eager
            />
            <div className="hero__float">
              Local resolution, not regional averages
              <span>A sharper view of the conditions behind the headline figures.</span>
            </div>
            <div className="hero__mapcard">
              <div className="hero__mapcard-head">
                <strong>Community risk view</strong>
                <IllustrativeNote>Preview</IllustrativeNote>
              </div>
              <MapVisual compact />
            </div>
          </div>
        </div>
      </section>

      <section className="proof section--tight" aria-label="Platform credibility signals">
        <div className="container">
          <div className="proof__grid">
            <div className="proof__item"><strong>Open to explore</strong><span>The Community Risk Explorer states that no account is required to view data.</span></div>
            <div className="proof__item"><strong>Built for the field</strong><span>Assessments can be carried out in low-connectivity areas.</span></div>
            <div className="proof__item"><strong>JMP-aligned indicators</strong><span>Survey instruments align with WHO/UNICEF JMP definitions for SDG 6 monitoring.</span></div>
            <div className="proof__item"><strong>SDG 3, 6 and 13</strong><span>The platform supports interventions across health, water and climate.</span></div>
          </div>
        </div>
      </section>

      <section className="section section--off">
        <div className="container problem__grid">
          <ImageFrame
            src="/images/community-pump.webp"
            alt="A young man using a community water pump while others stand nearby. Illustrative stock photograph."
            className="problem__image"
            hover
          />
          <div>
            <Eyebrow>The resolution gap</Eyebrow>
            <h2>Regional estimates cannot tell you which water point has failed.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              National surveys and satellite dashboards are essential. But they are designed for aggregates, not for the street, the borehole or the sanitation block.
            </p>
            <blockquote className="problem__quote">“Satellite dashboards see the storm but they do not see the street.”</blockquote>
            <p className="body-text">
              EKCÖLAB combines standardised local assessments with geospatial analysis and AI-supported reporting, making community conditions visible without replacing existing monitoring systems.
            </p>
            <div className="problem__compare">
              <div className="compare-card">
                <div className="compare-card__icon">
                  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" /><path d="M5 16h22M16 5c4 3.5 4 18.5 0 22M16 5c-4 3.5-4 18.5 0 22" stroke="currentColor" strokeWidth="1.2" /></svg>
                </div>
                <strong>Regional view</strong>
                <span>Useful for trends, averages and broad prioritisation.</span>
              </div>
              <div className="compare-card">
                <div className="compare-card__icon">
                  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 28s9-8.4 9-15A9 9 0 1 0 7 13c0 6.6 9 15 9 15Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="16" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" /></svg>
                </div>
                <strong>Street view</strong>
                <span>The functional status, condition and experience of a specific place.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="How it works"
            title="From a field observation to a decision-ready report"
            body="Four connected stages turn what a trained local analyst sees into evidence that communities, institutions and researchers can use."
          />
          <div className="steps">
            {[
              { n: '01', title: 'Collect information in the field', body: 'Standardised, geolocated assessments with photographs, GPS and offline capture.', image: '/images/field-notes.webp', alt: 'Field students taking notes outdoors in Nigeria. Illustrative stock photograph.' },
              { n: '02', title: 'Validate and organise', body: 'Automated range, consistency and completeness checks prepare the observations.', image: '/images/water-hands.webp', alt: 'Hands washing at a rural water point. Illustrative stock photograph.' },
              { n: '03', title: 'Analyse community risks', body: 'A drawn boundary produces local risk themes across water, sanitation and climate.', image: '/images/township-aerial.webp', alt: 'Aerial view of streets and rooftops in a South African township. Illustrative stock photograph.' },
              { n: '04', title: 'Generate useful reports', body: 'Madib AI synthesises the findings into a structured report and recommendations.', image: '/images/lab-testing.webp', alt: 'Laboratory test tubes being held by a researcher. Illustrative stock photograph.' },
            ].map((step) => (
              <div className="step" key={step.n}>
                <span className="step__num">{step.n}</span>
                <div className="step__visual"><img src={step.image} alt={step.alt} loading="lazy" decoding="async" /></div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--off">
        <div className="container features__grid">
          <div>
            <Eyebrow>Platform capabilities</Eyebrow>
            <h2 style={{ marginTop: 16 }}>One pipeline, from the field to the funder briefing</h2>
            <p className="body-text" style={{ marginTop: 18 }}>
              The public site describes a platform built around low-connectivity collection, geometry that a non-specialist can use, risk analysis and AI-supported reporting.
            </p>
            <div className="feature-tabs" role="tablist" aria-label="Platform capabilities" style={{ marginTop: 34 }}>
              {features.map((feature, index) => (
                <button
                  key={feature.title}
                  type="button"
                  role="tab"
                  className="feature-tab"
                  id={`feature-tab-${index}`}
                  aria-selected={activeFeature === index}
                  aria-controls="feature-panel"
                  onClick={() => setActiveFeature(index)}
                >
                  <strong>{feature.title}</strong>
                  <span>{feature.body}</span>
                </button>
              ))}
            </div>
            <div style={{ marginTop: 24 }}><TextLink to="/platform">See the full platform</TextLink></div>
          </div>
          <div className="feature-panel" role="tabpanel" id="feature-panel" aria-labelledby={`feature-tab-${activeFeature}`}>
            <div className="feature-panel__head">
              <strong>{features[activeFeature].title}</strong>
              <IllustrativeNote />
            </div>
            <ProductMock variant={features[activeFeature].variant} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Who it is for"
            title="A clear route for every kind of user"
            body="The same evidence base serves different decisions. Choose the pathway closest to your work."
          />
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
          <div style={{ marginTop: 28 }}><TextLink to="/solutions">Compare all pathways</TextLink></div>
        </div>
      </section>

      <section className="section section--off">
        <div className="container explorer__grid">
          <div>
            <Eyebrow>Community Risk Explorer</Eyebrow>
            <h2 style={{ marginTop: 16 }}>Start with the data. No account required.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              The Explorer brings together field-reported observations and climate-stress indicators so communities, practitioners and policymakers can see where risk is concentrated.
            </p>
            <div className="explorer__steps">
              <div className="explorer__step"><b>1</b><div><strong>Choose a country or community</strong><span>Use the filters or select a point on the map.</span></div></div>
              <div className="explorer__step"><b>2</b><div><strong>Open the community report</strong><span>See risk metrics, field documentation and recommendations in the live tool.</span></div></div>
              <div className="explorer__step"><b>3</b><div><strong>Read the data integrity statement</strong><span>Understand validation, climate indicators and documented limitations.</span></div></div>
            </div>
            <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <ButtonLink to="/community-risk-explorer">Learn about the Explorer</ButtonLink>
              <ButtonLink to={site.explorerUrl} variant="secondary" external>Open the live tool</ButtonLink>
            </div>
          </div>
          <ExplorerPreview compact />
        </div>
      </section>

      <section className="section section--sage">
        <div className="container method__grid">
          <ImageFrame
            src="/images/coast-mangroves.webp"
            alt="Aerial view of mangroves and coastline near Kilwa, Tanzania. Illustrative stock photograph."
            className="method__image"
            hover
          />
          <div>
            <Eyebrow>Methodology & trust</Eyebrow>
            <h2 style={{ marginTop: 16 }}>A documented pipeline, with clear limits</h2>
            <p className="body-text" style={{ marginTop: 18 }}>
              EKCÖLAB publishes a data integrity statement alongside the Explorer, including how submissions are checked and what the indicators are — and are not — for.
            </p>
            <div className="method__list" style={{ marginTop: 30, borderTopColor: 'rgba(23,63,53,.2)' }}>
              {methodSteps.map((step) => (
                <div className="method__item" key={step.n} style={{ borderBottomColor: 'rgba(23,63,53,.16)' }}>
                  <b>{step.n}</b>
                  <div><h3>{step.title}</h3><p>{step.body}</p></div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 26 }}><TextLink to="/methodology">Read the full methodology</TextLink></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container report__grid">
          <ReportPreview />
          <div>
            <Eyebrow>Evidence in use</Eyebrow>
            <h2 style={{ marginTop: 16 }}>Reports designed for real decisions</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              The platform produces visual community reports covering risk metrics, field evidence and recommended actions. This is a structural preview, not a published case study.
            </p>
            <ul className="detail-list">
              <li>Field observations with GPS positions and photographs</li>
              <li>Risk themes across the eight published assessment areas</li>
              <li>Climate context from downscaled projection models</li>
              <li>Recommendations intended to support action and funding conversations</li>
            </ul>
            <p className="small" style={{ marginTop: 20 }}>
              No public case studies or sample reports are currently linked from the EKCÖLAB website. The layout above is illustrative and contains no real community findings.
            </p>
            <div style={{ marginTop: 22 }}><TextLink to="/resources">See available resources</TextLink></div>
          </div>
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <SectionHead
            eyebrow="Pricing & access"
            title="Know what is open, and what needs an account"
            body="The public website is clear that exploration is open, but it does not publish prices for accounts or subscriptions."
          />
          <div className="access-grid">
            <div className="access-card">
              <span className="access-card__label">Free and open</span>
              <h3>Community Risk Explorer</h3>
              <p>No account is required to view community-level indicators and reports.</p>
              <ul>
                <li>Explore the map and filter by country or community</li>
                <li>Read the published data integrity statement</li>
                <li>Understand indicators and their stated limitations</li>
              </ul>
              <div style={{ marginTop: 'auto', paddingTop: 28 }}><TextLink to={site.explorerUrl} external>Open the live Explorer</TextLink></div>
            </div>
            <div className="access-card access-card--accent">
              <span className="access-card__label">Account and subscriptions</span>
              <h3>Run your own assessments</h3>
              <p>Collect data, manage field analysts and generate reports inside the platform.</p>
              <ul>
                <li>Organisation Basic: up to 5 field analysts (published FAQ)</li>
                <li>Organization Premium: up to 10 field analysts (published FAQ)</li>
                <li>Monthly and annual subscriptions; number of analyses depends on plan</li>
                <li>Training is available for individuals and organisations</li>
              </ul>
              <div style={{ marginTop: 'auto', paddingTop: 28 }}><TextLink to="/pricing">Read the access details</TextLink></div>
            </div>
          </div>
          <p className="small" style={{ marginTop: 20 }}>Prices are not published on the public website. Contact EKCÖLAB for current plan details.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><Eyebrow>Questions</Eyebrow><h2>Practical answers, without the small print</h2></div>
            <p className="body-text">These answers follow the information published on the current EKCÖLAB website.</p>
          </div>
          <Accordion items={faqs} />
          <div style={{ marginTop: 28 }}><TextLink to="/contact">Ask something else</TextLink></div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__media"><img src="/images/hero-village.webp" alt="" aria-hidden="true" loading="lazy" /></div>
        <div className="container">
          <div className="cta-band__inner">
            <Eyebrow>Begin with the evidence</Eyebrow>
            <h2>See what is happening at street level.</h2>
            <p>Explore the open Community Risk Explorer, or speak to EKCÖLAB about training, partnerships and assessments for your organisation.</p>
            <div className="cta-band__actions">
              <ButtonLink to={site.explorerUrl} external>Explore the data</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">Get in touch</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
