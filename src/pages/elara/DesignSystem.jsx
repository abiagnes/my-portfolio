import library from '../../assets/figma/elara/design-system-library.png'
import SectionHead from './SectionHead.jsx'

const parts = [
  ['Visual foundations', 'Typography, color, spacing, and layout.'],
  ['Reusable components', 'Navigation, buttons, forms, tables, and status indicators.'],
  ['Interaction states', 'Consistent feedback for loading, errors, and synchronization status.'],
]

export default function DesignSystem() {
  return (
    <section className="elara-section elara-section--alt elara-system">
      <div className="elara-system__copy">
        <SectionHead number="05" label="Design system" title="Consistency across different workflows." />
        <p className="elara-body">
          I created a shared design system to maintain consistency across the employee and admin experiences.
        </p>
        <div className="elara-system__group">
          <p className="elara-body">The system brings together:</p>
          <ul className="elara-system__parts">
            {parts.map(([title, text]) => (
              <li className="elara-system__part" key={title}>
                <p className="elara-system__part-title">{title}</p>
                <p className="elara-system__part-text">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="elara-body elara-body--strong">
          The result is a cohesive interface system that supports different workflows without treating every screen as a
          separate design problem.
        </p>
      </div>
      <img
        className="elara-system__image"
        src={library}
        alt="Elara design system showing typography, color tokens, components, and interaction states"
        width="1440"
        height="1472"
        loading="lazy"
      />
    </section>
  )
}
