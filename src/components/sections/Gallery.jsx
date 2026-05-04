import Section from '../ui/Section'
import Grid from '../ui/Grid'
import ImageTile from '../ui/ImageTile'

export default function Gallery({
  id,
  className = '',
  rows = [],
}) {
  return (
    <Section id={id} className={className}>
      <div className="w-full">
        {rows.map((row, index) => {
          const {
            images = [],
            cols = 3,
            heightClass = 'md:h-[600px]',
            gapClass = 'gap-2',
            hiddenBelow = null,
            className: rowClassName = '',
          } = row

          const columnClass =
            cols === 1
              ? 'grid-cols-1'
              : cols === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : cols === 3
              ? 'grid-cols-1 md:grid-cols-3'
              : cols === 4
              ? 'grid-cols-1 md:grid-cols-4'
              : 'grid-cols-1 md:grid-cols-3'

          const visibilityClass = hiddenBelow
            ? `hidden ${hiddenBelow}:grid`
            : 'grid'

          return (
            <Grid
              key={index}
              className={`${visibilityClass} ${gapClass} ${columnClass} ${heightClass} ${
                index > 0 ? 'mt-2' : ''
              } ${rowClassName}`}
            >
              {images.map((src) => (
                <ImageTile key={src} src={src} className="h-[320px] md:h-full" />
              ))}
            </Grid>
          )
        })}
      </div>
    </Section>
  )
}