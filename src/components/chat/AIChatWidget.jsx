import { useState, useEffect } from 'react'
import AIChatButton from './AIChatButton'
import AIChatWindow from './AIChatWindow'

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  // Auto-open demo preview if query string contains ?chat=open
  useEffect(() => {
    if (window.location.search.includes('chat=open')) {
      setIsOpen(true)
    }
  }, [])

  return (
    <>
      <AIChatButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <AIChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  )
}
