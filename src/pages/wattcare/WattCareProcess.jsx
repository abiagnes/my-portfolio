import SectionHead from './SectionHead.jsx'
import { processSteps } from './content.js'

export default function WattCareProcess() {
  return (
    <section className="wattcare-section wattcare-section--alt wattcare-process">
      <div className="wattcare-row">
        <SectionHead
          number="02"
          label="Design process"
          title="From understanding the problem to an interactive prototype."
        />
        <p className="wattcare-text wattcare-row__aside">
          Five steps took WattCare from usability challenges to a connected, testable experience.
        </p>
      </div>

      <ol className="wattcare-process__steps">
        {processSteps.map((step) => (
          <li key={step.number} className={`wattcare-step${step.current ? ' wattcare-step--current' : ''}`}>
            <div className="wattcare-step__rail" aria-hidden="true">
              <span className="wattcare-step__node">{step.number}</span>
              <span className="wattcare-step__line" />
            </div>
            <div className="wattcare-step__body">
              <p className="wattcare-step__eyebrow">STEP {step.number}</p>
              <h3 className="wattcare-step__title">{step.title}</h3>
              <span className="wattcare-step__rule" aria-hidden="true" />
              <p className="wattcare-step__text">{step.text}</p>
              <ul className="wattcare-step__tags">
                {step.tags.map((tag) => (
                  <li key={tag} className="wattcare-step__tag">{tag}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="wattcare-process__outcome">
        <p className="wattcare-kicker">OUTCOME</p>
        <p className="wattcare-process__outcome-text">
          A connected, accessible prototype ready for usability testing with older adults.
        </p>
      </div>
    </section>
  )
}
