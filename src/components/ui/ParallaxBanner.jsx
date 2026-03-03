export default function ParallaxBanner({
  image,
  heightClass = 'h-[500px]',
  overlayClassName = '',
  children,
  backgroundClassName = '',
  contentClassName = '',
}) {
  return (
    <section className={`relative overflow-hidden ${heightClass}`}>
      <div
        className={`absolute inset-0 bg-no-repeat bg-cover bg-center md:bg-fixed ${backgroundClassName}`}
        style={{ backgroundImage: `url(${image})` }}
      />

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