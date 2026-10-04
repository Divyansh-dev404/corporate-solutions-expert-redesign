import { useRef, useEffect, useState } from 'react'
import SafeImage from './SafeImage'

const REASONS = [
  {
    title: 'Professional Expertise',
    desc: 'Senior HR leaders, chartered accountants, and legal advisors with deep domain experience.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Reliable Service',
    desc: 'Payroll processed on time every single month with 100% financial and tax accuracy.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: 'Fast Response',
    desc: 'Dedicated single-point manager ensuring all client queries are resolved within 24 hours.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Transparent Process',
    desc: 'No hidden fees or unexpected charges. Clear service scope and predictable fixed pricing.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Customer Support',
    desc: 'Personalized assistance for your HR team and employees through direct phone & email support.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Business-Focused Solutions',
    desc: 'Scalable frameworks that adapt as your headcount grows from 10 to 10,000+ employees.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-us" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${visible ? 'reveal in' : 'reveal'}`}>
          <span className="badge mb-4">Why Us</span>
          <h2 className="section-title text-slate-900 mb-4">
            Why Businesses<br />
            <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We combine deep regulatory expertise, technology efficiency, and client dedication 
            to deliver seamless corporate services.
          </p>
        </div>

        {/* Layout: Grid of 6 Feature Cards + Side Professional Photo */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Feature Cards Grid (8 cols) */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {REASONS.map((reason, i) => (
              <div
                key={reason.title}
                className={`why-card ${visible ? 'reveal in' : 'reveal'}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">{reason.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Side Image (4 cols) */}
          <div className={`lg:col-span-4 ${visible ? 'reveal-right in' : 'reveal-right'}`}>
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-brand-950 aspect-[3/4] group">
              <SafeImage
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Corporate Solutions Advisor in client strategy session"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-widest">Client First Policy</span>
                <p className="text-base font-black leading-snug">99.8% Client Retention Across All Sectors</p>
                <p className="text-xs text-slate-300">Dedicated HR managers & CA advisors</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
