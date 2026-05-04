import { NavLink } from 'react-router-dom'
import { navLinkClass } from '../../lib/navLinkClass'
import { MENU_LINKS_DESKTOP } from '../../data/menuLinks'

export default function MenuNav() {
  return (
    <div className="w-full flex items-center justify-center">
      <nav className="flex items-center space-x-10 uppercase font-medium tracking-widest text-sm">
        {MENU_LINKS_DESKTOP.map(({ path, label }) => (
          <NavLink key={path} to={path} className={navLinkClass}>
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}