import { useEffect, useRef } from 'react'
import phoneFrame from '../assets/phone-frame.svg'
import './PhoneVideo.css'

// A screen recording playing inside the phone mock-up. It plays (muted, looping) while at least
// 40% of it is on screen and pauses once it scrolls away. With reduced motion it waits for the
// viewer to press play.
export default function PhoneVideo({ src, label, className = '' }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.controls = true
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay refused (e.g. data saver); show controls so it can still be started.
            video.controls = true
          })
        } else {
          video.pause()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`phone-video ${className}`}>
      <div className="phone-video__screen">
        <video
          ref={videoRef}
          className="phone-video__video"
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={label}
        />
      </div>
      <img className="phone-video__device" src={phoneFrame} alt="" />
    </div>
  )
}
