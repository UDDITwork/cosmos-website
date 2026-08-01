'use client'

import ScrollReveal from './ScrollReveal'

const services = [
  {
    num: '01',
    category: 'Patent Drafting',
    title: 'AI & Machine Learning',
    text: 'Comprehensive patent applications for neural networks, deep learning architectures, NLP systems, and AI-driven inventions — drafted to survive §101 scrutiny.',
  },
  {
    num: '02',
    category: 'Patent Drafting',
    title: 'Software & Algorithms',
    text: 'Precise claim construction for software methods, data processing pipelines, and computer-implemented inventions with robust specification support.',
  },
  {
    num: '03',
    category: 'Prosecution',
    title: 'Office Action Responses',
    text: 'Strategic responses to USPTO office actions, including §101, §102, and §103 rejections, built on examiner-specific insight and technical depth.',
  },
  {
    num: '04',
    category: 'Prosecution',
    title: 'Claim Strategy',
    text: 'Forward-looking claim strategies that protect core innovations while building defensible patent portfolios across product generations.',
  },
  {
    num: '05',
    category: 'Specialized',
    title: 'Computer Architecture',
    text: 'Patents covering hardware-software interfaces, processor designs, memory hierarchies, and novel computing architectures.',
  },
  {
    num: '06',
    category: 'Specialized',
    title: 'Blockchain & Cryptography',
    text: 'Protection for distributed ledger technologies, consensus mechanisms, zero-knowledge proofs, and cryptographic protocols.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20 md:mb-28">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber-600 mb-4">
              Our Expertise
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-slate-800">
              Precision in every{' '}
              <span className="italic text-amber-600">claim</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 md:gap-y-20">
          {services.map((svc, i) => (
            <ScrollReveal key={i} delay={i % 2 === 0 ? 0 : 100}>
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[10px] text-amber-600/50 tracking-wider">
                    {svc.num}
                  </span>
                  <div className="h-px flex-1 bg-slate-200 group-hover:bg-amber-600/30 transition-colors" />
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate-400">
                    {svc.category}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl text-slate-800 mb-3 group-hover:text-amber-700 transition-colors">
                  {svc.title}
                </h3>
                <p className="font-body text-sm text-slate-500 leading-relaxed max-w-lg">
                  {svc.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
