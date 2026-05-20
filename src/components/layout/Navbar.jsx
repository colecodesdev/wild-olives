import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logos/logo.png'
import ButtonLink from '../ui/ButtonLink'
import { MENU_LINKS_MOBILE } from '../../data/menuLinks'
import useScrolledPast from '../../hooks/useScrolledPast'
import { useReservation } from '../../contexts/ReservationContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { open: openReservation } = useReservation()

  const openRes = () => {
    openReservation()
    setIsOpen(false)
    setIsMenuOpen(false)
  }
  const location = useLocation()
  const isMenuRoute = location.pathname === '/menu' || location.pathname.startsWith('/menu/')
  const isHome = location.pathname === '/'
  const isScrolled = useScrolledPast(80)
  const isTransparent = isHome && !isScrolled && !isOpen

  useEffect(() => {
    if (!isOpen) return
    setIsMenuOpen(isMenuRoute)
  }, [isOpen, isMenuRoute])

  useEffect(() => {
    if (!isOpen) return
    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
    }
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false)
    setIsMenuOpen(false)
  }

  const desktopNavLinkClass = ({ isActive }) => {
    if (isTransparent) {
      return isActive
        ? 'text-white font-semibold border-b border-white pt-1.5 pb-1'
        : 'text-white hover:text-white/70 border-b border-transparent pt-1.5 pb-1 transition-colors duration-150'
    }
    return isActive
      ? 'text-black font-semibold border-b border-black pt-1.5 pb-1'
      : 'text-black hover:text-gray-500 border-b border-transparent pt-1.5 pb-1 transition-colors duration-150'
  }

  const navBgClass = isTransparent
    ? 'bg-transparent border-transparent'
    : `bg-white/85 border-b border-black/10${isOpen ? '' : ' backdrop-blur-md'}`

  const hamburgerColorClass = isTransparent ? 'bg-white' : 'bg-black'
  const logoFilterClass = isTransparent ? 'brightness-0 invert' : ''

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBgClass}`}>
      <div className="w-full mx-auto px-6 md:px-28">
        <div className="relative flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink to="/" className="flex items-center shrink-0" onClick={closeMenu}>
            <img
              src={logo}
              alt="Wild Olives Logo"
              className={`h-12 w-auto transition-[filter] duration-300 ${logoFilterClass}`}
            />
          </NavLink>

          {/* Desktop links + CTA */}
          <div className={`hidden md:flex items-center gap-10 uppercase font-medium tracking-widest text-sm transition-colors duration-300`}>
            <NavLink to="/menu" className={desktopNavLinkClass}>Menu</NavLink>
            <NavLink to="/events" className={desktopNavLinkClass}>Events</NavLink>
            <NavLink to="/contact" className={desktopNavLinkClass}>Contact</NavLink>
            <div className="pl-4">
              <ButtonLink onClick={openRes} variant={isTransparent ? 'outline' : 'outline-dark'}>
                Make a Reservation
              </ButtonLink>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-12 w-12"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <div className="flex flex-col justify-center gap-1.5">
              <span className={`block h-0.5 w-6 transition-all duration-200 ${hamburgerColorClass} ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 transition-all duration-200 ${hamburgerColorClass} ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-6 transition-all duration-200 ${hamburgerColorClass} ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile overlay — always in DOM so opacity/translate can animate */}
        <div
          className={`md:hidden fixed inset-0 z-[60] bg-white flex flex-col transition-all duration-200 ease-out ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          {/* Header row */}
          <div className="h-20 px-6 flex items-center justify-between border-b shrink-0">
            <NavLink to="/" className="flex items-center" onClick={closeMenu}>
              <img src={logo} alt="Wild Olives Logo" className="h-12 w-auto" />
            </NavLink>
            <button
              type="button"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-150"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          {/* Primary nav links — left-aligned */}
          <div className="px-8 pt-8 pb-4 flex flex-col uppercase font-medium tracking-widest">
            {/* Menu accordion */}
            <div>
              <button
                type="button"
                className="flex items-center justify-between w-full py-4 text-lg uppercase text-black active:text-gray-500 transition-colors"
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu pages"
              >
                <span>Menu</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Submenu — animated, indented with left rule */}
              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="ml-2 pl-4 border-l border-black/20 flex flex-col gap-0.5 pb-3">
                  {MENU_LINKS_MOBILE.map(({ path, label }) => (
                    <NavLink
                      key={path}
                      to={path}
                      className={({ isActive }) =>
                        `block py-2 text-sm tracking-widest ${isActive ? 'text-black font-semibold' : 'text-black/50 hover:text-black transition-colors duration-150'}`
                      }
                      onClick={closeMenu}
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Events */}
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `block py-4 text-lg ${isActive ? 'text-black font-semibold' : 'text-black'}`
              }
              onClick={closeMenu}
            >
              Events
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-4 text-lg ${isActive ? 'text-black font-semibold' : 'text-black'}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>

          {/* Secondary content + CTA pushed to bottom */}
          <div className="mt-auto px-8 pb-10 border-t pt-8 flex flex-col gap-6">
            {/* Hours + address */}
            <div className="flex flex-col gap-1 uppercase tracking-widest text-xs">
              <div className="font-semibold text-black mb-1">Open Daily &nbsp;·&nbsp; 2 PM – 10 PM</div>
              <div className="text-black/50">4771 E County Hwy 30A, Unit C 103</div>
              <div className="text-black/50">Santa Rosa Beach, FL 32459</div>
              <div className="text-black mt-1">(850) 399 – 5411</div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/wildoliveswcb"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="h-9 w-9 rounded-full bg-black flex items-center justify-center hover:bg-gray-700 active:scale-95 transition-all duration-150"
              >
                <span className="text-white text-sm font-semibold">X</span>
              </a>
              <a
                href="https://instagram.com/wildolives30a"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-black flex items-center justify-center hover:bg-gray-700 active:scale-95 transition-all duration-150"
              >
                <i className="fa-brands fa-instagram text-white text-sm" />
              </a>
              <a
                href="https://facebook.com/wildolives30a"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-full bg-black flex items-center justify-center hover:bg-gray-700 active:scale-95 transition-all duration-150"
              >
                <i className="fa-brands fa-facebook-f text-white text-sm" />
              </a>
            </div>

            {/* Reservation CTA */}
            <ButtonLink onClick={openRes}>
              Make a Reservation
            </ButtonLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
