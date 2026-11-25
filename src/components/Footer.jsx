import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 ABI AGNES</p>
      <p>Senior UI/UX Designer · Product Designer</p>
      <Link className="footer__top" to={{ hash: '#top' }}>Back to top ↑</Link>
    </footer>
  )
}
