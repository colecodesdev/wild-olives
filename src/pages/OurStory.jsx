import Container from '../components/ui/Container'
import Divider from '../components/ui/Divider'
import Heading from '../components/ui/Heading'
import PageHeroTitle from '../components/ui/PageHeroTitle'
import ContentBanner from '../components/ui/ContentBanner'
import SplitFeature from '../components/sections/SplitFeature'

import heroImg from '../assets/images/our-story/old-wildolives.jpg'
import chrisImg from '../assets/images/our-story/chris-pic.webp'
import bannerImg from '../assets/images/our-story/store-banner.jpg'
import corkOverlay from '../assets/images/home/cork-overlay.webp'

export default function OurStory() {
  return (
    <>
      <ContentBanner image={heroImg} heightClass="h-[520px]" overlayClassName="bg-black/40" backgroundClassName='bg-bottom'>
        <Container>
          <PageHeroTitle title="Our Story" subtitle="Wild Olives 30a" />
        </Container>
      </ContentBanner>

      <SplitFeature
        id="chris-trovas"
        reverse
        media={
          <img
            src={chrisImg}
            alt="Chris Trovas"
            className="w-full h-auto object-cover"
          />
        }
      >
        <div className="text-center pl-28">
          <Heading
            as="h2"
            className="font-raleway uppercase tracking-[1rem] text-4xl md:text-5xl text-center pl-[1rem]"
          >
            Chris Trovas
          </Heading>

          <Divider className="my-4" width="w-[420px]" />

          <p className="px-24 text-md tracking-widest leading-7 text-black/70 font-montserrat">
            With a Greek heritage and a profound respect for education instilled by his family, Chris embodies humility and a grounded perspective. His love for hunting, fishing, and cherishing moments with his grandkids reflects his appreciation for life’s simple pleasures and a genuine connection to nature. In 2005, Chris realized a dream by opening the original Wild Olives in Rosemary Beach—quickly earning its reputation as one of the best restaurants in Rosemary Beach. Over the years, he has owned and operated several successful 30A restaurants, each showcasing his dedication to quality and hospitality. Now, after fifteen successful years, he embarks on a new milestone with his latest restaurant, a culmination of lifelong dedication and a shared vision with his partner, Slayde. Chris's unwavering commitment to excellence continues to elevate the culinary industry. Join him on an extraordinary gastronomic journey marked by passion, expertise, and the pursuit of perfection—a truly unforgettable experience awaits.
          </p>
        </div>
      </SplitFeature>

      <ContentBanner
        image={bannerImg}
        heightClass="h-[520px]"
         backgroundClassName='bg-bottom'
      >
        <img src={corkOverlay} alt="" className="h-72 w-auto" />
      </ContentBanner>
    </>
  )
}