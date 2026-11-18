import { useState } from 'react'

export function Accordion({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="faq">
      {items.map((item, index) => (
        <div className="faq__item" key={item.q}>
          <button
            type="button"
            className="faq__question"
            aria-expanded={open === index}
            aria-controls={`faq-panel-${index}`}
            id={`faq-button-${index}`}
            onClick={() => setOpen(open === index ? null : index)}
          >
            {item.q}
            <span aria-hidden="true">{open === index ? '−' : '+'}</span>
          </button>
          {open === index && (
            <div className="faq__answer" id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
