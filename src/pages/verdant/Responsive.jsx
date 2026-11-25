import breakpoints from '../../assets/figma/verdant/breakpoints.jpg'
import { SectionIntro, Shot } from './parts.jsx'

export default function Responsive() {
  return (
    <section className="verdant-section">
      <SectionIntro
        number="09"
        label="Responsive design"
        title="A consistent experience across devices."
      >
        <p>
          The website was designed to adapt across desktop, tablet and mobile devices while
          preserving its editorial character.
        </p>
        <p>
          On smaller screens, layouts transition into simpler compositions, imagery is carefully
          recropped, navigation is adapted for mobile, and booking controls are reorganised to
          prioritise clarity and ease of use.
        </p>
        <p>
          The responsive approach focuses on preserving the experience rather than simply shrinking
          the desktop layout.
        </p>
      </SectionIntro>

      <Shot
        src={breakpoints}
        width="1771"
        height="772"
        alt="The VERDANT homepage hero at desktop, tablet and mobile widths side by side."
      />
    </section>
  )
}
