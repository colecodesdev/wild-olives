import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ReservationModal from '../sections/ReservationModal'
import { ReservationProvider, useReservation } from '../../contexts/ReservationContext'

function LayoutShell() {
  const { pathname } = useLocation()
  const { isOpen, close } = useReservation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      <Navbar />
      <main className={isHome ? '' : 'pt-20'}>
        <Outlet />
      </main>
      {isHome ? null : <Footer />}
      <ReservationModal isOpen={isOpen} onClose={close} />
    </>
  )
}

export default function MainLayout() {
  return (
    <ReservationProvider>
      <LayoutShell />
    </ReservationProvider>
  )
}