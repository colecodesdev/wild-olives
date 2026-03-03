import { NavLink } from 'react-router-dom'
import logo from '../../assets/logos/logo.png'

export default function Navbar() {

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-black font-semibold border-b-2 border-black pb-1'
      : 'text-black hover:text-gray-600'

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Wild Olives Logo"
              className="h-14 w-auto"
            />
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 uppercase font-semibold tracking-widest text-sm">
            <NavLink to="/menu" className={linkClass}>Menu</NavLink>
            <NavLink to="/reservations" className={linkClass}>Reservations</NavLink>
            <NavLink to="/events" className={linkClass}>Events</NavLink>
            <NavLink to="/our-story" className={linkClass}>Our Story</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            <NavLink to="/careers" className={linkClass}>Careers</NavLink>
          </div>

        </div>
      </div>
    </nav>
  )
}