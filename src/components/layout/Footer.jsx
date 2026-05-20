import { NavLink } from 'react-router-dom'
import Divider from '../ui/Divider'
import ButtonLink from '../ui/ButtonLink'
import { useReservation } from '../../contexts/ReservationContext'

export default function Footer() {
  const { open: openReservation } = useReservation()
  return (
    <footer className="bg-white py-20">
      <div className="w-full px-6 md:px-28">

          {/* Top Row: lines + social */}
          <div className="flex items-center justify-center gap-8">
            <Divider width="flex-1" className="border-black/60" />

            <div className="flex items-center gap-6">
              <a
                href="https://x.com/wildoliveswcb"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="text-black hover:text-gray-600 transition-colors text-lg md:text-xl font-semibold"
              >
                X
              </a>

              <a
                href="https://instagram.com/wildolives30a"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-black hover:text-gray-600 transition-colors"
              >
                <i className="fa-brands fa-instagram text-xl md:text-2xl" />
              </a>

              <a
                href="https://facebook.com/wildolives30a"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-black hover:text-gray-600 transition-colors"
              >
                <i className="fa-brands fa-facebook-f text-xl md:text-2xl" />
              </a>
            </div>

            <Divider width="flex-1" className="border-black/60" />
          </div>

          {/* Bottom Row: left info + right links */}
          <div className="mt-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="flex flex-col items-center md:hidden">
              <ButtonLink onClick={openReservation}>Make a Reservation</ButtonLink>
            </div>

            <div className="text-center md:text-left">
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

            <div className="text-left md:text-right uppercase font-raleway tracking-widest font-medium text-sm space-y-3 hidden md:block">
              <button
                type="button"
                onClick={openReservation}
                className="text-black hover:text-gray-600 transition-colors duration-200 block uppercase font-raleway tracking-widest font-medium text-sm"
              >
                Reservations
              </button>

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
    </footer>
  )
}