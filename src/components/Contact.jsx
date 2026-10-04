import { useState } from 'react'

const CONTACT_INFO = [
  {
    title: 'Phone Contact',
    detail: '+91 98765 43210',
    sub: 'Mon – Sat: 9:00 AM – 6:00 PM IST',
    href: 'tel:+919876543210',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Email Address',
    detail: 'info@corporatesolutionsexpert.com',
    sub: 'Direct response within 24 hours',
    href: 'mailto:info@corporatesolutionsexpert.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: 'Head Office',
    detail: 'Mumbai, Maharashtra, India',
    sub: 'Pan-India Corporate Advisory Operations',
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'HR Management',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: 'HR Management', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge mb-4">Get In Touch</span>
          <h2 className="section-title text-slate-900 mb-4">
            Connect With Our<br />
            <span className="gradient-text">Corporate Advisors</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have a question regarding payroll, statutory compliance, or executive staffing? 
            Send us a message and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-brand-950 text-white space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-extrabold text-white">Contact Details</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Reach out to our experts directly or visit our corporate office in Mumbai.
              </p>

              <div className="space-y-5 pt-2">
                {CONTACT_INFO.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-bold text-white hover:text-cyan-300 transition-colors block mt-0.5">
                          {item.detail}
                        </a>
                      ) : (
                        <p className="text-sm font-bold text-white mt-0.5">{item.detail}</p>
                      )}
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Pan-India Service Network</span>
                <span className="text-emerald-400 font-bold">● Active 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div className="lg:col-span-7 bg-surface p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Thank You!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Your message has been received. A corporate advisor will get in touch with you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Request a Quote / Demo</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Service Interest *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-input"
                    >
                      <option value="HR Management">HR Management</option>
                      <option value="Payroll Processing">Payroll Processing</option>
                      <option value="Statutory Compliance">Statutory Compliance</option>
                      <option value="Contract Staffing">Contract Staffing</option>
                      <option value="Executive Search">Executive Search</option>
                      <option value="Business Consulting">Business Consulting</option>
                      <option value="Labour Law Advisory">Labour Law Advisory</option>
                      <option value="HRMS Systems">HRMS & Cloud Systems</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Requirements / Notes
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your company size, locations, or current HR requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full justify-center !py-3.5 text-base shadow-lg">
                  Submit Request
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
