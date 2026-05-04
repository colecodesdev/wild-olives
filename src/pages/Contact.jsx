import Container from '../components/ui/Container'
import ContentBanner from '../components/ui/ContentBanner'
import PageHeroTitle from '../components/ui/PageHeroTitle'
import CenteredInfoBlock from '../components/sections/CenteredInfoBlock'
import ButtonLink from '../components/ui/ButtonLink'
import Divider from '../components/ui/Divider'
import GoogleMapEmbed from '../components/sections/GoogleMapEmbed'
import { proseClass } from '../lib/typography'

import contactHero from '../assets/images/contact/contact-hero.jpg'

export default function Contact() {
  return (
    <>
      <ContentBanner
        image={contactHero}
        heightClass="h-[520px]"
        overlayClassName="bg-black/40"
        backgroundClassName="bg-bottom"
      >
        <Container>
          <PageHeroTitle title="Contact" />
        </Container>
      </ContentBanner>

      <CenteredInfoBlock
        id="get-in-touch"
        title="Get In Touch"
        dividerWidth="w-[250px] md:w-[520px]"
        topContent={
          <div className="max-w-3xl mx-6 md:mx-auto">
            <p className={proseClass}>
              Have a question, a special request, or just want to say hello? We&apos;d love to hear from you! Contact
              us today and let&apos;s make your next dining experience at Wild Olives truly unforgettable. Discover why
              we&apos;re a local favorite among 30A restaurants!
            </p>

            <Divider width="w-[90px]" className="mx-auto my-8 border-black/40" />

            <p className="italic text-sm text-black/60">
              For all reservation requests and private event inquiries,
              <br />
              please reach out to our team
            </p>

            <div className="mt-3 tracking-widest font-medium text-sm">
              (850) 399 - 5411
            </div>
          </div>
        }
        primaryCta={
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <ButtonLink to="/reservations">Reservations</ButtonLink>
            <ButtonLink to="/private-events">Private Events</ButtonLink>
          </div>
        }
      >
      </CenteredInfoBlock>

      <GoogleMapEmbed />
    </>
  )
}