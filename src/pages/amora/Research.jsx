import Eyebrow from '../../components/Eyebrow.jsx'
import researchSynthesis from '../../assets/figma/amora/research-synthesis.png'
import { findings } from './content.js'
import { Callout, NumberedCard, SectionIntro } from './parts.jsx'

export default function Research() {
  return (
    <section className="amora-section amora-section--alt">
      <SectionIntro
        number="02"
        label="Research & discovery"
        title="Understanding how families manage healthcare today."
      >
        <p className="amora-lead">
          I spoke with potential users to understand how they organise medical information and manage
          healthcare responsibilities for their families.
        </p>
      </SectionIntro>

      <div className="amora-stack">
        <Eyebrow>Key findings</Eyebrow>
        <div className="amora-grid amora-grid--2">
          {findings.map((item, index) => (
            <NumberedCard key={item.title} index={index} {...item} />
          ))}
        </div>
      </div>

      <Callout label="RESEARCH SYNTHESIS">
        The challenge wasn&apos;t simply storing medical records. It was connecting health information
        with the everyday activities required to manage family healthcare.
      </Callout>

      <div className="amora-research-image">
        <img
          src={researchSynthesis}
          width="1112"
          height="373"
          loading="lazy"
          alt="Family healthcare affinity map grouping findings into scattered records, multiple platforms, tracking and reminders, and family-wide needs, with an emerging pattern below."
        />
      </div>
    </section>
  )
}
