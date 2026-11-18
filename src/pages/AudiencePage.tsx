import { Link, useParams } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { ButtonLink, Eyebrow, ImageFrame, PageHero, TextLink } from '../components/Ui'
import { audiences } from '../data/content'
import { NotFound } from './NotFound'

const extras: Record<string, { image: string; alt: string; title: string; intro: string; steps: { title: string; body: string }[] }> = {
  communities: {
    image: '/images/community-tap.webp',
    alt: 'A young girl collecting water from a tap in Kampala, Uganda. Illustrative stock photograph.',
    title: 'Evidence a community can act on',
    intro: 'The platform is described as usable by a local volunteer. That means the evidence does not have to wait for a specialist team to arrive.',
    steps: [
      { title: 'Start with the Explorer', body: 'Look at the published risk themes and community reports to understand what an assessment covers.' },
      { title: 'Work with a trained local analyst', body: 'EKCÖLAB states that it provides training for individuals and organisations.' },
      { title: 'Use the report in community dialogue', body: 'Visual reports can support conversations with service providers and local decision-makers.' },
    ],
  },
  ngos: {
    image: '/images/field-notes.webp',
    alt: 'Students in green field coats writing notes outdoors in Nigeria. Illustrative stock photograph.',
    title: 'Less data administration, more programming',
    intro: 'Organisation accounts can manage dedicated teams of field analysts, helping keep collection protocols consistent across locations.',
    steps: [
      { title: 'Set up your team', body: 'Organisation Basic allows up to 5 field analysts; Organization Premium up to 10, according to the published FAQ.' },
      { title: 'Collect against a common protocol', body: 'Standardised modules reduce variation between analysts and regions.' },
      { title: 'Report to stakeholders', body: 'Visual, grant-ready reports can support programme design and stakeholder communication.' },
    ],
  },
  governments: {
    image: '/images/landscape-dry.webp',
    alt: 'A dry landscape in Kaduna, Nigeria. Illustrative stock photograph.',
    title: 'A sharper resolution for infrastructure planning',
    intro: 'EKCÖLAB describes the platform as filling a resolution gap rather than replacing existing monitoring systems.',
    steps: [
      { title: 'Keep national systems, add local detail', body: 'Use community-level inputs where averages are not enough to guide a specific intervention.' },
      { title: 'Review risk themes by area', body: 'Compare water, sanitation, environmental and climate signals across communities.' },
      { title: 'Plan and monitor', body: 'Use reports to support allocation discussions and follow-up assessment.' },
    ],
  },
  funders: {
    image: '/images/community-meeting.webp',
    alt: 'A community leader speaking to a gathered group outdoors. Illustrative stock photograph.',
    title: 'Clearer evidence for allocation decisions',
    intro: 'The Explorer gives open access to aggregated vulnerability metrics, while the platform can produce visual reports for proposals and stakeholder updates.',
    steps: [
      { title: 'Explore open indicators', body: 'No account is required to view community-level risk information.' },
      { title: 'Read the integrity statement', body: 'Understand validation, sufficiency thresholds and stated limitations before using a value.' },
      { title: 'Discuss pilots or sponsorship', body: 'The public site invites structured collaboration, sponsored pilots and joint grant applications.' },
    ],
  },
  researchers: {
    image: '/images/lab-testing.webp',
    alt: 'A researcher holding laboratory test tubes. Illustrative stock photograph.',
    title: 'Hyper-local observations with documented methods',
    intro: 'The published methodology describes indicator alignment, quality control, climate contextualisation and AI synthesis in enough detail to assess fitness for purpose.',
    steps: [
      { title: 'Review indicator definitions', body: 'Survey instruments align with WHO/UNICEF JMP definitions for SDG 6 monitoring.' },
      { title: 'Check validation and thresholds', body: 'Automated checks and minimum sample thresholds determine whether a value is published.' },
      { title: 'Request technical documentation', body: 'The Explorer invites requests for model specifications, input datasets and validation statistics by email.' },
    ],
  },
}

export function AudiencePage() {
  const { slug } = useParams()
  const audience = audiences.find((item) => item.slug === slug)
  const extra = slug ? extras[slug] : undefined

  if (!audience || !extra) return <NotFound />

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={audience.name}
        lead={audience.summary}
        image={audience.image}
        alt={audience.alt}
        breadcrumb={<><Link to="/">Home</Link><span>/</span><Link to="/solutions">Solutions</Link><span>/</span><span>{audience.name}</span></>}
        actions={<><ButtonLink to="/community-risk-explorer">Explore the data</ButtonLink><ButtonLink to="/contact" variant="secondary">Talk to the team</ButtonLink></>}
      />

      <section className="section">
        <div className="container split--reverse split">
          <div>
            <Eyebrow>Why it matters</Eyebrow>
            <h2 style={{ marginTop: 16 }}>{extra.title}</h2>
            <p className="lead" style={{ marginTop: 18 }}>{extra.intro}</p>
            <ul className="detail-list">
              {audience.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
          <ImageFrame src={extra.image} alt={extra.alt} className="split__media" hover />
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <div className="section-head">
            <div><Eyebrow>A practical route</Eyebrow><h2>How to get started</h2></div>
            <p className="body-text">A sequence based on what is publicly described for the platform and its Explorer.</p>
          </div>
          <ol className="numbered-list">
            {extra.steps.map((step, index) => (
              <li key={step.title}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                <div><strong>{step.title}</strong><p>{step.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <Eyebrow>Speak to EKCÖLAB</Eyebrow>
            <h2 style={{ marginTop: 16 }}>Ask about access, training or collaboration</h2>
            <p className="body-text" style={{ marginTop: 18 }}>
              This concept site has no backend. The form below prepares an email to the address published on the EKCÖLAB website so you can make a real enquiry.
            </p>
            <div style={{ marginTop: 24 }}><TextLink to="/pricing">Read access and pricing information</TextLink></div>
            <div style={{ marginTop: 16 }}><TextLink to="/methodology">Review the methodology</TextLink></div>
          </div>
          <ContactForm defaultSubject={`EKCÖLAB Analytics enquiry — ${audience.name}`} />
        </div>
      </section>
    </>
  )
}
