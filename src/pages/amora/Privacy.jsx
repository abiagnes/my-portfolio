import { considerations } from './content.js'
import { SectionIntro } from './parts.jsx'

export default function Privacy() {
  return (
    <section className="amora-section">
      <SectionIntro
        number="09"
        label="Privacy & responsible AI"
        title="Keeping users in control of their health information."
        width={620}
      >
        <p className="amora-lead">
          Healthcare information is sensitive. The experience was designed to make information
          handling transparent and keep important decisions with the user.
        </p>
      </SectionIntro>

      <div className="amora-considerations">
        {considerations.map(({ title, text }, index) => (
          <article className="amora-card" key={title}>
            <p className="amora-index">{String(index + 1).padStart(2, '0')}</p>
            <div>
              <h3 className="amora-consideration__title">{title}</h3>
              <p className="amora-consideration__text">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
