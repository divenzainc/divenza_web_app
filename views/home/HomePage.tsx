import HeroSection from '@/components/HeroSection'
import HeroSectionAutomated from '@/components/HeroSectionAutomated'
import TechStack from '@/components/TechStack'
import React, { Fragment } from 'react'

const HomePage = () => {
  return (
      <Fragment>
          {/* <HeroSection /> */}
          <HeroSectionAutomated />
          <TechStack />
      </Fragment>
  )
}

export default HomePage