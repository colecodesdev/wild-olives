import { useEffect, useRef } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ReservationModal from '../sections/ReservationModal'
import { ReservationProvider, useReservation } from '../../contexts/ReservationContext'

function LayoutShell() {
  const { pathname } = useLocation()
  const { isOpen, close } = useReservation()
  const prevPathnameRef = useRef(pathname)

  useEffect(() => {
    const prev = prevPathnameRef.current
    prevPathnameRef.current = pathname

    // When switching between menu sub-pages, scroll to the top of the menu
    // (sub-nav docked under the navbar) instead of the page hero.
    const isMenuSwitch = prev.startsWith('/menu/') && pathname.startsWith('/menu/')
    if (isMenuSwitch) {
      const anchor = document.getElementById('menu-subnav-anchor')
      if (anchor) {
        // Anchor is non-sticky, so its rect reflects true document position.
        const navbarHeight = 80
        const top = anchor.getBoundingClientRect().top + window.scrollY - navbarHeight
        window.scrollTo({ top, behavior: 'smooth' })
        return
      }
    }

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