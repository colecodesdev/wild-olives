import { useNavigate } from 'react-router-dom'
import Container from '../components/ui/Container'
import Divider from '../components/ui/Divider'
import ButtonLink from '../components/ui/ButtonLink'

export default function NotFound() {
  const navigate = useNavigate()
  
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

        <p className="max-w-xl mx-auto mt-6 text-sm tracking-widest leading-7 text-black/70 font-montserrat">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-block p-3 px-6 text-white bg-black hover:bg-gray-800 rounded-sm uppercase font-semibold tracking-widest"
          >
            Previous Page
          </button>

          <ButtonLink to="/">
            Back Home
          </ButtonLink>

        </div>

      </Container>
    </section>
  )
}