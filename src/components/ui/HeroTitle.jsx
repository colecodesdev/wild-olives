export default function HeroTitle({
  title,
  subtitle,
  titleClassName = '',
  subtitleClassName = '',
  className = '',
}) {
  return (
    <div className={className}>
      {title && (
        <div className="inline-block px-6 py-3">
          <h1
            className={`font-raleway font-medium uppercase tracking-[0.5em] text-3xl md:text-8xl text-white ${titleClassName}`}
          >
            {title}
          </h1>
        </div>
      )}

      {subtitle && (
        <div className="inline-block px-4 py-2 mt-2">
          <p
            className={`font-raleway uppercase tracking-[0.4em] text-xs md:text-2xl text-white ${subtitleClassName}`}
          >
            {subtitle}
          </p>
        </div>
      )}
    </div>
  )
}