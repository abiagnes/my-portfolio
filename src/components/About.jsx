import Eyebrow from './Eyebrow.jsx'
import aboutImage from '../assets/figma/home/about.jpg'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__image">
        <img src={aboutImage} alt="Abi Agnes working at a desk" width="1774" height="887" loading="lazy" />
      </div>

      <div className="about__copy">
        <Eyebrow>(03) — About</Eyebrow>
        <h2 className="about__title">A little about me</h2>
        <p className="about__text">
          I'm a UI/UX designer with 6 years of experience working on digital products and enterprise
          experiences. I enjoy breaking down complex problems, bringing structure to ambiguity, and
          turning insights into thoughtful, practical design solutions.
        </p>
        <blockquote className="about__belief">
          I believe strong design is not just about how an interface looks. It's about helping people
          accomplish what they came to do—with less friction and greater confidence.
        </blockquote>
      </div>
    </section>
  )
}
