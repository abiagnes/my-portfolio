import wireframes from '../../assets/figma/wattcare/wireframes.png'
import SectionHead from './SectionHead.jsx'
import { wireframeNotes } from './content.js'

export default function WattCareWireframes() {
  return (
    <section className="wattcare-section wattcare-section--alt wattcare-wireframes">
      <div className="wattcare-wireframes__row">
        <div className="wattcare-wireframes__copy">
          <SectionHead number="03" label="Wireframes" title="Structure before style." />
          <p className="wattcare-text wattcare-text--strong">
            I mapped the core screens to establish information hierarchy, navigation, and key
            interactions before refining the visual design.
          </p>
          <ol className="wattcare-wireframes__notes">
            {wireframeNotes.map((note, index) => (
              <li key={note} className="wattcare-wireframes__note">
                <span className="wattcare-wireframes__note-number">{String(index + 1).padStart(2, '0')}</span>
                <p>{note}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="wattcare-wireframes__image">
          <img
            src={wireframes}
            alt="Eight greyscale wireframes of the core WattCare screens: welcome, home, appliances, air conditioner detail, usage history, alerts, settings, and help and support."
            width="1384"
            height="1400"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
