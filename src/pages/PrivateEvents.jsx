import Container from '../components/ui/Container'
import ContentBanner from '../components/ui/ContentBanner'
import PageHeroTitle from '../components/ui/PageHeroTitle'
import CenteredInfoBlock from '../components/sections/CenteredInfoBlock'
import PrivateEventsForm from '../components/sections/PrivateEventsForm'

import heroImg from '../assets/images/private-events/private-events-hero.jpg'
import logo from '../assets/logos/logo.png'
import bottlesStatue from '../assets/images/private-events/bottles-statue.JPG'
import corkOverlay from '../assets/images/home/cork-overlay.webp'

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
          <PageHeroTitle title="Private Events" subtitle="Wild Olives 30a" />
        </Container>
      </ContentBanner>

      <CenteredInfoBlock
        id="state-room"
        title="The State Room"
        dividerWidth="w-[250px] md:w-[520px]"
      >
        <p className="max-w-3xl mx-6 md:mx-auto text-sm tracking-widest leading-7 text-black/70 font-montserrat">
          Welcome to The State Room, our exclusive private dining space at Wild Olives. Hosting up
          to 32 guests, it’s the ideal venue for special occasions, corporate events, and
          celebrations. Secure your spot today and see why we’re a favorite among 30A restaurants.
        </p>

        <div className="flex items-center justify-center gap-6 my-16">
            <div className="flex-1 border-t border-black max-w-[300px]" />
                <img src={logo} alt="Wild Olives Logo" className="h-16 w-auto" />
            <div className="flex-1 border-t border-black max-w-[300px]" />
        </div>

        <div className="mt-14">
          <PrivateEventsForm />
        </div>
      </CenteredInfoBlock>

      <ContentBanner
        image={bottlesStatue}
        heightClass="h-[520px]"
        overlayClassName="bg-black/40"
        backgroundClassName="bg-bottom"
      >
        <img src={corkOverlay} alt="" className="h-56 md:h-72 w-auto" />
      </ContentBanner>
    </>
  )
}