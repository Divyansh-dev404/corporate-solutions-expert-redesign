// Company Knowledge Base & Demo AI Response Engine
export const COMPANY_KNOWLEDGE = {
  name: 'Corporate Solutions Expert',
  established: 2014,
  location: 'Mumbai, Maharashtra, India',
  phone: '+91 98765 43210',
  email: 'info@corporatesolutionsexpert.com',
  hours: 'Mon – Fri: 9:00 AM – 6:00 PM, Sat: 9:00 AM – 2:00 PM IST',
  certifications: ['ISO 9001:2026 Certified', '100% Statutory Compliant'],
  stats: {
    clients: '500+ Corporate Clients across India',
    experience: '10+ Years of Corporate Advisory Excellence',
    satisfaction: '99.8% Client Retention Rate with Zero Government Penalties',
  },
  services: [
    { name: 'HR Management', desc: 'Complete HR operations, SOPs, policy creation, performance management & onboarding lifecycle.' },
    { name: 'Payroll Processing', desc: '100% accurate salary calculations, TDS deductions, reimbursements, arrears & payslips.' },
    { name: 'Statutory Compliance', desc: 'Provident Fund (PF), ESI, Professional Tax (PT), Labour Welfare Fund (LWF) monthly filings.' },
    { name: 'Contract Staffing', desc: 'Flexible third-party staffing solutions to scale your headcount quickly without legal liabilities.' },
    { name: 'Executive Search', desc: 'Headhunting & talent acquisition for C-suite, VP, and technical leadership roles.' },
    { name: 'Business Consulting', desc: 'Strategic workforce planning, organizational structure & process optimization.' },
    { name: 'Labour Law Advisory', desc: 'Legal consultation on Factories Act, Standing Orders, and government inspection defense.' },
    { name: 'HRMS Cloud Systems', desc: 'Biometric attendance sync, self-service portals & digital leave tracking.' },
  ],
  processSteps: [
    '01. Understand Requirement',
    '02. Plan Solution',
    '03. Execute Setup',
    '04. Deliver Monthly Payroll & Filings',
    '05. Ongoing Support & Advisory',
  ],
}

export function getAIResponse(userText) {
  const query = userText.toLowerCase().trim()

  // 1. Buying intent / Contact / Quote triggers
  if (
    query.includes('quote') ||
    query.includes('price') ||
    query.includes('cost') ||
    query.includes('pricing') ||
    query.includes('consultant') ||
    query.includes('talk to human') ||
    query.includes('contact team') ||
    query.includes('get in touch') ||
    query.includes('call me')
  ) {
    return {
      type: 'lead_form',
      text: "I'd be happy to help arrange a consultation for your business! Would you like our corporate advisory team to contact you?",
    }
  }

  // 2. Services inquiry
  if (query.includes('service') || query.includes('offer') || query.includes('what do you do') || query.includes('capabilities')) {
    return {
      type: 'text',
      text: `We offer end-to-end corporate solutions including:\n\n• **HR Management** & Policy Creation\n• **Payroll Processing** & TDS Management\n• **Statutory Compliance** (PF, ESI, PT, LWF)\n• **Contract Staffing** & Workforce Scaling\n• **Executive Search** & Leadership Recruitment\n• **Labour Law Advisory** & HRMS Portal Implementation.\n\nWhich service would you like to know more about?`,
    }
  }

  // 3. Specific Service Lookups
  if (query.includes('payroll') || query.includes('salary') || query.includes('tds')) {
    return {
      type: 'text',
      text: `Our **Payroll Processing** service guarantees 100% financial accuracy, timely salary disbursements, TDS tax deductions, reimbursement processing, and automated digital payslip delivery for your employees.`,
    }
  }

  if (query.includes('compliance') || query.includes('pf') || query.includes('esi') || query.includes('pt') || query.includes('tax')) {
    return {
      type: 'text',
      text: `Our **Statutory Compliance** advisory handles monthly Provident Fund (PF), ESI, Professional Tax (PT), and Labour Welfare Fund (LWF) government filings across all Indian states with a zero-penalty track record.`,
    }
  }

  if (query.includes('staffing') || query.includes('recruitment') || query.includes('hiring') || query.includes('executive')) {
    return {
      type: 'text',
      text: `We provide **Contract Staffing** for flexible headcount scaling and specialized **Executive Search** for headhunting C-suite and leadership talent tailored to your industry.`,
    }
  }

  // 4. Process / How it works
  if (query.includes('process') || query.includes('how it works') || query.includes('steps') || query.includes('onboard')) {
    return {
      type: 'text',
      text: `Getting started is simple with our 5-step process:\n\n1. **Understand Requirement** — Free consultation\n2. **Plan Solution** — Customized blueprint & scope\n3. **Execute Setup** — System & records setup\n4. **Deliver** — Monthly payroll & statutory filings\n5. **Ongoing Support** — Dedicated HR manager`,
    }
  }

  // 5. Contact info / Location / Hours
  if (query.includes('address') || query.includes('location') || query.includes('office') || query.includes('mumbai') || query.includes('where')) {
    return {
      type: 'text',
      text: `Our head office is located in **Mumbai, Maharashtra, India**. We provide pan-India corporate advisory operations across all major Indian states.`,
    }
  }

  if (query.includes('phone') || query.includes('email') || query.includes('number') || query.includes('contact')) {
    return {
      type: 'text',
      text: `You can reach us at:\n\n📞 **Phone:** ${COMPANY_KNOWLEDGE.phone}\n✉️ **Email:** ${COMPANY_KNOWLEDGE.email}\n🕒 **Hours:** ${COMPANY_KNOWLEDGE.hours}`,
    }
  }

  if (query.includes('hours') || query.includes('timing') || query.includes('open')) {
    return {
      type: 'text',
      text: `Our corporate office hours are:\n**Monday – Friday:** 9:00 AM – 6:00 PM IST\n**Saturday:** 9:00 AM – 2:00 PM IST\n**Sunday:** Closed`,
    }
  }

  if (query.includes('experience') || query.includes('about') || query.includes('year') || query.includes('who are you')) {
    return {
      type: 'text',
      text: `**Corporate Solutions Expert** was established in 2014 in Mumbai. For over 10 years, we have served **500+ corporate clients** across 20+ industries with an ISO 9001:2026 quality certification and 99.8% client retention rate.`,
    }
  }

  // Fallback
  return {
    type: 'fallback',
    text: "I'm not completely sure about that. Let me connect you with our team of corporate advisors!",
  }
}
