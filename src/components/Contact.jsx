import Button from './Button.jsx'
import Eyebrow from './Eyebrow.jsx'
import Footer from './Footer.jsx'
import { links, mailto } from '../data/content.js'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__card">
        <Eyebrow>(04) — Contact</Eyebrow>
        <h2 className="contact__title">
          Let's talk about your <em>next product challenge.</em>
        </h2>
        <p className="contact__text">
          I'm interested in meaningful problems, collaborative teams, and opportunities to create
          digital experiences that make a difference.
        </p>
        <div className="contact__ctas">
          <Button href={mailto}>Email me</Button>
          <Button href={links.linkedin} variant="secondary" external>
            Connect on LinkedIn
          </Button>
        </div>
      </div>

      <Footer />
    </section>
  )
}
