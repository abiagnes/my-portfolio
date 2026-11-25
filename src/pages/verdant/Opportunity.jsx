import Eyebrow from '../../components/Eyebrow.jsx'
import node from '../../assets/figma/verdant/journey-node.svg'
import nodeActive from '../../assets/figma/verdant/journey-node-active.svg'
import { designGoals, guestJourney } from './content.js'
import { Index, SectionIntro } from './parts.jsx'

export default function Opportunity() {
  let goalNumber = 0

  return (
    <section className="verdant-section">
      <SectionIntro
        number="03"
        label="The design opportunity"
        title="From discovering a destination to imagining a stay."
      >
        <p>
          Rather than treating the website as a conventional hotel listing platform, I approached it
          as an extension of the VERDANT hospitality experience.
        </p>
        <p>
          The design opportunity was to create a more thoughtful journey where visitors could
          discover the brand, explore destinations, understand the experiences offered, and plan
          their stay without losing the emotional connection that brought them to the website.
        </p>
      </SectionIntro>

      <div className="verdant-panel verdant-panel--roomy verdant-journey">
        <Eyebrow>A MORE THOUGHTFUL JOURNEY</Eyebrow>
        <ol className="verdant-journey__stages">
          {guestJourney.map(({ title, text }, index) => (
            <li className="verdant-journey__stage" key={title}>
              <img
                src={index === guestJourney.length - 1 ? nodeActive : node}
                width="16"
                height="16"
                alt=""
              />
              <Index value={index + 1} />
              <h3 className="verdant-journey__title">{title}</h3>
              <p className="verdant-journey__text">{text}</p>
            </li>
          ))}
        </ol>
        <p className="verdant-journey__thread">
          <span className="verdant-journey__heart" aria-hidden="true">♡</span>
          <span>
            The emotional connection that brought visitors to the website is carried through every
            step.
          </span>
        </p>
      </div>

      <div className="verdant-goals">
        <Eyebrow>THE DESIGN GOALS</Eyebrow>
        {designGoals.map((row, rowIndex) => (
          <div className={`verdant-goals__row verdant-goals__row--${row.length}`} key={rowIndex}>
            {row.map((goal) => {
              goalNumber += 1
              return (
                <article
                  className={`verdant-goal ${goalNumber === 1 ? 'verdant-card--green' : ''}`}
                  key={goal}
                >
                  <p className="verdant-goal__number">{String(goalNumber).padStart(2, '0')}</p>
                  <h3 className="verdant-goal__text">{goal}</h3>
                </article>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
