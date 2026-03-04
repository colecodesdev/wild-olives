import Container from '../components/ui/Container'
import PageHeroTitle from '../components/ui/PageHeroTitle'
import ContentBanner from '../components/ui/ContentBanner'
import CenteredInfoBlock from '../components/sections/CenteredInfoBlock'
import ButtonLink from '../components/ui/ButtonLink'
import Divider from '../components/ui/Divider'
import SplitFeature from '../components/sections/SplitFeature'
import Gallery from '../components/sections/Gallery'

import corksAndRoses from '../assets/images/events/corks-and-roses.JPG'
import corkOverlay from '../assets/images/home/cork-overlay.webp'
import bottlesStatue from '../assets/images/events/bottles-statue.JPG'
import appetizers from '../assets/images/events/appetizers.JPG'
import bottlesOnIce from '../assets/images/events/bottles-on-ice.JPG'
import cheeseboardOliveHoney from '../assets/images/events/cheeseboard-olive-honey.JPG'
import cheeseboardSide from '../assets/images/events/cheeseboard-side.JPG'
import corkName from '../assets/images/events/cork-name.jpg'
import grapesBox from '../assets/images/events/grapes-box.JPG'
import jazzFest from '../assets/images/events/jazzfesty.jpg'
import bingo from '../assets/images/events/bingo.jpeg'
import momWineDinner from '../assets/images/events/mom-wine-dinner.JPG'
import redWine from '../assets/images/events/red-wine.JPG'
import logo from '../assets/logos/logo.png'

