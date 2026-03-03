import Container from './Container'

export default function ParallaxBanner({
  image,
  heightClass = 'h-[500px]',
  overlayClassName = '',
  title,
  subtitle,
  children,
}) {
  return (
    <section className={`relative overflow-hidden ${heightClass}`}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark overlay (optional) */}
      {overlayClassName && (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      )}

      {/* Content */}
      {(title || subtitle || children) && (
        <div className="relative h-full flex items-center justify-center text-center">
          <Container>
            {title && (
              <div className="inline-block px-6 py-3">
                <h1 className="font-raleway font-medium uppercase tracking-[0.5em] text-3xl md:text-8xl text-white">
                  {title}
                </h1>
              </div>
            )}

            {subtitle && (
              <div className="inline-block px-4 py-2 mt-2">
                <p className="font-raleway uppercase tracking-[0.4em] text-xs md:text-2xl text-white">
                  {subtitle}
                </p>
              </div>
            )}

            {children}
          </Container>
        </div>
      )}
    </section>
  )
}