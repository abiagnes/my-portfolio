import CaseLayout from '../../components/case-study/CaseLayout.jsx'
import phone1 from '../../assets/figma/elara/next-phone-1.png'
import phone2 from '../../assets/figma/elara/next-phone-2.png'
import phone3 from '../../assets/figma/elara/next-phone-3.png'
import Hero from './Hero.jsx'
import Problem from './Problem.jsx'
import Approach from './Approach.jsx'
import Decisions from './Decisions.jsx'
import FinalExperience from './FinalExperience.jsx'
import DesignSystem from './DesignSystem.jsx'
import Prototype from './Prototype.jsx'
import Reflection from './Reflection.jsx'
import './elara.css'

const next = {
  to: '/work/wattcare',
  title: 'WattCare',
  text: 'Designing a more accessible way to understand household energy use.',
  media: (
    <div className="next-case__phones">
      <img src={phone1} alt="" loading="lazy" />
      <img src={phone2} alt="" loading="lazy" />
      <img src={phone3} alt="" loading="lazy" />
    </div>
  ),
}

export default function ElaraPage() {
  return (
    <CaseLayout next={next}>
      <Hero />
      <Problem />
      <Approach />
      <Decisions />
      <FinalExperience />
      <DesignSystem />
      <Prototype />
      <Reflection />
    </CaseLayout>
  )
}
