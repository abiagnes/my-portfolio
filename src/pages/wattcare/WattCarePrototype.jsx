import appliances from '../../assets/figma/wattcare/prototype-appliances.png'
import glow from '../../assets/figma/wattcare/prototype-glow.svg'
import home from '../../assets/figma/wattcare/prototype-home.png'
import welcome from '../../assets/figma/wattcare/prototype-welcome.png'
import SectionHead from './SectionHead.jsx'
import { useCallback, useState } from 'react'
import PrototypeModal from '../../components/PrototypeModal.jsx'

const PROTOTYPE_URL =
  'https://www.figma.com/proto/r03S3gfPn6vzmfhA9mRvq4/Energy-Companion-for-Elderly?node-id=32-181&viewport=340%2C193%2C0.28&t=MbwryGjrYhXzmlco-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=32%3A181&show-proto-sidebar=1&page-id=25%3A44'

export default function WattCarePrototype() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  return (
    <section id="wattcare-prototype" className="wattcare-section wattcare-section--alt wattcare-prototype">
      <div className="wattcare-prototype__card">
        <div className="wattcare-prototype__copy">
          <SectionHead number="07" label="Interactive prototype" title="Experience WattCare in action." />
          <p className="wattcare-prototype__text">
            Explore how WattCare brings its screens and interactions together in a mobile experience
            designed around clarity, accessibility, and independence.
          </p>
          <button type="button" className="wattcare-prototype__cta" onClick={() => setOpen(true)}>
            <span>Explore the WattCare Prototype</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <button
          type="button"
          className="wattcare-prototype__phones"
          onClick={() => setOpen(true)}
          aria-label="Play the WattCare prototype"
        >
          <img
            className="wattcare-prototype__phone"
            src={welcome}
            alt="WattCare welcome screen with three onboarding benefits and a Get started button."
            width="336"
            height="706"
            loading="lazy"
          />
          <img
            className="wattcare-prototype__phone wattcare-prototype__phone--center"
            src={home}
            alt="WattCare home screen showing 8.4 kWh used today."
            width="396"
            height="835"
            loading="lazy"
          />
          <img
            className="wattcare-prototype__phone"
            src={appliances}
            alt="WattCare appliances screen listing estimated usage by appliance."
            width="336"
            height="706"
            loading="lazy"
          />
          <div className="wattcare-prototype__play" aria-hidden="true">
            <img src={glow} alt="" />
            <span className="wattcare-prototype__play-button">
              <span className="wattcare-prototype__play-icon">▶</span>
            </span>
          </div>
        </button>
      </div>

      <PrototypeModal open={open} onClose={close} url={PROTOTYPE_URL} title="WattCare interactive prototype" device="phone" />
    </section>
  )
}
