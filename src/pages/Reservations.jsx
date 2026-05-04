import Container from '../components/ui/Container'
import ContentBanner from '../components/ui/ContentBanner'
import PageHeroTitle from '../components/ui/PageHeroTitle'
import Section from '../components/ui/Section'
import CorkBanner from '../components/sections/CorkBanner'
import OpenTableEmbed from '../components/sections/OpenTableEmbed'

import reservationsHero from '../assets/images/reservations/reservations-hero.jpg'
import table from '../assets/images/reservations/banner.jpg'

export default function Reservations() {
  return (
    <>
      <ContentBanner
        image={reservationsHero}
        heightClass="h-[520px]"
        overlayClassName="bg-black/40"
      >
        <Container>
          <PageHeroTitle title="Reservations" />
        </Container>
      </ContentBanner>

      <Section id="reservations" className="pt-20">
        <Container className="text-center">
          <p className="italic tracking-widest text-sm">
            For reservations of 6 guests or more please call our team <strong className='font-medium not-italic'>(850) 399 - 5411</strong>
          </p>

          <div className="">
            <OpenTableEmbed src="https://www.opentable.com/r/wild-olives-market-and-cafe-reservations-rosemary-beach?restref=283405&amp;lang=en-US&amp;ot_source=Restaurant%20website" />
          </div>
        </Container>
      </Section>

      <CorkBanner image={table} backgroundClassName="bg-[position:40%]" />
    </>
  )
}