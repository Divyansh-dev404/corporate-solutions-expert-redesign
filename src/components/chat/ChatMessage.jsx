export default function ChatMessage({ message }) {
  const isAI = message.sender === 'ai'

  return (
    <div className={`flex gap-3 text-sm ${isAI ? 'justify-start' : 'justify-end'} animate-fade-in`}>
      {/* AI Avatar */}
      {isAI && (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-700 to-cyan-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
      )}

      {/* Bubble Container */}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed shadow-sm ${
          isAI
            ? 'bg-slate-100 text-slate-800 rounded-tl-sm border border-slate-200/80'
            : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-tr-sm'
        }`}
      >
        <p className="whitespace-pre-line text-xs sm:text-sm font-normal">
          {message.text}
        </p>
        <span
          className={`text-[10px] block mt-1 ${
            isAI ? 'text-slate-400' : 'text-blue-200 text-right'
          }`}
        >
          {message.time || 'Just now'}
        </span>
      </div>
    </div>
  )
}
