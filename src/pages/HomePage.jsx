import React from 'react'
import Hero from '../components/ui/Hero'
import HomeCards from '../components/ui/HomeCards'
import JobListings from '../components/ui/JobListings'
import ViewAllJobs from '../components//ui/ViewAllJobs'

const HomePage = () => {
  return (
  <>
    <Hero />
    <HomeCards />
    <JobListings isHome = { true } />
    <ViewAllJobs />
  </>
 )
}

export default HomePage