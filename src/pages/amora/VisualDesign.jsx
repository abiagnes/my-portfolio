import Eyebrow from '../../components/Eyebrow.jsx'
import designSystem from '../../assets/figma/amora/design-system.png'
import uiShowcase from '../../assets/figma/amora/ui-showcase.png'
import { palette, visualDirection } from './content.js'
import { SectionIntro } from './parts.jsx'

export default function VisualDesign() {
  return (
    <section className="amora-section amora-section--alt">
      <SectionIntro
        number="08"
        label="Visual design"
        title="A calm and consistent healthcare experience."
        width={620}
      >
        <p className="amora-lead">
          The visual direction was designed to make healthcare information feel approachable,
          organised and easy to understand.
        </p>
      </SectionIntro>

      <div className="amora-visual">
        <div className="amora-visual__list">
          <Eyebrow>Visual direction</Eyebrow>
          <ol>
            {visualDirection.map(({ title, text }, index) => (
              <li key={title}>
                <span className="amora-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="amora-visual__palette">
          <Eyebrow>Palette</Eyebrow>
          <ul>
            {palette.map(({ name, hex }) => (
              <li key={hex}>
                <span className="amora-swatch" style={{ background: hex }} />
                <p className="amora-swatch__name">{name}</p>
                <p className="amora-swatch__hex">{hex}</p>
              </li>
            ))}
          </ul>
          <p className="amora-mono-note">Swatches are indicative; replace them with Amora’s final tokens.</p>
        </div>
      </div>

      <div className="amora-showcase amora-showcase--system">
        <img
          src={designSystem}
          width="1535"
          height="831"
          loading="lazy"
          alt="Amora design system board: foundations, core components, data and input components, and content and feedback components."
        />
      </div>
      <div className="amora-showcase amora-showcase--ui">
        <img
          src={uiShowcase}
          width="1189"
          height="844"
          loading="lazy"
          alt="Overview board of Amora screens grouped by flow: onboarding, account setup, main tabs, family member, add and upload a record, add manually, care tasks, record details, notifications and account."
        />
      </div>
    </section>
  )
}
