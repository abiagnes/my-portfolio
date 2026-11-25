import dot from '../assets/figma/dot.svg'
import './Eyebrow.css'

export default function Eyebrow({ children }) {
  return (
    <p className="eyebrow">
      <img src={dot} alt="" width="6" height="6" />
      {children}
    </p>
  )
}
