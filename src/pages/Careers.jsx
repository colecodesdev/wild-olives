import Container from '../components/ui/Container'
import ContentBanner from '../components/ui/ContentBanner'
import PageHeroTitle from '../components/ui/PageHeroTitle'
import LogoDivider from '../components/ui/LogoDivider'
import { proseClass } from '../lib/typography'
import CenteredInfoBlock from '../components/sections/CenteredInfoBlock'
import CorkBanner from '../components/sections/CorkBanner'
import CareersForm from '../components/sections/CareersForm'

import heroImg from '../assets/images/careers/family-board.jpg'
import chefCooking from '../assets/images/careers/chef-cooking.jpg'

export default function Careers() {
  return (
    <>
      <ContentBanner
        image={heroImg}
        heightClass="h-[520px]"
        overlayClassName="bg-black/40"
        backgroundClassName='bg-center'
      >
        <Container>
          <PageHeroTitle title="Careers" />
        </Container>
      </ContentBanner>

      <CenteredInfoBlock id="work-with-us" title="Work With Us" dividerWidth="w-[250px] md:w-[520px]">
        <p className={`max-w-3xl mx-6 md:mx-auto ${proseClass}`}>
          Be part of something special at one of the best restaurants on 30A! We’re hiring
          passionate team members who love great food, exceptional service, and a dynamic work
          environment.
        </p>

        <LogoDivider />

        <div className="mt-14">
          <CareersForm />
        </div>
      </CenteredInfoBlock>

      <CorkBanner image={chefCooking} backgroundClassName="bg-[position:40%]" />
    </>
  )
}