import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollManager, usePageMeta } from './hooks/usePageMeta'
import { Home } from './pages/Home'
import { Platform } from './pages/Platform'
import { Explorer } from './pages/Explorer'
import { Solutions } from './pages/Solutions'
import { AudiencePage } from './pages/AudiencePage'
import { Methodology } from './pages/Methodology'
import { Pricing } from './pages/Pricing'
import { About } from './pages/About'
import { Resources } from './pages/Resources'
import { Contact } from './pages/Contact'
import { Support } from './pages/Support'
import { Legal } from './pages/Legal'
import { NotFound } from './pages/NotFound'

function Shell() {
  const { pathname } = useLocation()
  usePageMeta(pathname, 'Page not found — EKCÖLAB Analytics', 'The requested EKCÖLAB Analytics page could not be found.')
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/community-risk-explorer" element={<Explorer />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<AudiencePage />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
