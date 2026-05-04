import Container from '../components/ui/Container'
import ContentBanner from '../components/ui/ContentBanner'
import PageHeroTitle from '../components/ui/PageHeroTitle'
import LogoDivider from '../components/ui/LogoDivider'
import { proseClass } from '../lib/typography'
import CenteredInfoBlock from '../components/sections/CenteredInfoBlock'
import CorkBanner from '../components/sections/CorkBanner'
import PrivateEventsForm from '../components/sections/PrivateEventsForm'

import heroImg from '../assets/images/private-events/private-events-hero.jpg'
import bottlesStatue from '../assets/images/private-events/bottles-statue.JPG'

export default function PrivateEvents() {
  return (
    <>
      <ContentBanner
        image={heroImg}
        heightClass="h-[520px]"
        overlayClassName="bg-black/40"
        backgroundClassName='bg-bottom'
      >
        <Container>
          <PageHeroTitle title="Private Events" />
        </Container>
      </ContentBanner>

      <CenteredInfoBlock
        id="state-room"
        title="The State Room"
        dividerWidth="w-[250px] md:w-[520px]"
      >
        <p className={`max-w-3xl mx-6 md:mx-auto ${proseClass}`}>
          Welcome to The State Room, our exclusive private dining space at Wild Olives. Hosting up
          to 32 guests, it’s the ideal venue for special occasions, corporate events, and
          celebrations. Secure your spot today and see why we’re a favorite among 30A restaurants.
        </p>

        <LogoDivider />

        <div className="mt-14">
          <PrivateEventsForm />
        </div>
      </CenteredInfoBlock>

      <CorkBanner image={bottlesStatue} backgroundClassName="bg-bottom" />
    </>
  )
}