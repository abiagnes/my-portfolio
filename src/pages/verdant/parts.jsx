export function SectionKicker({ number, label }) {
  return (
    <p className="verdant-kicker">
      <span className="verdant-kicker__number">{number}</span>
      <span className="verdant-kicker__rule" aria-hidden="true" />
      <span>{label}</span>
    </p>
  )
}

// The shared two-column opener: kicker and serif title on the left, body copy on the right.
// `layout` picks Figma's column proportions (`verdant-intro--wide` and so on).
export function SectionIntro({ number, label, title, layout, children }) {
  return (
    <div className={`verdant-intro ${layout ? `verdant-intro--${layout}` : ''}`}>
      <div className="verdant-intro__head">
        <SectionKicker number={number} label={label} />
        <h2 className="verdant-title">{title}</h2>
      </div>
      <div className="verdant-intro__body">{children}</div>
    </div>
  )
}

// A screen export on the dark stage used throughout Figma. `variant` handles the few images
// that Figma crops inside their frame (`verdant-shot--detail` and so on).
export function Shot({ src, width, height, alt, variant }) {
  return (
    <div className={`verdant-shot ${variant ? `verdant-shot--${variant}` : ''}`}>
      <img src={src} width={width} height={height} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}

export function Index({ value }) {
  return <p className="verdant-index">{String(value).padStart(2, '0')}</p>
}
