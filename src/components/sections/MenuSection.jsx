import Divider from '../ui/Divider'
import MenuItem from './MenuItem'
import { sectionTitleClass } from '../../lib/typography'

export default function MenuSection({ title, subtitle, items = [], columns = 2, anchor }) {
  const gridClass =
    columns === 1
      ? 'grid grid-cols-1 gap-y-8 max-w-2xl mx-auto'
      : 'grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8'

  return (
    <section id={anchor} className="mb-16 scroll-mt-32">
      <div className="text-center mb-10">
        <h2 className={sectionTitleClass}>{title}</h2>
        <Divider className="my-4 mx-auto" width="w-[160px] md:w-[260px]" />
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
