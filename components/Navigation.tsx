'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-slate-200'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-display text-xl tracking-tight text-slate-800">
            Cosmos <span className="italic text-amber-600">IP</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-[0.15em] uppercase text-slate-400">
            <a href="/#services" className="hover:text-slate-800 transition-colors">Services</a>
            <Link href="/about" className="hover:text-slate-800 transition-colors">About</Link>
            <a href="/#approach" className="hover:text-slate-800 transition-colors">Approach</a>
            <a href="/#contact" className="hover:text-slate-800 transition-colors">Contact</a>
          </div>

          <a
            href="/#contact"
            className="hidden md:inline-flex px-5 py-2 bg-slate-800 text-white text-[11px] font-mono tracking-[0.15em] uppercase hover:bg-slate-700 transition-colors"
          >
            Get Started
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-slate-800 transition-all duration-300 ${
                open ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-slate-800 transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-slate-800 transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 font-mono text-sm tracking-[0.2em] uppercase text-slate-600">
          <a href="/#services" onClick={() => setOpen(false)} className="hover:text-slate-800 transition-colors">
            Services
          </a>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-slate-800 transition-colors">
            About
          </Link>
          <a href="/#approach" onClick={() => setOpen(false)} className="hover:text-slate-800 transition-colors">
            Approach
          </a>
          <a href="/#contact" onClick={() => setOpen(false)} className="hover:text-slate-800 transition-colors">
            Contact
          </a>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-4 px-8 py-3 bg-slate-800 text-white text-[11px] tracking-[0.2em] hover:bg-slate-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  )
}
