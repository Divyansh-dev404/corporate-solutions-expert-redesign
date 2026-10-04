export const SERVICES_DATA = [
  {
    id: 'hr-management',
    name: 'HR Management',
    desc: 'End-to-end HR operations, employee SOPs, policy creation, performance tracking, and onboarding lifecycle.',
    badge: 'Core HR',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'payroll-processing',
    name: 'Payroll Processing',
    desc: '100% accurate salary calculations, TDS deductions, reimbursements, arrears, payslip generation & direct bank transfer.',
    badge: 'Popular',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    id: 'statutory-compliance',
    name: 'Statutory Compliance',
    desc: 'PF, ESI, Professional Tax (PT), Labour Welfare Fund (LWF) monthly filings and audit-ready documentation.',
    badge: 'Zero Risk',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: 'contract-staffing',
    name: 'Contract Staffing',
    desc: 'On-demand temporary and third-party staffing solutions to scale your workforce quickly without headcount burden.',
    badge: 'Flexible',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
  {
    id: 'executive-search',
    name: 'Executive Search',
    desc: 'Targeted headhunting & talent acquisition for C-suite, VP, and specialized technical leadership positions.',
    badge: 'Leadership',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: 'business-consulting',
    name: 'Business Consulting',
    desc: 'Strategic workforce restructuring, cost optimization, expansion advisory, and productivity management.',
    badge: 'Strategy',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: 'labour-law-advisory',
    name: 'Labour Law Advisory',
    desc: 'Expert legal consultation on Industrial Disputes Act, Factories Act, Standing Orders, and government inspection support.',
    badge: 'Legal',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 'hrms-implementation',
    name: 'HRMS & Cloud Systems',
    desc: 'Selection, setup, and integration of modern cloud HR portal, biometric attendance, and self-service portals.',
    badge: 'Tech Enabled',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'pan-india-coverage',
    name: 'Pan-India Coverage',
    desc: 'Multistate statutory compliance management with localized support across all Indian union territories & states.',
    badge: 'National',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

export default function ServiceCard({ service }) {
  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="service-card group">
      <div className="flex items-center justify-between mb-4">
        <div className="service-icon">
          {service.icon}
        </div>
        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 uppercase tracking-wider group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
          {service.badge}
        </span>
      </div>

      <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
        {service.name}
      </h3>

      <p className="text-sm text-slate-600 leading-relaxed mb-6">
        {service.desc}
      </p>

      <a
        href="#contact"
        onClick={scrollToContact}
        className="service-arrow"
      >
        <span>Explore Service</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  )
}
