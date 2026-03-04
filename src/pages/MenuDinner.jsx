import Container from '../components/ui/Container'
import ContentBanner from '../components/ui/ContentBanner'
import PageHeroTitle from '../components/ui/PageHeroTitle'
import Section from '../components/ui/Section'
import MenuNav from '../components/sections/MenuNav'

import heroImg from '../assets/images/menu/dinner-menu.webp'
import dinnerMenuImg from '../assets/images/menu/dinner-menu.jpg'

export default function MenuDinner() {
  return (
    <>
      <ContentBanner image={heroImg} heightClass="h-[520px]" overlayClassName="bg-black/40">
        <Container>
          <PageHeroTitle title="Dinner" subtitle="Wild Olives 30a" />
        </Container>
      </ContentBanner>

      <Section className="pt-20">
        <MenuNav />
      </Section>

      <Section className="pb-20">
        <Container className="flex items-center justify-center">
          <img
            src={dinnerMenuImg}
            alt="Dinner Menu"
            className="w-full max-w-5xl h-auto"
            loading="lazy"
          />
        </Container>
      </Section>
    </>
  )
}