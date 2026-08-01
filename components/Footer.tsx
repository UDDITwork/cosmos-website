import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-14">
          <div>
            <Link href="/" className="font-display text-2xl text-white">
              Cosmos <span className="italic text-amber-400">IP</span>
            </Link>
            <p className="mt-3 text-slate-500 text-sm max-w-xs leading-relaxed">
              Exceptional patent drafting and prosecution services
              for the technologies shaping the future.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-4">
                Navigate
              </p>
              <div className="flex flex-col gap-2.5">
                <a href="/#services" className="text-sm text-slate-400 hover:text-white transition-colors">Services</a>
                <Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link>
                <a href="/#approach" className="text-sm text-slate-400 hover:text-white transition-colors">Approach</a>
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-4">
                Contact
              </p>
              <div className="flex flex-col gap-2.5">
                <a href="mailto:contact@cosmosip.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  contact@cosmosip.com
                </a>
                <a href="/#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Get Started</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-wider text-slate-600 uppercase">
            &copy; 2025 Cosmos IP. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-wider text-slate-700 uppercase">
            Patent Drafting &amp; Prosecution
          </p>
        </div>
      </div>
    </footer>
  )
}
