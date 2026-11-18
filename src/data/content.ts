export const site = {
  name: 'EKCÖLAB Analytics',
  email: 'infoekcoanalytics@gmail.com',
  phone: '+237 6 75 27 53 79',
  phoneHref: 'tel:+237675275379',
  location: 'Buea, Cameroon',
  hours: '10:00–17:00, Monday to Friday',
  explorerUrl: 'https://www.ekcolabanalytics.com/community-risk-explorer/',
  donationUrl: 'https://www.ekcolabanalytics.com/donation/',
  termsUrl: 'https://www.ekcolabanalytics.com/terms-of-service/',
  privacyUrl: 'https://www.ekcolabanalytics.com/privacy-policy/',
  partnershipUrl: 'https://www.ekcolabanalytics.com/partnership/#contact-form',
} as const

export const explorerCountries = [
  'Cameroon',
  'Ghana',
  'Kenya',
  'Malawi',
  'Nigeria',
  'Uganda',
  'Zimbabwe',
] as const

export const imageCredits = [
  { id: '15570541', author: 'Pexels contributor', subject: 'Aerial view of Makete village, Tanzania' },
  { id: '8655016', author: 'Pexels contributor', subject: 'Drone view of Ganvié, Benin' },
  { id: '33610060', author: 'Pexels contributor', subject: 'Young man using a community water pump' },
  { id: '35094211', author: 'Pexels contributor', subject: 'Water collection in Kampala, Uganda' },
  { id: '34339320', author: 'Pexels contributor', subject: 'Hands washing at a rural water point' },
  { id: '16629768', author: 'Pexels contributor', subject: 'Field students taking notes outdoors in Nigeria' },
  { id: '37666113', author: 'Pexels contributor', subject: 'Water sample collected in the field' },
  { id: '8917908', author: 'Pexels contributor', subject: 'Laboratory water testing' },
  { id: '32809721', author: 'Pexels contributor', subject: 'Community leader addressing a gathering' },
  { id: '27471164', author: 'Pexels contributor', subject: 'Community gathering outdoors' },
  { id: '38784175', author: 'Pexels contributor', subject: 'Lagos city streets, Nigeria' },
  { id: '33516343', author: 'Pexels contributor', subject: 'Aerial view of Maputo, Mozambique' },
  { id: '36224108', author: 'Pexels contributor', subject: 'Dry landscape in Kaduna, Nigeria' },
  { id: '30678630', author: 'Pexels contributor', subject: 'River landscape in Tanzania' },
  { id: '17739117', author: 'Pexels contributor', subject: 'Mangroves and coastline near Kilwa, Tanzania' },
  { id: '6757977', author: 'Pexels contributor', subject: 'Aerial farmland and village in Kenya' },
  { id: '33621869', author: 'Pexels contributor', subject: 'Aerial view of Phola township, South Africa' },
  { id: '34311665', author: 'Pexels contributor', subject: 'Waste management worker in Kampala, Uganda' },
  { id: '12361162', author: 'Pexels contributor', subject: 'Participant taking notes in Gitega, Burundi' },
  { id: '16566547', author: 'Pexels contributor', subject: 'Rural well in Kitale, Kenya' },
] as const

export const audiences = [
  {
    slug: 'communities',
    name: 'Communities',
    short: 'Own your safety data',
    summary:
      'A local volunteer can gather the evidence a community needs to ask for action, prepare for flooding or hold a service provider to account.',
    next: 'See how communities use the platform',
    image: '/images/community-pump.webp',
    alt: 'A young man using a community water pump while others stand nearby. Illustrative stock photograph.',
    points: [
      'Standardised assessments that can be run with limited connectivity',
      'Community boundaries drawn on a phone, without GIS training',
      'Reports that make local conditions legible to decision-makers',
    ],
  },
  {
    slug: 'ngos',
    name: 'NGOs & humanitarian organisations',
    short: 'Focus on programs, not spreadsheets',
    summary:
      'Use a consistent collection and analysis pipeline so field teams can spend more time on programming and less time on data administration.',
    next: 'Explore the NGO pathway',
    image: '/images/field-notes.webp',
    alt: 'Students in green field coats taking notes outdoors in Nigeria. Illustrative stock photograph.',
    points: [
      'Teams of field analysts managed from one organisation account',
      'Geolocated observations, photographs and surveys in one place',
      'Visual reports to support programme design and stakeholder communication',
    ],
  },
  {
    slug: 'governments',
    name: 'Governments',
    short: 'Fill the resolution gap',
    summary:
      'Street-level inputs can help target limited infrastructure budgets more precisely than national averages alone.',
    next: 'Explore the government pathway',
    image: '/images/city-lagos.webp',
    alt: 'Highrise buildings and busy streets in Lagos, Nigeria. Illustrative stock photograph.',
    points: [
      'Community-level evidence alongside existing monitoring systems',
      'Risk themes that can inform infrastructure planning',
      'Consistent protocols across regions and analyst teams',
    ],
  },
  {
    slug: 'funders',
    name: 'Funders & grant-making institutions',
    short: 'Fund with clearer evidence',
    summary:
      'Open access to community-level indicators, plus grant-ready reporting, can support more transparent conversations about where resources are needed.',
    next: 'Explore the funder pathway',
    image: '/images/community-meeting.webp',
    alt: 'A community leader speaking to a gathered group outdoors. Illustrative stock photograph.',
    points: [
      'Open, aggregated risk metrics in the Community Risk Explorer',
      'Visual report formats for proposals and stakeholder updates',
      'Clear routes to commission training or sponsored pilots',
    ],
  },
  {
    slug: 'researchers',
    name: 'Researchers & analysts',
    short: 'Data ready to analyse, replicate and cite',
    summary:
      'Hyper-local WASH and climate observations with documented indicator definitions and quality-control procedures.',
    next: 'Explore the research pathway',
    image: '/images/lab-testing.webp',
    alt: 'A researcher holding laboratory test tubes. Illustrative stock photograph.',
    points: [
      'Indicators aligned with WHO/UNICEF JMP definitions for SDG 6 monitoring',
      'Documented validation and publication thresholds',
      'Technical documentation available on request from the research team',
    ],
  },
] as const

