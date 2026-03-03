import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import Divider from '../components/ui/Divider'
import ButtonLink from '../components/ui/ButtonLink'
import Grid from '../components/ui/Grid'
import ImageTile from '../components/ui/ImageTile'
import logo from '../assets/logos/logo.png'
import crazyView from '../assets/images/home/crazy-view.jpg'
import cheers from '../assets/images/home/cheers.jpg'
import bigCheeseboard from '../assets/images/home/big-cheeseboard.JPG'
import corksUnedited from '../assets/images/home/corks_unedited.jpg'
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


export default function Home() {
  return (
    <>
      <ParallaxBanner
        image={crazyView}
        heightClass="h-[calc(100vh-112px)]"
        overlayClassName="bg-black/30"
        title="Wild Olives"
        subtitle="Bistro • Wine • Craft Cocktails"
      />

      <Section id="hours" className="py-20">
        <Container className="text-center">
          <div className="flex items-center justify-center gap-6">
            <div className="font-raleway uppercase tracking-[1rem] text-4xl md:text-5xl text-center pl-[1rem]">
              HOURS &<br></br>LOCATION
            </div>
          </div>

          <Divider width="w-[380px]" className='my-4'/>

          <div className="uppercase text-lg font-light tracking-widest">
            4771 E County Hwy 30A Unit C 103<br></br> Santa Rosa Beach, FL 32459
          </div>

            <ButtonLink to="/reservations" className='mt-6'>Reservations</ButtonLink>

            <div className="flex items-center justify-center gap-6 my-16">
              <div className="flex-1 border-t border-black max-w-[300px]" />
              
              <img
                src={logo}
                alt="Wild Olives Logo"
                className="h-16 w-auto"
              />

              <div className="flex-1 border-t border-black max-w-[300px]" />
            </div>


          <div className="flex justify-center space-x-20">
            <div className="flex flex-col text-center">
              <Heading as="h3" className="text-2xl uppercase tracking-widest">
                Open Daily
              </Heading>
              <div className='text-lg font-light tracking-widest'>4PM - 10PM</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 mt-6">
            <ButtonLink to="/menu">Menu</ButtonLink>
          </div>
        </Container>
      </Section>

      <ParallaxBanner
        image={corks}
        heightClass="h-[500px]"
        overlayClassName="bg-black/30"
      >
        <div className="h-full flex justify-center">
          <img
            src={corkOverlay}
            alt=""
            className="self-start"
          />
        </div>
      </ParallaxBanner>

      <PrivateEvents />

      <Section id="gallery">
        <div className='w-full'>
          <Grid className="grid gap-2 md:grid-cols-3 h-[600px]">
            <ImageTile src={cheers} />
            <ImageTile src={chablis} />
            <ImageTile src={cheersNew} />
          </Grid>

          <Grid className="hidden mt-2 gap-2 md:grid md:grid-cols-2 h-[600px]">
            <ImageTile src={bigCheeseboard} />
            <ImageTile src={cazcanes} />
          </Grid>
        </div>
      </Section>

      <Section id="stay-wild" className="py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <ImageTile
            src={chrisAndSlayde}
            className="h-[600px] hidden md:block rounded-r-sm"
            zoom={false}
          />
          <div className="text-center px-28">
            <Heading
              as="h2"
              className="font-raleway uppercase tracking-[1rem] text-4xl md:text-5xl text-center pl-[1rem]"
            >
              Stay Wild
            </Heading>

            <Divider className="my-4" width='w-[420px]' />

            <p className="mb-7 px-24 text-md tracking-widest leading-7 text-black/70 font-montserrat">
              Chef Chris Trovas brings you Wild Olives Bistro on 30a. Everything from our wine selection, cocktails, and ambiance will remind you of your favorite old-world travels and the updated amenities of the new world. We can’t wait to welcome you into our kitchen. Wild Olives has always been like entering the home of the Trovas family. Think of this as the same homey, familial experience, with a renovation!
            </p>


            <ButtonLink to="/our-story" className='mb-7'>Our Story</ButtonLink>
            <img src={logo} alt="Wild Olives Logo" className="h-24 w-auto mx-auto"/>
          </div>
        </div>
      </Section>

      <ParallaxBanner
        image={liquorBg}
        heightClass="h-[500px]"
        overlayClassName="bg-black/30"
      >
        <div className="h-full flex items-center justify-center text-center px-6">
          <h2
            className="text-white font-raleway font-semibold italic leading-loose text-3xl md:text-5xl md:w-[1050px] tracking-wide"
            style={{
              textShadow:
                'rgba(0, 0, 0, 0.5) -1px -1px 0px, rgba(0, 0, 0, 0.5) -1px 1px 0px, rgba(0, 0, 0, 0.5) 1px 1px 0px, rgba(0, 0, 0, 0.5) 1px -1px 0px',
            }}
          >
            "A little more than enough to drink;<br></br>for thirst is a dangerous thing.”
          </h2>
        </div>
      </ParallaxBanner>

      <Section id="follow-us" className="pt-20">
        <div>
          <div className="text-center mb-20">
            <Heading
              as="h2"
              className="font-raleway uppercase tracking-[1rem] text-4xl md:text-5xl text-center pl-[1rem]"
            >
              Follow Us
            </Heading>

            <Divider className='my-4' width='w-[420px]' />

            <a
              href="https://instagram.com/wildolives30a"
              target="_blank"
              rel="noreferrer"
              className="italic text-2xl tracking-widest leading-7 text-black/70 font-montserrat"
            >
              @wildolives30a
            </a>
          </div>

          <Grid className="grid gap-2 md:grid-cols-5 h-[420px]">
            <ImageTile src={pancakesEspresso} />
            <ImageTile src={woBarrel} />
            <ImageTile src={baconDrink} />
            <ImageTile src={fallHours} />
            <ImageTile src={bottleRack} />
          </Grid>
        </div>
      </Section>
    </>
  )
}