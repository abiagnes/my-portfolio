import './Placeholder.css'

// Stands in for an image until a real one exists. Pass src to swap it in.
export default function Placeholder({ label, size, src, alt = '', className = '' }) {
  if (src) {
    return <img className={`placeholder placeholder--image ${className}`} src={src} alt={alt} />
  }

  return (
    <div className={`placeholder ${className}`} role="img" aria-label={`Placeholder: ${label}`}>
      <span className="placeholder__label">[ {label} ]</span>
      <span className="placeholder__size">{size}</span>
    </div>
  )
}
