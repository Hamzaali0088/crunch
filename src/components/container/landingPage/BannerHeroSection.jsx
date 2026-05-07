import '@fontsource/bebas-neue/400.css'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/container'
import Navbar from '../../common/Navbar'

function BannerHeroSection() {
  const featureItems = [
    {
      heading: 'CHEF-DRIVEN',
      description: 'DELICIOUS BY DESIGN',
      iconPath: '/st-images/bannericons/1.png',
    },
    {
      heading: 'SCIENCE-BACKED',
      description: 'MAX PERFORMANCE',
      iconPath: '/st-images/bannericons/2.png',
    },
    {
      heading: 'COMPLETE NUTRITION',
      description: 'CLEAN & EFFECTIVE',
      iconPath: '/st-images/bannericons/3.png',
    },
    {
      heading: 'END-TO-END',
      description: 'FROM IDEA TO MARKET',
      iconPath: '/st-images/bannericons/4.png',
    },
  ]

  return (
    <section className="relative overflow-hidden">
     

      <FullContainer className="relative px-0 py-0">
      <div className="absolute inset-0">
        <img
          src="/st-images/banner.png"
          alt="Industrial protein production background"
          className="h-full w-full object-cover lg:object-center"
        />
      </div>
        <Container className="flex min-h-[600x] z-20 lg:min-h-[900px] flex-col pt-3 md:px-10">
          <Navbar />

          <div className="mt-24 lg:mt-[240px] max-w-5xl z-20">
            <h1 className="font-bebas text-[64px] leading-[0.92] tracking-[-0.04em] shrink-4 text-white uppercase md:text-[130px]">
              Finally,
              <br />
              Protein worth
              <br />
              <span className="font-dirty-brush text-primary text-[70px] md:text-[144px]">
                craving
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-[20px] leading-tight text-slate-100 md:text-[40px] font-inter font-light">
              Most protein products forget the experience. We put taste first
              crafting protein people actually crave.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-cta"
                className=" font-inter mt-7 w-fit inline-flex text-center flex-col items-center justify-center rounded-full bg-primary px-6 py-2 text-xs lg:text-[16px] font-medium uppercase text-black"
              >
                Work With Us
              </a>
              <a
                href="#why-us"
                className="font-inter mt-7 w-fit inline-flex text-center flex-col items-center justify-center rounded-full border border-white bg-black px-6 py-2 text-xs lg:text-[16px] font-medium uppercase text-white"
              >
                Why Us
              </a>
            </div>
          </div>
        </Container>
      </FullContainer>

      <div className="bg-primary relative lg:hidden">
        <FullContainer className="px-0! py-7!">
          <Container className="lg:my-4 overflow-hidden px-6 md:px-10 ">
            <div className="banner-slider-track flex w-max items-center gap-10">
              {[...featureItems, ...featureItems].map((item, index) => (
                <div key={`${item.heading}-${index}`} className="flex min-w-max items-center justify-start gap-3">
                  <span className="inline-flex items-center justify-center text-black">
                    <img
                      src={item.iconPath}
                      alt={item.heading}
                      className="h-10 w-10 object-contain"
                    />
                  </span>
                  <div className="font-inter uppercase leading-tight text-black">
                    <p className="text-[17px] font-medium tracking-[0.02em]">
                      {item.heading}
                    </p>
                    <p className="text-[14px] font-medium tracking-[0.02em]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </FullContainer>
      </div>
      <div className="bg-primary relative hidden lg:block">
        <FullContainer className="px-0 py-7!">
          <Container className="grid gap-4 px-6 md:grid-cols-4 md:px-10 my-4">
            {featureItems.map((item) => (
              <div key={item.heading} className="flex items-center justify-start gap-3">
                <span className="inline-flex items-center justify-center text-black">
                  <img
                    src={item.iconPath}
                    alt={item.heading}
                    className="h-9 w-9 object-contain md:h-11 md:w-11"
                  />
                </span>
                <div className="font-inter uppercase leading-tight text-black">
                  <p className="text-[17px] font-medium tracking-[0.02em]">
                    {item.heading}
                  </p>
                  <p className="text-[14px] font-medium tracking-[0.02em]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Container>
        </FullContainer>
      </div>
    </section>
  )
}

export default BannerHeroSection
