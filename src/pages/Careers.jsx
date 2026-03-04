import Container from '../components/ui/Container'
import ContentBanner from '../components/ui/ContentBanner'
import PageHeroTitle from '../components/ui/PageHeroTitle'
import CenteredInfoBlock from '../components/sections/CenteredInfoBlock'
import CareersForm from '../components/sections/CareersForm'

import heroImg from '../assets/images/careers/family-board.jpg'
import logo from '../assets/logos/logo.png'
import chefCooking from '../assets/images/careers/chef-cooking.jpg'
import corkOverlay from '../assets/images/home/cork-overlay.webp'

export default function Careers() {
  return (
    <>
      <ContentBanner
        image={heroImg}
        heightClass="h-[520px]"
        overlayClassName="bg-black/40"
      >
        <Container>
          <PageHeroTitle title="Careers" subtitle="Wild Olives 30a" />
        </Container>
      </ContentBanner>

      <CenteredInfoBlock id="work-with-us" title="Work With Us" dividerWidth="w-[520px]">
        <p className="max-w-3xl mx-auto text-sm tracking-widest leading-7 text-black/70 font-montserrat">
          Be part of something special at one of the best restaurants on 30A! We’re hiring
          passionate team members who love great food, exceptional service, and a dynamic work
          environment.
        </p>

        <div className="flex items-center justify-center gap-6 my-16">
          <div className="flex-1 border-t border-black max-w-[300px]" />
            <img src={logo} alt="Wild Olives Logo" className="h-16 w-auto" />
          <div className="flex-1 border-t border-black max-w-[300px]" />
        </div>

        <div className="mt-14">
          <CareersForm />
        </div>
      </CenteredInfoBlock>

      <ContentBanner
        image={chefCooking}
        heightClass="h-[520px]"
        overlayClassName="bg-black/40"
        backgroundClassName="bg-[position:40%]"
      >
        <img src={corkOverlay} alt="" className="h-72 w-auto" />
      </ContentBanner>
    </>
  )
}