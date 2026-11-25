import Button from '../../components/Button.jsx'
import glowLeft from '../../assets/figma/elara/hero-glow-left.svg'
import laptopBase from '../../assets/figma/elara/hero-laptop-base.svg'
import laptopCamera from '../../assets/figma/elara/hero-laptop-camera.svg'
import laptopCameraDot from '../../assets/figma/elara/hero-laptop-camera-dot.svg'
import laptopEdge from '../../assets/figma/elara/hero-laptop-edge.svg'
import laptopLid from '../../assets/figma/elara/hero-laptop-lid.svg'
import laptopNotchA from '../../assets/figma/elara/hero-laptop-notch-a.svg'
import laptopNotchB from '../../assets/figma/elara/hero-laptop-notch-b.svg'
import laptopReflection from '../../assets/figma/elara/hero-laptop-reflection.svg'
import laptopScreen from '../../assets/figma/elara/hero-laptop-screen.png'
import laptopSheen from '../../assets/figma/elara/hero-laptop-sheen.svg'

const details = [
  ['Company', 'Acme'],
  ['Role', 'UI/UX Designer'],
  ['Platform', 'Web application'],
  ['Focus', 'AI UX, enterprise workflows, information architecture, design systems'],
  ['Deliverables', 'UX flows, UI design, interactive prototype, design system'],
]

export default function Hero() {
  return (
    <section className="elara-hero">
      <p className="elara-hero__tag">
        <span className="elara-hero__tag-name">Elara</span>
        <span className="elara-hero__tag-text">Enterprise AI Knowledge Platform</span>
      </p>

      <div className="elara-hero__headline">
        <h1 className="elara-hero__title">
          Making enterprise knowledge easier to find, <em>understand, and trust.</em>
        </h1>
        <p className="elara-hero__intro">
          Elara is an AI-powered knowledge platform concept designed to help employees find answers across company
          information, explore supporting sources, and access knowledge with greater confidence.
        </p>
      </div>

      <div className="elara-hero__media">
        <div className="elara-laptop">
          <img className="elara-laptop__lid" src={laptopLid} alt="" />
          <img className="elara-laptop__base" src={laptopBase} alt="" />
          <img className="elara-laptop__notch" src={laptopNotchA} alt="" />
          <img className="elara-laptop__notch" src={laptopNotchB} alt="" />
          <img
            className="elara-laptop__screen"
            src={laptopScreen}
            alt="Elara chat answering a question about international travel reimbursement, with cited sources in a side panel"
            loading="lazy"
          />
          <img className="elara-laptop__camera" src={laptopCamera} alt="" />
          <img className="elara-laptop__camera-dot" src={laptopCameraDot} alt="" />
          <img className="elara-laptop__sheen" src={laptopSheen} alt="" />
          <img className="elara-laptop__reflection" src={laptopReflection} alt="" />
          <img className="elara-laptop__edge" src={laptopEdge} alt="" />
        </div>
      </div>

      <div className="elara-hero__glow-clip" aria-hidden="true">
        <div className="elara-hero__glow-left">
          <div>
            <img src={glowLeft} alt="" />
          </div>
        </div>
      </div>

      <div className="elara-hero__banner">
        <p className="elara-hero__summary">
          The platform brings employee-facing AI interactions and administrative knowledge management into one connected
          experience.
        </p>
        <div className="elara-hero__cta">
          <Button to="#elara-prototype" variant="secondary" icon="↓">Explore the prototype</Button>
        </div>
      </div>

      <dl className="elara-details">
        {details.map(([term, value]) => (
          <div className="elara-details__item" key={term}>
            <dt className="elara-details__term">{term}</dt>
            <dd className="elara-details__value">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
