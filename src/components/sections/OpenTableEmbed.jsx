export default function OpenTableEmbed({
  src,
  title = 'OpenTable Reservations',
  className = '',
  heightClass = 'h-[600px]',
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full overflow-hidden rounded-sm">
        <iframe
          src={src}
          title={title}
          className={`w-full block ${heightClass}`}
          frameBorder="0"
          allow="payment"
        />
      </div>
    </div>
  )
}