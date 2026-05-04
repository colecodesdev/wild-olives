import logo from '../../assets/logos/logo.png'

export default function LogoDivider({
  maxWidth = 'max-w-[300px]',
  className = 'my-16',
}) {
  return (
    <div className={`flex items-center justify-center gap-6 ${className}`}>
      <div className={`flex-1 border-t border-black ${maxWidth}`} />
      <img src={logo} alt="Wild Olives Logo" className="h-16 w-auto" />
      <div className={`flex-1 border-t border-black ${maxWidth}`} />
    </div>
  )
}
