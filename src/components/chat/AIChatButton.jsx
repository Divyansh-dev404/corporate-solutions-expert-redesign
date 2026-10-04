import { useState } from 'react'

export default function AIChatButton({ isOpen, onClick }) {
  const [showTooltip, setShowTooltip] = useState(true)

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5">
      {/* Tooltip badge */}
      {showTooltip && !isOpen && (
        <div className="hidden sm:flex items-center gap-2 bg-brand-950/95 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-xl border border-white/15 animate-bounce">
          <span>👋 Need help? Ask AI</span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setShowTooltip(false)
            }}
            className="text-slate-400 hover:text-white font-bold ml-0.5 text-xs"
            aria-label="Dismiss tooltip"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main floating button with AI Assistant label */}
      <button
        onClick={onClick}
        className={`px-4 py-3 rounded-full bg-gradient-to-r from-brand-950 via-blue-900 to-blue-600 text-white flex items-center gap-2.5 shadow-2xl shadow-blue-900/50 border border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 relative group cursor-pointer ${
          !isOpen ? 'pulse-live' : ''
        }`}
        aria-label="Corporate AI Assistant"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
          {isOpen ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          )}
        </div>

        <span className="text-xs font-extrabold tracking-wide text-white pr-1">
          {isOpen ? 'Close AI' : 'AI Assistant'}
        </span>
      </button>
    </div>
  )
}
