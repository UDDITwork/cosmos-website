import Navigation from '@/components/Navigation'
import CosmicScrollExperience from '@/components/CosmicScrollExperience'
import ServicesSection from '@/components/ServicesSection'
import VideoSection from '@/components/VideoSection'
import ScrollReveal from '@/components/ScrollReveal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <CosmicScrollExperience />
      <ServicesSection />

      {/* Process — with background video */}
      <VideoSection src="/videos/bg1.mp4" overlay={0.6} className="py-28 md:py-40">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-4">
                Our Process
              </p>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-white">
                How we <span className="italic text-amber-400">work</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                step: '01',
                title: 'Deep Dive',
                text: 'We immerse ourselves in your invention’s technical landscape — studying prior art, identifying the inventive step, and mapping competitive terrain.',
              },
              {
                step: '02',
                title: 'Architect',
                text: 'Claims are constructed with layered breadth and depth: independent claims that stake broad territory, dependent chains that build defensive fallbacks.',
              },
              {
                step: '03',
                title: 'Prosecute',
                text: 'Every office action response is meticulously prepared with technically grounded arguments, persuasive amendments, and examiner-specific strategy.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="border-t border-white/15 pt-8">
                  <span className="font-mono text-[11px] text-amber-400/70 tracking-wider">
                    {item.step}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl text-white mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </VideoSection>

      {/* Approach */}
      <section id="approach" className="bg-white py-28 md:py-40">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber-600 mb-4">
                  Our Approach
                </p>
                <h2 className="font-display text-3xl md:text-5xl font-light text-slate-800 leading-tight">
                  Craftsmanship in
                  <br />
                  every <span className="italic text-amber-600">detail</span>
                </h2>
              </div>
              <div className="space-y-6 text-slate-500 text-sm leading-relaxed">
                <p>
                  We don&rsquo;t just write patents &mdash; we architect intellectual property
                  portfolios that give innovators a durable competitive advantage.
                </p>
                <p>
                  Every application we draft is engineered to withstand examination,
                  litigation, and the test of time. Our team combines deep technical
                  fluency with strategic patent expertise.
                </p>
                <p>
                  From neural network architectures to blockchain consensus mechanisms,
                  we speak the language of your technology &mdash; because great patent
                  protection starts with genuine understanding.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-20 md:mt-28 grid sm:grid-cols-3 gap-px bg-slate-200">
              {[
                { num: '250+', label: 'Patents Drafted' },
                { num: '94%', label: 'Allowance Rate' },
                { num: '8+', label: 'Years Experience' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-10 text-center">
                  <p className="font-display text-4xl md:text-5xl font-light text-amber-600">
                    {stat.num}
                  </p>
                  <p className="mt-2 font-mono text-[10px] tracking-[0.25em] uppercase text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Innovation showcase — with background video */}
      <VideoSection src="/videos/bg2.mp4" overlay={0.65} className="py-28 md:py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-4">
              Innovation
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Built for <span className="italic text-amber-400">deep tech</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-2xl mx-auto mb-12">
              We specialise in the technologies that define the future &mdash; from
              machine learning pipelines to cryptographic protocols, our expertise
              runs as deep as your inventions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {[
                'Artificial Intelligence & Machine Learning',
                'Natural Language Processing',
                'Computer Vision & Image Processing',
                'Software Methods & Algorithms',
                'Computer Architecture & Hardware',
                'Blockchain & Distributed Ledger',
                'Cryptographic Protocols & Security',
                'Cloud Computing & Distributed Systems',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5">
                  <div className="w-1 h-1 bg-amber-400 shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </VideoSection>

      {/* Contact */}
      <section id="contact" className="bg-slate-50 py-28 md:py-40 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber-600 mb-4">
              Get Started
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
              Ready to protect your{' '}
              <span className="italic text-amber-600">innovation</span>?
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
              Schedule a consultation to discuss your patent strategy.
              We work with inventors, startups, and enterprises building
              the next generation of AI and computing technology.
            </p>
            <a
              href="mailto:contact@cosmosip.com"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-slate-800 text-white text-sm font-mono tracking-wider uppercase hover:bg-slate-700 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              contact@cosmosip.com
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
