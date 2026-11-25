import Eyebrow from '../../components/Eyebrow.jsx'
import decisionKey from '../../assets/figma/amora/flow-decision-key.svg'
import decisionLarge from '../../assets/figma/amora/flow-decision-lg.svg'
import decisionSmall from '../../assets/figma/amora/flow-decision-sm.svg'
import flowConnectors from '../../assets/figma/amora/flow-connectors.svg'
import glow from '../../assets/figma/amora/strategy-glow.svg'
import devices from '../../assets/figma/amora/strategy-devices.png'
import {
  destinations,
  flowBranchLabels,
  flowDividers,
  flowHeadings,
  flowLegend,
  flowNodes,
  sitemap,
} from './content.js'
import { NumberedCard, SectionIntro } from './parts.jsx'

function Sitemap() {
  return (
    <div className="amora-sitemap">
      <div className="amora-sitemap__root">
        <p className="amora-sitemap__name">Amora</p>
        <p className="amora-sitemap__tag">MAIN APP SHELL</p>
      </div>
      <div className="amora-sitemap__columns">
        {sitemap.map(({ title, tag, key, items }) => (
          <div className="amora-sitemap__column" key={title}>
            <div className={`amora-sitemap__node ${key ? 'amora-sitemap__node--key' : ''}`}>
              <p className="amora-sitemap__title">{title}</p>
              <p className="amora-sitemap__tag">{tag}</p>
            </div>
            <ul className="amora-sitemap__list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function FlowNode({ type, x, y, w, h, title, sub }) {
  return (
    <div
      className={`amora-flow__node amora-flow__node--${type} ${sub ? 'amora-flow__node--titled' : ''}`}
      style={{ '--x': x, '--y': y, '--w': w, '--h': h }}
    >
      {type === 'decision' && <img src={w === 110 ? decisionSmall : decisionLarge} alt="" />}
      <p>{title}</p>
      {sub && <p className="amora-flow__sub">{sub}</p>}
    </div>
  )
}

function UserFlows() {
  return (
    <div className="amora-flow" tabIndex="0" role="region" aria-label="Key user flows diagram">
      <div className="amora-flow__canvas">
        <img className="amora-flow__connectors" src={flowConnectors} alt="" />
        {flowLegend.map(({ type, x, label }) => (
          <div className="amora-flow__legend" style={{ '--x': x }} key={type}>
            {type === 'decision' ? (
              <img src={decisionKey} alt="" />
            ) : (
              <span className={`amora-flow__swatch amora-flow__swatch--${type}`} />
            )}
            {label}
          </div>
        ))}
        {flowHeadings.map(({ tag, title, y }) => (
          <div className="amora-flow__heading" style={{ '--y': y }} key={tag}>
            <p className="amora-flow__tag">{tag}</p>
            <h4>{title}</h4>
          </div>
        ))}
        {flowDividers.map((y) => (
          <span className="amora-flow__divider" style={{ '--y': y }} key={y} />
        ))}
        {flowNodes.map((node) => (
          <FlowNode key={node.title} {...node} />
        ))}
        {flowBranchLabels.map(({ text, x, y }) => (
          <p className="amora-flow__branch" style={{ '--x': x, '--y': y }} key={text}>{text}</p>
        ))}
      </div>
    </div>
  )
}

export default function Strategy() {
  return (
    <section className="amora-section amora-section--alt">
      <SectionIntro
        number="06"
        label="Product strategy"
        title="One connected space for family healthcare."
        width={680}
      >
        <p className="amora-lead">
          The experience was structured around four primary areas, each addressing a key part of
          family healthcare management.
        </p>
      </SectionIntro>

      <div className="amora-stack amora-stack--24">
        <Eyebrow>PRIMARY MOBILE NAVIGATION</Eyebrow>
        <div className="amora-grid amora-grid--4 amora-destinations">
          {destinations.map((item, index) => (
            <NumberedCard key={item.title} index={index} {...item} titleClass="amora-destination__title" />
          ))}
        </div>
      </div>

      <div className="amora-add-action">
        <span className="amora-add-action__icon" aria-hidden="true">+</span>
        <p>A persistent add action allows users to upload documents or manually create records and care tasks.</p>
      </div>

      <div className="amora-stack amora-stack--24">
        <div className="amora-eyebrow-light">
          <Eyebrow>COMPLETE INFORMATION ARCHITECTURE SITEMAP</Eyebrow>
        </div>
        <Sitemap />
      </div>

      <div className="amora-stack amora-stack--24 amora-anchor" id="amora-key-flows">
        <div className="amora-eyebrow-light">
          <Eyebrow>KEY USER FLOWS</Eyebrow>
        </div>
        <UserFlows />
      </div>

      <div className="amora-devices">
        <img className="amora-devices__glow" src={glow} alt="" />
        <div className="amora-scroller" tabIndex="0" role="region" aria-label="Amora app screens">
          <img
            className="amora-devices__image"
            src={devices}
            width="2560"
            height="959"
            loading="lazy"
            alt="Five Amora phone screens: Home, Family, Records, Planner and the add health information sheet."
          />
        </div>
      </div>
    </section>
  )
}
