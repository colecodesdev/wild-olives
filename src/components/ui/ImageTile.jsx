export default function ImageTile({
  src,
  alt = '',
  className = '',
  zoom = true,
  loading = 'lazy',
  fetchPriority = 'auto',
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={`w-full h-full object-cover transition-transform duration-500 ${
          zoom ? 'hover:scale-105' : ''
        }`}
      />
    </div>
  )
}