import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function ArrowIcon() {
  return (
    <svg className="btn__arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 10h13m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type ButtonLinkProps = {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'light'
  small?: boolean
  external?: boolean
  onClick?: () => void
}

export function ButtonLink({ to, children, variant = 'primary', small = false, external = false, onClick }: ButtonLinkProps) {
  const className = ['btn', variant === 'secondary' ? 'btn--secondary' : '', variant === 'light' ? 'btn--light' : '', small ? 'btn--small' : '']
    .filter(Boolean)
    .join(' ')

  if (external || to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) {
    return (
      <a className={className} href={to} onClick={onClick} target={to.startsWith('http') ? '_blank' : undefined} rel={to.startsWith('http') ? 'noreferrer' : undefined}>
        {children}
        <ArrowIcon />
      </a>
    )
  }

  return (
    <Link className={className} to={to} onClick={onClick}>
      {children}
      <ArrowIcon />
    </Link>
  )
}

export function TextLink({ to, children, external = false }: { to: string; children: ReactNode; external?: boolean }) {
  if (external || to.startsWith('http')) {
    return (
      <a className="text-link" href={to} target="_blank" rel="noreferrer">
        {children}
        <ArrowIcon />
      </a>
    )
  }
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowIcon />
    </Link>
  )
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={dark ? 'eyebrow eyebrow--dark' : 'eyebrow'}>{children}</span>
}

export function SectionHead({ eyebrow, title, body, id }: { eyebrow: string; title: string; body?: string; id?: string }) {
  return (
    <div className="section-head">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={id}>{title}</h2>
      </div>
      {body && <p className="body-text">{body}</p>}
    </div>
  )
}

export function ImageFrame({
  src,
  alt,
  className = '',
  eager = false,
  hover = false,
}: {
  src: string
  alt: string
  className?: string
  eager?: boolean
  hover?: boolean
}) {
  return (
    <div className={`img-frame ${hover ? 'img-frame--hover' : ''} ${className}`.trim()}>
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </div>
  )
}

export function IllustrativeNote({ children = 'Illustrative interface preview — not live data' }: { children?: ReactNode }) {
  return <span className="illustration-note">{children}</span>
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
  actions,
  plain = false,
  breadcrumb,
}: {
  eyebrow: string
  title: string
  lead: string
  image?: string
  alt?: string
  actions?: ReactNode
  plain?: boolean
  breadcrumb?: ReactNode
}) {
  return (
    <section className={`page-hero ${plain ? 'page-hero--plain' : ''}`}>
      <div className="container">
        {breadcrumb && <div className="breadcrumb" style={{ marginBottom: 24 }}>{breadcrumb}</div>}
        <div className="page-hero__grid">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1>{title}</h1>
            <p className="lead page-hero__lead">{lead}</p>
            {actions && <div className="page-hero__actions">{actions}</div>}
          </div>
          {image && alt && <ImageFrame src={image} alt={alt} className="page-hero__media" eager hover />}
        </div>
      </div>
    </section>
  )
}
