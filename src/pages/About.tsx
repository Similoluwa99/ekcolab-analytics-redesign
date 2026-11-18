import { ButtonLink, Eyebrow, ImageFrame, PageHero, SectionHead, TextLink } from '../components/Ui'
import { site } from '../data/content'

const principles = [
  { title: 'Scientific rigour', body: 'Analytical frameworks are described as designed with environmental health experts and aligned with global monitoring standards.' },
  { title: 'Radical transparency', body: 'Aggregated vulnerability metrics are open through the Community Risk Explorer, with a published use and limitations statement.' },
  { title: 'Community empowerment', body: 'Local field analysts are trained so data can be collected by people who know the community best.' },
  { title: 'Continuous innovation', body: 'The site describes ongoing refinement of AI algorithms, climate models and field submission datasets.' },
]

const namedInstitutions = [
  'World Vision', 'Water Resource Commission Ghana', 'Veolia Ghana Ltd', 'University of Zambia',
  'Save the Children', 'Ministry of Water Resources and Irrigation, South Sudan',
  'Ministry of Health and Child Care, Zimbabwe', 'Community Water and Sanitation Agency (CWSA)',
  'Ghana Water Limited', 'Gulu University', 'Inter Aide Malawi', 'Baseflow',
  'Lesotho Highlands Development Authority', 'GAMA Sanitation and Water Project',
  'Freya International School of Research and Implementation',
]

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built because the communities most exposed are the least visible"
        lead="EKCÖLAB Analytics is a data and monitoring platform developed by EKCÖLAB organization, dedicated to environmental and public health challenges through data-driven decisions."
        image="/images/hero-village.webp"
        alt="Aerial view of a stilt village on Lake Nokoué, Benin. Illustrative stock photograph."
        actions={<><ButtonLink to="/contact">Contact the team</ButtonLink><ButtonLink to="/methodology" variant="secondary">Read the methodology</ButtonLink></>}
      />

      <section className="section">
        <div className="container split--reverse split">
          <div>
            <Eyebrow>Mission and vision</Eyebrow>
            <h2 style={{ marginTop: 16 }}>Democratise access to local environmental evidence</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              The published mission is to democratise access to high-quality, real-time WASH and environmental health data, empowering communities, researchers and policymakers to build climate-resilient water systems.
            </p>
            <p className="body-text" style={{ marginTop: 18 }}>
              The vision is a world where every community’s water and sanitation status is accurately monitored, transparently reported, supported and proactively protected against environmental and climate stressors.
            </p>
          </div>
          <ImageFrame src="/images/community-gathering.webp" alt="A community gathering outdoors. Illustrative stock photograph." className="split__media" hover />
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <SectionHead eyebrow="Expertise" title="A multidisciplinary team and a global consortium" body="Facts below are taken from the About page of the current EKCÖLAB Analytics website." />
          <div className="access-grid">
            <article className="access-card">
              <span className="access-card__label">Experience</span>
              <h3>Over 30 years combined</h3>
              <p>The public site describes over 30 years of combined senior research experience in WASH, hydrology, environmental health and climate adaptation.</p>
            </article>
            <article className="access-card access-card--accent">
              <span className="access-card__label">Consortium</span>
              <h3>Across six countries</h3>
              <p>The platform was developed by engineers, data scientists and public health experts spanning the USA, Jordan, Chile, Tunisia, Pakistan and Cameroon.</p>
            </article>
          </div>
          <p className="body-text" style={{ marginTop: 28 }}>
            The About page states that the platform has been deployed in communities across Cameroon, Nigeria, Malawi, Uganda, Ghana, Kenya, Zambia, Rwanda and beyond, and that it supports SDG 3, 6 and 13 interventions.
          </p>
        </div>
      </section>

      <section className="section section--sage">
        <div className="container">
          <SectionHead eyebrow="Core principles" title="What the organisation says it stands for" body="Four principles published on the About page, rewritten for clarity." />
          <div className="card-grid">
            {principles.map((item, index) => (
              <article className="info-card" key={item.title}>
                <span className="step__num">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><Eyebrow>Institutional context</Eyebrow><h2>Names shown on the public website</h2></div>
            <p className="body-text">A careful note about logos and affiliations.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {namedInstitutions.map((name) => <span className="tag" key={name}>{name}</span>)}
          </div>
          <div className="callout" style={{ marginTop: 28 }}>
            <b>i</b>
            <div>
              <strong>Not presented as partners or endorsers</strong>
              <p>The current website displays these organisation names under the heading “Equipping Field Professionals and Researchers From Leading Institutions”. This redesign lists them for context only and does not imply partnership, endorsement or participation in a specific project.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--off">
        <div className="container split">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 style={{ marginTop: 16 }}>Based in Buea, working with communities and institutions</h2>
            <p className="body-text" style={{ marginTop: 18 }}>
              Reach the team for research collaboration, training, sponsored pilots, grant conversations or general questions.
            </p>
            <div style={{ marginTop: 24 }}><TextLink to="/contact">Go to contact</TextLink></div>
          </div>
          <div className="form-card">
            <p className="small">Published contact details</p>
            <div className="contact-details" style={{ marginTop: 16 }}>
              <div><span>Location</span><strong>{site.location}</strong></div>
              <div><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
              <div><span>Telephone</span><a href={site.phoneHref}>{site.phone}</a></div>
              <div><span>Working hours</span><strong>{site.hours}</strong></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
