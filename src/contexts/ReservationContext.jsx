import { createContext, useContext, useState } from 'react'

const ReservationContext = createContext(null)

export function ReservationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  return (
    <ReservationContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ReservationContext.Provider>
  )
}

export function useReservation() {
  const ctx = useContext(ReservationContext)
  if (!ctx) throw new Error('useReservation must be used within ReservationProvider')
  return ctx
}
