import Container from '../ui/Container'
import ContentBanner from '../ui/ContentBanner'
import PageHeroTitle from '../ui/PageHeroTitle'
import Section from '../ui/Section'
import MenuNav from './MenuNav'
import MenuSection from './MenuSection'

export default function MenuPage({
  heroImg,
  title,
  subtitle = 'Wild Olives 30a',
  backgroundClassName,
  menu,
}) {
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

      <div className="sticky top-28 z-30 bg-white border-b border-black/5 hidden md:block">
        <Section className="py-4">
          <MenuNav />
        </Section>
      </div>

      <Section className="pt-12 md:pt-16 pb-20">
        <Container>
          {menu?.intro && (
            <p className="text-center font-raleway uppercase tracking-widest text-sm md:text-base text-oliveBrown mb-12">
              {menu.intro}
            </p>
          )}

          {menu?.sections?.map((section) => (
            <MenuSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              items={section.items}
              anchor={section.anchor}
              columns={section.items.length > 4 ? 2 : 1}
            />
          ))}

          {menu?.priceFormatNote && (
            <p className="text-center font-montserrat italic text-xs text-black/50 mt-12 max-w-2xl mx-auto">
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
