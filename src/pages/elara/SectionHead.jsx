export default function SectionHead({ number, label, title, className = '' }) {
  return (
    <div className={`elara-head ${className}`}>
      <p className="elara-head__label">
        <span className="elara-head__number">{number}</span>
        <span className="elara-head__rule" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 className="elara-head__title">{title}</h2>
    </div>
  )
}
