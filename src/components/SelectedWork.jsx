import CaseCard from './CaseCard.jsx'
import Eyebrow from './Eyebrow.jsx'
import { caseStudies } from '../data/content.js'
import './SelectedWork.css'

export default function SelectedWork() {
  return (
    <section id="work" className="work">
      <div className="work__header">
        <div className="work__title-group">
          <Eyebrow>(01) — Case studies</Eyebrow>
          <h2 className="work__title">Selected work</h2>
        </div>
        <p className="work__intro">
          Four case studies exploring how thoughtful design decisions can make digital products
          clearer, more usable, and more effective.
        </p>
      </div>

      <div className="work__grid">
        {caseStudies.map((study) => (
          <CaseCard key={study.number} {...study} />
        ))}
      </div>
    </section>
  )
}
