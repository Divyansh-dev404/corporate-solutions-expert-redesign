import { useEffect, useRef, useState } from 'react'
import SafeImage from './SafeImage'

const BENEFITS = [
  { title: 'Professional Support', desc: 'Dedicated CA & HR compliance managers assigned to your account.' },
  { title: 'Simple & Streamlined Process', desc: 'Single-window portal for monthly payroll runs & automatic payslips.' },
  { title: 'Reliable Zero-Penalty Guarantee', desc: 'Timely filing of PF, ESI, PT, LWF before government due dates.' },
  { title: 'Customer-Focused Approach', desc: 'Tailored solutions customized for your exact headcount and industry.' },
]

export default function FeaturedService() {
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
    <section ref={ref} className="py-20 lg:py-28 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Visual Business Photo + Floating Glass SaaS Overlay */}
          <div className={`lg:col-span-6 ${visible ? 'reveal-left in' : 'reveal-left'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <SafeImage
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
                alt="Corporate Solutions Payroll & Compliance Audit Session"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent" />

              {/* Floating Live Payroll Audit Card */}
              <div className="absolute bottom-6 left-6 right-6 glass-dark p-5 rounded-2xl border border-white/20 text-white shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Payroll & Compliance Engine</span>
                  <span className="text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    Audited Oct 2026
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                    <p className="text-xs text-slate-300">PF & ESI Filing</p>
                    <p className="text-sm font-black text-white mt-0.5">100% On-Time</p>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                    <p className="text-xs text-slate-300">Statutory Tax</p>
                    <p className="text-sm font-black text-emerald-400 mt-0.5">Zero Penalty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Content */}
          <div className={`lg:col-span-6 space-y-6 ${visible ? 'reveal-right in' : 'reveal-right'}`}>
            <span className="badge">Featured Highlight</span>

            <h2 className="section-title text-slate-900">
              Professional Solutions<br />
              <span className="gradient-text">Designed for You</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Managing payroll and multi-state statutory compliance doesn't have to be stressful. 
              Our enterprise solution combines expert human guidance with precision automation.
            </p>

            {/* Benefits Checklist */}
            <div className="space-y-4 pt-2">
              {BENEFITS.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-3.5 rounded-2xl bg-surface border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="btn-primary shadow-lg shadow-blue-600/20"
              >
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
