const TAG_LABELS = {
  gf: 'GF',
  v: 'V',
}

const TAG_TITLES = {
  gf: 'Gluten Free',
  v: 'Vegan',
}

const TIER_LABELS_2 = ['Glass', 'Bottle']
const TIER_LABELS_3 = ['Glass', 'Carafe', 'Bottle']

function parsePriceTiers(price) {
  if (!price || !price.includes('/')) return null
  const parts = price.replace(/\$/g, '').split('/').map((p) => p.trim())
  const labels = parts.length === 3 ? TIER_LABELS_3 : TIER_LABELS_2
  return parts.map((val, i) => ({ label: labels[i], value: `$${val}` }))
}

export default function MenuItem({ name, price, description, tags = [] }) {
  const tiers = parsePriceTiers(price)

  return (
    <div>
      <div className="flex items-baseline gap-2">
        <div className="flex items-center gap-1.5 min-w-0 shrink-0">
          <span className="font-raleway font-semibold uppercase text-base md:text-lg tracking-wider">{name}</span>
          {tags.length > 0 && (
            <span className="inline-flex gap-1 shrink-0">
              {tags.map((tag) => (
                <span
                  key={tag}
                  title={TAG_TITLES[tag] || tag}
                  aria-label={TAG_TITLES[tag] || tag}
                  className="inline-flex items-center justify-center h-4 w-4 rounded-full border border-oliveBrown text-oliveBrown text-[9px] font-semibold tracking-normal"
                >
                  {TAG_LABELS[tag] || tag.toUpperCase()}
                </span>
              ))}
            </span>
          )}
        </div>
        {price && !tiers && (
          <>
            <span className="flex-1 border-b border-dotted border-black/25 self-end mb-[5px] min-w-[12px]" aria-hidden="true" />
            <span className="font-raleway font-normal text-sm text-black/60 whitespace-nowrap shrink-0">{price}</span>
          </>
        )}
      </div>

      {tiers && (
        <p className="mt-0.5 flex flex-wrap gap-x-4 font-montserrat text-xs text-black/50">
          {tiers.map((tier) => (
            <span key={tier.label}>
              <span className="uppercase tracking-wide text-black/40">{tier.label}</span>{' '}
              <span className="font-medium text-black/70">{tier.value}</span>
            </span>
          ))}
        </p>
      )}

      {description && (
        <p className="mt-1 font-montserrat italic text-sm text-black/60">{description}</p>
      )}
    </div>
  )
}
