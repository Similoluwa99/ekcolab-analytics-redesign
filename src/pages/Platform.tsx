import { useState } from 'react'
import { ProductMock, type MockVariant } from '../components/ProductMock'
import { ButtonLink, Eyebrow, IllustrativeNote, PageHero, SectionHead, TextLink } from '../components/Ui'
import { analysisAreas, capabilities, site } from '../data/content'

const views: { id: string; label: string; variant: MockVariant; title: string; body: string }[] = [
  { id: 'field-collection', label: 'Field collection', variant: 'field', title: 'Collect in the field', body: 'Capture surveys, geolocation and photographs in low-connectivity areas. The published site states that data syncs and processes automatically within 30 seconds once connectivity returns.' },
  { id: 'risk-analysis', label: 'Risk analysis', variant: 'risk', title: 'Analyse at community level', body: 'Draw a neighbourhood boundary on a phone and review risk themes across water, sanitation, environmental conditions, health and climate.' },
  { id: 'reporting', label: 'Reporting', variant: 'report', title: 'Report with Madib AI', body: 'Madib AI synthesises field inputs with climate and health context into a community report with insights and recommended actions.' },
]

export function Platform() {
  const [active, setActive] = useState(0)

  return (
    <>
      <PageHero
        eyebrow="The platform"
        title="Evidence from the street, ready for the decision table"
        lead="EKCÖLAB Analytics connects offline field collection, geospatial analysis and AI-supported reporting in one workflow designed for local realities."
        image="/images/field-sample.webp"
        alt="A person collecting a water sample from a stream. Illustrative stock photograph."
        actions={<><ButtonLink to="/community-risk-explorer">Explore the data</ButtonLink><ButtonLink to="/contact" variant="secondary">Request a conversation</ButtonLink></>}
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Assessment coverage" title="Eight areas, one connected assessment" body="The platform's published feature list groups community conditions into practical, comparable themes." />
          <div className="feature-list">
            {analysisAreas.map((area, index) => (
              <div className="feature-list__item" key={area}>
                <span className="step__num">{String(index + 1).padStart(2, '0')}</span>
                <b>{area}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <SectionHead eyebrow="Capabilities" title="Designed for the conditions fieldwork actually involves" body="Practical choices — offline capture, boundaries drawn without specialist software, and reporting that non-specialists can use." />
          <div className="card-grid">
            {capabilities.map((item) => (
              <article className="info-card" key={item.title}>
                <div className="step__visual" style={{ height: 170 }}><img src={item.image} alt={item.alt} loading="lazy" decoding="async" /></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Inside the workflow" title="Three views of the same evidence chain" body="These are illustrative interface compositions based on publicly described platform capabilities. They are not connected to live data." />
          <div className="features__grid">
            <div>
              <div className="feature-tabs" role="tablist" aria-label="Platform workflow">
                {views.map((view, index) => (
                  <button
                    key={view.id}
                    type="button"
                    role="tab"
                    className="feature-tab"
                    id={`platform-tab-${index}`}
                    aria-selected={active === index}
                    aria-controls="platform-panel"
                    onClick={() => setActive(index)}
                  >
                    <strong>{view.label}</strong>
                    <span>{view.body}</span>
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 24 }}><TextLink to="/methodology">How the analysis is validated</TextLink></div>
            </div>
            <div className="feature-panel">
              <div className="feature-panel__head"><strong id={views[active].id}>{views[active].title}</strong><IllustrativeNote /></div>
              <div role="tabpanel" id="platform-panel" aria-labelledby={`platform-tab-${active}`}>
                <ProductMock variant={views[active].variant} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container split">
          <div>
            <Eyebrow>Geospatial by default</Eyebrow>
            <h2 style={{ marginTop: 16 }}>Boundaries without a GIS specialist</h2>
          </div>
          <div>
            <p className="lead">
              The “zero-expert geometry engine” lets a user draw a neighbourhood boundary on a phone. The platform then calculates functional and non-functional water sources, sanitation ratios and walking distances to water points.
            </p>
            <p className="body-text" style={{ marginTop: 18 }}>
              This is a practical way to make local geography part of an assessment without requiring specialist mapping training.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-band__inner">
          <Eyebrow>Next step</Eyebrow>
          <h2 style={{ marginTop: 16 }}>See the platform in the context of your work.</h2>
          <p className="body-text" style={{ marginTop: 16 }}>Choose a pathway, or contact the team about training, pilots and access.</p>
          <div className="hero__actions"><ButtonLink to="/solutions">Find your pathway</ButtonLink><ButtonLink to={site.partnershipUrl} variant="secondary" external>Partnership enquiry</ButtonLink></div>
        </div>
      </section>
    </>
  )
}
