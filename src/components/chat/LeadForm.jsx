import { useState } from 'react'

export default function LeadForm({ onSubmitSuccess }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', requirement: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if (onSubmitSuccess) {
      onSubmitSuccess(form)
    }
  }

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-center space-y-2 text-xs">
        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          ✓
        </div>
        <p className="font-bold text-slate-900">Request Received!</p>
        <p className="text-slate-600">
          Thanks! We've received your request. Our corporate advisory team will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl space-y-2.5 text-xs">
      <p className="font-bold text-slate-900 border-b border-slate-200 pb-1.5">
        Request Corporate Consultation
      </p>

      <div>
        <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">Your Name *</label>
        <input
          type="text"
          required
          placeholder="e.g. Rajesh Sharma"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">Phone *</label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">Email *</label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">Requirement</label>
        <input
          type="text"
          placeholder="e.g. Payroll for 50 employees"
          value={form.requirement}
          onChange={(e) => setForm({ ...form, requirement: e.target.value })}
          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm transition-colors text-xs flex items-center justify-center gap-1.5"
      >
        Submit Details
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </form>
  )
}
