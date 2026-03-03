export default function ImageTile({
  src,
  alt = '',
  className = '',
  zoom = true,
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-500 ${
          zoom ? 'hover:scale-105' : ''
        }`}
      />
    </div>
  )
}