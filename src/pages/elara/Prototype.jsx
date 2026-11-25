import { useCallback, useState } from 'react'
import PrototypeModal from '../../components/PrototypeModal.jsx'
import glow from '../../assets/figma/elara/prototype-glow.svg'
import signIn from '../../assets/figma/elara/prototype-sign-in.png'
import SectionHead from './SectionHead.jsx'

const PROTOTYPE_URL =
  'https://www.figma.com/proto/T66WfLHa62TODEnSwA62cK/Enterprise-AI-Platform?node-id=314-13169&viewport=717%2C-133%2C0.06&t=8JY8KKDhkLNRwfc0-1&scaling=min-zoom&content-scaling=fixed&page-id=103%3A1672&starting-point-node-id=314%3A13169'

const hints = ['Explore the employee experience.', 'Switch to the admin workspace.', 'See how the flows work together.']

export default function Prototype() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  return (
    <section id="elara-prototype" className="elara-section elara-proto">
      <SectionHead
        className="elara-proto__head"
        number="06"
        label="Explore the prototype"
        title="Experience Elara in action."
      />
      <p className="elara-lead elara-proto__intro">
        Explore the interactive prototype to see how the employee and admin experiences connect, from asking questions and
        reviewing source citations to managing knowledge sources and navigating synchronization states.
      </p>

      <button type="button" className="elara-proto__thumb" onClick={() => setOpen(true)}>
        <img
          className="elara-proto__image"
          src={signIn}
          alt="Elara sign-in screen with a company SSO option and a work email form"
          width="1920"
          height="1080"
          loading="lazy"
        />
        <img className="elara-proto__glow" src={glow} alt="" />
        <span className="elara-proto__play">
          <span className="elara-proto__play-icon" aria-hidden="true">▶</span>
          <span>Try the prototype</span>
        </span>
      </button>

      <ol className="elara-proto__hints">
        {hints.map((hint, index) => (
          <li className="elara-proto__hint" key={hint}>
            <span className="elara-proto__hint-number">0{index + 1}</span>
            <span>{hint}</span>
          </li>
        ))}
      </ol>

      <button type="button" className="elara-proto__cta" onClick={() => setOpen(true)}>
        <span>Try the interactive prototype</span>
        <span aria-hidden="true">↗</span>
      </button>

      <PrototypeModal open={open} onClose={close} url={PROTOTYPE_URL} title="Elara interactive prototype" />
    </section>
  )
}
