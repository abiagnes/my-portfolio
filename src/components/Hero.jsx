import Button from './Button.jsx'
import { mailto } from '../data/content.js'
import Marquee from './Marquee.jsx'
import Nav from './Nav.jsx'
import glow from '../assets/figma/glow.svg'
import ring from '../assets/figma/ring.svg'
import statusDot from '../assets/figma/status-dot.svg'
import photo from '../assets/figma/home/photo.jpg'
import showcaseCenter from '../assets/figma/home/showcase-center.png'
import phoneLeft from '../assets/figma/home/phone-left.png'
import phoneRight from '../assets/figma/home/phone-right.png'
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__glow" aria-hidden="true">
        <img src={glow} alt="" />
      </div>
      <div className="hero__grid" aria-hidden="true" />

      <Nav />

      <div className="hero__body">
        <div className="hero__copy">
          <div className="hero__photo">
            <img className="hero__ring" src={ring} alt="" />
            <img className="hero__portrait" src={photo} alt="Abi Agnes" width="96" height="96" />
            <img className="hero__status" src={statusDot} alt="" />
          </div>

          <p className="hero__pill enter">
            <span className="hero__pill-name">ABI AGNES</span>
            <span className="hero__pill-divider" aria-hidden="true" />
            <span className="hero__pill-role">Senior UI/UX Designer · Product Designer</span>
          </p>

          <h1 className="hero__headline enter">
            Designing digital <br className="hero__break" />products with <em>purpose and clarity.</em>
          </h1>

          <p className="hero__intro enter">
            I design digital products that make complex workflows easier to navigate, information
            easier to understand, and experiences more accessible.
          </p>

          <div className="hero__ctas enter">
            <Button to="/#work" icon="↓">Explore selected work</Button>
            <Button href={mailto} variant="secondary">Get in touch</Button>
          </div>
        </div>

        <div className="showcase">
          <div className="showcase__stage">
            <div className="showcase__phone showcase__phone--right">
              <img src={phoneRight} alt="WattCare home screen on a phone" width="780" height="1688" />
            </div>
            <div className="showcase__phone showcase__phone--left">
              <img src={phoneLeft} alt="Amora home screen on a phone" width="780" height="1688" />
            </div>
            <div className="showcase__card showcase__card--center enter">
              <img src={showcaseCenter} alt="Elara home screen" width="2240" height="1440" />
            </div>
            <div className="showcase__chip enter">
              <span className="showcase__chip-number">6</span>
              <span className="showcase__chip-copy">
                <span className="showcase__chip-title">years of experience</span>
                <span className="showcase__chip-sub">in UI/UX design</span>
              </span>
            </div>
          </div>
        </div>

        <Marquee />
      </div>
    </div>
  )
}
