const ACTIONS = [
  'Get a Quote',
  'Contact Us',
  'Our Services',
  'Talk to Consultant',
  'How does it work?',
]

export default function QuickActions({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-1.5 pt-2 pb-1">
      {ACTIONS.map((action) => (
        <button
          key={action}
          onClick={() => onSelect(action)}
          className="text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-xs cursor-pointer"
        >
          • {action}
        </button>
      ))}
    </div>
  )
}
