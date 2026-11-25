import { Link } from 'react-router-dom'
import './CaseCard.css'

export default function CaseCard({ number, title, image, tagline, description, tags, href }) {
  return (
    <Link className="case-card" to={href}>
      <div className="case-card__media">
        <img className="case-card__image" src={image} alt={`${title} preview`} width="440" height="292" loading="lazy" />
      </div>
      <div className="case-card__body">
        <div className="case-card__meta">
          <span className="case-card__number">{number}</span>
          <span className="case-card__arrow" aria-hidden="true">↗</span>
        </div>
        <h3 className="case-card__title">{title}</h3>
        <p className="case-card__tagline">{tagline}</p>
        <p className="case-card__description">{description}</p>
        <ul className="case-card__tags">
          {tags.map((tag) => (
            <li className="case-card__tag" key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="case-card__divider" />
        <div className="case-card__link">
          <span>View case study</span>
          <span aria-hidden="true">↗</span>
        </div>
      </div>
    </Link>
  )
}
