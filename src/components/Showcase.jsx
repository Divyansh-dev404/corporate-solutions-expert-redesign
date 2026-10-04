import { useState, useRef, useEffect } from 'react'
import SafeImage from './SafeImage'

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'HR Strategy & Organizational Structure',
    category: 'HR Advisory',
    image: 'https://images.unsplash.com/photo-1542744801-43245fbe7562?auto=format&fit=crop&w=800&q=80',
    desc: 'Designing scalable workforce planning, SOPs, and appraisal frameworks.',
  },
  {
    id: 2,
    title: 'Enterprise Payroll Analytics',
    category: 'Payroll Engine',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    desc: 'Automated salary reconciliation, TDS calculation & payslip distribution.',
  },
  {
    id: 3,
    title: 'Statutory Compliance Audit',
    category: 'Legal & Audits',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    desc: 'Comprehensive labor law registers, PF/ESI audit defense & zero-penalty track record.',
  },
  {
    id: 4,
    title: 'Contract Workforce Deployment',
    category: 'Staffing',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    desc: 'Rapid flexible staffing for industrial, retail, and technology sectors.',
  },
  {
    id: 5,
    title: 'Executive Leadership Search',
    category: 'Recruitment',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    desc: 'Headhunting senior VP & C-level corporate executives for key client roles.',
  },
  {
    id: 6,
    title: 'Cloud HRMS Portal Integration',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    desc: 'Biometric attendance sync, self-service portals & digital leave tracking.',
  },
]

export default function Showcase() {
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
    <section id="showcase" ref={ref} className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${visible ? 'reveal in' : 'reveal'}`}>
          <span className="badge mb-4">Work & Excellence</span>
          <h2 className="section-title text-slate-900 mb-4">
            Corporate Solutions<br />
            <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Explore how we help enterprises streamline HR operations, maintain statutory compliance, 
            and recruit high-performing leadership across India.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`showcase-item aspect-[4/3] ${visible ? 'reveal in' : 'reveal'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <SafeImage
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="showcase-overlay">
                <div className="text-white space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 bg-blue-950/60 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-cyan-400/30">
                    {item.category}
                  </span>
                  <h3 className="text-base font-extrabold text-white pt-1">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-normal">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
