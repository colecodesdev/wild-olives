import Divider from '../ui/Divider'
import MenuItem from './MenuItem'
import { menuSectionTitleClass } from '../../lib/typography'

export default function MenuSection({ title, subtitle, items = [], columns = 2, anchor, featured = false, compact = false, paired = false, centerItems = false }) {
  const gapClass = compact ? 'gap-y-3' : 'gap-y-8'
  const allTiered = items.length > 0 && items.every((i) => i.price && i.price.includes('/'))
  const balanced = columns === 2 && allTiered && !centerItems
  const singleColMax = centerItems ? 'max-w-2xl md:max-w-none md:w-fit' : 'max-w-xl'
  const gridClass =
    columns === 1
      ? `grid grid-cols-1 ${gapClass} ${singleColMax} mx-auto`
      : balanced
        ? `grid grid-cols-1 md:grid-cols-[auto_auto] gap-x-8 md:gap-x-16 ${gapClass} md:justify-center`
        : `grid grid-cols-1 md:grid-cols-2 gap-x-8 ${gapClass} max-w-4xl mx-auto`

  const mbClass = paired ? '' : compact ? 'mb-10 md:mb-12' : 'mb-16 md:mb-16'

  const wrapperClass = featured
    ? `${mbClass} scroll-mt-24 md:scroll-mt-40 bg-oliveBrown/10 px-6 md:px-12 py-10 max-w-4xl mx-auto`
    : `${mbClass} scroll-mt-24 md:scroll-mt-40`

  return (
    <section id={anchor} className={wrapperClass}>
      <div className="text-left md:text-center mb-10 md:mb-6">
        <h2 className={menuSectionTitleClass}>{title}</h2>
        <Divider className="my-4 mx-0 md:mx-auto" width="w-[120px] md:w-[200px]" />
        {subtitle && (
          <p className="mt-2 font-raleway tracking-widest uppercase text-sm text-oliveBrown">
            {subtitle}
          </p>
        )}
      </div>

      <div className={gridClass}>
        {items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}
