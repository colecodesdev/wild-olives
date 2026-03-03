import Section from '../ui/Section'

export default function SplitFeature({
  id,
  className = 'py-20',
  reverse = false,
  media,
  children,
  gridClassName = '',
}) {
  return (
    <Section id={id} className={className}>
      <div
        className={`grid gap-10 md:grid-cols-2 items-center ${gridClassName} ${
          reverse ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''
        }`}
      >
        <div>{media}</div>
        <div>{children}</div>
      </div>
    </Section>
  )
}