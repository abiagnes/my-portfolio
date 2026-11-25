import alerts from '../../assets/figma/wattcare/screen-alerts.png'
import appliances from '../../assets/figma/wattcare/screen-appliances.png'
import help from '../../assets/figma/wattcare/screen-help.png'
import home from '../../assets/figma/wattcare/screen-home.png'
import settings from '../../assets/figma/wattcare/screen-settings.png'
import usage from '../../assets/figma/wattcare/screen-usage-history.png'
import SectionHead from './SectionHead.jsx'

const features = [
  {
    title: 'Home',
    text: 'Understand household energy usage at a glance.',
    image: home,
    alt: 'WattCare home screen showing 8.4 kWh used today, with cost, comparison and smart meter cards.',
  },
  {
    title: 'Appliances',
    text: 'Explore estimated consumption by appliance.',
    image: appliances,
    alt: 'WattCare appliances screen listing estimated usage for heating, washing machine and oven.',
  },
  {
    title: 'Usage History',
    text: 'Recognise changes in energy consumption over time.',
    image: usage,
    alt: 'WattCare usage history screen with a bar chart of the last seven days, totalling 57.9 kWh.',
  },
  {
    title: 'Alerts',
    text: 'Understand important updates and recommended actions.',
    image: alerts,
    alt: 'WattCare alerts screen warning of higher use than usual on Monday, with a suggested action.',
  },
  {
    title: 'Settings & Accessibility',
    text: 'Adjust supported preferences for a more comfortable experience.',
    image: settings,
    alt: 'WattCare settings screen with text size options and high contrast, reduce motion and read aloud toggles.',
  },
  {
    title: 'Help & Support',
    text: 'Find guidance when it is needed.',
    image: help,
    alt: 'WattCare help screen with options to call or message support and step-by-step guides.',
  },
]

export default function WattCareSolution() {
  return (
    <section className="wattcare-section wattcare-section--alt wattcare-solution">
      <div className="wattcare-row">
        <SectionHead number="05" label="The solution" title="A clear, approachable mobile experience." />
        <p className="wattcare-text wattcare-text--strong wattcare-row__aside">
          WattCare brings essential energy information into a clear, approachable mobile experience,
          helping older adults understand their usage and navigate key tasks more confidently.
        </p>
      </div>

      <div className="wattcare-solution__grid">
        {features.map((feature, index) => (
          <article key={feature.title} className="wattcare-feature">
            <div className="wattcare-feature__text">
              <p className="wattcare-feature__number">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="wattcare-feature__title">{feature.title}</h3>
              <p className="wattcare-feature__desc">{feature.text}</p>
            </div>
            <div className="wattcare-feature__stage">
              <img src={feature.image} alt={feature.alt} width="578" height="1226" loading="lazy" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
