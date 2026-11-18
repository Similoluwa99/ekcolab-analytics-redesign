import { useState, type FormEvent } from 'react'
import { site } from '../data/content'
import { ButtonLink } from './Ui'

export function ContactForm({ defaultSubject = '', compact = false }: { defaultSubject?: string; compact?: boolean }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [organisation, setOrganisation] = useState('')
  const [subject, setSubject] = useState(defaultSubject)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : '',
      '',
      message,
      '',
      'Sent from the EKCÖLAB Analytics redesign concept website.',
    ]
      .filter(Boolean)
      .join('\n')
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject || 'EKCÖLAB Analytics enquiry')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <form className={compact ? '' : 'form-card'} onSubmit={handleSubmit}>
      <div className="form-grid">
        <div>
          <label className="form-label" htmlFor="contact-name">Full name *</label>
          <input className="form-input" id="contact-name" required value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
        </div>
        <div>
          <label className="form-label" htmlFor="contact-email">Email *</label>
          <input className="form-input" id="contact-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" />
        </div>
        <div>
          <label className="form-label" htmlFor="contact-org">Organisation</label>
          <input className="form-input" id="contact-org" value={organisation} onChange={(event) => setOrganisation(event.target.value)} autoComplete="organization" />
        </div>
        <div>
          <label className="form-label" htmlFor="contact-subject">Subject *</label>
          <input className="form-input" id="contact-subject" required value={subject} onChange={(event) => setSubject(event.target.value)} />
        </div>
        <div className="full">
          <label className="form-label" htmlFor="contact-message">Message *</label>
          <textarea className="form-textarea" id="contact-message" required value={message} onChange={(event) => setMessage(event.target.value)} />
        </div>
      </div>
      <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '18px' }}>
        <button className="btn" type="submit">Prepare email</button>
        <ButtonLink to={`mailto:${site.email}`} variant="secondary" small>Or email directly</ButtonLink>
      </div>
      <p className="form-note">
        This concept site has no backend. Submitting opens your email application with the message ready to send to {site.email}.
      </p>
      {sent && (
        <p className="form-status" role="status">
          Your email application should now be open. If nothing happened, email {site.email} directly.
        </p>
      )}
    </form>
  )
}
