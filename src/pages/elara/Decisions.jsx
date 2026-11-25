import sourcesAdmin from '../../assets/figma/elara/decision-sources-admin.png'
import state1 from '../../assets/figma/elara/decision-state-1.png'
import state2 from '../../assets/figma/elara/decision-state-2.png'
import state3 from '../../assets/figma/elara/decision-state-3.png'
import verifiableAnswer from '../../assets/figma/elara/decision-verifiable-answer.png'
import SectionHead from './SectionHead.jsx'

function DecisionTitle({ number, children }) {
  return (
    <div className="elara-decision__title">
      <span className="elara-decision__number">{number}</span>
      <h3 className="elara-decision__heading">{children}</h3>
    </div>
  )
}

function Rationale({ children }) {
  return (
    <>
      <p className="elara-decision__label">Why it matters</p>
      <p className="elara-body">{children}</p>
    </>
  )
}

function Focus({ chips }) {
  return (
    <>
      <p className="elara-decision__focus-label">Design focus</p>
      <ul className="elara-chips">
        {chips.map((chip) => (
          <li className="elara-chip" key={chip}>{chip}</li>
        ))}
      </ul>
    </>
  )
}

export default function Decisions() {
  return (
    <section className="elara-section elara-section--alt elara-decisions">
      <SectionHead
        className="elara-decisions__head"
        number="03"
        label="Key design decisions"
        title="Designing for more than the ideal scenario."
      />

      <article className="elara-decision">
        <DecisionTitle number="01">Make answers verifiable.</DecisionTitle>
        <div className="elara-decision__row elara-decision__row--media-first">
          <div className="elara-decision__media">
            <div className="elara-shot elara-shot--answer">
              <img
                src={verifiableAnswer}
                alt="Elara chat answer beside the source document it cites, open at the relevant section"
                width="1640"
                height="1166"
                loading="lazy"
              />
            </div>
          </div>
          <div className="elara-decision__text">
            <p className="elara-decision__label">The decision</p>
            <p className="elara-body elara-body--strong">
              I designed the answer experience to connect AI-generated responses with their supporting sources, making
              verification part of the interaction rather than a separate task.
            </p>
            <hr className="elara-rule" />
            <Rationale>
              Employees can explore the original information when they need additional context instead of relying solely
              on a generated response.
            </Rationale>
            <Focus chips={['Readability', 'Source visibility', 'Access to supporting information']} />
          </div>
        </div>
      </article>

      <article className="elara-decision">
        <DecisionTitle number="02">Account for uncertainty and failure.</DecisionTitle>
        <div className="elara-decision__states">
          <div className="elara-shot elara-shot--thin">
            <img
              src={state1}
              alt="Elara answer warning that its sources disagree"
              width="1280"
              height="910"
              loading="lazy"
            />
          </div>
          <div className="elara-shot elara-shot--thin">
            <img
              src={state2}
              alt="Elara chat state shown when no answer is available"
              width="1280"
              height="910"
              loading="lazy"
            />
          </div>
          <div className="elara-shot elara-shot--thin">
            <img
              src={state3}
              alt="Elara source access dialog explaining a source limitation and next steps"
              width="1280"
              height="910"
              loading="lazy"
            />
          </div>
        </div>
        <div className="elara-decision__columns">
          <div className="elara-decision__text elara-decision__text--tight">
            <p className="elara-decision__label">The decision</p>
            <p className="elara-body elara-body--strong">
              I considered system states beyond successful responses, including unavailable answers, and source-related
              limitations where applicable.
            </p>
          </div>
          <div className="elara-decision__text elara-decision__text--tight">
            <Rationale>
              When the system cannot provide a useful answer, users need clear feedback about what happened and what they
              can do next.
            </Rationale>
            <Focus chips={['Clear status communication', 'Helpful feedback', 'Appropriate recovery actions']} />
          </div>
        </div>
      </article>

      <article className="elara-decision">
        <DecisionTitle number="03">Make knowledge sources manageable.</DecisionTitle>
        <div className="elara-decision__row elara-decision__row--text-first">
          <div className="elara-decision__text">
            <p className="elara-decision__label">The decision</p>
            <p className="elara-body elara-body--strong">
              I designed administrative views around connected knowledge sources and their synchronization states, with
              relevant information and management actions accessible from the admin experience.
            </p>
            <hr className="elara-rule" />
            <Rationale>
              The employee experience depends on the information available to the platform. Administrators need to
              recognize when a source is paused or synchronization fails.
            </Rationale>
            <Focus chips={['Source visibility', 'Distinct status indicators', 'Actionable system feedback']} />
          </div>
          <div className="elara-decision__media elara-decision__media--sources">
            <div className="elara-shot elara-shot--sources">
              <img
                src={sourcesAdmin}
                alt="Elara admin sources table listing connected sources with their synchronization status"
                width="1640"
                height="1202"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
