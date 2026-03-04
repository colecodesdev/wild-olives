export default function OpenTableEmbed({
  src,
  title = 'OpenTable Reservations',
  className = '',
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full overflow-hidden rounded-sm">
        <iframe
          src={src}
          title={title}
          className="w-full h-[600px]"
          frameBorder="0"
          allow="payment"
        />
      </div>
    </div>
  )
}