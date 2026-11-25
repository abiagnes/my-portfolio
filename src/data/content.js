import elaraImage from '../assets/figma/home/case-elara.png'
import wattcareImage from '../assets/figma/home/case-wattcare.png'
import amoraImage from '../assets/figma/home/case-amora.png'
import verdantImage from '../assets/figma/home/case-verdant.png'

export const links = {
  email: 'abiagnes2011@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abi-agnes-v-m-075310222/',
}

// Opens the visitor's email app with the address in the To field.
export const mailto = `mailto:${links.email}`

export const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Approach', href: '/#approach' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export const marqueeItems = [
  'Elara',
  'WattCare',
  'Amora',
  'Verdant',
  'Enterprise UX',
  'Information architecture',
  'Inclusive design',
  'Design systems',
]

export const caseStudies = [
  {
    number: '01',
    title: 'Elara',
    image: elaraImage,
    tagline: 'Making enterprise knowledge easier to find, understand, and trust.',
    description:
      'An AI-powered knowledge platform concept focused on helping employees navigate fragmented information and find relevant, contextual answers.',
    tags: ['AI experience design', 'Information architecture', 'Enterprise UX'],
    href: '/work/elara',
  },
  {
    number: '02',
    title: 'WattCare',
    image: wattcareImage,
    tagline: 'Energy monitoring, designed for older adults.',
    description:
      'An accessible mobile app concept that transforms complex household energy data into clear usage summaries, estimated costs, and helpful insights—making it easier for older adults to understand and manage their energy consumption.',
    tags: ['Inclusive design', 'Data visualization', 'Mobile UX'],
    href: '/work/wattcare',
  },
  {
    number: '03',
    title: 'Amora',
    image: amoraImage,
    tagline: 'Making everyday healthcare management feel more connected.',
    description:
      'A family healthcare platform concept designed to bring health information, appointments, and care activities into a more organized, approachable experience.',
    tags: ['Healthcare UX', 'Information architecture', 'User-centered design'],
    href: '/work/amora',
  },
  {
    number: '04',
    title: 'Verdant',
    image: verdantImage,
    tagline: 'Luxury hospitality, designed around nature.',
    description:
      'A premium hospitality website concept crafted to showcase nature-inspired retreats, immersive experiences, and sustainable luxury through thoughtful digital storytelling.',
    tags: ['Website UX/UI', 'Visual storytelling', 'Responsive web design', 'Hospitality experience'],
    href: '/work/verdant',
  },
]

export const principles = [
  {
    number: '01',
    icon: '◐',
    title: 'Clarity over complexity.',
    description:
      'I simplify information, workflows, and interactions so users can focus on what matters.',
  },
  {
    number: '02',
    icon: '◇',
    title: 'Decisions over deliverables.',
    description:
      'I focus on the reasoning behind design choices, the trade-offs involved, and the problems each decision is intended to solve.',
  },
  {
    number: '03',
    icon: '▦',
    title: 'Systems over isolated screens.',
    description:
      'I create consistent, scalable experiences that work across components, journeys, and user needs.',
  },
  {
    number: '04',
    icon: '↗',
    title: 'Impact over aesthetics alone.',
    description:
      'I connect visual design and interaction decisions to usability, accessibility, and meaningful product outcomes.',
  },
]
