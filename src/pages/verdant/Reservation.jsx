import Eyebrow from '../../components/Eyebrow.jsx'
import reservation from '../../assets/figma/verdant/reservation.jpg'
import { decisions } from './content.js'
import { SectionIntro, Shot } from './parts.jsx'

export default function Reservation() {
  return (
    <section className="verdant-section">
      <SectionIntro
        number="08"
        label="Reservation experience"
        title="Turning inspiration into a planned stay."
      >
        <p>
          The reservation experience was designed to retain the visual identity of the marketing
          website while introducing a more structured and functional interface.
        </p>
        <p>
          Visitors can select a retreat, choose dates, review accommodation options, understand the
          pricing breakdown and submit a booking request.
        </p>
        <p>
          The interface keeps the booking information visible through a summary panel, helping guests
          review their selections without losing context.
        </p>
      </SectionIntro>

      <div className="verdant-decisions">
        <Eyebrow>KEY DESIGN DECISIONS</Eyebrow>
        <ol className="verdant-decisions__list">
          {decisions.map(({ title, text }, index) => (
            <li className="verdant-decision" key={title}>
              <p className="verdant-index verdant-decision__index">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="verdant-decision__title">{title}</h3>
              <p className="verdant-decision__text">{text}</p>
            </li>
          ))}
        </ol>
      </div>

      <Shot
        src={reservation}
        width="1616"
        height="934"
        alt="The Plan Your Sanctuary booking page with retreat, date and guest selection beside a stay summary, and the villa choice step."
      />
    </section>
  )
}
