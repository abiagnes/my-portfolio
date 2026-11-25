import Eyebrow from '../../components/Eyebrow.jsx'
import portrait from '../../assets/figma/amora/persona-hannah.png'
import { SectionIntro } from './parts.jsx'

const facts = ['38 years old', 'Working professional and family caregiver', 'Comfortable using mobile applications']

const goals = [
  'Access family health records from one place.',
  'Keep track of medications, appointments and vaccinations.',
  'Avoid missing important follow-ups.',
  'Share relevant health information with family members.',
]

const painPoints = [
  'Medical records are spread across multiple platforms.',
  'Important dates and tasks are easy to forget.',
  'Managing healthcare for different family members takes additional effort.',
  'Manually organising medical information is time-consuming.',
]

function BulletCard({ label, items }) {
  return (
    <article className="amora-card">
      <Eyebrow>{label}</Eyebrow>
      <ul className="amora-bullets">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default function DefiningUser() {
  return (
    <section className="amora-section">
      <SectionIntro
        number="05"
        label="Defining the user"
        title="Designing for the family caregiver."
        width={620}
      >
        <p className="amora-lead">
          A working professional who manages healthcare responsibilities for her family alongside her
          everyday commitments.
        </p>
      </SectionIntro>

      <div className="amora-persona">
        <article className="amora-persona__card">
          <img
            className="amora-persona__portrait"
            src={portrait}
            width="120"
            height="120"
            loading="lazy"
            alt="Illustrative portrait of Hannah Rose, the representative persona."
          />
          <p className="amora-persona__label">REPRESENTATIVE PERSONA</p>
          <h3 className="amora-persona__name">Hannah rose</h3>
          {facts.map((fact) => (
            <p className="amora-persona__fact" key={fact}>
              <span aria-hidden="true" />
              {fact}
            </p>
          ))}
        </article>

        <div className="amora-persona__details">
          <div className="amora-grid amora-grid--2">
            <BulletCard label="Goals" items={goals} />
            <BulletCard label="Pain points" items={painPoints} />
          </div>
          <blockquote className="amora-quote">
            <span className="amora-quote__mark" aria-hidden="true">“</span>
            <p>I want my family’s healthcare information in one place, without having to remember where everything is stored.</p>
          </blockquote>
          <p className="amora-mono-note">
            This is an illustrative persona based on the research themes, not a direct interview participant.
          </p>
        </div>
      </div>
    </section>
  )
}
