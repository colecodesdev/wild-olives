import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="p-10">
      <div className="mb-4">Not Found</div>
      <Link className="underline" to="/">Go Home</Link>
    </div>
  )
}