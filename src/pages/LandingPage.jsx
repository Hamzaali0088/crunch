import BannerHeroSection from '../components/container/landingPage/BannerHeroSection'
import ContactCtaSection from '../components/container/landingPage/ContactCtaSection'
import IdeaToImpactSection from '../components/container/landingPage/IdeaToImpactSection'
import OurTeamSection from '../components/container/landingPage/OurTeamSection'
import ProteinMethodSection from '../components/container/landingPage/ProteinMethodSection'
import ProteinPromiseSection from '../components/container/landingPage/ProteinPromiseSection'
import SiteFooter from '../components/container/landingPage/SiteFooter'
import SloganSection from '../components/container/landingPage/SloganSection'
import WhatWeDoSection from '../components/container/landingPage/WhatWeDoSection'
import WhyUsSection from '../components/container/landingPage/WhyUsSection'

function LandingPage() {
  return (
    <div>
      <BannerHeroSection />
      <WhyUsSection />
      <ProteinPromiseSection />
      <ProteinMethodSection />
      <WhatWeDoSection />
      <IdeaToImpactSection />
      <SloganSection />
      <OurTeamSection />
      <ContactCtaSection />
      <SiteFooter />
    </div>
  )
}

export default LandingPage
