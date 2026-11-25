import { useCallback, useState } from 'react'
import PrototypeModal from '../../components/PrototypeModal.jsx'
import preview from '../../assets/figma/amora/prototype-preview.png'
import { SectionKicker } from './parts.jsx'

const PROTOTYPE_URL =
  'https://www.figma.com/proto/5HKpwHkny2FVmZegT06bDg/Family-Healthcare-Platform?node-id=164-3867&viewport=-378%2C1696%2C0.37&t=WN5arheY727lYblc-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=164%3A3867&show-proto-sidebar=1&page-id=32%3A2'

export default function Prototype() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  return (
    <section className="amora-section amora-section--alt" id="amora-prototype">
      <div className="amora-prototype">
        <div className="amora-prototype__copy">
          <div className="amora-prototype__head">
            <SectionKicker number="10" label="Interactive prototype" />
            <h2 className="amora-title">Experience Amora in action.</h2>
          </div>
          <p className="amora-prototype__text">
            Explore how Amora brings family records, AI-assisted document capture, care planning and
            shared access together in an interactive mobile prototype.
          </p>
          <button type="button" className="amora-prototype__cta" onClick={() => setOpen(true)}>
            <span>Explore the Amora prototype</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <button
          type="button"
          className="amora-prototype__preview"
          onClick={() => setOpen(true)}
          aria-label="Play the Amora prototype"
        >
          <img
            src={preview}
            width="1116"
            height="791"
            loading="lazy"
            alt="Three Amora phone screens with a play button over the first."
          />
        </button>
      </div>

      <PrototypeModal open={open} onClose={close} url={PROTOTYPE_URL} title="Amora interactive prototype" device="phone" />
    </section>
  )
}
