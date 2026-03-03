export default function Divider({ width = 'w-full', className = '' }) {
  return (
    <div className={`mx-auto ${width} border-t border-black ${className}`} />
  )
}