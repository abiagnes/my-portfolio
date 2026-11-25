import showcase from '../../assets/figma/verdant/final-showcase.jpg'
import pages from '../../assets/figma/verdant/final-pages.jpg'
import reservationTop from '../../assets/figma/verdant/final-reservation-top.jpg'
import { SectionIntro, Shot } from './parts.jsx'

export default function FinalExperience() {
  return (
    <section className="verdant-section">
      <SectionIntro
        number="10"
        label="Final experience"
        title="A digital extension of the VERDANT experience."
      >
        <p>
          The final design brings together brand storytelling, destination discovery and reservation
          planning within a cohesive hospitality website.
        </p>
        <p>
          From the immersive homepage to the structured booking interface, each part of the
          experience is designed to communicate the same idea: luxury can be thoughtful, meaningful
          and deeply connected to nature.
        </p>
      </SectionIntro>

      <Shot
        src={showcase}
        width="1320"
        height="935"
        alt="The VERDANT homepage hero on desktop with the mobile version overlapping its corner."
      />
      <Shot
        src={pages}
        width="1912"
        height="816"
        alt="Six VERDANT page heroes in a grid, from the homepage to the journal."
      />
      <Shot
        src={reservationTop}
        width="1080"
        height="990"
        alt="The top of the Plan Your Sanctuary reservation page: progress steps, retreat choice, dates and the stay summary."
      />
    </section>
  )
}
