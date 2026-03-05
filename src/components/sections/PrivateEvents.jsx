import Section from '../ui/Section'
import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'
import Divider from '../ui/Divider'

export default function PrivateEvents() {
  return (
    <Section className="py-20">
      <Container>
        <div className="text-center">
          <div className="flex items-center justify-center gap-6">
            <div className="font-raleway uppercase tracking-[1rem] text-2xl md:text-5xl text-center pl-[1rem]">
              Private Events
            </div>
          </div>

            <Divider width="w-[250px] md:w-[630px]" className='my-4'/>

          <div className="max-w-4xl mx-6 md:mx-auto text-sm md:text-md tracking-widest leading-7 text-black/70 font-montserrat">
            Step into a world of exclusivity and elegance at one of the best
            restaurants on 30A. Our private dining room offers the perfect blend
            of intimacy and luxury, where every meal becomes a masterpiece and
            every moment feels extraordinary.
          </div>

          <div className="mt-8">
            <ButtonLink to="/events" className="px-10 py-3">
              Book Event
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  )
}