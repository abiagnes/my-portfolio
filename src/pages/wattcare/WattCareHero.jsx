import Button from '../../components/Button.jsx'
import bannerBg from '../../assets/figma/wattcare/hero-banner-bg.png'
import dot from '../../assets/figma/wattcare/dot-accent.svg'
import glow from '../../assets/figma/wattcare/hero-glow.svg'
import phones from '../../assets/figma/wattcare/hero-phones.png'
import { heroChips, projectDetails } from './content.js'

export default function WattCareHero() {
  return (
    <section className="wattcare-hero">
      <div className="wattcare-hero__tag">
        <span className="wattcare-hero__pill">WattCare</span>
        <p className="wattcare-hero__type">Accessible Energy-Monitoring App for Elderly</p>
      </div>

      <div className="wattcare-hero__headline-row">
        <h1 className="wattcare-hero__headline">
          Energy made simple. <em>Independence made possible.</em>
        </h1>
        <p className="wattcare-hero__intro">
          A mobile energy-monitoring experience designed specifically for older adults to understand
          their electricity usage, track estimated costs, and manage energy with confidence.
        </p>
      </div>

      <div className="wattcare-hero__visual">
        <div className="wattcare-hero__banner">
          <img className="wattcare-hero__banner-bg" src={bannerBg} alt="" width="2560" height="1400" />
          <img
            className="wattcare-hero__phones"
            src={phones}
            alt="Three WattCare phone screens: the welcome screen, the home dashboard showing 8.4 kWh used today, and the appliances list."
            width="1648"
            height="1166"
          />
        </div>
        <ul className="wattcare-hero__chips">
          {heroChips.map((chip) => (
            <li key={chip.id} className={`wattcare-hero__chip wattcare-hero__chip--${chip.id}`}>
              <span className="wattcare-hero__chip-label">{chip.label}</span>
              <span className={`wattcare-hero__chip-value${chip.accent ? ' wattcare-hero__chip-value--accent' : ''}`}>
                <img src={dot} alt="" width="8" height="8" />
                {chip.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="wattcare-hero__glow" aria-hidden="true">
        <img src={glow} alt="" />
      </div>

      <div className="wattcare-hero__below">
        <p className="wattcare-hero__below-text">Designed around clarity, accessibility, and independence.</p>
        <div className="wattcare-hero__cta">
          <Button to="#wattcare-prototype" variant="secondary" icon="↓">Explore the prototype</Button>
        </div>
      </div>

      <dl className="wattcare-hero__details">
        {projectDetails.map((detail) => (
          <div key={detail.label} className="wattcare-hero__detail">
            <dt>{detail.label}</dt>
            <dd>{detail.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
