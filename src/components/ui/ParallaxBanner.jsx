export default function ParallaxBanner({
  image,
  alt = '',
  heightClass = 'h-[500px]',
  overlayClassName = '',
  children,
  backgroundClassName = 'bg-center',
  objectPositionClass = 'object-center',
  contentClassName = '',
  priority = false,
}) {
  return (
    <section className={`relative overflow-hidden ${heightClass}`}>
      {priority ? (
        <img
          src={image}
          alt={alt}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className={`absolute inset-0 w-full h-full object-cover ${objectPositionClass}`}
        />
      ) : (
        <div
          className={`absolute inset-0 bg-no-repeat bg-cover md:bg-fixed ${backgroundClassName}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {overlayClassName && (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      )}

      {children && (
        <div
          className={`relative h-full flex items-center justify-center text-center ${contentClassName}`}
        >
          {children}
        </div>
      )}
    </section>
  )
}