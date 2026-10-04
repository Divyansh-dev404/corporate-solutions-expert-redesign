export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer-dark border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight leading-none block">
                  Corporate Solutions
                </span>
                <span className="text-xs font-semibold text-blue-400 leading-none block tracking-wider uppercase mt-0.5">
                  Expert
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Corporate Solutions Expert is a premier HR, payroll processing, statutory compliance, and corporate staffing advisory firm based in Mumbai, India.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>📍 Head Office: Mumbai, Maharashtra, India</p>
              <p>📞 Phone: +91 98765 43210</p>
              <p>✉️ Email: info@corporatesolutionsexpert.com</p>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="footer-link">HR Operations</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="footer-link">Payroll Processing</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="footer-link">Statutory Compliance</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="footer-link">Contract Staffing</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="footer-link">Executive Search</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="footer-link">Business Consulting</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" onClick={(e) => scrollTo(e, 'home')} className="footer-link">Home</a></li>
              <li><a href="#about" onClick={(e) => scrollTo(e, 'about')} className="footer-link">About Us</a></li>
              <li><a href="#why-us" onClick={(e) => scrollTo(e, 'why-us')} className="footer-link">Why Choose Us</a></li>
              <li><a href="#process" onClick={(e) => scrollTo(e, 'process')} className="footer-link">How It Works</a></li>
              <li><a href="#showcase" onClick={(e) => scrollTo(e, 'showcase')} className="footer-link">Work Showcase</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Business Hours & Badges */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Business Hours</h4>
            <div className="text-xs text-slate-400 space-y-1.5">
              <p className="flex justify-between"><span className="text-slate-300">Mon - Fri:</span> <span>9:00 AM - 6:00 PM IST</span></p>
              <p className="flex justify-between"><span className="text-slate-300">Saturday:</span> <span>9:00 AM - 2:00 PM IST</span></p>
              <p className="flex justify-between"><span className="text-slate-300">Sunday:</span> <span className="text-amber-400">Closed</span></p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] font-bold text-slate-400 block mb-2 uppercase tracking-wider">Certifications</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-semibold bg-white/5 border border-white/10 text-slate-300 px-2 py-0.5 rounded">ISO 9001:2026</span>
                <span className="text-[10px] font-semibold bg-white/5 border border-white/10 text-slate-300 px-2 py-0.5 rounded">100% PF Compliant</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Corporate Solutions Expert. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="hover:text-slate-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