export default function Events() {
  return (
    <>
      <ContentBanner
        image={corksAndRoses}
        heightClass="h-[520px]"
        overlayClassName="bg-black/40"
        backgroundClassName="bg-bottom"
      >
        <Container>
          <PageHeroTitle title="Events" subtitle="Wild Olives 30a" />
        </Container>
      </ContentBanner>

      <CenteredInfoBlock
        id="whats-happening"
        className="py-20"
        title={
          <>
            WHAT&apos;S
            <br />
            HAPPENING
          </>
        }
        dividerWidth="w-[450px]"
        dividerClassName="my-6"
        topContent={
          <>

            <p className="mx-auto max-w-[680px] text-sm tracking-widest leading-7 text-black/70 font-montserrat">
              Looking for something fun to do? Wild Olives hosts exciting events all month long.
              From themed dinners to weekly gatherings, there’s always something happening.
              Mark your calendar and join the fun — scroll down for details!
            </p>

            <Divider width="w-[100px]" className="border-black/40 my-10 mx-auto" />

            <p className="mx-auto max-w-[680px] text-xs italic tracking-widest text-black/60 font-montserrat">
              For all private event inquiries, please reach out to our team.
            </p>
          </>
        }
        primaryCta={
          <ButtonLink to="/private-events" className="mt-8">
            Private Events
          </ButtonLink>
        }
      />

      <ContentBanner
        image={bottlesStatue}
        heightClass="h-[520px]"
        overlayClassName="bg-black/40"
        backgroundClassName="bg-top"
      >
        <img src={corkOverlay} alt="" className="h-72 w-auto" />
      </ContentBanner>

      <SplitFeature
        id="fine-wine-friday"
        gridClassName="max-w-6xl mx-auto"
        reverse={false}
        media={
          <img
            src={jazzFest}
            alt="Fine Wine Friday"
            className="w-auto h-[720px] object-cover"
          />
        }
      >
        <div className="text-center px-10 md:px-16 max-w-[560px] mx-auto">
          <div className="uppercase tracking-[0.45em] text-sm text-black/60 font-raleway">
            Saturday, November 8th
          </div>

          <h2 className="mt-4 font-raleway uppercase tracking-[0.35em] text-4xl md:text-5xl leading-tight">
            SOWAL
            <br />
            Jazz
            <br />
            Festival
          </h2>

          <Divider width="w-[60px]" className="mx-auto my-6 border-black/40" />

          <p className="text-sm tracking-widest leading-7 text-black/70 font-montserrat">
            Get ready for an evening of soulful jazz as <strong>The Reid Murphy Quartet</strong>
            lights up Wild Olives as part of the SOWAL Jazz Fest! This is one of the standout
            nights of the festival — an intimate venue, fantastic music, and vibes that only a
            local favorite can bring.
          </p>

          <div className="mt-8 font-semibold tracking-widest text-sm">
            What to expect:
          </div>

          <ul className="mt-4 space-y-2 text-sm tracking-widest text-black/70 font-montserrat">
            <li>• Tight, expressive quartet performances</li>
            <li>• Smooth tunes in a cozy, welcoming setting</li>
            <li>• A chance to connect with jazz lovers and local music fans</li>
            <li>• Great drinks, good food, and a memorable night under the stars</li>
          </ul>

          <p className="mt-8 text-sm tracking-widest text-black/70 font-montserrat">
            Whether you’re a longtime jazz fan or just curious to experience something fresh,
            come early to grab a prime seat and soak in the atmosphere.
          </p>

          <p className="mt-6 italic text-xs text-black/60">
            Tip: Arrive a bit early — these shows tend to fill up!
          </p>

          <div className="mt-10 text-sm tracking-widest">
            <div>
              SHOWTIMES: <strong>6:00 PM & 8:00 PM</strong>
            </div>
            <div className="mt-1">
              TICKETS: <strong>$50</strong>
            </div>
          </div>

          <p className="mt-4 text-xs text-black/50 italic">
            Ticket prices $6 tax & fees added
          </p>

          <ButtonLink to="/tickets" className="mt-8">
            Tickets
          </ButtonLink>

        </div>
      </SplitFeature>

      <div className="flex items-center justify-center gap-6">
        <div className="flex-1 border-t border-black max-w-[420px]" />
          <img src={logo} alt="Wild Olives Logo" className="h-16 w-auto" />
        <div className="flex-1 border-t border-black max-w-[420px]" />
      </div>

      <SplitFeature
        id="music-bingo"
        gridClassName="max-w-6xl mx-auto"
        reverse={true}
        media={
          <img
            src={bingo}
            alt="Music Bingo Wednesdays"
            className="w-auto h-[720px] object-cover"
          />
        }
      >
        <div className="text-center px-10 md:px-16 max-w-[560px] mx-auto">

          <div className="uppercase tracking-[0.45em] text-sm text-black/60 font-raleway pl-[0.45em]">
            Every Wednesday
          </div>

          <h2 className="mt-4 font-raleway uppercase tracking-[0.35em] text-4xl md:text-5xl leading-tight pl-[0.35em]">
            Music Bingo
          </h2>

          <Divider width="w-[60px]" className="mx-auto my-6 border-black/40" />

          <p className="text-sm tracking-widest leading-7 text-black/70 font-montserrat">
            Prepare for fun-filled evenings of music and friendly competition at <strong>Steve's Music Bingo</strong>,
            happening <strong>EVERY WEDNESDAY</strong> at <strong>Wild Olives</strong>! It's the perfect midweek
            escape — great tunes, lively vibes, and plenty of chances to win prizes while enjoying your favorite songs.
          </p>

          <div className="mt-8 font-semibold tracking-widest text-sm">
            What to expect:
          </div>

          <ul className="mt-4 space-y-2 text-sm tracking-widest text-black/70 font-montserrat">
            <li>• A unique twist on bingo, with all your favorite hits</li>
            <li>• A relaxed, upbeat atmosphere with Steve as your host</li>
            <li>• A chance to vibe out with fellow music lovers</li>
            <li>• Delicious food, refreshing drinks, and plenty of chances to win cool prizes</li>
          </ul>

          <p className="mt-8 text-sm tracking-widest text-black/70 font-montserrat">
            If you're a bingo pro or just here for the tunes, grab your friends and come early to snag a good spot.
          </p>

          <div className="mt-10 text-sm tracking-widest">
            WEDNESDAYS: <strong>6:00 PM - 9:00 PM</strong>
          </div>

        </div>
      </SplitFeature>

      <Gallery
        id="gallery"
        rows={[
          {
            images: [cheeseboardSide, bottlesOnIce, corkName],
            cols: 3,
            heightClass: 'h-[600px]',
          },
          {
            images: [grapesBox, cheeseboardOliveHoney],
            cols: 2,
            heightClass: 'h-[600px]',
          },
          {
            images: [redWine, momWineDinner, appetizers],
            cols: 3,
            heightClass: 'h-[600px]',
          },
        ]}
      >
      </Gallery>
    </>
  )
}