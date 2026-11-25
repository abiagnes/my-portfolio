import Eyebrow from './Eyebrow.jsx'
import { principles } from '../data/content.js'
import './Approach.css'

export default function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="approach__header">
        <Eyebrow>(02) — Approach</Eyebrow>
        <h2 className="approach__title">How I think about product design</h2>
      </div>

      <div className="approach__grid">
        {principles.map((principle) => (
          <article className="principle" key={principle.number}>
            <div className="principle__top">
              <span className="principle__number">{principle.number}</span>
              <span className="principle__icon" aria-hidden="true">{principle.icon}</span>
            </div>
            <h3 className="principle__title">{principle.title}</h3>
            <p className="principle__description">{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
