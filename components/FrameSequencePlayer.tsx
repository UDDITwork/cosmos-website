'use client'

/**
 * Scroll-driven video frame player.
 *
 * Usage:
 *   1. Generate a video using the prompt in VIDEO_PROMPT.md
 *   2. Extract frames:  ffmpeg -i video.mp4 -vf "fps=30,scale=1920:-1" -quality 80 public/frames/frame_%04d.webp
 *   3. Replace <CosmicScrollExperience /> with:
 *        <FrameSequencePlayer frameCount={N} framePath="/frames/frame_" />
 */

import { useRef, useEffect } from 'react'

interface Props {
  frameCount: number
  framePath: string
  extension?: string
  scrollHeight?: string
}

export default function FrameSequencePlayer({
  frameCount,
  framePath,
  extension = 'webp',
  scrollHeight = '600vh',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const container = containerRef.current!
    const ctx = canvas.getContext('2d')!

    const frames: HTMLImageElement[] = []
    let currentFrame = -1

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image()
      img.src = `${framePath}${String(i).padStart(4, '0')}.${extension}`

      if (i === 1) {
        img.onload = () => {
          const dpr = window.devicePixelRatio || 1
          canvas.width = img.naturalWidth * dpr
          canvas.height = img.naturalHeight * dpr
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
          ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
        }
      }

      frames.push(img)
    }

    let pending = false

    function onScroll() {
      if (pending) return
      pending = true
      requestAnimationFrame(() => {
        pending = false

        const rect = container.getBoundingClientRect()
        const scrollable = container.offsetHeight - window.innerHeight
        if (scrollable <= 0) return

        const progress = Math.max(0, Math.min(1, -rect.top / scrollable))
        const idx = Math.min(
          Math.floor(progress * frameCount),
          frameCount - 1,
        )

        if (idx !== currentFrame) {
          currentFrame = idx
          const img = frames[idx]
          if (img?.complete) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
          }
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [frameCount, framePath, extension])

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: scrollHeight }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-void">
        <canvas
          ref={canvasRef}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  )
}
