import PhoneVideo from '../../components/PhoneVideo.jsx'
import leftVideo from '../../assets/figma/wattcare/dashboard-video-left.mp4'
import rightVideo from '../../assets/figma/wattcare/dashboard-video-right.mp4'
import SectionHead from './SectionHead.jsx'
import { conventionalPoints, wattcarePoints } from './content.js'

function ComparePhone({ src, label, caption, accent }) {
  return (
    <figure className="wattcare-compare__phone">
      <PhoneVideo className="wattcare-compare__device" src={src} label={label} />
      <figcaption className={`wattcare-compare__caption${accent ? ' wattcare-compare__caption--accent' : ''}`}>
        {caption}
      </figcaption>
    </figure>
  )
}

function ComparePoints({ points, mark }) {
  return (
    <ul className="wattcare-card__points">
      {points.map((point) => (
        <li key={point} className="wattcare-card__point">
          <span className="wattcare-card__mark" aria-hidden="true">{mark}</span>
          <p>{point}</p>
        </li>
      ))}
    </ul>
  )
}

export default function WattCareDashboard() {
  return (
    <section className="wattcare-section wattcare-dashboard">
      <div className="wattcare-row">
        <SectionHead
          number="04"
          label="Rethinking the dashboard"
          title="The same information, communicated more clearly."
        />
        <div className="wattcare-dashboard__column">
          <p className="wattcare-text">
            I designed a conventional energy-monitoring dashboard as a baseline, then compared it with
            WattCare’s older-adult-focused home screen.
          </p>
          <p className="wattcare-text wattcare-text--strong">
            The difference is not the information available, but how clearly it is communicated.
          </p>
        </div>
      </div>

      <div className="wattcare-dashboard__cards">
        <article className="wattcare-card">
          <p className="wattcare-kicker wattcare-kicker--muted">BEFORE</p>
          <h3 className="wattcare-card__title">Conventional dashboard</h3>
          <ComparePoints points={conventionalPoints} mark="✕" />
        </article>
        <article className="wattcare-card wattcare-card--after">
          <p className="wattcare-kicker">AFTER</p>
          <h3 className="wattcare-card__title">WattCare</h3>
          <ComparePoints points={wattcarePoints} mark="✓" />
        </article>
      </div>

      <div className="wattcare-compare">
        <ComparePhone src={leftVideo} label="Screen recording of the conventional energy dashboard" caption="CONVENTIONAL" />
        <p className="wattcare-compare__vs">vs</p>
        <ComparePhone src={rightVideo} label="Screen recording of the WattCare home screen" caption="WATTCARE" accent />
      </div>
    </section>
  )
}
