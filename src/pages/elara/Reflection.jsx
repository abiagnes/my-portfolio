import SectionHead from './SectionHead.jsx'

export default function Reflection() {
  return (
    <section className="elara-section elara-section--alt elara-reflection">
      <SectionHead
        number="07"
        label="Reflection"
        title="Designing an AI experience around knowledge, not just answers."
      />
      <div className="elara-reflection__copy">
        <p className="elara-body">
          Elara reinforced the importance of designing beyond the AI conversation itself. A useful experience also needs
          transparent source references, clear system feedback, and effective tools for managing the information behind
          the answers.
        </p>
        <p className="elara-quote elara-quote--reflection">
          The central design principle was to treat knowledge discovery, verification, and source management as connected
          parts of one product experience.
        </p>
      </div>
    </section>
  )
}
