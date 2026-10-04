import { useRef, useEffect, useState } from 'react'
import SafeImage from './SafeImage'

const HIGHLIGHTS = [
  {
    title: 'Trusted Corporate Partner Since 2014',
    desc: 'Over 10 years of continuous service delivering HR, payroll, and compliance excellence.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Zero Penalty Track Record',
    desc: '100% compliance guarantee with flawless government filings across all states.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Pan-India Multi-State Coverage',
    desc: 'Serving businesses in 12+ major Indian cities across 20+ key industry sectors.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

export default function About() {
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
    <section id="about" ref={ref} className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column — Team Image & Floating Badge */}
          <div className={`lg:col-span-6 ${visible ? 'reveal-left in' : 'reveal-left'}`}>
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white group">
              <SafeImage
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                alt="Corporate Solutions Expert business consultants shaking hands with client"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />

              {/* Floating Achievement Card */}
              <div className="absolute bottom-6 left-6 right-6 glass p-5 rounded-2xl border border-white/60 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Corporate Advisory</p>
                  <p className="text-lg font-black text-slate-900 mt-0.5">Mumbai, India</p>
                  <p className="text-xs text-slate-500">Established 2014 • Headquartered in MH</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-md">
                  10+ Yrs
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Readable Text & Highlights */}
          <div className={`lg:col-span-6 space-y-6 ${visible ? 'reveal-right in' : 'reveal-right'}`}>
            <span className="badge">About Corporate Solutions Expert</span>

            <h2 className="section-title text-slate-900">
              Your Trusted Partner in<br />
              <span className="gradient-text">Business Excellence</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Corporate Solutions Expert is a premier HR and management consulting advisory firm. 
              We assist startups, mid-market companies, and multinational enterprises in managing workforce 
              complexity, enforcing statutory compliance, and optimizing HR operations.
            </p>

            {/* Key highlights bullet points */}
            <div className="space-y-4 pt-2">
              {HIGHLIGHTS.map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="btn-primary"
              >
                Talk to Our Experts
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
