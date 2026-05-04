import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logos/logo.png'
import ButtonLink from '../ui/ButtonLink'
import { navLinkClass } from '../../lib/navLinkClass'
import { MENU_LINKS_MOBILE } from '../../data/menuLinks'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isMenuRoute = location.pathname === '/menu' || location.pathname.startsWith('/menu/')

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

  const mobileLinkClass = ({ isActive }) =>
    isActive ? 'text-black font-semibold' : 'text-black'

  const closeMenu = () => {
    setIsOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="w-full mx-auto px-6 md:px-28">
        <div className="flex items-center justify-between h-28">
          <NavLink to="/" className="flex items-center" onClick={closeMenu}>
            <img src={logo} alt="Wild Olives Logo" className="h-16 w-auto" />
          </NavLink>

          <div className="hidden md:flex items-center space-x-10 uppercase font-medium tracking-widest text-sm">
            <NavLink to="/menu" className={navLinkClass}>Menu</NavLink>
            <NavLink to="/reservations" className={navLinkClass}>Reservations</NavLink>
            <NavLink to="/events" className={navLinkClass}>Events</NavLink>
            <NavLink to="/our-story" className={navLinkClass}>Our Story</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <div className="pl-8">
              <ButtonLink to="/closed">
                Order Online
              </ButtonLink>
            </div>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-12 w-12"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <div className="flex flex-col justify-center gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-black transition-transform duration-200 ${
                  isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-black transition-opacity duration-200 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-black transition-transform duration-200 ${
                  isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {isOpen ? (
          <div className="md:hidden fixed inset-0 z-[60] bg-white">
            <div className="h-28 px-6 flex items-center justify-between border-b">
              <NavLink to="/" className="flex items-center" onClick={closeMenu}>
                <img src={logo} alt="Wild Olives Logo" className="h-16 w-auto" />
              </NavLink>

              <button
                type="button"
                className="inline-flex items-center justify-center h-12 w-12"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>

            <div className="px-6 py-8">
              <div className="flex flex-col uppercase font-medium tracking-widest text-lg">
                <div className="py-4 text-center">
                  <button
                    type="button"
                    className="uppercase font-medium tracking-widest text-lg text-black"
                    onClick={() => setIsMenuOpen((v) => !v)}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu pages"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Menu
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMenuOpen ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>

                  {isMenuOpen ? (
                    <div className="mt-4 flex flex-col gap-3">
                      {MENU_LINKS_MOBILE.map(({ path, label }) => (
                        <NavLink
                          key={path}
                          to={path}
                          className={mobileLinkClass}
                          onClick={closeMenu}
                        >
                          <div className="text-center tracking-widest text-base">{label}</div>
                        </NavLink>
                      ))}
                    </div>
                  ) : null}
                </div>

                <NavLink to="/reservations" className={mobileLinkClass} onClick={closeMenu}>
                  <div className="py-4 text-center">Reservations</div>
                </NavLink>
                <NavLink to="/events" className={mobileLinkClass} onClick={closeMenu}>
                  <div className="py-4 text-center">Events</div>
                </NavLink>
                <NavLink to="/our-story" className={mobileLinkClass} onClick={closeMenu}>
                  <div className="py-4 text-center">Our Story</div>
                </NavLink>
                <NavLink to="/contact" className={mobileLinkClass} onClick={closeMenu}>
                  <div className="py-4 text-center">Contact</div>
                </NavLink>

                <div className="pt-8 flex justify-center">
                  <ButtonLink to="/closed" onClick={closeMenu}>
                    Order Online
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}