import { Link } from 'react-router-dom'

export default function ButtonLink({ to, href, className = '', children }) {
  const base =
    'inline-block p-3 px-4 text-white bg-black hover:bg-gray-800 rounded-sm uppercase font-semibold tracking-widest'

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={`${base} ${className}`}>
      {children}
    </Link>
  )
}