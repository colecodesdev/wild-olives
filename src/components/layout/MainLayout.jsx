import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      <Navbar />
      <main className={isHome ? '' : 'pt-28'}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}