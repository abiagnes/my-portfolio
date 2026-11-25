import Button from '../components/Button.jsx'
import CaseLayout from '../components/case-study/CaseLayout.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import './InfoPage.css'

export default function InfoPage({ eyebrow, title, text }) {
  return (
    <CaseLayout>
      <section className="info-page">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="info-page__title">{title}</h1>
        <p className="info-page__text">{text}</p>
        <Button to="/#work" icon="←">See all work</Button>
      </section>
    </CaseLayout>
  )
}
