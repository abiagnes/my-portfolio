import Eyebrow from '../../components/Eyebrow.jsx'
import SectionHead from './SectionHead.jsx'

const challenges = [
  {
    title: 'Fragmented knowledge',
    text: 'Relevant information is distributed across multiple sources, making it harder to find the right answer quickly.',
  },
  {
    title: 'Trust in AI responses',
    text: 'Employees need access to supporting sources so they can examine the information behind an answer.',
  },
  {
    title: 'Knowledge management',
    text: 'Administrators need to manage connected sources and understand when synchronization issues require attention.',
  },
]

export default function Problem() {
  return (
    <section className="elara-section elara-section--alt elara-problem">
      <div className="elara-problem__copy">
        <SectionHead
          className="elara-head--small"
          number="01"
          label="The problem"
          title="Finding information shouldn't mean searching everywhere."
        />
        <p className="elara-body">
          Enterprise knowledge is often spread across documents, internal knowledge bases, and workplace tools. Employees
          may spend time searching multiple sources, interpreting information, and figuring out which content is relevant
          to their questions.
        </p>
        <p className="elara-body">
          AI offers a way to make this information easier to access. But generating an answer is only part of the
          challenge. Employees also need to understand where the answer comes from, while administrators need visibility
          into the information sources that power the platform.
        </p>
        <p className="elara-lead">
          The challenge was to make knowledge discovery simpler without losing transparency or control.
        </p>
      </div>

      <div className="elara-problem__challenges">
        <Eyebrow>Three challenges to address</Eyebrow>
        <ol className="elara-problem__grid">
          {challenges.map(({ title, text }, index) => (
            <li className="elara-challenge" key={title}>
              <p className="elara-challenge__number">0{index + 1}</p>
              <h3 className="elara-card-title">{title}</h3>
              <p className="elara-challenge__text">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
