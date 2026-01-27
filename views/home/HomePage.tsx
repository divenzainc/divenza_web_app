import HeroSection from '@/components/HeroSection'
import HeroSectionAutomated from '@/components/HeroSectionAutomated'
import HowToBuildSolutions from '@/components/HowToBuildSolutions'
import ProductListSection from '@/components/ProductListSection'
import TechStack from '@/components/TechStack'
import WhatWeDoSection from '@/components/WhatWeDoSection'
import WhoWeAreSection from '@/components/WhoWeAreSection'
import React, { Fragment } from 'react'

const HomePage = () => {
  return (
      <Fragment>
          <HeroSectionAutomated />
          <TechStack />
          <WhoWeAreSection />
          <WhatWeDoSection />
          <ProductListSection />
          <HowToBuildSolutions />
      </Fragment>
  )
}

export default HomePage