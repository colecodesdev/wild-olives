import Section from '../ui/Section'
import Container from '../ui/Container'
import Divider from '../ui/Divider'
import { sectionTitleClass } from '../../lib/typography'

export default function CenteredInfoBlock({
  id,
  className = 'py-20',
  title,
  titleClassName = sectionTitleClass,
  dividerWidth = 'w-[250px] md:w-[380px]',
  dividerClassName = 'my-4',
  topContent,
  primaryCta,
  middleBrand,
  bottomContent,
  children,
}) {
  return (
    <Section id={id} className={className}>
      <Container className="text-center">
        {title && (
          <div className="flex items-center justify-center gap-6">
            <div className={titleClassName}>{title}</div>
          </div>
        )}

        <Divider width={dividerWidth} className={dividerClassName} />

        {topContent}

        {children}

        {primaryCta}

        {middleBrand}

        {bottomContent}
      </Container>
    </Section>
  )
}