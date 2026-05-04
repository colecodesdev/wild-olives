import { Link } from 'react-router-dom'

export const buttonLinkBase =
  'inline-block p-3 px-4 text-white bg-black hover:bg-gray-800 rounded-sm uppercase font-semibold tracking-widest'

export default function ButtonLink({ to, href, type, onClick, className = '', children }) {
  const cls = `${buttonLinkBase} ${className}`

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
