import { Link } from 'react-router-dom'
import './Button.css'

// Pass `to` for pages inside the site, `href` for mailto: and external links.
export default function Button({ children, to, href, icon = '↗', variant = 'primary', external = false }) {
  const className = `button button--${variant}`
  const content = (
    <>
      <span className="button__label">{children}</span>
      <span aria-hidden="true">{icon}</span>
    </>
  )

  if (to) {
    return <Link className={className} to={to}>{content}</Link>
  }

  const externalProps = external ? { target: '_blank', rel: 'noreferrer' } : {}
  return <a className={className} href={href} {...externalProps}>{content}</a>
}
