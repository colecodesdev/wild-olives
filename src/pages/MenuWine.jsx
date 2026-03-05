import Container from '../components/ui/Container'
import ContentBanner from '../components/ui/ContentBanner'
import PageHeroTitle from '../components/ui/PageHeroTitle'
import Section from '../components/ui/Section'
import MenuNav from '../components/sections/MenuNav'

import heroImg from '../assets/images/menu/btg-wine.jpeg'
import wineMenuImg from '../assets/images/menu/wine-list.jpg'

export default function MenuWine() {
  return (
    <>
      <ContentBanner image={heroImg} heightClass="h-[520px]" overlayClassName="bg-black/40" backgroundClassName='bg-center'>
        <Container>
          <PageHeroTitle title="Wine" subtitle="Wild Olives 30a" />
        </Container>
      </ContentBanner>

      <Section className="pt-20 hidden md:block">
        <MenuNav />
      </Section>

      <Section className="pt-10 md:pt-0 pb-20">
        <Container className="flex items-center justify-center">
          <img
            src={wineMenuImg}
            alt="Wine Menu"
            className="w-full max-w-5xl h-auto"
            loading="lazy"
          />
        </Container>
      </Section>
    </>
  )
}