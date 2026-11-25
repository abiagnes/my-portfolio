import Button from '../../components/Button.jsx'
import heroBanner from '../../assets/figma/amora/hero-banner.png'
import heroGlow from '../../assets/figma/amora/hero-glow-mid.svg'
import { projectDetails } from './content.js'

export default function Hero() {
  return (
    <section className="amora-hero">
      <div className="amora-hero__tag">
        <span className="amora-hero__pill">Amora</span>
        <span className="amora-hero__category">Family Healthcare Platform</span>
      </div>

      <div className="amora-hero__headline">
        <h1 className="amora-hero__title">
          Family healthcare, <em>thoughtfully organised.</em>
        </h1>
        <p className="amora-hero__intro">
          A family healthcare management platform that brings medical records, care activities and
          family health information together in one organised experience.
        </p>
      </div>

      <div className="amora-hero__media">
        <img
          src={heroBanner}
          width="2560"
          height="1400"
          alt="Four Amora phone screens side by side: Family, Home, Records and Planner."
        />
      </div>

      <div className="amora-hero__actions">
        <Button href="#amora-prototype" icon="↓">View the live prototype</Button>
        <Button href="#amora-key-flows" icon="↓" variant="secondary">See the key flows</Button>
      </div>

      <img className="amora-hero__glow" src={heroGlow} alt="" />

      <dl className="amora-hero__details">
        {projectDetails.map(({ label, value }) => (
          <div className="amora-hero__detail" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
