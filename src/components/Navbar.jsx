import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Process', href: '#process' },
  { name: 'Showcase', href: '#showcase' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`navbar ${scrolled ? 'navbar-solid' : 'navbar-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <span className={`text-lg font-extrabold tracking-tight leading-none block ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                Corporate Solutions
              </span>
              <span className="text-xs font-semibold text-blue-500 leading-none block tracking-wider uppercase mt-0.5">
                Expert
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`nav-link ${scrolled ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' : 'nav-link-white'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
            >
              Get a Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            {/* Hamburger button */}
            <button
              className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-xl transition-colors ${
                scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className={`ham-line ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`ham-line ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`ham-line ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`mobile-menu lg:hidden ${menuOpen ? 'open' : ''}`}>
          <div className={`py-4 px-2 flex flex-col gap-1.5 border-t mt-3 rounded-2xl ${
            scrolled ? 'bg-white border-slate-100 shadow-xl' : 'bg-brand-900/95 backdrop-blur-xl border-white/10 text-white'
          }`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                  scrolled
                    ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="mt-2 btn-primary justify-center text-center w-full"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
