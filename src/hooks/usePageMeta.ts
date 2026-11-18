import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { audiences } from '../data/content'

const audienceTitles = Object.fromEntries(
  audiences.map((audience) => [
    `/solutions/${audience.slug}`,
    {
      title: `${audience.name} — Solutions — EKCÖLAB Analytics`,
      description: audience.summary,
    },
  ]),
) as Record<string, { title: string; description: string }>

const titles: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'EKCÖLAB Analytics — Community-level environmental intelligence',
    description:
      'Satellite dashboards see the storm. They do not see the street. Explore community-level water, sanitation and climate risk intelligence with EKCÖLAB Analytics.',
  },
  '/platform': {
    title: 'Platform — EKCÖLAB Analytics',
    description:
      'Offline field collection, boundary drawing without GIS training, community risk analysis and AI-supported reporting in one platform.',
  },
  '/community-risk-explorer': {
    title: 'Community Risk Explorer — EKCÖLAB Analytics',
    description:
      'Explore aggregated community-level WASH and climate risk indicators. The EKCÖLAB Community Risk Explorer requires no account.',
  },
  '/solutions': {
    title: 'Solutions — EKCÖLAB Analytics',
    description:
      'Find the right route into EKCÖLAB Analytics for communities, NGOs, governments, funders and researchers.',
  },
  '/methodology': {
    title: 'Methodology — EKCÖLAB Analytics',
    description:
      'How field observations are validated, contextualised with climate models and synthesised into community reports.',
  },
  '/pricing': {
    title: 'Pricing and access — EKCÖLAB Analytics',
    description:
      'What is free to explore, what needs an account, and what the published terms say about subscription plans.',
  },
  '/about': {
    title: 'About — EKCÖLAB Analytics',
    description:
      'EKCÖLAB Analytics is a data and monitoring platform developed by EKCÖLAB organization in Buea, Cameroon.',
  },
  '/resources': {
    title: 'Resources — EKCÖLAB Analytics',
    description:
      'Public links, methodology documentation, legal information and routes to the EKCÖLAB team.',
  },
  '/contact': {
    title: 'Contact — EKCÖLAB Analytics',
    description: 'Ask a question, request technical documentation or explore a partnership with EKCÖLAB Analytics.',
  },
  '/support': {
    title: 'Support the work — EKCÖLAB Analytics',
    description: 'Ways to support open, community-level environmental monitoring.',
  },
  '/privacy': {
    title: 'Privacy summary — EKCÖLAB Analytics',
    description: 'A plain-language summary of the published EKCÖLAB Analytics privacy policy.',
  },
  '/terms': {
    title: 'Terms summary — EKCÖLAB Analytics',
    description: 'A plain-language summary of the published EKCÖLAB Analytics terms of service.',
  },
  ...audienceTitles,
}

export function usePageMeta(path: string, fallbackTitle: string, fallbackDescription: string) {
  useEffect(() => {
    const meta = titles[path] ?? { title: fallbackTitle, description: fallbackDescription }
    document.title = meta.title
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.content = meta.description
  }, [path, fallbackTitle, fallbackDescription])
}

export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''))
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 40)
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
