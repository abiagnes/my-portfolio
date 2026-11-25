import Eyebrow from '../../components/Eyebrow.jsx'
import adminOverview from '../../assets/figma/elara/approach-admin-overview.png'
import employeeHome from '../../assets/figma/elara/approach-employee-home.png'
import SectionHead from './SectionHead.jsx'

const journeys = [
  {
    label: 'Employee experience',
    steps: ['Ask a question', 'Understand the answer', 'Verify the source'],
    focus: 'The focus is on natural-language interaction, readable responses, and easy access to supporting information.',
  },
  {
    label: 'Admin experience',
    steps: ['Manage sources', 'Monitor synchronization', 'Address issues'],
    focus: 'The focus is on source visibility, clear status communication, and accessible management actions.',
  },
]

export default function Approach() {
  return (
    <section className="elara-section elara-approach">
      <div className="elara-approach__intro">
        <SectionHead number="02" label="The design approach" title="Two user journeys. One connected platform." />
        <div className="elara-approach__copy">
          <p className="elara-body">
            Elara serves two distinct audiences: employees looking for answers and administrators responsible for
            managing the knowledge sources behind them.
          </p>
          <p className="elara-body elara-body--strong">
            I approached the experience by separating their core workflows while maintaining a consistent product
            structure.
          </p>
        </div>
      </div>

      <div className="elara-approach__journeys">
        {journeys.map(({ label, steps, focus }) => (
          <div className="elara-journey" key={label}>
            <Eyebrow>{label}</Eyebrow>
            <ol className="elara-journey__steps">
              {steps.map((step, index) => (
                <li className="elara-step" key={step}>
                  <span className="elara-step__marker">
                    <span className="elara-step__number">{index + 1}</span>
                  </span>
                  <span className="elara-card-title">{step}</span>
                </li>
              ))}
            </ol>
            <hr className="elara-rule" />
            <p className="elara-journey__focus">{focus}</p>
          </div>
        ))}
      </div>

      <div className="elara-approach__screens">
        <div className="elara-shot">
          <img
            src={employeeHome}
            alt="Elara employee home with a greeting, a question field, and suggested questions"
            width="1280"
            height="910"
            loading="lazy"
          />
        </div>
        <div className="elara-shot">
          <img
            src={adminOverview}
            alt="Elara admin overview with source metrics, issues needing attention, and source health"
            width="1280"
            height="910"
            loading="lazy"
          />
        </div>
      </div>

      <p className="elara-lead elara-approach__closing">
        This separation helped establish a clear information architecture without treating both roles as if they had the
        same needs.
      </p>
    </section>
  )
}
