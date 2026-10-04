import { useRef, useEffect, useState } from 'react'

const STEPS = [
  {
    step: '01',
    title: 'Understand Requirement',
    desc: 'Detailed consultation to analyze your headcount, legal structure, payroll cycles, and compliance obligations.',
  },
  {
    step: '02',
    title: 'Plan Solution',
    desc: 'Designing a tailored HR & statutory blueprint with clear timelines, SOPs, and transparent fixed pricing.',
  },
  {
    step: '03',
    title: 'Execute',
    desc: 'Our specialists configure your payroll system, verify employee records, and establish statutory registers.',
  },
  {
    step: '04',
    title: 'Deliver',
    desc: 'Timely payroll execution, monthly PF/ESI/TDS filings, payslip delivery, and management reporting.',
  },
  {
    step: '05',
    title: 'Ongoing Support',
    desc: 'Continuous statutory tracking, audit defense, legal updates, and a dedicated manager for daily assistance.',
  },
]

export default function Process() {
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
    <section id="process" ref={ref} className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${visible ? 'reveal in' : 'reveal'}`}>
          <span className="badge mb-4">Seamless Engagement</span>
          <h2 className="section-title text-slate-900 mb-4">
            Simple 5-Step<br />
            <span className="gradient-text">Execution Process</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We simplify HR & statutory management through a structured, zero-friction 5-step approach.
          </p>
        </div>

        {/* Process Cards Grid with Connecting Accent Bar */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-600 to-cyan-400 -translate-y-1/2 rounded-full pointer-events-none z-0 opacity-40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {STEPS.map((item, i) => (
              <div
                key={item.step}
                className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 ${
                  visible ? 'reveal in' : 'reveal'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center font-black text-lg shadow-md shadow-blue-500/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
