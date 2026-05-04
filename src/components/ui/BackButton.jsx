import { useNavigate } from 'react-router-dom'
import { buttonLinkBase } from './ButtonLink'

export default function BackButton({ className = '', children = 'Previous Page' }) {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={`${buttonLinkBase} px-6 ${className}`}
    >
      {children}
    </button>
  )
}
