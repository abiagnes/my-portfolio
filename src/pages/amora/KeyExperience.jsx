import accessInvitation from '../../assets/figma/amora/access-invitation.png'
import accessOverview from '../../assets/figma/amora/access-overview.png'
import accessPermission from '../../assets/figma/amora/access-permission-details.png'
import captureExtracted from '../../assets/figma/amora/capture-extracted-details.png'
import captureProcessing from '../../assets/figma/amora/capture-processing.png'
import captureReady from '../../assets/figma/amora/capture-ready-review.png'
import captureSaved from '../../assets/figma/amora/capture-saved-record.png'
import captureSelect from '../../assets/figma/amora/capture-select-upload.png'
import homeStage from '../../assets/figma/amora/key-home-stage.png'
import manualAppointment from '../../assets/figma/amora/manual-appointment.png'
import manualReading from '../../assets/figma/amora/manual-health-reading.png'
import manualMedicine from '../../assets/figma/amora/manual-medicine.png'
import manualRecord from '../../assets/figma/amora/manual-record.png'
import manualVaccine from '../../assets/figma/amora/manual-vaccine.png'
import plannerCalendar from '../../assets/figma/amora/planner-calendar.png'
import plannerComplete from '../../assets/figma/amora/planner-complete-reschedule.png'
import plannerOverview from '../../assets/figma/amora/planner-overview.png'
import plannerTask from '../../assets/figma/amora/planner-task-details.png'
import profileOverview from '../../assets/figma/amora/profile-overview.png'
import profileReadings from '../../assets/figma/amora/profile-readings.png'
import profileRecords from '../../assets/figma/amora/profile-records.png'
import { workflow } from './content.js'
import { SectionKicker } from './parts.jsx'

const annotations = ['Needs attention', 'Family overview', 'Upcoming activities', 'Recent records']

const capture = [
  { src: captureSelect, label: 'Select & upload', alt: 'Amora screen for selecting a family member and uploading a document.' },
  { src: captureProcessing, label: 'Processing', alt: 'Amora screen showing a document being processed.' },
  { src: captureReady, label: 'Ready to review', alt: 'Amora screen showing a processed document ready for review.' },
  { src: captureExtracted, label: 'Extracted details', alt: 'Amora screen listing details extracted from a document.' },
  { src: captureSaved, label: 'Saved record', alt: 'Amora screen confirming the saved record.' },
]

const manual = [
  { src: manualAppointment, label: 'Appointment', alt: 'Amora form for adding an appointment.' },
  { src: manualMedicine, label: 'Medicine', alt: 'Amora form for adding a medicine.' },
  { src: manualVaccine, label: 'Vaccine', alt: 'Amora form for adding a vaccine.' },
  { src: manualReading, label: 'Health reading', alt: 'Amora form for adding a health reading.' },
  { src: manualRecord, label: 'Record', alt: 'Amora form for adding a medical record.' },
]

const planner = [
  { src: plannerOverview, label: 'Planner overview', alt: 'Amora planner overview screen.', large: true },
  { src: plannerCalendar, label: 'Calendar & dates', alt: 'Amora planner calendar and date picker screen.' },
  { src: plannerTask, label: 'Task details', alt: 'Amora care task details screen.' },
  { src: plannerComplete, label: 'Complete or reschedule', alt: 'Amora screen for completing or rescheduling a task.' },
]

const access = [
  { src: accessOverview, label: 'Access overview', alt: 'Amora family access overview listing people with access.' },
  { src: accessPermission, label: 'Permission details', alt: 'Amora permission details for Joshua Zach.' },
  { src: accessInvitation, label: 'Invitation flow', alt: 'Amora screen reviewing an invitation for Rachel Mary.' },
]

function Screen({ src, alt, width = 212, height = 457 }) {
  return <img src={src} width={width} height={height} loading="lazy" alt={alt} />
}

function BlockHead({ count, title }) {
  return (
    <>
      <p className="amora-index">{count} / 06</p>
      <h3 className="amora-exp__title">{title}</h3>
    </>
  )
}

