import Eyebrow from '../../components/Eyebrow.jsx'
import markPartial from '../../assets/figma/amora/mark-p.svg'
import markYes from '../../assets/figma/amora/mark-y.svg'
import markYesAccent from '../../assets/figma/amora/mark-y1.svg'
import { matrixColumns, matrixLegend, matrixRows, opportunities, platforms } from './content.js'
import { NumberedCard, SectionIntro } from './parts.jsx'

function Mark({ type, accent = false }) {
  const label = matrixLegend[type]

  if (type === 'Y') {
    return (
      <span className="amora-mark amora-mark--yes">
        <img src={accent ? markYesAccent : markYes} width="19" height="19" alt={label} />
      </span>
    )
  }
  if (type === 'P') {
    return (
      <span className="amora-mark">
        <img src={markPartial} width="18" height="18" alt={label} />
      </span>
    )
  }
  if (type === 'N') {
    return (
      <span className="amora-mark" role="img" aria-label={label}>
        <span className="amora-mark__dash" />
      </span>
    )
  }
  return (
    <span className="amora-mark amora-mark--unknown" role="img" aria-label={label}>
      ?
    </span>
  )
}

export default function Competitive() {
  return (
    <section className="amora-section amora-section--alt">
      <SectionIntro
        number="03"
        label="Competitive analysis"
        title="Understanding the existing healthcare landscape."
        spread
      >
        <p className="amora-lead amora-lead--muted">
          I reviewed four healthcare platforms to understand their capabilities, identify gaps and
          explore opportunities for a more connected family healthcare experience.
        </p>
      </SectionIntro>

      <div className="amora-stack amora-stack--24">
        <Eyebrow>PLATFORMS REVIEWED</Eyebrow>
        <div className="amora-grid amora-grid--4 amora-grid--top">
          {platforms.map((item, index) => (
            <NumberedCard key={item.title} index={index} {...item} />
          ))}
        </div>
      </div>

      <div className="amora-stack amora-stack--24">
        <div className="amora-matrix__head">
          <div className="amora-eyebrow-light">
            <Eyebrow>FEATURE COMPARISON</Eyebrow>
          </div>
          <ul className="amora-matrix__legend">
            {Object.entries(matrixLegend).map(([type, label]) => (
              <li key={type}>
                <span aria-hidden="true">
                  <Mark type={type} />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="amora-matrix" tabIndex="0" role="region" aria-label="Feature comparison table">
          <table>
            <thead>
              <tr>
                <th scope="col">CAPABILITIES</th>
                {matrixColumns.map((column) => (
                  <th scope="col" key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrixRows.map(([feature, marks]) => (
                <tr key={feature}>
                  <th scope="row">{feature}</th>
                  {[...marks].map((mark, index) => (
                    <td key={matrixColumns[index]}>
                      <Mark type={mark} accent={index === matrixColumns.length - 1} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="amora-note">
          This is a qualitative comparison based on publicly documented capabilities, not hands-on
          testing. Feature availability can vary by region, provider and integration. A dash does not
          establish that a platform is technically incapable of supporting the feature.
        </p>
      </div>

      <div className="amora-stack amora-stack--24">
        <Eyebrow>KEY OPPORTUNITIES</Eyebrow>
        <p className="amora-lead amora-lead--muted amora-competitive__summary">
          The review highlighted four areas that informed Amora&apos;s product direction.
        </p>
        <div className="amora-grid amora-grid--4 amora-grid--top">
          {opportunities.map((item, index) => (
            <NumberedCard key={item.title} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
