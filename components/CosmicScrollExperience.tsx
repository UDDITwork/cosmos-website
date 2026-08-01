'use client'

import { useRef, useEffect, useCallback, useState } from 'react'

const TOTAL_FRAMES = 150
const FRAME_PATH = '/frames/hero/frame_'

const OVERLAY_TIMING = [
  { start: -0.1, peak: 0.0, end: 0.20 },
  { start: 0.18, peak: 0.32, end: 0.52 },
  { start: 0.48, peak: 0.60, end: 0.78 },
  { start: 0.72, peak: 0.84, end: 1.0 },
]

export default function CosmicScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([])
  const framesRef = useRef<HTMLImageElement[]>([])
  const [loaded, setLoaded] = useState(false)

  const setOverlayRef = useCallback(
    (el: HTMLDivElement | null, i: number) => {
      overlayRefs.current[i] = el
    },
    [],
  )

  useEffect(() => {
    const canvas = canvasRef.current!
    const container = containerRef.current!
    const ctx = canvas.getContext('2d')!
    let loadedCount = 0

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image()
      img.src = `${FRAME_PATH}${String(i).padStart(4, '0')}.jpg`
      img.onload = () => {
        loadedCount++
        if (loadedCount === TOTAL_FRAMES) {
          setLoaded(true)
          resize()
          render(getProgress())
        }
      }
      framesRef.current[i - 1] = img
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
    }

    function getProgress(): number {
      const rect = container.getBoundingClientRect()
      const scrollable = container.offsetHeight - window.innerHeight
      if (scrollable <= 0) return 0
      return Math.max(0, Math.min(1, -rect.top / scrollable))
    }

    function updateOverlays(progress: number) {
      for (let i = 0; i < OVERLAY_TIMING.length; i++) {
        const el = overlayRefs.current[i]
        if (!el) continue
        const { start, peak, end } = OVERLAY_TIMING[i]
        let opacity = 0
        if (progress >= start && progress <= end) {
          opacity = progress < peak
            ? (progress - start) / (peak - start)
            : 1 - (progress - peak) / (end - peak)
        }
        opacity = Math.max(0, Math.min(1, opacity))
        const ty = (1 - opacity) * 40
        el.style.opacity = String(opacity)
        el.style.transform = `translateY(${ty}px)`
      }
    }

    function render(progress: number) {
      if (framesRef.current.length < TOTAL_FRAMES) return
      const dpr = window.devicePixelRatio || 1
      const w = canvas.width / dpr
      const h = canvas.height / dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const frameIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * (TOTAL_FRAMES - 1)),
      )
      const img = framesRef.current[frameIdx]
      if (!img || !img.complete) return

      const imgAspect = img.naturalWidth / img.naturalHeight
      const canvasAspect = w / h
      let drawW: number, drawH: number, drawX: number, drawY: number

      if (canvasAspect > imgAspect) {
        drawW = w
        drawH = w / imgAspect
        drawX = 0
        drawY = (h - drawH) / 2
      } else {
        drawH = h
        drawW = h * imgAspect
        drawX = (w - drawW) / 2
        drawY = 0
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH)

      const overlayAlpha = 0.35 + progress * 0.15
      ctx.fillStyle = `rgba(0, 0, 0, ${overlayAlpha})`
      ctx.fillRect(0, 0, w, h)

      updateOverlays(progress)
    }

    let renderPending = false
    function scheduleRender() {
      if (!renderPending) {
        renderPending = true
        requestAnimationFrame(() => {
          renderPending = false
          render(getProgress())
        })
      }
    }
    function handleResize() {
      resize()
      scheduleRender()
    }

    resize()
    render(getProgress())
    window.addEventListener('scroll', scheduleRender, { passive: true })
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', scheduleRender)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {!loaded && (
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-amber-600/30 border-t-amber-600 rounded-full animate-spin mx-auto mb-4" />
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-400">
                Loading experience
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none">
          {/* 0 — opening */}
          <div
            ref={(el) => setOverlayRef(el, 0)}
            className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 px-8"
          >
            <p className="font-mono text-xs sm:text-sm tracking-[0.4em] uppercase text-white/50 mb-10">
              Scroll to explore
            </p>
            <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tight text-white leading-[0.88]">
              Cosmos{' '}
              <span className="italic text-amber-400">IP</span>
            </h1>
            <p className="mt-8 font-body text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl">
              Where innovation meets protection
            </p>
            <div className="mt-14 animate-float">
              <svg className="w-6 h-6 text-white/30" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* 1 — AI & Software */}
          <div
            ref={(el) => setOverlayRef(el, 1)}
            className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 px-8"
          >
            <p className="font-mono text-xs sm:text-sm tracking-[0.4em] uppercase text-amber-400/80 mb-6">
              AI &amp; Software Patents
            </p>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white max-w-5xl leading-[0.92]">
              Protecting the ideas
              <br />
              that shape <span className="italic text-amber-400">tomorrow</span>
            </h2>
          </div>

          {/* 2 — Prosecution */}
          <div
            ref={(el) => setOverlayRef(el, 2)}
            className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 px-8"
          >
            <p className="font-mono text-xs sm:text-sm tracking-[0.4em] uppercase text-white/50 mb-6">
              Patent Prosecution
            </p>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white max-w-5xl leading-[0.92]">
              Precision-crafted
              <br />
              <span className="italic text-amber-400">protection</span>
            </h2>
          </div>

          {/* 3 — CTA */}
          <div
            ref={(el) => setOverlayRef(el, 3)}
            className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 px-8"
          >
            <h2 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold tracking-tight text-white leading-[0.88]">
              Cosmos <span className="italic text-amber-400">IP</span>
            </h2>
            <div className="mt-8 w-20 h-px bg-amber-400/40" />
            <p className="mt-8 font-body text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
              Exceptional patent drafting and prosecution services
              for AI, software, and computer-related inventions
            </p>
            <a
              href="#services"
              className="mt-12 inline-flex items-center gap-3 px-12 py-5 bg-amber-600 text-white text-sm sm:text-base font-mono tracking-[0.2em] uppercase hover:bg-amber-500 transition-colors pointer-events-auto"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
