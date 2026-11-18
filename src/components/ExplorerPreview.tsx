import { useState } from 'react'
import { explorerCountries, site } from '../data/content'
import { MapVisual } from './MapVisual'
import { ButtonLink, IllustrativeNote } from './Ui'

export function ExplorerPreview({ compact = false }: { compact?: boolean }) {
  const [country, setCountry] = useState<string>(explorerCountries[0])
  const [community, setCommunity] = useState('Example community 01')
  const [selected, setSelected] = useState(0)

  function selectMarker(index: number) {
    setSelected(index)
    setCommunity(`Example community 0${index + 1}`)
  }

  return (
    <div className="explorer__panel">
      <div className="map__toolbar">
        <div className="field">
          <label htmlFor={`explorer-country-${compact ? 'home' : 'page'}`}>Country</label>
          <select id={`explorer-country-${compact ? 'home' : 'page'}`} value={country} onChange={(event) => setCountry(event.target.value)}>
            {explorerCountries.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor={`explorer-community-${compact ? 'home' : 'page'}`}>Community</label>
          <select id={`explorer-community-${compact ? 'home' : 'page'}`} value={community} onChange={(event) => setCommunity(event.target.value)}>
            {[1, 2, 3, 4].map((n) => <option key={n} value={`Example community 0${n}`}>Example community 0{n}</option>)}
          </select>
        </div>
        <ButtonLink to={site.explorerUrl} small external>Open live explorer</ButtonLink>
      </div>

      <MapVisual compact={compact} selected={selected} onSelect={selectMarker} country={country} />

      <div className="explorer__detail">
        <div><span>Selected</span><strong>{community}</strong></div>
        <div><span>Country filter</span><strong>{country}</strong></div>
        <div><span>Report view</span><strong>Available in live explorer</strong></div>
      </div>
      <div style={{ padding: '0 16px 16px' }}>
        <IllustrativeNote>
          Filters and markers demonstrate the interface. No live community values or AI outputs are shown in this concept.
        </IllustrativeNote>
      </div>
    </div>
  )
}
