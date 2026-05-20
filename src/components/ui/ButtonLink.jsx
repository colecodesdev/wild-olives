import { Link } from 'react-router-dom'

export const buttonLinkBase =
  'inline-flex items-center justify-center min-h-[44px] p-3 px-4 text-white bg-black hover:bg-gray-800 rounded-sm uppercase font-semibold tracking-widest'

const buttonLinkLight =
  'inline-flex items-center justify-center min-h-[44px] p-3 px-4 text-black bg-white hover:bg-white/90 rounded-sm uppercase font-semibold tracking-widest'

const buttonLinkOutline =
  'inline-flex items-center justify-center min-h-[44px] p-3 px-8 text-white bg-transparent border border-white hover:bg-white hover:text-black rounded-sm uppercase font-semibold tracking-widest transition-colors duration-200'

const buttonLinkOutlineDark =
  'inline-flex items-center justify-center min-h-[44px] p-3 px-8 text-black bg-transparent border border-black hover:bg-black hover:text-white rounded-sm uppercase font-semibold tracking-widest transition-colors duration-200'

export default function ButtonLink({ to, href, type, onClick, variant = 'dark', className = '', children }) {
  const base =
    variant === 'light' ? buttonLinkLight
    : variant === 'outline' ? buttonLinkOutline
    : variant === 'outline-dark' ? buttonLinkOutlineDark
    : buttonLinkBase
  const cls = `${base} ${className}`

  if (type === 'submit' || (!to && !href)) {
    return (
      <button type={type ?? 'button'} onClick={onClick} className={cls}>
        {children}
      </button>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={cls}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to} onClick={onClick} className={cls}>
      {children}
    </Link>
  )
}
