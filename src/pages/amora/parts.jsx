export function SectionKicker({ number, label }) {
  return (
    <p className="amora-kicker">
      <span className="amora-kicker__number">{number}</span>
      <span className="amora-kicker__rule" aria-hidden="true" />
      <span>{label}</span>
    </p>
  )
}

// width sets the title column in Figma's own proportions (`amora-intro--w620` and so on).
export function SectionIntro({ number, label, title, width = 640, align = 'end', spread = false, children }) {
  const classes = [
    'amora-intro',
    `amora-intro--w${width}`,
    `amora-intro--${align}`,
    spread ? 'amora-intro--spread' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <div className="amora-intro__head">
        <SectionKicker number={number} label={label} />
        <h2 className="amora-title">{title}</h2>
      </div>
      {children && <div className="amora-intro__body">{children}</div>}
    </div>
  )
}

export function Callout({ label, large = false, children }) {
  return (
    <div className={`amora-callout ${large ? 'amora-callout--large' : ''}`}>
      <p className="amora-callout__label">{label}</p>
      <p className="amora-callout__text">{children}</p>
    </div>
  )
}

export function NumberedCard({ index, title, text, titleClass = 'amora-card__title' }) {
  return (
    <article className="amora-card">
      <p className="amora-index">{String(index + 1).padStart(2, '0')}</p>
      <h3 className={titleClass}>{title}</h3>
      <p className="amora-card__text">{text}</p>
    </article>
  )
}
