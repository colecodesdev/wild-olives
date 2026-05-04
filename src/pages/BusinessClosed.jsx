import Container from '../components/ui/Container'
import Divider from '../components/ui/Divider'
import ButtonLink from '../components/ui/ButtonLink'
import BackButton from '../components/ui/BackButton'
import { proseClass } from '../lib/typography'

export default function BusinessClosed() {
  return (
    <section className="py-32">
      <Container>

        <p className="uppercase tracking-[0.2em] text-sm text-black/60 text-center">
          Project Notice
        </p>

        <h1 className="font-raleway uppercase tracking-[0.3rem] text-3xl md:text-5xl text-center mt-4">
          Wild Olives Has Closed
        </h1>

        <Divider width="w-[320px]" className="mx-auto my-8" />

        <div className={`max-w-3xl mx-auto space-y-6 ${proseClass} text-center`}>

          <p>
            This application recreates the structure and user journey of the
            original Wild Olives restaurant website as a portfolio project.
          </p>

          <p>
            Because the restaurant is no longer in operation, functionality that
            would normally depend on an active business has been intentionally
            concluded here.
          </p>

          <p>
            For employers and interviewers, this page represents the end of the
            application's real-world workflow. The project demonstrates component
            based architecture, client-side routing, responsive layout
            composition, and the process of translating an existing business
            website into a maintainable React application.
          </p>

        </div>

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