export default function KeyExperience() {
  return (
    <section className="amora-section amora-section--flush" id="amora-key-experience">
      <div className="amora-exp-head">
        <SectionKicker number="07" label="Key experience design" />
        <h2 className="amora-title">Designing the core family healthcare journeys.</h2>
      </div>

      <article className="amora-exp amora-exp--home">
        <div className="amora-exp__copy">
          <BlockHead count="01" title="A consolidated family overview" />
          <div className="amora-exp__prose">
            <p>The home screen provides a quick overview of what needs attention across the family.</p>
            <p>Users can view important reminders, upcoming medications and appointments, family member summaries, recent records and weekly care activity.</p>
            <p>The focus was to make important information visible without requiring users to navigate through multiple sections.</p>
          </div>
          <ol className="amora-annotations">
            {annotations.map((item, index) => (
              <li key={item}>
                <span className="amora-badge">{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div className="amora-exp__home-stage">
          <img
            src={homeStage}
            width="1150"
            height="1256"
            loading="lazy"
            alt="Amora home screen split in two, with markers 01 to 04 on needs attention, family overview, upcoming activities and recent records."
          />
        </div>
      </article>

      <article className="amora-exp amora-exp--profiles">
        <div className="amora-stage amora-stage--profiles">
          <Screen src={profileOverview} alt="Amora profile screen for a family member." width={228} height={483} />
          <Screen src={profileRecords} alt="Amora family member profile with medical records." width={228} height={483} />
          <Screen src={profileReadings} alt="Amora family member health readings." width={228} height={483} />
        </div>
        <div className="amora-exp__copy">
          <BlockHead count="02" title="Individual family health profiles" />
          <div className="amora-exp__prose">
            <p>Each family member has a dedicated profile containing their personal health information and care history.</p>
            <p>Users can access personal details, medical records, prescriptions, vaccination history, health readings and upcoming care activities.</p>
            <p>This structure keeps each person’s information organised while allowing caregivers to manage the family from one place.</p>
          </div>
        </div>
      </article>

      <article className="amora-exp amora-exp--stacked">
        <div className="amora-exp__row">
          <div className="amora-exp__copy">
            <BlockHead count="03" title="AI-assisted document management" />
            <p className="amora-lead">
              Medical documents often contain information that users would otherwise need to enter
              manually. Amora introduces an AI-assisted document capture workflow to reduce this
              effort while keeping users in control of the information being saved.
            </p>
          </div>
          <div className="amora-exp__aside">
            <p className="amora-lead amora-lead--muted">
              The original documents remain accessible alongside the extracted information.
            </p>
            <p className="amora-lead">
              AI-extracted details are not saved as verified records until the user reviews and confirms them.
            </p>
          </div>
        </div>

        <div className="amora-workflow">
          <p className="amora-workflow__label">THE WORKFLOW</p>
          {workflow.map(({ label, active }, index) => (
            <span className="amora-workflow__step" key={label}>
              {index > 0 && <span className="amora-workflow__arrow">→</span>}
              <span className={`amora-workflow__pill ${active ? 'amora-workflow__pill--active' : ''}`}>{label}</span>
            </span>
          ))}
        </div>

        <div className="amora-stage amora-stage--gallery" tabIndex="0" role="region" aria-label="AI-assisted capture screens">
          {capture.map(({ src, alt, label }, index) => (
            <figure className="amora-phone" key={label}>
              <Screen src={src} alt={alt} />
              <figcaption className="amora-phone__badge">
                <span className="amora-badge">{index + 1}</span>
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </article>

      <article className="amora-exp amora-exp--stacked">
        <div className="amora-exp__row">
          <div className="amora-exp__copy">
            <BlockHead count="04" title="Manual record and task creation" />
            <p className="amora-lead">
              Not every healthcare activity starts with a document. Users also need the flexibility
              to enter information directly. Amora supports manual creation of appointments,
              medications, vaccinations, health readings and general medical records.
            </p>
          </div>
          <div className="amora-exp__aside">
            <p className="amora-lead">
              This allows users to manage healthcare activities even when a prescription or medical document is unavailable.
            </p>
          </div>
        </div>

        <div className="amora-stage amora-stage--gallery" tabIndex="0" role="region" aria-label="Manual entry screens">
          {manual.map(({ src, alt, label }) => (
            <figure className="amora-phone" key={label}>
              <Screen src={src} alt={alt} />
              <figcaption className="amora-phone__caption">{label}</figcaption>
            </figure>
          ))}
        </div>
      </article>

      <article className="amora-exp amora-exp--stacked">
        <div className="amora-exp__row">
          <div className="amora-exp__copy">
            <BlockHead count="05" title="A connected care planner" />
            <p className="amora-lead">
              The planner brings important family healthcare activities into one timeline. Users can
              manage medication schedules, upcoming vaccinations, doctor appointments, follow-up
              tasks and overdue activities.
            </p>
          </div>
          <div className="amora-exp__aside">
            <p className="amora-lead">
              Filters help users view activities for specific family members, while task details
              provide the information needed to complete, update or reschedule them.
            </p>
          </div>
        </div>

        <div className="amora-stage amora-stage--planner" tabIndex="0" role="region" aria-label="Care planner screens">
          {planner.map(({ src, alt, label, large }) => (
            <figure className={`amora-phone ${large ? 'amora-phone--large' : ''}`} key={label}>
              <Screen src={src} alt={alt} width={large ? 270 : 220} height={large ? 585 : 477} />
              <figcaption className="amora-phone__caption">{label}</figcaption>
            </figure>
          ))}
        </div>
      </article>

      <article className="amora-exp amora-exp--access">
        <div className="amora-exp__copy">
          <BlockHead count="06" title="Shared caregiving with control" />
          <p className="amora-lead">
            Family healthcare is often a shared responsibility. Amora allows users to invite family
            members and assign access based on their role.
          </p>
          <p className="amora-lead amora-lead--muted">
            The permission experience supports viewing or editing shared information, selecting
            accessible family members, reviewing existing access and revoking access when required.
          </p>
          <p className="amora-private">
            <span>PRIVATE</span>
            Private notes remain visible only to the person who created them.
          </p>
        </div>
        <div className="amora-stage amora-stage--access" tabIndex="0" role="region" aria-label="Family access screens">
          {access.map(({ src, alt, label }) => (
            <figure className="amora-phone" key={label}>
              <Screen src={src} alt={alt} width={220} height={476} />
              <figcaption className="amora-phone__caption">{label}</figcaption>
            </figure>
          ))}
        </div>
      </article>
    </section>
  )
}
