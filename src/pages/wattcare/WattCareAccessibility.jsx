import components from '../../assets/figma/wattcare/accessibility-components.png'
import designSystem from '../../assets/figma/wattcare/design-system.png'
import SectionHead from './SectionHead.jsx'
import { accessibilityPoints, palette } from './content.js'

export default function WattCareAccessibility() {
  return (
    <section className="wattcare-section wattcare-access">
      <div className="wattcare-row">
        <SectionHead
          number="06"
          label="Accessibility & design system"
          title="Accessibility shaped the experience from the beginning."
        />
        <p className="wattcare-text wattcare-text--strong wattcare-row__aside">
          It influenced how information is presented, how users navigate, and how the interface responds.
        </p>
      </div>

      <div className="wattcare-access__row">
        <ol className="wattcare-access__points">
          {accessibilityPoints.map((point, index) => (
            <li key={point.title} className="wattcare-access__point">
              <div className="wattcare-access__point-head">
                <span className="wattcare-access__point-number">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="wattcare-access__point-title">{point.title}</h3>
              </div>
              <p className="wattcare-access__point-text">{point.text}</p>
            </li>
          ))}
        </ol>
        <img
          className="wattcare-access__components"
          src={components}
          alt="Annotated WattCare components, numbered one to five: a usage card with a large key figure, a tip and navigation bar, and text size, high contrast, reduce motion and read aloud settings."
          width="1246"
          height="1192"
          loading="lazy"
        />
      </div>

      <div className="wattcare-access__palette">
        <p className="wattcare-access__palette-label">PALETTE</p>
        <ul className="wattcare-access__swatches">
          {palette.map((color) => (
            <li key={color.id} className="wattcare-access__swatch">
              <span className={`wattcare-access__chip wattcare-access__chip--${color.id}`} aria-hidden="true" />
              {color.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="wattcare-access__system" tabIndex="0" role="region" aria-label="WattCare design system overview">
        <img
          src={designSystem}
          alt="Overview of the WattCare design system: colour, typography, spacing, buttons, status and feedback, form controls, cards, screen building blocks, content patterns, writing guidance, an accessibility checklist and icons."
          width="2560"
          height="1240"
          loading="lazy"
        />
      </div>
    </section>
  )
}
