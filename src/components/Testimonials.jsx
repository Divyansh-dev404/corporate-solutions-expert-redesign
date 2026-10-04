import { useRef, useEffect, useState } from 'react'
import SafeImage from './SafeImage'

const TESTIMONIALS = [
  {
    name: 'Rajesh Mehta',
    role: 'Vice President of HR, TechVenture India',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review:
      'Corporate Solutions Expert completely restructured our payroll & multi-state compliance. What used to consume 4 full days for our HR team is now done in hours with zero errors and flawless PF/ESI filings.',
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Executive Officer, RetailEdge Solutions',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review:
      'We operate across 6 different Indian states with complex statutory requirements. Their team handles every filing on time, giving us total peace of mind during government audits.',
  },
  {
    name: 'Suresh Nair',
    role: 'CFO, Meridian Industrial Manufacturing',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review:
      'Partnering with CSE was one of our best decisions. Fixed transparent pricing, dedicated single-point account manager, and absolute zero compliance penalties for 3 consecutive years.',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
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
    <section ref={ref} className="py-20 lg:py-28 bg-surface border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${visible ? 'reveal in' : 'reveal'}`}>
          <span className="badge mb-4">Client Feedback</span>
          <h2 className="section-title text-slate-900 mb-4">
            Trusted by Corporate<br />
            <span className="gradient-text">Leaders & HR Directors</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Here is what our enterprise clients say about working with Corporate Solutions Expert.
          </p>
          <div className="inline-block mt-3 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold">
            ⓘ Client Demo Placeholders — Replace with live client testimonials
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card ${visible ? 'reveal in' : 'reveal'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4">
                <StarRating count={t.rating} />
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                "{t.review}"
              </p>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 mt-auto">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
                  <SafeImage
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 leading-tight">{t.name}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-tight mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
