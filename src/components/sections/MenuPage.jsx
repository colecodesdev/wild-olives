import Container from '../ui/Container'
import ContentBanner from '../ui/ContentBanner'
import PageHeroTitle from '../ui/PageHeroTitle'
import Section from '../ui/Section'
import MenuNav from './MenuNav'

export default function MenuPage({
  heroImg,
  menuImg,
  menuImgAlt,
  title,
  subtitle = 'Wild Olives 30a',
  backgroundClassName,
  menuImgClassName = 'w-full max-w-5xl h-auto',
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

      <Section className="pt-20 hidden md:block">
        <MenuNav />
      </Section>

      <Section className="pt-10 md:pt-0 pb-20">
        <Container className="flex items-center justify-center">
          <img
            src={menuImg}
            alt={menuImgAlt}
            className={menuImgClassName}
            loading="lazy"
          />
        </Container>
      </Section>
    </>
  )
}
