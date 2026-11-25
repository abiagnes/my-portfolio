import { SectionIntro } from './parts.jsx'

export default function Reflection() {
  return (
    <section className="amora-section amora-section--reflection">
      <SectionIntro
        number="12"
        label="Reflection"
        title="Designing for the realities of family caregiving."
        width={620}
        align="start"
      >
        <p className="amora-lead">
          Amora explored how fragmented healthcare information and disconnected care activities could
          be brought together through a family-first digital experience.
        </p>
        <p className="amora-lead amora-lead--muted">
          One of the key design considerations was balancing convenience with accuracy and user
          control, particularly when introducing AI into a sensitive domain like healthcare.
        </p>
        <p className="amora-lead amora-lead--muted">
          The project reinforced the importance of designing beyond individual screens, considering
          how information, tasks and people connect throughout the overall experience.
        </p>
      </SectionIntro>
    </section>
  )
}
