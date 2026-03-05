import Divider from './Divider'

export default function PageHeroTitle({
  title,
  subtitle,
  className = '',
  dividerWidth = 'w-[250px] md:w-[400px]',
}) {
  return (
    <div className={`text-center ${className}`}>
      {title && (
        <h1 className="font-raleway font-semibold uppercase tracking-[0.2em] md:tracking-[0.6em] text-4xl md:text-6xl text-white pl-[0.3em] md:pl-[0.6em]">
          {title}
        </h1>
      )}

      {title && subtitle && (
        <Divider
          width={dividerWidth}
          className="mx-auto my-4 border-white"
        />
      )}

      {subtitle && (
        <p className="font-raleway uppercase tracking-[0.4em] text-sm md:text-xl text-white/90">
          {subtitle}
        </p>
      )}
    </div>
  )
}