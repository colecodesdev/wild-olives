import Container from '../components/ui/Container'
import Divider from '../components/ui/Divider'
import ButtonLink from '../components/ui/ButtonLink'
import BackButton from '../components/ui/BackButton'
import { proseClass } from '../lib/typography'

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="text-center">

        <h1 className="font-raleway uppercase tracking-[1rem] text-4xl md:text-6xl pl-[1rem]">
          404
        </h1>

        <Divider width="w-[240px]" className="mx-auto my-6" />

        <h2 className="uppercase tracking-widest text-lg text-black/70 font-montserrat">
          Page Not Found
        </h2>

        <p className={`max-w-xl mx-auto mt-6 ${proseClass}`}>
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">

          <BackButton />

          <ButtonLink to="/">
            Back Home
          </ButtonLink>

        </div>

      </Container>
    </section>
  )
}