import { Link } from 'react-router-dom'
import Button from '../Button.jsx'
import Eyebrow from '../Eyebrow.jsx'
import Footer from '../Footer.jsx'
import { mailto } from '../../data/content.js'
import '../Nav.css'
import navGlow from '../../assets/figma/case/nav-glow.svg'
import './CaseLayout.css'

// Shared shell for a case study: nav, your sections, optional next-case card, footer.
export default function CaseLayout({ children, next }) {
  return (
    <div id="top" className="case-page">
      <header className="case-nav">
        <div className="case-nav__glow" aria-hidden="true">
          <img src={navGlow} alt="" />
        </div>
        <Link className="case-nav__back" to="/#work">
          <span aria-hidden="true">←</span>
          <span className="case-nav__back-label">Back to work</span>
        </Link>
        <Link className="nav__logo case-nav__logo" to="/" aria-label="Abi Agnes, home">
          <span className="nav__monogram" aria-hidden="true">A</span>
          <span className="nav__name">ABI AGNES</span>
        </Link>
        <div className="case-nav__cta">
          <Button href={mailto} variant="secondary">Get in touch</Button>
        </div>
      </header>

      <main>{children}</main>

      <div className="case-closing">
        {next && (
          <Link className="next-case" to={next.to}>
            <div className="next-case__copy">
              <Eyebrow>Next case study</Eyebrow>
              <p className="next-case__title">{next.title} →</p>
              <p className="next-case__text">{next.text}</p>
            </div>
            {next.media && <div className="next-case__media">{next.media}</div>}
          </Link>
        )}
        <Footer />
      </div>
    </div>
  )
}
