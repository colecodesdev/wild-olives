import heroImage from '../assets/images/home/home-hero-cropped.jpg'
import HeroTitle from '../components/ui/HeroTitle'
import Divider from '../components/ui/Divider'

export default function Home() {
  return (
    <div className="relative h-svh w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Wild Olives interior"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/70" />
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 pt-28 pb-64">
        <HeroTitle
          title="Wild Olives"
          subtitle="Bistro • Wine • Craft Cocktails"
          className="flex flex-col items-center text-center"
          titleClassName="text-6xl md:text-8xl"
          subtitleClassName="text-sm md:text-2xl"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 px-6 md:px-28 pb-8 md:pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-white mb-8">
          <div className="order-2 md:order-1 text-center md:text-left uppercase tracking-widest text-sm leading-6">
            <div className="font-raleway font-semibold mb-1">Find Us</div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=4771+E+County+Hwy+30A+Unit+C+103+Santa+Rosa+Beach+FL+32459"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              4771 E County Hwy 30A, Unit C 103, Santa Rosa Beach, FL 32459
            </a>
          </div>

          <div className="order-1 md:order-2 text-center md:text-right uppercase tracking-widest text-sm leading-6">
            <div className="font-raleway font-semibold mb-1">Open Daily</div>
            2 PM – 10 PM
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 md:gap-8">
          <Divider width="flex-1" className="border-white/60" />

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/wildoliveswcb"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="text-white/90 hover:text-white transition-colors text-lg md:text-xl font-semibold"
            >
              X
            </a>

            <a
              href="https://instagram.com/wildolives30a"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-white/90 hover:text-white transition-colors"
            >
              <i className="fa-brands fa-instagram text-xl md:text-2xl" />
            </a>

            <a
              href="https://facebook.com/wildolives30a"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-white/90 hover:text-white transition-colors"
            >
              <i className="fa-brands fa-facebook-f text-xl md:text-2xl" />
            </a>
          </div>

          <Divider width="flex-1" className="border-white/60" />
        </div>
      </div>
    </div>
  )
}
