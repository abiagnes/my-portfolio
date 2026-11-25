import Eyebrow from '../../components/Eyebrow.jsx'
import homepage from '../../assets/figma/verdant/homepage.jpg'
import retreats from '../../assets/figma/verdant/retreats.jpg'
import retreatDetail from '../../assets/figma/verdant/retreat-detail.jpg'
import experiences from '../../assets/figma/verdant/experiences.jpg'
import sustainability from '../../assets/figma/verdant/sustainability.jpg'
import { SectionIntro, Shot } from './parts.jsx'

const blocks = [
  {
    eyebrow: 'HOMEPAGE',
    title: 'The first impression',
    copy: [
      'The homepage introduces VERDANT through an immersive landscape, a concise brand message and an immediate opportunity to explore the retreats.',
      'The content flows from the brand introduction to featured destinations, curated experiences, sustainability, guest stories and travel inspiration.',
    ],
    image: {
      src: homepage,
      width: 1952,
      height: 1567,
      alt: 'Three long VERDANT homepage scrolls: hero, brand story and retreats; experiences and sustainability; journal, newsletter and footer.',
    },
  },
  {
    eyebrow: 'RETREAT DISCOVERY',
    title: 'Finding the right escape',
    copy: [
      "The retreats section allows visitors to explore the distinct personalities of VERDANT's properties.",
      'Rather than presenting destinations as interchangeable hotel listings, each retreat is given its own visual identity through photography, descriptions and location context.',
    ],
    image: {
      src: retreats,
      width: 1080,
      height: 990,
      alt: 'Retreat listings for VERDANT Forest in Wayanad and VERDANT Mist in Munnar, each with a large photo, key facts and booking actions.',
    },
  },
  {
    eyebrow: 'RETREAT DETAILS',
    title: 'Experiencing the destination',
    copy: [
      'The property detail page brings together the essential information needed to understand the retreat, including accommodation, amenities, location, experiences and photography.',
      'The layout prioritises visual exploration while keeping important information accessible.',
    ],
    image: {
      src: retreatDetail,
      width: 1328,
      height: 1400,
      variant: 'detail',
      alt: 'The VERDANT Forest detail page: hero with booking bar, retreat facts, photo gallery, villas, amenities and forest experiences.',
    },
  },
  {
    eyebrow: 'EXPERIENCES',
    title: 'Beyond accommodation',
    head: 'narrow',
    copy: [
      'The experiences page focuses on what guests can do during their stay.',
      "Nature, wellness, culinary experiences and local culture are presented through an editorial image layout, allowing the experiences themselves to become part of the destination's appeal.",
    ],
    image: {
      src: experiences,
      width: 1272,
      height: 776,
      variant: 'experiences',
      alt: 'Four experience cards: Nature & Adventure, Wellness & Rejuvenation, Culinary Experiences and Local Culture, each with a photo and activity list.',
    },
  },
  {
    eyebrow: 'SUSTAINABILITY',
    title: 'A part of the brand, not an afterthought',
    head: 'narrow',
    copy: [
      "Sustainability is integrated into the brand story through a dedicated section that communicates VERDANT's approach to responsible hospitality.",
      'The visual treatment uses a contrasting forest-green background and layered imagery to distinguish the section while maintaining the overall aesthetic.',
    ],
    image: {
      src: sustainability,
      width: 1080,
      height: 822,
      variant: 'sustainability',
      alt: '“Luxury That Respects Nature.” on forest green, with layered photos of solar-roofed villas and a basket of pepper.',
    },
  },
]

export default function DesigningExperience() {
  return (
    <section className="verdant-section verdant-section--blocks">
      <SectionIntro
        number="07"
        label="Designing the experience"
        title="Bringing the brand to life through the interface."
        layout="wide"
      >
        <p>
          The website was designed to transition naturally from visual storytelling into practical
          exploration. Each section serves a specific purpose while maintaining a consistent design
          language.
        </p>
      </SectionIntro>

      {blocks.map(({ eyebrow, title, head, copy, image }) => (
        <div className="verdant-block" key={eyebrow}>
          <div className={`verdant-block__row ${head ? `verdant-block__row--${head}` : ''}`}>
            <div className="verdant-block__head">
              <Eyebrow>{eyebrow}</Eyebrow>
              <h3 className="verdant-subtitle">{title}</h3>
            </div>
            <div className="verdant-block__copy">
              {copy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Shot {...image} />
        </div>
      ))}
    </section>
  )
}
