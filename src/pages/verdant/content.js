// Copy for the Verdant case study, verbatim from Figma (file 4XFXkPFzLYd4Oh9J5D8HpB, frame 276:2378).

export const projectDetails = [
  { label: 'Role', value: 'UI/UX Designer' },
  { label: 'Scope', value: 'Website design · Responsive design · Information architecture · UI design' },
  { label: 'Platform', value: 'Responsive website' },
  { label: 'Project type', value: 'Concept project' },
]

export const journeySteps = [
  'Discovering a property',
  'Understanding what makes it unique',
  'Planning a stay',
]

export const purposes = [
  {
    label: 'INSPIRE',
    title: 'Create an emotional desire to travel.',
    text: 'Photography, atmosphere and storytelling that reflect the tranquillity and exclusivity of the retreats.',
    featured: true,
  },
  {
    label: 'INFORM',
    title: 'Provide what guests need to decide.',
    text: 'Clear details about retreats, experiences and reservations, so guests can make a confident decision.',
  },
]

export const guestJourney = [
  { title: 'Discover the brand', text: 'The story, the landscape and the VERDANT way of hosting.' },
  { title: 'Explore destinations', text: 'Distinct retreats, each with its own identity.' },
  { title: 'Understand the experiences', text: 'Nature, wellness, culinary and local culture.' },
  { title: 'Plan the stay', text: 'Dates, villas and a reservation enquiry.' },
]

export const designGoals = [
  ['Establish a distinctive luxury hospitality identity.', 'Make retreat discovery intuitive and engaging.'],
  [
    'Communicate experiences beyond accommodation.',
    'Build trust through clear and accessible information.',
    'Create a seamless path from inspiration to reservation enquiry.',
  ],
]

export const visitorTypes = [
  {
    label: '01 — VISITOR TYPE',
    title: 'Exploratory visitors',
    text: 'Discover VERDANT through its story and visual experience, then explore individual retreats and curated experiences.',
    path: ['Home', 'Our Retreats', 'Experiences'],
    featured: true,
  },
  {
    label: '02 — VISITOR TYPE',
    title: 'Decided visitors',
    text: 'Already know what they are looking for, and move directly into planning their stay.',
    path: ['Reservations', 'Select dates', 'Choose villa'],
  },
]

export const architecture = [
  { label: '01 · THE STORY', title: 'Discover', pages: ['Home', 'About VERDANT', 'Sustainability'] },
  { label: '02 · THE RETREATS', title: 'Explore', pages: ['Our Retreats', 'Retreat Details', 'Experiences'] },
  { label: '03 · THE STORIES', title: 'Get Inspired', pages: ['Journal', 'Stories', 'Destination Guides'] },
  { label: '04 · THE ACTION', title: 'Plan Your Stay', pages: ['Reservations', 'Contact', 'Guest Enquiries'], accent: true },
]

export const inspirationTiles = [
  { title: 'Forests', text: 'Deep greens and layered canopy', tone: 'forest' },
  { title: 'Mist-covered mountains', text: 'Soft, muted and quiet', tone: 'mist' },
  { title: 'Backwaters', text: 'Still water and reflection', tone: 'water' },
  { title: 'Natural architecture', text: 'Warm timber, stone and earth', tone: 'earth' },
]

export const contrastBand = [
  {
    label: 'WARM IVORY',
    title: 'Calm, editorial and immersive.',
    text: 'Warm neutrals, refined typography and large photography give every page room to breathe.',
    tone: 'ivory',
  },
  {
    label: 'DEEP FOREST',
    title: 'Without becoming predictable.',
    text: 'Deep forest tones break the rhythm of the page and reflect the brand’s positioning.',
    tone: 'forest',
  },
]

export const principles = [
  {
    title: 'Immersive imagery',
    text: 'Large photographs carry the emotional narrative, allowing visitors to experience the destinations visually.',
  },
  {
    title: 'Editorial layouts',
    text: 'Asymmetrical compositions and varied image sizes create a magazine-like browsing experience.',
  },
  {
    title: 'Quiet luxury',
    text: 'Minimal UI, generous whitespace and subtle details keep the interface refined.',
  },
  {
    title: 'Natural contrast',
    text: 'Warm ivory backgrounds are balanced with deep forest-green sections to create rhythm throughout the page.',
  },
]

export const palette = [
  { name: 'Forest green', role: 'Primary brand colour', color: '#2f4a3a' },
  { name: 'Sage', role: 'Supporting natural tone', color: '#9aae8f' },
  { name: 'Warm sand', role: 'Secondary background', color: '#d9c7a7' },
  { name: 'Ivory', role: 'Primary page background', color: '#f6f1e7' },
  { name: 'Earth brown', role: 'Subtle accent', color: '#7a5a40' },
]

export const components = [
  'Navigation and dropdowns',
  'Primary and secondary buttons',
  'Destination cards',
  'Experience cards',
  'Editorial cards',
  'Booking controls',
  'Form elements',
  'Section labels',
  'Footer components',
]

export const decisions = [
  {
    title: 'Guided booking structure',
    text: 'A clear progression helps guests understand the stages of planning their stay.',
  },
  {
    title: 'Retreat selection',
    text: 'Visual property cards make destinations easier to recognise and compare.',
  },
  {
    title: 'Date selection',
    text: 'A calendar interface communicates selected dates, stay duration and availability.',
  },
  {
    title: 'Accommodation comparison',
    text: 'Villa cards present capacity, area, features and nightly pricing in a consistent format.',
  },
  {
    title: 'Booking summary',
    text: 'A persistent summary consolidates the selected property, stay dates, guests, accommodation and estimated cost.',
  },
]
