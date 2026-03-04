import Container from '../components/ui/Container'
import ContentBanner from '../components/ui/ContentBanner'
import PageHeroTitle from '../components/ui/PageHeroTitle'
import Section from '../components/ui/Section'
import MenuNav from '../components/sections/MenuNav'

import heroImg from '../assets/images/menu/strawberry-cheesecake.JPG'
import dessertMenuImg from '../assets/images/menu/dessert-menu.jpg'

export default function MenuDessert() {
  return (
    <>
      <ContentBanner image={heroImg} heightClass="h-[520px]" overlayClassName="bg-black/40" backgroundClassName='bg-center'>
        <Container>
          <PageHeroTitle title="Dessert" subtitle="Wild Olives 30a" />
        </Container>
      </ContentBanner>

      <Section className="pt-20">
        <MenuNav />
      </Section>

      <Section className="pb-20">
        <Container className="flex items-center justify-center">
          <img
            src={dessertMenuImg}
            alt="Dessert Menu"
            className="w-auto max-w-5xl h-full"
            loading="lazy"
          />
        </Container>
      </Section>
    </>
  )
}