import Eyebrow from '../../components/Eyebrow.jsx'
import { contrastBand, inspirationTiles, principles } from './content.js'
import { Index, SectionIntro } from './parts.jsx'

export default function VisualDirection() {
  return (
    <section className="verdant-section">
      <SectionIntro
        number="05"
        label="Visual direction"
        title="A visual language inspired by the landscape."
      >
        <p>
          The visual direction was inspired by Kerala's forests, mist-covered mountains, backwaters
          and natural architecture.
        </p>
        <p>
          I wanted the website to feel calm and immersive without becoming visually predictable. The
          design uses warm neutrals, deep forest tones, refined typography and large photography to
          create an editorial experience that reflects the brand's positioning.
        </p>
      </SectionIntro>

      <div className="verdant-stack">
        <Eyebrow>INSPIRED BY THE LANDSCAPE</Eyebrow>
        <div className="verdant-tiles">
          {inspirationTiles.map(({ title, text, tone }, index) => (
            <article className={`verdant-tile verdant-tile--${tone}`} key={title}>
              <p className="verdant-tile__index">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="verdant-tile__title">{title}</h3>
              <p className="verdant-tile__text">{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="verdant-contrast">
        {contrastBand.map(({ label, title, text, tone }) => (
          <article className={`verdant-contrast__half verdant-contrast__half--${tone}`} key={label}>
            <p className="verdant-contrast__label">{label}</p>
            <h3 className="verdant-contrast__title">{title}</h3>
            <p className="verdant-contrast__text">{text}</p>
          </article>
        ))}
      </div>

      <div className="verdant-stack">
        <Eyebrow>DESIGN PRINCIPLES</Eyebrow>
        <div className="verdant-principles">
          {principles.map(({ title, text }, index) => (
            <article className="verdant-principle" key={title}>
              <Index value={index + 1} />
              <h3 className="verdant-principle__title">{title}</h3>
              <p className="verdant-principle__text">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
