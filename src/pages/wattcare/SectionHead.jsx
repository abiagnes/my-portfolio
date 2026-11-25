export default function SectionHead({ number, label, title }) {
  return (
    <div className="wattcare-head">
      <p className="wattcare-head__label">
        <span className="wattcare-head__number">{number}</span>
        <span className="wattcare-head__rule" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 className="wattcare-head__title">{title}</h2>
    </div>
  )
}
