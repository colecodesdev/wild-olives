import Container from '../ui/Container'
import ContentBanner from '../ui/ContentBanner'
import PageHeroTitle from '../ui/PageHeroTitle'
import Section from '../ui/Section'
import MenuNav from './MenuNav'
import MenuSection from './MenuSection'

function buildRenderUnits(sections) {
  const units = []
  const consumed = new Set()
  sections.forEach((section, i) => {
    if (consumed.has(i)) return
    if (!section.pairKey) {
      units.push({ type: 'single', section })
    } else {
      const partnerIdx = sections.findIndex(
        (s, j) => j !== i && s.pairKey === section.pairKey && !consumed.has(j)
      )
      if (partnerIdx !== -1) {
        consumed.add(partnerIdx)
        units.push({ type: 'pair', sections: [section, sections[partnerIdx]] })
      } else {
        units.push({ type: 'single', section })
      }
    }
    consumed.add(i)
  })
  return units
}

export default function MenuPage({
  heroImg,
  title,
  subtitle = 'Wild Olives 30a',
  backgroundClassName,
  menu,
}) {
  const sections = menu?.sections ?? []
  const renderUnits = buildRenderUnits(sections)

  return (
    <>
      <ContentBanner
        image={heroImg}
        heightClass="h-[520px]"
        overlayClassName="bg-black/40"
        backgroundClassName={backgroundClassName}
      >
        <Container>
          <PageHeroTitle title={title} subtitle={subtitle} />
        </Container>
      </ContentBanner>

      {/* Desktop sub-nav */}
      <div className="sticky top-20 z-30 bg-white border-b border-black/5 hidden md:block">
        <Section className="py-4">
          <MenuNav />
        </Section>
      </div>

<Section className="pt-12 md:pt-10 pb-20">
        <Container>
          {menu?.intro && (
            <p className="text-center font-raleway uppercase tracking-widest text-sm md:text-base text-oliveBrown mb-12">
              {menu.intro}
            </p>
          )}

          {renderUnits.map((unit) => {
            if (unit.type === 'pair') {
              return (
                <div
                  key={unit.sections[0].title}
                  className="flex flex-col md:flex-row gap-12 md:gap-10 mb-16 md:mb-16"
                >
                  {unit.sections.map((section) => (
                    <div key={section.title} className="flex-1 min-w-0">
                      <MenuSection
                        title={section.title}
                        subtitle={section.subtitle}
                        items={section.items}
                        anchor={section.anchor}
                        featured={section.featured}
                        compact={section.compact}
                        centerItems={section.centerItems}
                        columns={section.columns ?? 1}
                        paired
                      />
                    </div>
                  ))}
                </div>
              )
            }

            const s = unit.section
            return (
              <MenuSection
                key={s.title}
                title={s.title}
                subtitle={s.subtitle}
                items={s.items}
                anchor={s.anchor}
                featured={s.featured}
                compact={s.compact}
                centerItems={s.centerItems}
                columns={s.columns ?? (s.items.length > 4 ? 2 : 1)}
              />
            )
          })}

          {menu?.footnote && (
            <p className="text-center font-montserrat italic text-xs text-oliveBrown/70 mt-12 max-w-2xl mx-auto">
              {menu.footnote}
            </p>
          )}

          {menu?.priceFormatNote && (
            <p className="text-center font-montserrat italic text-xs text-black/50 mt-8 max-w-2xl mx-auto">
              {menu.priceFormatNote}
            </p>
          )}

          <p className="text-center font-montserrat italic text-xs text-black/50 mt-8 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 mr-3">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full border border-oliveBrown text-oliveBrown text-[10px] font-semibold not-italic">V</span>
              Vegan
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full border border-oliveBrown text-oliveBrown text-[10px] font-semibold not-italic">GF</span>
              Gluten Free
            </span>
          </p>

          <p className="text-center font-montserrat italic text-[10px] text-black/40 mt-4 max-w-2xl mx-auto">
            *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.*
          </p>
        </Container>
      </Section>
    </>
  )
}
