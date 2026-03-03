import { NavLink } from 'react-router-dom'
import Divider from '../ui/Divider'

export default function Footer() {
  return (
    <footer className="bg-white py-20">
      <div className="w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Top Row: lines + social */}
          <div className="flex items-center justify-center gap-8">
            <Divider width="flex-1" className="border-black/60" />

            <div className="flex items-center gap-4">
              <a href="https://x.com/wildoliveswcb" target="_blank" rel="noreferrer">
                <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-600 transition-colors duration-200">
                  <span className="text-white text-lg font-semibold">X</span>
                </div>
              </a>

              <a href="https://instagram.com/wildolives30a" target="_blank" rel="noreferrer">
                <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-600 transition-colors duration-200">
                  <i className="fa-brands fa-instagram text-white text-lg" />
                </div>
              </a>

              <a href="https://facebook.com/wildolives30a" target="_blank" rel="noreferrer">
                <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-600 transition-colors duration-200">
                  <i className="fa-brands fa-facebook-f text-white text-lg" />
                </div>
              </a>
            </div>

            <Divider width="flex-1" className="border-black/60" />
          </div>

          {/* Bottom Row: left info + right links */}
          <div className="mt-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="text-left">
              <div className="text-2xl uppercase font-raleway tracking-widest font-medium">
                Wild Olives 30a
              </div>

              <div className="uppercase mt-2 text-sm tracking-widest text-black/70 leading-6">
                4771 E County Hwy 30A Unit C 103<br />
                Santa Rosa Beach, FL 32459
              </div>

              <div className="mt-2 text-sm tracking-widest font-medium">
                (850) 399 - 5411
              </div>
            </div>

            <div className="text-left md:text-right uppercase font-raleway tracking-widest font-medium text-sm space-y-3">
              <NavLink
                to="/reservations"
                className="text-black hover:text-gray-600 transition-colors duration-200 block"
              >
                Reservations
              </NavLink>

              <NavLink
                to="/contact"
                className="text-black hover:text-gray-600 transition-colors duration-200 block"
              >
                Contact
              </NavLink>

              <NavLink
                to="/careers"
                className="text-black hover:text-gray-600 transition-colors duration-200 block"
              >
                Careers
              </NavLink>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}