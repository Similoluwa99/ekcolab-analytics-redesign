import type { CSSProperties } from 'react'
import { IllustrativeNote } from './Ui'

export type MockVariant = 'field' | 'validate' | 'risk' | 'report'

const titles: Record<MockVariant, string> = {
  field: 'Field assessment',
  validate: 'Validation queue',
  risk: 'Community risk view',
  report: 'Community report',
}

export function ProductMock({ variant }: { variant: MockVariant }) {
  return (
    <div className="mock" aria-label={`${titles[variant]} — illustrative interface preview`}>
      <div className="mock__bar">
        <i /><i /><i />
        <span>EKCÖLAB Analytics · illustrative preview</span>
      </div>
      <div className="mock__body">
        {variant === 'field' && (
          <div className="mock-phone">
            <div className="phone">
              <div className="phone__screen">
                <div className="phone__top"><span>Field app</span><span>Offline</span></div>
                <div className="phone__title">Water point assessment</div>
                <div className="phone__fields"><i /><i /><i /></div>
                <div className="phone__btn">Save observation</div>
              </div>
            </div>
            <div>
              <div className="mock__title">Collect once, use everywhere</div>
              <p className="mock__sub">A typical assessment flow shown for demonstration.</p>
              <ul className="mock-list">
                <li><b>1</b><span>Record GPS position and a geolocated photograph.</span></li>
                <li><b>2</b><span>Complete the standardised survey module.</span></li>
                <li><b>3</b><span>Work without coverage; sync when connected.</span></li>
              </ul>
            </div>
          </div>
        )}

        {variant === 'validate' && (
          <div>
            <div className="mock__title">Automated quality checks</div>
            <p className="mock__sub">The public methodology describes range, consistency and completeness checks before analysis.</p>
            <div className="mock-form">
              <div className="mock-field"><span>Survey completeness</span><b className="mock-check">Checked</b></div>
              <div className="mock-field"><span>Value range</span><b className="mock-check">Checked</b></div>
              <div className="mock-field"><span>Consistency across modules</span><b className="mock-check">Checked</b></div>
              <div className="mock-field"><span>Minimum sample sufficiency</span><b>Threshold applied</b></div>
            </div>
            <p className="mock__sub" style={{ marginTop: 18 }}>Where evidence is insufficient, the Explorer deliberately withholds a value.</p>
          </div>
        )}

        {variant === 'risk' && (
          <div>
            <div className="mock__title">Community-level risk themes</div>
            <p className="mock__sub">Layout only. No community scores are represented here.</p>
            <div className="mock-grid">
              <div className="mock-tile"><span>Theme</span><strong>Water access</strong></div>
              <div className="mock-tile"><span>Theme</span><strong>Sanitation</strong></div>
              <div className="mock-tile"><span>Theme</span><strong>Climate context</strong></div>
            </div>
            <div className="mock-bars">
              <div className="mock-bar-row"><span>Household storage</span><span className="track"><i style={{ width: '58%' }} /></span><b>—</b></div>
              <div className="mock-bar-row"><span>Water scarcity</span><span className="track"><i style={{ width: '74%' }} /></span><b>—</b></div>
              <div className="mock-bar-row"><span>Sanitation</span><span className="track"><i style={{ width: '42%' }} /></span><b>—</b></div>
              <div className="mock-bar-row"><span>Community health</span><span className="track"><i style={{ width: '66%' }} /></span><b>—</b></div>
            </div>
          </div>
        )}

        {variant === 'report' && <ReportPreview compact />}
      </div>
      <div style={{ padding: '0 28px 22px' }}><IllustrativeNote>Not connected to live data</IllustrativeNote></div>
    </div>
  )
}

export function ReportPreview({ compact = false }: { compact?: boolean }) {
  const rows = [
    { label: 'Water accessibility and scarcity', width: '68%' },
    { label: 'Sanitation and hygiene', width: '52%' },
    { label: 'Environmental conditions', width: '44%' },
    { label: 'Climate context', width: '61%' },
  ]

  return (
    <div className={compact ? '' : 'report__paper'}>
      <div className="report__paper-head">
        <div>
          <strong>Community assessment report</strong>
          <span>Illustrative layout · not a real community report</span>
        </div>
        <span className="tag tag--sage">Report template</span>
      </div>
      <div className="report__figure" aria-hidden="true">
        <svg viewBox="0 0 600 160" preserveAspectRatio="none">
          <rect width="600" height="160" fill="#f7f8f5" />
          <path d="M0 120h600M0 80h600M0 40h600M100 0v160M220 0v160M340 0v160M460 0v160" stroke="#e3e8e2" strokeWidth="1" />
          <path d="M40 118 120 96 200 110 280 70 360 84 440 52 520 64 580 38" stroke="#4f8061" strokeWidth="3" fill="none" />
          <path d="M40 130 120 122 200 126 280 108 360 116 440 98 520 106 580 88" stroke="#c59a50" strokeWidth="2" fill="none" strokeDasharray="5 5" />
        </svg>
      </div>
      <div className="report__rows">
        {rows.map((row) => (
          <div className="report__row" key={row.label}>
            <span>{row.label}</span>
            <i style={{ '--w': row.width } as CSSProperties} />
          </div>
        ))}
      </div>
      <p className="small" style={{ marginTop: 16 }}>
        A real report would contain community-specific findings, field documentation and recommendations generated from submitted assessments.
      </p>
    </div>
  )
}
