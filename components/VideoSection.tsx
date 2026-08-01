'use client'

import { useRef, useEffect, ReactNode } from 'react'

interface Props {
  src: string
  children: ReactNode
  overlay?: number
  className?: string
}

export default function VideoSection({ src, children, overlay = 0.55, className = '' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlay})` }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
}
