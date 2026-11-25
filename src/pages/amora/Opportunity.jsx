import iconCare from '../../assets/figma/amora/icon-care.svg'
import iconFamily from '../../assets/figma/amora/icon-family.svg'
import iconRecords from '../../assets/figma/amora/icon-records.svg'
import connectors from '../../assets/figma/amora/opportunity-connectors.svg'
import glow from '../../assets/figma/amora/opportunity-glow.svg'
import dot from '../../assets/figma/dot.svg'
import { Callout, SectionIntro } from './parts.jsx'

const pillars = [
  { icon: iconRecords, title: 'Health Records', text: 'Store, access and organise medical information.' },
  { icon: iconCare, title: 'Care Planning', text: 'Manage medications, appointments and vaccinations.' },
  { icon: iconFamily, title: 'Family Access', text: 'Share and coordinate care with family members.' },
]

export default function Opportunity() {
  return (
    <section className="amora-section amora-section--alt">
      <SectionIntro
        number="04"
        label="The design opportunity"
        title="Connecting health information with everyday care."
        spread
      >
        <p className="amora-lead amora-lead--muted">
          Existing healthcare platforms address important parts of digital healthcare, from record
          access to appointment and medication management.
        </p>
        <p className="amora-lead amora-lead--muted">
          Amora explores bringing these capabilities together around the needs of a family caregiver.
        </p>
      </SectionIntro>

      <Callout label="THE PRODUCT DIRECTION">
        A family-first healthcare platform that helps users organise medical records, manage everyday
        care activities and coordinate responsibilities with other family members.
      </Callout>

      <div className="amora-opportunity">
        <img className="amora-opportunity__glow" src={glow} alt="" />
        <p className="amora-opportunity__name">Amora</p>
        <p className="amora-opportunity__pill">
          <img src={dot} width="6" height="6" alt="" />
          ONE CONNECTED FAMILY HEALTHCARE EXPERIENCE
        </p>
        <div className="amora-opportunity__links" aria-hidden="true">
          <img src={connectors} alt="" />
          <span className="amora-opportunity__node amora-opportunity__node--top" />
          <span className="amora-opportunity__node amora-opportunity__node--left" />
          <span className="amora-opportunity__node amora-opportunity__node--center" />
          <span className="amora-opportunity__node amora-opportunity__node--right" />
        </div>
        <div className="amora-opportunity__cards">
          {pillars.map(({ icon, title, text }, index) => (
            <article className="amora-pillar" key={title}>
              <div className="amora-pillar__top">
                <span className="amora-pillar__tile">
                  <img src={icon} alt="" />
                </span>
                <span className="amora-index">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="amora-pillar__title">{title}</h3>
              <p className="amora-pillar__text">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
