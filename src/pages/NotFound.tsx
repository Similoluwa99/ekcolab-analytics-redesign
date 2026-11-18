import { ButtonLink, Eyebrow } from '../components/Ui'

export function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <Eyebrow>404</Eyebrow>
        <h1 style={{ marginTop: 16 }}>This page is not on the map.</h1>
        <p className="lead" style={{ marginTop: 18, marginInline: 'auto' }}>
          The link may be out of date. Start again from the homepage, or explore the open Community Risk Explorer.
        </p>
        <div className="hero__actions" style={{ justifyContent: 'center' }}>
          <ButtonLink to="/">Go to homepage</ButtonLink>
          <ButtonLink to="/community-risk-explorer" variant="secondary">Explore the data</ButtonLink>
        </div>
      </div>
    </section>
  )
}
