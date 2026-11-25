import bullet from '../../assets/figma/verdant/bullet.svg'
import foundations from '../../assets/figma/verdant/design-system.jpg'
import { components, palette } from './content.js'
import { SectionIntro, Shot } from './parts.jsx'

export default function DesignSystem() {
  return (
    <section className="verdant-section">
      <SectionIntro
        number="06"
        label="Design system"
        title="A consistent foundation for the brand experience."
      >
        <p>
          The design system was developed to maintain consistency across the website while allowing
          photography and content to remain the primary focus.
        </p>
      </SectionIntro>

      <div className="verdant-system">
        <article className="verdant-system__card">
          <p className="verdant-index">01</p>
          <h3 className="verdant-system__title">Colour palette</h3>
          <ul className="verdant-swatches">
            {palette.map(({ name, role, color }) => (
              <li className="verdant-swatch" key={name}>
                <span className="verdant-swatch__chip" style={{ background: color }} />
                <span className="verdant-swatch__text">
                  <span className="verdant-swatch__name">{name}</span>
                  <span className="verdant-swatch__role">{role}</span>
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="verdant-system__card">
          <p className="verdant-index">02</p>
          <h3 className="verdant-system__title">Typography</h3>
          <div className="verdant-type" aria-hidden="true">
            <span className="verdant-type__serif">Aa</span>
            <span className="verdant-type__sans">Aa</span>
          </div>
          <ul className="verdant-type__labels">
            <li>SERIF · EDITORIAL</li>
            <li>SANS · FUNCTIONAL</li>
          </ul>
          <p className="verdant-system__text">
            A refined serif typeface creates the brand's editorial character, paired with a clean
            sans-serif for navigation, descriptions, labels and functional elements.
          </p>
        </article>

        <article className="verdant-system__card verdant-system__card--tight">
          <p className="verdant-index">03</p>
          <h3 className="verdant-system__title">Components</h3>
          <ul className="verdant-components">
            {components.map((item) => (
              <li key={item}>
                <img src={bullet} width="5" height="5" alt="" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <Shot
        src={foundations}
        width="2200"
        height="1666"
        alt="VERDANT foundations sheet: colour styles on the left and the serif and sans text styles on the right."
      />
    </section>
  )
}
