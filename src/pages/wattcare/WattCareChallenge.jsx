import SectionHead from './SectionHead.jsx'

export default function WattCareChallenge() {
  return (
    <section className="wattcare-section wattcare-challenge">
      <div className="wattcare-row wattcare-row--top">
        <SectionHead number="01" label="The challenge" title="Energy information, without the overload." />
        <div className="wattcare-challenge__column">
          <p className="wattcare-text">
            Energy-monitoring apps often present too much information at once, making it difficult for
            older adults to understand usage, interpret charts, and find important information.
          </p>
          <div className="wattcare-challenge__statement">
            <p className="wattcare-kicker">THE CHALLENGE</p>
            <p className="wattcare-challenge__statement-text">
              Make energy information easier to understand without compromising independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
