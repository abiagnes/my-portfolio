import Eyebrow from '../../components/Eyebrow.jsx'
import SectionHead from './SectionHead.jsx'

export default function WattCareReflection() {
  return (
    <section className="wattcare-section wattcare-reflection">
      <div className="wattcare-row wattcare-row--top">
        <SectionHead
          number="08"
          label="Reflection"
          title="Designing for people’s needs from the beginning."
        />
        <div className="wattcare-reflection__column">
          <p className="wattcare-text wattcare-text--strong">
            WattCare reinforced the importance of designing for people’s needs from the beginning, rather
            than adapting a complex interface later.
          </p>
          <div className="wattcare-reflection__note">
            <p className="wattcare-reflection__note-label">NOTE</p>
            <p>
              Appliance-level consumption and costs are estimates unless supported by compatible
              device-level monitoring.
            </p>
          </div>
        </div>
      </div>

      <div className="wattcare-reflection__closing">
        <Eyebrow>A more inclusive energy experience</Eyebrow>
        <p className="wattcare-reflection__quote">
          Good design doesn’t just make information available. It makes information understandable.
        </p>
      </div>
    </section>
  )
}
