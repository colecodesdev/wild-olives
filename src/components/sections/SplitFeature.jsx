import Section from '../ui/Section'

export default function SplitFeature({
  id,
  className = 'py-20',
  reverse = false,
  media,
  children,
  gridClassName = '',
  mobileMedia = 'stack',
  mobileOrder = 'media-first',
}) {
  const mediaVisibilityClass = mobileMedia === 'hide' ? 'hidden md:block' : 'block'

  const mobileOrderClass =
    mobileMedia === 'hide'
      ? ''
      : mobileOrder === 'text-first'
      ? '[&>*:first-child]:order-2 [&>*:last-child]:order-1 md:[&>*:first-child]:order-none md:[&>*:last-child]:order-none'
      : ''

  const desktopReverseClass = reverse
    ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'
    : ''

  return (
    <Section id={id} className={className}>
      <div
        className={`grid gap-10 md:grid-cols-2 items-center ${gridClassName} ${mobileOrderClass} ${desktopReverseClass}`}
      >
        <div className={mediaVisibilityClass}>{media}</div>
        <div>{children}</div>
      </div>
    </Section>
  )
}