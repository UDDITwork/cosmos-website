'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <footer className="relative bg-slate-950 overflow-hidden">
      {/* Ambient gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[80px] bg-amber-500/5 blur-3xl" />

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* Top CTA band */}
        <div className="py-20 md:py-28 border-b border-white/[0.06]">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-amber-500/60 mb-5">
                Start a Conversation
              </p>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.05]">
                Have an invention
                <br />
                worth <span className="italic text-amber-400">protecting</span>?
              </h3>
            </div>
            <div className="md:text-right">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-4 px-10 py-5 border border-amber-500/30 text-amber-400 text-sm font-mono tracking-[0.2em] uppercase hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all duration-500"
              >
                Schedule Consultation
                <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <p className="mt-5 text-slate-600 text-xs font-mono tracking-wider">
                Response within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Multi-column grid */}
        <div className="py-20 md:py-24 grid grid-cols-2 md:grid-cols-12 gap-y-14 gap-x-8 border-b border-white/[0.06]">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5">
            <Link href="/" className="inline-block group">
              <span className="font-display text-3xl md:text-4xl text-white group-hover:text-amber-400 transition-colors duration-500">
                Cosmos <span className="italic text-amber-400 group-hover:text-white transition-colors duration-500">IP</span>
              </span>
            </Link>
            <p className="mt-6 text-slate-500 text-sm leading-relaxed max-w-sm">
              Exceptional patent drafting and prosecution services for AI,
              software, and computer-related inventions. We architect intellectual
              property portfolios that give innovators a durable competitive advantage.
            </p>

            {/* Credentials */}
            <div className="mt-10 flex gap-6">
              <div className="flex items-center gap-3 py-2 px-4 border border-white/[0.06] rounded-sm">
                <div className="w-8 h-8 flex items-center justify-center border border-amber-500/20">
                  <span className="font-mono text-[9px] text-amber-500 font-bold">USPTO</span>
                </div>
                <div>
                  <p className="text-[10px] text-white/70 font-mono leading-tight">Registered</p>
                  <p className="text-[9px] text-slate-600 font-mono leading-tight">Patent Practitioners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-500 mb-6">
              Services
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Patent Drafting', href: '/#services' },
                { label: 'Prosecution', href: '/#services' },
                { label: 'Claim Strategy', href: '/#services' },
                { label: 'Prior Art Analysis', href: '/#services' },
                { label: 'Portfolio Strategy', href: '/#services' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-300 w-fit"
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className={`inline-block transition-transform duration-300 ${hoveredLink === link.label ? 'translate-x-1.5' : ''}`}>
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Company column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-500 mb-6">
              Company
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'About Us', href: '/about', isLink: true },
                { label: 'Our Approach', href: '/#approach' },
                { label: 'Process', href: '/#services' },
                { label: 'Expertise', href: '/about' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                link.isLink ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-300 w-fit"
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className={`inline-block transition-transform duration-300 ${hoveredLink === link.label ? 'translate-x-1.5' : ''}`}>
                      {link.label}
                    </span>
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-300 w-fit"
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className={`inline-block transition-transform duration-300 ${hoveredLink === link.label ? 'translate-x-1.5' : ''}`}>
                      {link.label}
                    </span>
                  </a>
                )
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-500 mb-6">
              Get in Touch
            </p>
            <div className="space-y-6">
              <div className="group">
                <p className="text-[10px] font-mono text-slate-600 uppercase tracking-wider mb-1.5">Email</p>
                <a
                  href="mailto:contact@cosmosip.com"
                  className="text-base text-white hover:text-amber-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-amber-500/40" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  contact@cosmosip.com
                </a>
              </div>

              <div className="group">
                <p className="text-[10px] font-mono text-slate-600 uppercase tracking-wider mb-1.5">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="text-base text-white hover:text-amber-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-amber-500/40" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +1 (555) 123-4567
                </a>
              </div>

              <div className="group">
                <p className="text-[10px] font-mono text-slate-600 uppercase tracking-wider mb-1.5">Location</p>
                <p className="text-sm text-slate-400 flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-500/40 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>
                    Silicon Valley, CA
                    <br />
                    United States
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Domains expertise ticker */}
        <div className="py-10 border-b border-white/[0.06] overflow-hidden">
          <div className="flex items-center gap-6 text-slate-700 font-mono text-[10px] tracking-[0.3em] uppercase whitespace-nowrap animate-marquee">
            {[
              'Artificial Intelligence',
              'Machine Learning',
              'Natural Language Processing',
              'Computer Vision',
              'Software Patents',
              'Blockchain',
              'Cryptography',
              'Cloud Computing',
              'Computer Architecture',
              'Distributed Systems',
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-6">
                {item}
                <span className="w-1.5 h-1.5 bg-amber-500/20 rotate-45 shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="font-mono text-[10px] tracking-wider text-slate-600 uppercase">
              &copy; 2025 Cosmos IP
            </p>
            <span className="w-px h-3 bg-slate-800" />
            <p className="font-mono text-[10px] tracking-wider text-slate-700 uppercase">
              All Rights Reserved
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="font-mono text-[10px] tracking-wider text-slate-600 uppercase hover:text-amber-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="w-px h-3 bg-slate-800" />
            <a href="#" className="font-mono text-[10px] tracking-wider text-slate-600 uppercase hover:text-amber-400 transition-colors duration-300">
              Terms of Service
            </a>
            <span className="w-px h-3 bg-slate-800" />

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 font-mono text-[10px] tracking-wider text-slate-600 uppercase hover:text-amber-400 transition-colors duration-300"
            >
              Back to Top
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
