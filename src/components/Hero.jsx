import HeroDashboard from './HeroDashboard'

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="hero-section py-20 lg:py-28 pt-28 lg:pt-36 flex items-center"
    >
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column — Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-live" />
              Corporate Solutions • Professional Services
            </div>

            {/* Headline */}
            <h1 className="display-text text-white">
              Smart Solutions.<br />
              <span className="gradient-text-light">Built Around</span><br />
              Your Business.
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              End-to-end HR operations, payroll processing, statutory compliance, and workforce staffing — 
              delivered with zero-penalty guarantees and technology-driven efficiency across India.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href="#services"
                onClick={(e) => scrollTo(e, 'services')}
                className="btn-primary w-full sm:w-auto text-center justify-center !py-3.5 !px-8 text-base shadow-lg shadow-blue-600/30"
              >
                Get Started
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, 'contact')}
                className="btn-outline-white w-full sm:w-auto text-center justify-center !py-3.5 !px-8 text-base"
              >
                Contact Us
              </a>
            </div>

            {/* Trust statement & Badges */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <div className="flex -space-x-2">
                {['#2563eb', '#0284c7', '#0d9488', '#16a34a', '#7c3aed'].map((bg, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-brand-900 flex items-center justify-center text-white font-bold text-[11px]"
                    style={{ backgroundColor: bg }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="font-bold text-white text-sm">500+ Businesses Trust Us</p>
                <p className="text-slate-400">Professional • Reliable • Client Focused</p>
              </div>
            </div>
          </div>

          {/* Right Column — Professional Visual + Floating SaaS Cards */}
          <div className="lg:col-span-5">
            <HeroDashboard />
          </div>

        </div>
      </div>
    </section>
  )
}
