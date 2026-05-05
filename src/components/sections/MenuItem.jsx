const TAG_LABELS = {
  gf: 'GF',
  v: 'V',
}

const TAG_TITLES = {
  gf: 'Gluten Free',
  v: 'Vegan',
}

export default function MenuItem({ name, price, description, tags = [] }) {
  return (
    <div className="text-center">
      <div className="font-raleway text-base md:text-lg tracking-wider">
        {tags.length > 0 && (
          <span className="mr-2 inline-flex gap-1 align-middle">
            {tags.map((tag) => (
              <span
                key={tag}
                title={TAG_TITLES[tag] || tag}
                aria-label={TAG_TITLES[tag] || tag}
                className="inline-flex items-center justify-center h-5 w-5 rounded-full border border-oliveBrown text-oliveBrown text-[10px] font-semibold tracking-normal"
              >
                {TAG_LABELS[tag] || tag.toUpperCase()}
              </span>
            ))}
          </span>
        )}
        <span className="font-semibold uppercase">{name}</span>
        {price && (
          <span className="ml-2 font-semibold">{price}</span>
        )}
      </div>
      {description && (
        <p className="mt-1 font-montserrat italic text-sm md:text-base text-black/70 max-w-md mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
