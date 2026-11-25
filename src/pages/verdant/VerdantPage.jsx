import CaseLayout from '../../components/case-study/CaseLayout.jsx'
import Challenge from './Challenge.jsx'
import DesignSystem from './DesignSystem.jsx'
import DesigningExperience from './DesigningExperience.jsx'
import FinalExperience from './FinalExperience.jsx'
import Hero from './Hero.jsx'
import Opportunity from './Opportunity.jsx'
import Reflection from './Reflection.jsx'
import Reservation from './Reservation.jsx'
import Responsive from './Responsive.jsx'
import Structure from './Structure.jsx'
import VisualDirection from './VisualDirection.jsx'
import './verdant.css'

export default function VerdantPage() {
  return (
    <CaseLayout>
      <Hero />
      <Challenge />
      <Opportunity />
      <Structure />
      <VisualDirection />
      <DesignSystem />
      <DesigningExperience />
      <Reservation />
      <Responsive />
      <FinalExperience />
      <Reflection />
    </CaseLayout>
  )
}
