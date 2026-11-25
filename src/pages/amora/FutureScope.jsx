import { futureCapabilities } from './content.js'
import { SectionIntro } from './parts.jsx'

export default function FutureScope() {
  return (
    <section className="amora-section amora-section--alt">
      <SectionIntro
        number="11"
        label="Future scope"
        title="Extending the experience beyond mobile."
        width={600}
        align="start"
      >
        <p className="amora-lead">
          A web companion could complement the mobile application for more detailed healthcare
          management. Potential capabilities include:
        </p>
        <ol className="amora-future">
          {futureCapabilities.map((item, index) => (
            <li key={item}>
              <span className="amora-index">{String(index + 1).padStart(2, '0')}</span>
              {item}
            </li>
          ))}
        </ol>
      </SectionIntro>
    </section>
  )
}
