import { useRef, useEffect, useState } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="cta-section py-20 lg:py-28 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className={`space-y-6 ${visible ? 'reveal in' : 'reveal'}`}>
          <span className="badge badge-white">
            <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-live" />
            Ready to Transform Your HR Operations?
          </span>

          <h2 className="display-text text-white">
            Let's Build Something<br />
            <span className="gradient-text-light">Better Together.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Have a requirement? Talk to our corporate advisory team and discover how much faster, 
            cleaner, and penalty-free your HR & payroll operations can become.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="btn-white w-full sm:w-auto text-center justify-center !py-3.5 !px-8 text-base shadow-xl"
            >
              Get a Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="btn-outline-white w-full sm:w-auto text-center justify-center !py-3.5 !px-8 text-base"
            >
              Contact Us
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-4">
            No obligation consultation • Confidential • Direct advisory response within 24 hours
          </p>
        </div>

      </div>
    </section>
  )
}
