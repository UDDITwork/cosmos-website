import Navigation from '@/components/Navigation'
import VideoSection from '@/components/VideoSection'
import ScrollReveal from '@/components/ScrollReveal'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us — Cosmos IP',
  description:
    'Learn about Cosmos IP — exceptional patent drafting and prosecution services for AI, software, and computer-related inventions.',
}

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />

      {/* Hero with video */}
      <VideoSection src="/videos/bg3.mp4" overlay={0.55} className="pt-32 pb-24 md:pt-44 md:pb-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-4">
            About Us
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
            The minds behind the{' '}
            <span className="italic text-amber-400">claims</span>
          </h1>
          <p className="mt-6 text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Cosmos IP was founded on a simple premise: the world&rsquo;s most innovative
            technologies deserve the world&rsquo;s most precise patent protection.
          </p>
        </div>
      </VideoSection>

      {/* Mission */}
      <section className="bg-white py-24 md:py-36">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-amber-600/60 mb-4">
                  Our Mission
                </p>
                <h2 className="font-display text-2xl md:text-4xl font-light text-slate-800 leading-snug">
                  Bridging the gap between
                  <br />
                  <span className="italic text-slate-600">invention and protection</span>
                </h2>
              </div>
              <div className="space-y-5 text-slate-500 text-sm leading-relaxed">
                <p>
                  We specialise in patent drafting and prosecution for the technologies
                  shaping the future &mdash; artificial intelligence, machine learning, software
                  systems, computer architectures, and blockchain protocols.
                </p>
                <p>
                  Our team combines deep technical fluency with strategic patent expertise.
                  Every application we draft is engineered to withstand examination,
                  litigation, and the test of time.
                </p>
                <p>
                  We don&rsquo;t just write patents &mdash; we architect intellectual property
                  portfolios that give innovators a durable competitive advantage.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-24 md:py-36 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-24">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-amber-600/60 mb-4">
                What Drives Us
              </p>
              <h2 className="font-display text-2xl md:text-5xl font-light text-slate-800">
                Our <span className="italic text-amber-600">values</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-px bg-slate-200">
            {[
              {
                title: 'Technical Depth',
                text: 'We invest the time to truly understand each invention — its mechanics, its novelty, and its place in the prior art landscape — before writing a single claim.',
              },
              {
                title: 'Strategic Precision',
                text: 'Every claim term, every dependent chain, every specification paragraph is drafted with prosecution strategy and potential litigation in mind.',
              },
              {
                title: 'Client Partnership',
                text: 'We work alongside inventors and in-house counsel as collaborative partners, not vendors. Your success is our benchmark.',
              },
            ].map((v, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="bg-white p-10 h-full">
                  <div className="w-8 h-8 border border-amber-600/20 flex items-center justify-center mb-6">
                    <span className="font-mono text-[10px] text-amber-600/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-slate-800 mb-3">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise with video */}
      <VideoSection src="/videos/bg1.mp4" overlay={0.65} className="py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-amber-400 mb-4">
                Domain Expertise
              </p>
              <h2 className="font-display text-2xl md:text-5xl font-light text-white">
                Built for <span className="italic text-amber-400">deep tech</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                'Artificial Intelligence & Machine Learning',
                'Natural Language Processing',
                'Computer Vision & Image Processing',
                'Software Methods & Algorithms',
                'Computer Architecture & Hardware-Software Interfaces',
                'Blockchain & Distributed Ledger Technologies',
                'Cryptographic Protocols & Security',
                'Cloud Computing & Distributed Systems',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-amber-400 shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </VideoSection>

      {/* CTA */}
      <section className="py-24 md:py-36 px-6 border-t border-slate-200">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-5xl font-light text-slate-800 mb-6">
              Ready to work with{' '}
              <span className="italic text-amber-600">us</span>?
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
              Whether you&rsquo;re filing your first patent or building a global portfolio,
              we&rsquo;re here to help.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-slate-800 text-white text-sm font-mono tracking-wider uppercase hover:bg-slate-700 transition-colors"
            >
              Get in Touch
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
