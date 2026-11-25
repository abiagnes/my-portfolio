import CaseLayout from '../../components/case-study/CaseLayout.jsx'
import Challenge from './Challenge.jsx'
import Competitive from './Competitive.jsx'
import DefiningUser from './DefiningUser.jsx'
import FutureScope from './FutureScope.jsx'
import Hero from './Hero.jsx'
import KeyExperience from './KeyExperience.jsx'
import Opportunity from './Opportunity.jsx'
import Privacy from './Privacy.jsx'
import Prototype from './Prototype.jsx'
import Reflection from './Reflection.jsx'
import Research from './Research.jsx'
import Strategy from './Strategy.jsx'
import VisualDesign from './VisualDesign.jsx'
import verdantBanner from '../../assets/figma/verdant/hero-banner.jpg'
import './amora.css'

const next = {
  to: '/work/verdant',
  title: 'Verdant',
  text: 'Luxury hospitality, designed around nature.',
  media: (
    <img
      className="amora-next-thumb"
      src={verdantBanner}
      alt="Verdant website hero showing a forest retreat"
      width="2560"
      height="1320"
      loading="lazy"
    />
  ),
}

export default function AmoraPage() {
  return (
    <CaseLayout next={next}>
      <Hero />
      <Challenge />
      <Research />
      <Competitive />
      <Opportunity />
      <DefiningUser />
      <Strategy />
      <KeyExperience />
      <VisualDesign />
      <Privacy />
      <Prototype />
      <FutureScope />
      <Reflection />
    </CaseLayout>
  )
}
