import { useRef, useEffect, useState } from 'react'
import ServiceCard, { SERVICES_DATA } from './ServiceCard'

export default function Services() {
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
    <section id="services" ref={ref} className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${visible ? 'reveal in' : 'reveal'}`}>
          <span className="badge mb-4">Core Solutions</span>
          <h2 className="section-title text-slate-900 mb-4">
            Everything You Need,<br />
            <span className="gradient-text">In One Place.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From HR operations to statutory compliance — we deliver expert solutions that 
            streamline your business and keep you fully compliant across all states.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, i) => (
            <div
              key={service.id}
              className={`${visible ? 'reveal in' : 'reveal'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
