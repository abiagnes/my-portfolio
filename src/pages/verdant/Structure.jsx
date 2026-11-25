import { Fragment } from 'react'
import Eyebrow from '../../components/Eyebrow.jsx'
import { architecture, visitorTypes } from './content.js'
import { SectionIntro } from './parts.jsx'

export default function Structure() {
  return (
    <section className="verdant-section">
      <SectionIntro
        number="04"
        label="Structuring the experience"
        title="An experience designed around discovery."
      >
        <p>
          The website structure was designed to support both exploratory visitors and those who
          already know what they are looking for.
        </p>
        <p>
          Visitors can discover VERDANT through its story and visual experience, explore individual
          retreats, browse curated experiences, or move directly into planning their stay.
        </p>
      </SectionIntro>

      <div className="verdant-visitors">
        {visitorTypes.map(({ label, title, text, path, featured }) => (
          <article
            className={`verdant-visitor ${featured ? 'verdant-card--green' : ''}`}
            key={title}
          >
            <p className="verdant-label">{label}</p>
            <h3 className="verdant-visitor__title">{title}</h3>
            <p className="verdant-visitor__text">{text}</p>
            <ol className="verdant-visitor__path" aria-label={`${title} path`}>
              {path.map((step, index) => (
                <Fragment key={step}>
                  {index > 0 && (
                    <li className="verdant-visitor__arrow" aria-hidden="true">→</li>
                  )}
                  <li className="verdant-chip">{step}</li>
                </Fragment>
              ))}
            </ol>
          </article>
        ))}
      </div>

      <div className="verdant-panel verdant-panel--roomy verdant-ia">
        <div className="verdant-ia__header">
          <Eyebrow>INFORMATION ARCHITECTURE</Eyebrow>
          <span className="verdant-ia__rule" aria-hidden="true" />
          <p className="verdant-ia__count">4 PATHS · 12 PAGES</p>
        </div>
        <div className="verdant-ia__groups">
          {architecture.map(({ label, title, pages, accent }) => (
            <div className="verdant-ia__group" key={title}>
              <p className="verdant-label">{label}</p>
              <h3 className={`verdant-ia__title ${accent ? 'verdant-ia__title--accent' : ''}`}>
                {title}
              </h3>
              <ul className="verdant-ia__pages">
                {pages.map((page) => (
                  <li key={page}>
                    <span>{page}</span>
                    <span className="verdant-ia__arrow" aria-hidden="true">↗</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="verdant-ia__note">
          Organising the website around discovery, exploration, inspiration and planning.
        </p>
      </div>
    </section>
  )
}
