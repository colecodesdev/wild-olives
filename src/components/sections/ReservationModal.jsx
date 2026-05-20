import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import OpenTableEmbed from './OpenTableEmbed'

const OPENTABLE_SRC =
  'https://www.opentable.com/restref/client/?rid=283405&restref=283405&lang=en-US'

export default function ReservationModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Reservation widget"
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 md:p-8 bg-black/70 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-sm shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close reservation widget"
          onClick={onClose}
          className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-10 h-10 w-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
        <div className="p-4 md:p-6">
          <OpenTableEmbed src={OPENTABLE_SRC} heightClass="h-[640px]" />
        </div>
      </div>
    </div>,
    document.body
  )
}
