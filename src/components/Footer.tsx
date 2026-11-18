import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { site } from '../data/content'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__intro">
            <Link to="/"><Logo /></Link>
            <p>
              Environmental and community-risk analytics that make local water, sanitation and climate conditions visible — from field observation to decision-ready report.
            </p>
          </div>

          <div className="footer__col">
            <h3>Platform</h3>
            <ul>
              <li><Link to="/platform">Platform overview</Link></li>
              <li><Link to="/platform#field-collection">Field collection</Link></li>
              <li><Link to="/platform#risk-analysis">Risk analysis</Link></li>
              <li><Link to="/platform#reporting">Madib AI reporting</Link></li>
              <li><Link to="/community-risk-explorer">Community Risk Explorer</Link></li>
              <li><Link to="/methodology">Methodology</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3>Solutions</h3>
            <ul>
              <li><Link to="/solutions">All pathways</Link></li>
              <li><Link to="/solutions/communities">Communities</Link></li>
              <li><Link to="/solutions/ngos">NGOs & humanitarians</Link></li>
              <li><Link to="/solutions/governments">Governments</Link></li>
              <li><Link to="/solutions/funders">Funders</Link></li>
              <li><Link to="/solutions/researchers">Researchers</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3>Organisation</h3>
            <ul>
              <li><Link to="/about">About EKCÖLAB</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/pricing">Pricing & access</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/support">Support the work</Link></li>
              <li><a href={site.partnershipUrl} target="_blank" rel="noreferrer">Partnership enquiry (current site)</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__top" style={{ paddingTop: 0, gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
          <div>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12, color: 'var(--forest)' }}>Contact</h3>
            <p className="small">{site.location}<br />{site.hours}</p>
            <p className="small" style={{ marginTop: 8 }}>
              <a href={`mailto:${site.email}`}>{site.email}</a><br />
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12, color: 'var(--forest)' }}>Legal & access</h3>
            <ul>
              <li><Link to="/privacy">Privacy summary</Link></li>
              <li><Link to="/terms">Terms summary</Link></li>
              <li><Link to="/pricing">Subscription information</Link></li>
              <li><a href={site.privacyUrl} target="_blank" rel="noreferrer">Published privacy policy</a></li>
              <li><a href={site.termsUrl} target="_blank" rel="noreferrer">Published terms of service</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12, color: 'var(--forest)' }}>Explore</h3>
            <ul>
              <li><a href={site.explorerUrl} target="_blank" rel="noreferrer">Live Community Risk Explorer (current site)</a></li>
              <li><a href={site.donationUrl} target="_blank" rel="noreferrer">Donate (current site)</a></li>
              <li><Link to="/contact">Ask a question</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} EKCÖLAB Analytics. Redesign concept based on publicly available information.</span>
          <span className="footer__note">
            Photography is illustrative stock imagery from Pexels and is not EKCÖLAB project photography. Interface panels and map views in this concept are clearly labelled previews, not live platform data.
          </span>
        </div>
      </div>
    </footer>
  )
}
