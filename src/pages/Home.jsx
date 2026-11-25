import Hero from '../components/Hero.jsx'
import SelectedWork from '../components/SelectedWork.jsx'
import Approach from '../components/Approach.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <div id="top" className="page">
      <Hero />
      <main>
        <SelectedWork />
        <Approach />
        <About />
        <Contact />
      </main>
    </div>
  )
}
