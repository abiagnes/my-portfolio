import { Fragment } from 'react'
import { marqueeItems } from '../data/content.js'
import './Marquee.css'

// Three identical sequences, as in Figma. The track moves one sequence per loop.
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1, 2].map((sequence) => (
          <div className="marquee__sequence" key={sequence}>
            {marqueeItems.map((item) => (
              <Fragment key={item}>
                <span className="marquee__item">{item}</span>
                <span className="marquee__star">✦</span>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
