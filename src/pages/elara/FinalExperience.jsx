import Eyebrow from '../../components/Eyebrow.jsx'
import adminLibrary from '../../assets/figma/elara/final-admin-library.png'
import adminOverview from '../../assets/figma/elara/final-admin-overview.png'
import employeeChat from '../../assets/figma/elara/final-employee-chat.png'
import employeeHome from '../../assets/figma/elara/final-employee-home.png'
import SectionHead from './SectionHead.jsx'

export default function FinalExperience() {
  return (
    <section className="elara-section elara-final">
      <div className="elara-final__head">
        <SectionHead number="04" label="The final experience" title="Two experiences, designed as one product." />
        <p className="elara-body">
          Elara brings employee knowledge discovery and administrative source management together through a consistent
          interface, with each workspace tailored to its users' needs.
        </p>
      </div>

      <div className="elara-workspace">
        <Eyebrow>Employee workspace</Eyebrow>
        <div className="elara-showcase">
          <div className="elara-showcase__panel">
            <img
              src={employeeHome}
              alt="Elara employee home with suggested questions, recent conversations, and recently updated documents"
              width="1279"
              height="1452"
              loading="lazy"
            />
          </div>
          <div className="elara-showcase__column">
            <p className="elara-lead">
              A focused workspace for asking questions, understanding AI-generated answers, and accessing supporting
              sources.
            </p>
            <img
              src={employeeChat}
              alt="Elara chat with an answer about international travel reimbursement and its source citations"
              width="1180"
              height="840"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="elara-workspace">
        <Eyebrow>Admin workspace</Eyebrow>
        <div className="elara-showcase">
          <div className="elara-showcase__column elara-showcase__column--tight">
            <p className="elara-lead elara-lead--snug">
              A structured workspace for managing knowledge sources, monitoring synchronisation, and identifying issues
              that require attention.
            </p>
            <img
              src={adminLibrary}
              alt="Elara knowledge library with knowledge health, a documents table, and needs-review items"
              width="1180"
              height="982"
              loading="lazy"
            />
          </div>
          <div className="elara-showcase__panel elara-showcase__panel--admin">
            <img
              src={adminOverview}
              alt="Elara admin overview with source metrics, issues needing attention, source health, and recent activity"
              width="1180"
              height="1251"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <p className="elara-quote">
        Together, these experiences form a cohesive platform while supporting the different responsibilities of employees
        and administrators.
      </p>
    </section>
  )
}