export const capabilities = [
  {
    title: 'Offline field collection',
    body: 'Conduct assessments in low-connectivity areas. On the public site, EKCÖLAB states that data syncs and processes automatically within 30 seconds once connectivity returns.',
    image: '/images/field-sample.webp',
    alt: 'A person collecting a water sample from a stream. Illustrative stock photograph.',
  },
  {
    title: 'Zero-expert geometry',
    body: 'Draw a neighbourhood boundary on a phone. The platform then calculates water-source functionality, sanitation ratios and walking distances to water points.',
    image: '/images/township-aerial.webp',
    alt: 'Aerial view of rooftops and streets in a township in South Africa. Illustrative stock photograph.',
  },
  {
    title: 'Community risk analysis',
    body: 'Field observations are turned into comparable risk themes across water, sanitation, health, environment and climate.',
    image: '/images/landscape-dry.webp',
    alt: 'Dry landscape in Kaduna, Nigeria. Illustrative stock photograph.',
  },
  {
    title: 'Madib AI reporting',
    body: 'Madib AI synthesises field inputs with climate and health context into a community report with insights and recommendations for action.',
    image: '/images/field-recording.webp',
    alt: 'A participant taking notes during a session in Burundi. Illustrative stock photograph.',
  },
] as const

export const analysisAreas = [
  'Household water storage',
  'Springs and rivers',
  'Environmental pollution and contaminants',
  'Taps and boreholes',
  'Sanitation and hygiene',
  'Water accessibility and scarcity',
  'Community health',
  'Climate change',
] as const

export const methodSteps = [
  {
    n: '01',
    title: 'Participatory field collection',
    body: 'Trained local analysts use standardised survey instruments aligned with WHO/UNICEF JMP indicators and EKCÖLAB field protocols for SDG 6 monitoring.',
  },
  {
    n: '02',
    title: 'Validation and quality control',
    body: 'Submissions are checked automatically for range, consistency and completeness. Values are withheld where the sample falls below the stated sufficiency threshold.',
  },
  {
    n: '03',
    title: 'Climate contextualisation',
    body: 'Community risk scores are cross-referenced with downscaled, peer-reviewed climate projection models and WMO-aligned climate risk baselines.',
  },
  {
    n: '04',
    title: 'Madib AI synthesis',
    body: 'Madib AI combines field observations, climate signals and global health indicators to produce a written community report and recommendations.',
  },
] as const

export const faqs = [
  {
    q: 'Can I explore community data without an account?',
    a: 'Yes. The Community Risk Explorer on the EKCÖLAB public website states that no account is required to view data. An account is needed to run your own analyses and manage field teams.',
  },
  {
    q: 'Can analysis be carried out without an internet connection?',
    a: 'Yes. The public FAQ says analysis can be carried out in a poor network area or without internet. You need internet to log in before going to the field. The current FAQ also states that an inactive account closes after 30 minutes; plan your sign-in accordingly.',
  },
  {
    q: 'Does EKCÖLAB provide training?',
    a: 'Yes. The current website states that training is available for individuals and organisations.',
  },
  {
    q: 'Can an organisation add its own field analysts?',
    a: 'Yes. The public FAQ says organisations can add field analysts: Organization Basic allows up to 5, and Organization Premium up to 10. Current prices are not published on the public site.',
  },
  {
    q: 'How quickly do results appear?',
    a: 'The public FAQ says results appear in less than 10 seconds after submission. It also notes that the dashboard only shows sections for analysis types you have actually conducted.',
  },
  {
    q: 'How is Artificial Intelligence used?',
    a: 'The site states that AI is used for data analysis and recommendations. Madib AI synthesises validated field inputs with climate and health context to produce reports. EKCÖLAB’s terms state that analysis is for information purposes and should not be treated as 100% accurate.',
  },
  {
    q: 'How do subscriptions work?',
    a: 'The published terms describe monthly and annual subscriptions, non-refundable fees, payment via Stripe or other systems, taxes charged separately, and cancellation on the day the current plan expires. The number of analyses depends on the subscription plan. Prices are not listed publicly.',
  },
  {
    q: 'Who owns the data collected on the platform?',
    a: 'The published terms state that users retain full ownership of submitted data and may request a CSV export by email through the platform support section.',
  },
] as const
