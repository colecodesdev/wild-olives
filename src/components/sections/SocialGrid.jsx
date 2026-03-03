import Section from '../ui/Section'
import Heading from '../ui/Heading'
import Divider from '../ui/Divider'
import Grid from '../ui/Grid'
import ImageTile from '../ui/ImageTile'

export default function SocialGrid({
  id,
  className = 'pt-20',
  title = 'Follow Us',
  titleClassName = 'font-raleway uppercase tracking-[1rem] text-4xl md:text-5xl text-center pl-[1rem]',
  dividerWidth = 'w-[420px]',
  profileUrl,
  handleText,
  handleClassName = 'italic text-2xl tracking-widest leading-7 text-black/70 font-montserrat',
  images = [],
  cols = 5,
  heightClass = 'h-[420px]',
  gapClass = 'gap-2',
}) {
  const columnClass =
    cols === 1
      ? 'grid-cols-1'
      : cols === 2
      ? 'md:grid-cols-2'
      : cols === 3
      ? 'md:grid-cols-3'
      : cols === 4
      ? 'md:grid-cols-4'
      : 'md:grid-cols-5'

  return (
    <Section id={id} className={className}>
      <div>
        <div className="text-center mb-20">
          <Heading as="h2" className={titleClassName}>
            {title}
          </Heading>

          <Divider className="my-4" width={dividerWidth} />

          {profileUrl && handleText && (
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className={handleClassName}
            >
              {handleText}
            </a>
          )}
        </div>

        <Grid className={`grid ${gapClass} ${columnClass} ${heightClass}`}>
          {images.map((src, i) => (
            <ImageTile key={i} src={src} />
          ))}
        </Grid>
      </div>
    </Section>
  )
}