import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import Divider from '../components/ui/Divider'
import ButtonLink from '../components/ui/ButtonLink'
import ImageTile from '../components/ui/ImageTile'
import logo from '../assets/logos/logo.png'
import crazyView from '../assets/images/home/crazy-view.jpg'
import cheers from '../assets/images/home/cheers.jpg'
import bigCheeseboard from '../assets/images/home/big-cheeseboard.JPG'
import chablis from '../assets/images/home/97-chablis.jpg'
import cheersNew from '../assets/images/home/cheers-new.jpg'
import chrisAndSlayde from '../assets/images/home/chris-and-slayde.JPG'
import pancakesEspresso from '../assets/images/home/pancakes-espresso.jpg'
import woBarrel from '../assets/images/home/wo-barrel.jpg'
import baconDrink from '../assets/images/home/bacon-drink.jpg'
import fallHours from '../assets/images/home/fall-hours.jpg'
import bottleRack from '../assets/images/home/bottle-rack.jpg'
import ParallaxBanner from '../components/ui/ParallaxBanner'
import corks from '../assets/images/home/corks_unedited.jpg'
import corkOverlay from '../assets/images/home/cork-overlay.webp'
import liquorBg from '../assets/images/home/liquor-wall.jpg'
import cazcanes from '../assets/images/home/cazcanes.jpg'
import PrivateEvents from '../components/sections/PrivateEvents'
import HeroTitle from '../components/ui/HeroTitle'
import ContentBanner from '../components/ui/ContentBanner'
import SplitFeature from '../components/sections/SplitFeature'
import Gallery from '../components/sections/Gallery'
import SocialGrid from '../components/sections/SocialGrid'
import CenteredInfoBlock from '../components/sections/CenteredInfoBlock'

export default function Home() {
  return (
    <>
      <ParallaxBanner
        image={crazyView}
        heightClass="h-[calc(100vh-112px)]"
        overlayClassName="bg-black/30"
      >
        <Container>
          <HeroTitle
            title="Wild Olives"
            subtitle="Bistro • Wine • Craft Cocktails"
          />
        </Container>
      </ParallaxBanner>

      <CenteredInfoBlock
        id="hours"
        title={
          <>
            HOURS &<br />LOCATION
          </>
        }
        topContent={
          <div className="uppercase text-medium font-light tracking-widest">
            4771 E County Hwy 30A Unit C 103<br /> Santa Rosa Beach, FL 32459
          </div>
        }
        primaryCta={<ButtonLink to="/reservations" className="mt-6">Reservations</ButtonLink>}
        middleBrand={
          <div className="flex items-center justify-center gap-6 my-16">
            <div className="flex-1 border-t border-black max-w-[300px]" />

            <img src={logo} alt="Wild Olives Logo" className="h-16 w-auto" />

            <div className="flex-1 border-t border-black max-w-[300px]" />
          </div>
        }
        bottomContent={
          <>
            <div className="flex justify-center space-x-20">
              <div className="flex flex-col text-center">
                <div className="text-2xl uppercase tracking-widest font-raleway">
                  Open Daily
                </div>
                <div className="text-medium font-light tracking-widest">4PM - 10PM</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 mt-6">
              <ButtonLink to="/menu">Menu</ButtonLink>
            </div>
          </>
        }>
      </CenteredInfoBlock>

      <ContentBanner image={corks} heightClass="h-[500px]" overlayClassName="bg-black/40">
        <div className="h-full flex justify-center items-center">
          <img src={corkOverlay} alt="" className="h-72 w-auto" />
        </div>
      </ContentBanner>

      <PrivateEvents />

      <Gallery
        id="gallery"
        rows={[
          {
            images: [cheers, chablis, cheersNew],
            cols: 3,
            heightClass: 'h-[600px]',
          },
          {
            images: [bigCheeseboard, cazcanes],
            cols: 2,
            heightClass: 'h-[600px]',
          },
        ]}
      >
      </Gallery>

      <SplitFeature
        id="stay-wild"
        media={
          <ImageTile
            src={chrisAndSlayde}
            className="h-[600px] hidden md:block rounded-r-sm"
            zoom={false}
          />
        }
      >
        <div className="text-center px-28">
          <Heading
            as="h2"
            className="font-raleway uppercase tracking-[1rem] text-4xl md:text-5xl text-center pl-[1rem]"
          >
            Stay Wild
          </Heading>

          <Divider className="my-4" width="w-[420px]" />

          <p className="mb-7 px-24 text-md tracking-widest leading-7 text-black/70 font-montserrat">
            Chef Chris Trovas brings you Wild Olives Bistro on 30a. Everything from our wine selection, cocktails, and ambiance will remind you of your favorite old-world travels and the updated amenities of the new world. We can’t wait to welcome you into our kitchen. Wild Olives has always been like entering the home of the Trovas family. Think of this as the same homey, familial experience, with a renovation!
          </p>

          <ButtonLink to="/our-story" className="mb-7">
            Our Story
          </ButtonLink>

          <img src={logo} alt="Wild Olives Logo" className="h-24 w-auto mx-auto" />
        </div>
      </SplitFeature>

      <ContentBanner image={liquorBg}>
        <div className="text-center px-6">
          <h2
            className="text-white font-raleway font-semibold italic leading-loose text-3xl md:text-5xl md:w-[1050px] tracking-wide"
            style={{
              textShadow:
                'rgba(0, 0, 0, 0.5) -1px -1px 0px, rgba(0, 0, 0, 0.5) -1px 1px 0px, rgba(0, 0, 0, 0.5) 1px 1px 0px, rgba(0, 0, 0, 0.5) 1px -1px 0px',
            }}
          >
            "A little more than enough to drink;<br />for thirst is a dangerous thing.”
          </h2>
        </div>
      </ContentBanner>

      <SocialGrid
        id="follow-us"
        profileUrl="https://instagram.com/wildolives30a"
        handleText="@wildolives30a"
        images={[pancakesEspresso, woBarrel, baconDrink, fallHours, bottleRack]}
      ></SocialGrid>
    </>
  )
}