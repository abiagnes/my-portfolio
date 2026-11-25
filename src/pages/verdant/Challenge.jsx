import { Fragment } from 'react'
import Eyebrow from '../../components/Eyebrow.jsx'
import { journeySteps, purposes } from './content.js'
import { Index, SectionIntro } from './parts.jsx'

export default function Challenge() {
  return (
    <section className="verdant-section">
      <SectionIntro
        number="02"
        label="The challenge"
        title="Luxury stays are about more than a place to sleep."
      >
        <p>
          Luxury hospitality websites often rely heavily on beautiful photography, yet the experience
          of discovering a property, understanding what makes it unique, and planning a stay can feel
          disconnected.
        </p>
        <p>
          For VERDANT, the challenge was to create a digital experience that reflects the
          tranquillity and exclusivity of its retreats while making destination exploration and
          reservation planning effortless.
        </p>
        <p>
          The website needed to balance two different purposes: creating an emotional desire to
          travel and providing the practical information guests need to make a confident decision.
        </p>
      </SectionIntro>

      <div className="verdant-panel verdant-disconnect">
        <Eyebrow>WHERE THE EXPERIENCE FEELS DISCONNECTED</Eyebrow>
        <ol className="verdant-disconnect__steps">
          {journeySteps.map((step, index) => (
            <Fragment key={step}>
              {index > 0 && (
                <li className="verdant-disconnect__break" aria-hidden="true">
                  <span />
                  ✕
                  <span />
                </li>
              )}
              <li className="verdant-disconnect__step">
                <Index value={index + 1} />
                <p>{step}</p>
              </li>
            </Fragment>
          ))}
        </ol>
        <p className="verdant-note">
          Beautiful photography alone does not connect these moments. Each step often lives on a
          different page, in a different tone, with the practical details hidden.
        </p>
      </div>

      <div className="verdant-purposes">
        {purposes.map(({ label, title, text, featured }) => (
          <article
            className={`verdant-purpose ${featured ? 'verdant-card--green' : ''}`}
            key={label}
          >
            <p className="verdant-label">{label}</p>
            <h3 className="verdant-purpose__title">{title}</h3>
            <p className="verdant-purpose__text">{text}</p>
          </article>
        ))}
        <span className="verdant-purposes__balance" aria-hidden="true">+</span>
      </div>

      <blockquote className="verdant-quote">
        <p>
          The challenge was to translate the feeling of a nature retreat into a cohesive digital
          experience.
        </p>
      </blockquote>
    </section>
  )
}
