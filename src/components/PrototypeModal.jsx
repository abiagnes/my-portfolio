import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './PrototypeModal.css'

import phoneFrame from '../assets/phone-frame.svg'

// Figma renders inside a fixed 600×1100 iframe; with hide-ui and device-frame=0 it centres a
// 390×844 screen in a box about 431×933 there (measured in Chrome). PhoneScreen scales that box
// to cover the mock-up glass, so Figma's own margin never shows.
const EMBED_W = 600
const EMBED_H = 1100
const CONTENT_W = 431.2
const CONTENT_H = 933.3

function PhoneScreen({ src, title }) {
  const screenRef = useRef(null)
  const [fit, setFit] = useState(null)

  useEffect(() => {
    const screen = screenRef.current
    if (!screen) return undefined
    const update = () => {
      const { width, height } = screen.getBoundingClientRect()
      const scale = Math.max(width / CONTENT_W, height / CONTENT_H)
      setFit({ scale, x: width / 2 - (EMBED_W / 2) * scale, y: height / 2 - (EMBED_H / 2) * scale })
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(screen)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="proto-modal__screen" ref={screenRef}>
      <p className="proto-modal__loading">Loading prototype…</p>
      <iframe
        className="proto-modal__iframe"
        src={src}
        title={title}
        allow="clipboard-write"
        width={EMBED_W}
        height={EMBED_H}
        style={fit ? { transform: `translate(${fit.x}px, ${fit.y}px) scale(${fit.scale})` } : { visibility: 'hidden' }}
      />
    </div>
  )
}

// Turns a figma.com/proto share link into the embeddable form Figma serves inside iframes.
// Inside the phone mock-up Figma's own toolbar and sidebar are hidden and each screen fits the glass.
function toEmbedUrl(url, phone) {
  try {
    const parsed = new URL(url)
    if (parsed.hostname === 'www.figma.com' || parsed.hostname === 'figma.com') {
      parsed.hostname = 'embed.figma.com'
      parsed.searchParams.set('embed-host', 'share')
      if (phone) {
        parsed.searchParams.delete('show-proto-sidebar')
        parsed.searchParams.set('hide-ui', '1')
        parsed.searchParams.set('device-frame', '0')
        parsed.searchParams.set('scaling', 'contain')
      }
      return parsed.toString()
    }
  } catch {
    // Not a URL we can rewrite; use it as given.
  }
  return url
}

// Full-screen overlay showing a prototype in an iframe, with Back and Close controls.
// device="phone" plays it inside a phone mock-up instead of filling the screen.
export default function PrototypeModal({ open, onClose, url, title, device }) {
  const phone = device === 'phone'
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="proto-modal" role="dialog" aria-modal="true" aria-label={title}>
      <div className="proto-modal__bar">
        <button type="button" className="proto-modal__back" onClick={onClose}>
          <span aria-hidden="true">←</span>
          <span>Back to case study</span>
        </button>
        <p className="proto-modal__title">{title}</p>
        <button type="button" ref={closeRef} className="proto-modal__close" onClick={onClose} aria-label="Close prototype">
          <span aria-hidden="true">✕</span>
        </button>
      </div>
      <div className="proto-modal__frame">
        {phone ? (
          <div className="proto-modal__phone">
            <PhoneScreen src={toEmbedUrl(url, true)} title={title} />
            <img className="proto-modal__device" src={phoneFrame} alt="" />
          </div>
        ) : (
          <>
            <p className="proto-modal__loading">Loading prototype…</p>
            <iframe
              className="proto-modal__iframe"
              src={toEmbedUrl(url)}
              title={title}
              allow="fullscreen; clipboard-write"
              allowFullScreen
            />
          </>
        )}
      </div>
    </div>,
    document.body,
  )
}
