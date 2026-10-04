import SafeImage from './SafeImage'

export default function HeroDashboard() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Background glow behind image */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-30 blur-2xl pointer-events-none" />

      {/* Main hero photo frame */}
      <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-blue-950/50 bg-brand-900 aspect-[4/3] sm:aspect-[16/11]">
        <SafeImage
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
          alt="Corporate Solutions Experts team collaborating in modern office"
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/30 to-transparent pointer-events-none" />

        {/* Floating Glass Widget 1 - Main Live KPI Dashboard */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass-dark p-4 sm:p-5 rounded-2xl border border-white/15 text-white shadow-xl float-a">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-live inline-block" />
              <p className="text-xs font-bold uppercase tracking-wider text-blue-200">Live Enterprise Hub</p>
            </div>
            <span className="text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              100% Compliant
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center mb-3">
            <div className="bg-white/5 rounded-xl p-2 border border-white/10">
              <p className="text-lg font-black text-white">500+</p>
              <p className="text-[10px] text-slate-300 font-medium">Clients</p>
            </div>
            <div className="bg-white/5 rounded-xl p-2 border border-white/10">
              <p className="text-lg font-black text-cyan-300">100%</p>
              <p className="text-[10px] text-slate-300 font-medium">Accuracy</p>
            </div>
            <div className="bg-white/5 rounded-xl p-2 border border-white/10">
              <p className="text-lg font-black text-emerald-400">99.8%</p>
              <p className="text-[10px] text-slate-300 font-medium">Retention</p>
            </div>
          </div>

          {/* Mini progress bar */}
          <div>
            <div className="flex justify-between text-[11px] text-slate-300 font-medium mb-1">
              <span>Payroll & Statutory Filing</span>
              <span className="text-cyan-300 font-bold">Oct 2026 Ready</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-[95%]" />
            </div>
          </div>
        </div>

        {/* Floating Glass Widget 2 - Top Right Compliance Badge */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 glass-dark p-3 rounded-xl border border-white/15 shadow-lg float-b flex items-center gap-3 max-w-[200px]">
          <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-cyan-300 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-white leading-tight">ISO 9001:2026</p>
            <p className="text-[10px] text-slate-300">Certified Audits</p>
          </div>
        </div>

        {/* Floating Glass Widget 3 - Top Left Floating Service Card */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 glass-dark p-3 rounded-xl border border-white/15 shadow-lg float-c flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-white leading-none">PF & ESI Filed</p>
            <p className="text-[10px] text-emerald-400 font-semibold mt-0.5">Zero Penalties</p>
          </div>
        </div>
      </div>
    </div>
  )
}
