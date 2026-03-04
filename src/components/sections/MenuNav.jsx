import { NavLink } from 'react-router-dom'

export default function MenuNav() {

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-black font-semibold border-b-2 border-black pb-1'
      : 'text-black hover:text-gray-600'

  return (
    <div className="w-full flex items-center justify-center">
      <nav className="flex items-center space-x-10 uppercase font-medium tracking-widest text-sm">

        <NavLink to="/menu/dinner" className={linkClass}>
          Dinner
        </NavLink>

        <NavLink to="/menu/cocktails" className={linkClass}>
          Cocktails
        </NavLink>

        <NavLink to="/menu/wine" className={linkClass}>
          Wine
        </NavLink>

        <NavLink to="/menu/happy-hour" className={linkClass}>
          Happy Hour
        </NavLink>

        <NavLink to="/menu/brunch" className={linkClass}>
          Brunch
        </NavLink>

        <NavLink to="/menu/dessert" className={linkClass}>
          Dessert
        </NavLink>

      </nav>
    </div>
  )
}