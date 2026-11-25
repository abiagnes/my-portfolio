import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import { mailto, navLinks } from '../data/content.js'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="nav enter">
      <Link className="nav__logo" to={{ hash: '#top' }}>
        <span className="nav__monogram" aria-hidden="true">A</span>
        <span className="nav__name">ABI AGNES</span>
      </Link>

      <button
        className="nav__toggle"
        type="button"
        aria-expanded={open}
        aria-controls="nav-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
      >
        <span className={`nav__toggle-icon ${open ? 'is-open' : ''}`} aria-hidden="true" />
      </button>

      <div
        id="nav-menu"
        className={`nav__menu ${open ? 'is-open' : ''}`}
        onClick={(event) => {
          if (event.target.closest('a')) setOpen(false)
        }}
      >
        <nav aria-label="Primary">
          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button href={mailto} variant="secondary">Get in touch</Button>
      </div>
    </header>
  )
}
