import heroBanner from '../../assets/figma/verdant/hero-banner.jpg'
import heroGlow from '../../assets/figma/verdant/hero-glow-mid.svg'
import { projectDetails } from './content.js'

export default function Hero() {
  return (
    <section className="verdant-hero">
      <div className="verdant-hero__tag">
        <span className="verdant-hero__pill">Verdant</span>
        <span className="verdant-hero__category">Luxury Eco-Hospitality Website</span>
      </div>

      <div className="verdant-hero__headline">
        <h1 className="verdant-hero__title">
          Luxury hospitality, <em>designed around nature.</em>
        </h1>
        <p className="verdant-hero__intro">
          A digital experience for a luxury eco-hospitality brand offering thoughtfully designed
          retreats across Kerala. The website brings together destination discovery, immersive
          experiences and responsible hospitality through an elegant, photography-led experience.
        </p>
      </div>

      <div className="verdant-hero__media">
        <img
          src={heroBanner}
          width="2560"
          height="1320"
          alt="The VERDANT homepage on a laptop: “Escape the Ordinary. Embrace the Extraordinary.” over a sunset terrace."
        />
      </div>

      <img className="verdant-hero__glow" src={heroGlow} alt="" />

      <dl className="verdant-hero__details">
        {projectDetails.map(({ label, value }) => (
          <div className="verdant-hero__detail" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
