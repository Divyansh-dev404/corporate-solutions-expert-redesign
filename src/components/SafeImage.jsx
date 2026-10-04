import { useState } from 'react'

export default function SafeImage({ src, alt, className, style, width, height, loading = 'lazy' }) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-brand-900 via-brand-800 to-blue-900 flex items-center justify-center p-6 text-white text-center ${className || ''}`}
        style={style}
      >
        <div className="space-y-2">
          <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <p className="text-xs font-semibold text-blue-200">{alt || 'Corporate Solutions'}</p>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt || 'Corporate Solutions Expert'}
      className={className}
      style={style}
      width={width}
      height={height}
      loading={loading}
      onError={() => setError(true)}
    />
  )
}
