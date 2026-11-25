import CaseLayout from '../../components/case-study/CaseLayout.jsx'
import WattCareAccessibility from './WattCareAccessibility.jsx'
import WattCareChallenge from './WattCareChallenge.jsx'
import WattCareDashboard from './WattCareDashboard.jsx'
import WattCareHero from './WattCareHero.jsx'
import WattCareProcess from './WattCareProcess.jsx'
import WattCarePrototype from './WattCarePrototype.jsx'
import WattCareReflection from './WattCareReflection.jsx'
import WattCareSolution from './WattCareSolution.jsx'
import WattCareWireframes from './WattCareWireframes.jsx'
import nextAmora from '../../assets/figma/wattcare/next-amora.png'
import './WattCare.css'

const next = {
  to: '/work/amora',
  title: 'Amora',
  text: 'Family healthcare, thoughtfully organised.',
  media: (
    <img
      className="wattcare-next-thumb"
      src={nextAmora}
      alt="Three Amora phone screens: welcome, home and records"
      width="822"
      height="613"
      loading="lazy"
    />
  ),
}

export default function WattCarePage() {
  return (
    <CaseLayout next={next}>
      <WattCareHero />
      <WattCareChallenge />
      <WattCareProcess />
      <WattCareWireframes />
      <WattCareDashboard />
      <WattCareSolution />
      <WattCareAccessibility />
      <WattCarePrototype />
      <WattCareReflection />
    </CaseLayout>
  )
}
