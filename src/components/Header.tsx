import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { ButtonLink } from './Ui'

type Dropdown = 'platform' | 'solutions' | null

const platformLinks = [
  { to: '/platform#field-collection', label: 'Field collection', hint: 'Offline, geolocated observations' },
  { to: '/platform#risk-analysis', label: 'Risk analysis', hint: 'Community-level risk themes' },
  { to: '/platform#reporting', label: 'Reporting with Madib AI', hint: 'From evidence to recommendations' },
  { to: '/community-risk-explorer', label: 'Community Risk Explorer', hint: 'Open data, no account needed' },
]

const solutionLinks = [
  { to: '/solutions/communities', label: 'Communities', hint: 'Own your safety data' },
  { to: '/solutions/ngos', label: 'NGOs & humanitarians', hint: 'Focus on programming' },
  { to: '/solutions/governments', label: 'Governments', hint: 'Fill the resolution gap' },
  { to: '/solutions/funders', label: 'Funders', hint: 'Evidence-led allocation' },
  { to: '/solutions/researchers', label: 'Researchers', hint: 'Analyse, replicate, cite' },
]

export function Header() {
  const [dropdown, setDropdown] = useState<Dropdown>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setDropdown(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('is-locked', mobileOpen)
    return () => document.body.classList.remove('is-locked')
  }, [mobileOpen])

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setDropdown(null)
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path))

  return (
    <header className="header" ref={headerRef}>
      <div className="container header__inner">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="nav" aria-label="Primary navigation">
          <div className={`nav__item ${dropdown === 'platform' ? 'is-open' : ''}`}>
            <button
              className={`nav__link ${isActive('/platform') ? 'is-active' : ''}`}
              aria-expanded={dropdown === 'platform'}
              aria-haspopup="true"
              onClick={() => setDropdown(dropdown === 'platform' ? null : 'platform')}
            >
              Platform
              <svg className="nav__chevron" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
            {dropdown === 'platform' && (
              <div className="nav__dropdown">
                <Link to="/platform" onClick={() => setDropdown(null)}><strong>Platform overview</strong><span>A single view from field to report</span></Link>
                {platformLinks.map((link) => (
                  <Link key={link.to} to={link.to} onClick={() => setDropdown(null)}>
                    <strong>{link.label}</strong>
                    <span>{link.hint}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className={`nav__item ${dropdown === 'solutions' ? 'is-open' : ''}`}>
            <button
              className={`nav__link ${isActive('/solutions') ? 'is-active' : ''}`}
              aria-expanded={dropdown === 'solutions'}
              aria-haspopup="true"
              onClick={() => setDropdown(dropdown === 'solutions' ? null : 'solutions')}
            >
              Solutions
              <svg className="nav__chevron" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
            {dropdown === 'solutions' && (
              <div className="nav__dropdown">
                <Link to="/solutions" onClick={() => setDropdown(null)}><strong>Find your pathway</strong><span>Who the platform is for</span></Link>
                {solutionLinks.map((link) => (
                  <Link key={link.to} to={link.to} onClick={() => setDropdown(null)}>
                    <strong>{link.label}</strong>
                    <span>{link.hint}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link className={`nav__link ${isActive('/methodology') ? 'is-active' : ''}`} to="/methodology">Methodology</Link>
          <Link className={`nav__link ${isActive('/resources') ? 'is-active' : ''}`} to="/resources">Resources</Link>
          <Link className={`nav__link ${isActive('/about') ? 'is-active' : ''}`} to="/about">About</Link>
        </nav>

        <div className="header__cta">
          <ButtonLink to="/community-risk-explorer" small>Explore the Data</ButtonLink>
        </div>

        <button
          className="mobile-toggle"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          )}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
        <div className="container mobile-menu__inner">
          <Link className="mobile-menu__link" to="/">Home</Link>
          <Link className="mobile-menu__link" to="/platform">Platform</Link>
          <Link className="mobile-menu__link" to="/community-risk-explorer">Community Risk Explorer</Link>
          <Link className="mobile-menu__link" to="/solutions">Solutions</Link>
          <Link className="mobile-menu__link" to="/methodology">Methodology</Link>
          <Link className="mobile-menu__link" to="/resources">Resources</Link>
          <Link className="mobile-menu__link" to="/about">About</Link>
          <Link className="mobile-menu__link" to="/contact">Contact</Link>
          <div className="mobile-menu__group">
            <p>Platform</p>
            {platformLinks.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          </div>
          <div className="mobile-menu__group">
            <p>Solutions</p>
            {solutionLinks.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          </div>
          <ButtonLink to="/community-risk-explorer">Explore the Data</ButtonLink>
        </div>
      </div>
    </header>
  )
}
