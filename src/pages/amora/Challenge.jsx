import Eyebrow from '../../components/Eyebrow.jsx'
import { challenges } from './content.js'
import { Callout, NumberedCard, SectionIntro } from './parts.jsx'

export default function Challenge() {
  return (
    <section className="amora-section">
      <SectionIntro
        number="01"
        label="The challenge"
        title="Family healthcare is scattered across multiple places."
        width={600}
        align="start"
      >
        <p className="amora-lead">
          Managing healthcare for a family involves more than keeping medical records. It means
          remembering appointments, tracking medications, following vaccination schedules and making
          sure important information is accessible when needed.
        </p>
        <p className="amora-lead amora-lead--muted">
          But this information is often spread across hospital applications, paper documents,
          messaging conversations and separate tracking tools.
        </p>
      </SectionIntro>

      <Callout label="THE CHALLENGE" large>
        How might we simplify family healthcare management by bringing health information and
        everyday care activities into one connected experience?
      </Callout>

      <Eyebrow>KEY CHALLENGES</Eyebrow>

      <div className="amora-grid amora-grid--4">
        {challenges.map((item, index) => (
          <NumberedCard key={item.title} index={index} {...item} titleClass="amora-card__title amora-card__title--serif" />
        ))}
      </div>
    </section>
  )
}
