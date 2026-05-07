import FullContainer from '../../common/FullContainer'
import Container from '../../common/container'

function WhyUsSection() {
  const cards = [
    {
      title: 'The protein market is overcrowded.',
      subtitle: 'The market needs better products.',
      body: 'The protein industry isn’t short on options — it’s full of products that prioritize numbers over experience. Chalky textures, artificial taste, and forgettable formulas dominate the shelf. We believe protein should be something people want to eat, not something they force down.',
    },
    {
      title: "Brands don't need more formulas.",
      subtitle: 'Brands need better execution.',
      body: 'The ingredients already exist. The science is proven. What’s missing is the ability to turn those into products people actually enjoy. We combine food science with real culinary thinking to create protein products that perform — and taste incredible.',
    },
    {
      title: "Consumers don't compromise.",
      subtitle: 'There are no trade-offs.',
      body: 'Taste, nutrition, texture, and clean ingredients — today’s consumer expects all of it. Not one over the other. We build protein products that deliver on every front, creating experiences that drive repeat consumption, not just first-time trials.',
    },
  ]

  return (
    <section id="why-us" className="relative overflow-hidden bg-[#040404]">
      <FullContainer className="relative">
        <div className='absolute z-0 inset-0 '>
          <svg width="1741" height="1386" viewBox="0 0 1741 1386" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_0_1)">
              <path d="M-234.119 1195.5C247.636 1280.42 697.203 938 697.203 938C697.203 938 316.535 1873.76 569.381 1621.5C822.226 1369.24 -189.422 1232.46 -55.6193 1591.5C78.1832 1950.54 -715.875 1110.58 -234.119 1195.5Z" fill="url(#paint0_linear_0_1)" />
            </g>
            <g filter="url(#filter1_f_0_1)">
              <path d="M1000.76 769.197C1000.76 769.197 1210.07 -850.298 1258.25 330.375C1306.43 1511.05 1317.21 -232.172 1527.04 44.5859C1736.86 321.344 1389.03 913.286 1206.19 522.67C1023.35 132.054 1000.76 769.197 1000.76 769.197Z" fill="url(#paint1_linear_0_1)" style={{ mixBlendMode: 'plus-lighter' }} />
            </g>
            <g filter="url(#filter2_f_0_1)" style={{ mixBlendMode: 'plus-lighter' }}>
              <path d="M-316.297 729.846C-316.297 729.846 -145.073 -595.023 -105.657 370.856C-66.2419 1336.74 -57.4207 -89.3494 114.233 137.059C285.886 363.468 1.33095 847.722 -148.245 528.168C-297.821 208.615 -316.297 729.846 -316.297 729.846Z" fill="url(#paint2_linear_0_1)" style={{ mixBlendMode: 'plus-lighter' }} />
            </g>
            <defs>
              <filter id="filter0_f_0_1" x="-591" y="738" width="1488.2" height="1143.24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_0_1" />
              </filter>
              <filter id="filter1_f_0_1" x="852.765" y="-248.605" width="887.48" height="1165.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="74" result="effect1_foregroundBlur_0_1" />
              </filter>
              <filter id="filter2_f_0_1" x="-464.297" y="-129.718" width="779.875" height="1007.56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="74" result="effect1_foregroundBlur_0_1" />
              </filter>
              <linearGradient id="paint0_linear_0_1" x1="153.102" y1="938" x2="153.102" y2="1681.24" gradientUnits="userSpaceOnUse">
                <stop stop-color="#371E0D" />
                <stop offset="1" stop-color="#261F0E" />
              </linearGradient>
              <linearGradient id="paint1_linear_0_1" x1="1433.35" y1="-13.4531" x2="1130.96" y2="816.626" gradientUnits="userSpaceOnUse">
                <stop stop-color="#221E03" />
                <stop offset="1" stop-color="#301003" />
              </linearGradient>
              <linearGradient id="paint2_linear_0_1" x1="37.5921" y1="89.5791" x2="-209.787" y2="768.646" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFE958" />
                <stop offset="1" stop-color="#FF7B45" />
              </linearGradient>
            </defs>
          </svg>
        </div>


        <Container className='z-20 relative'>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <img
                src="/st-images/whyUs.png"
                alt="Protein bar and chips visual"
                className="w-full max-w-xl object-cover"
              />
            </div>
            <div>
              <span className="inline-flex font-inter rounded-full backdrop-blur-sm bg-white/10 border-t-[0.5px] border-l-[0.5px] border-white/70 py-2 px-4 text-xs lg:text-[16px] font-light capitalize  text-amber-300">
                Why Us
              </span>
              <h2 className="mt-4 font-bebas text-[45px] font-normal leading-[1.2] text-white uppercase md:text-[72px]">
                Real protein innovation only matters when people
                <span className="block font-dirty-brush text-[45px] leading-[1.2] text-primary tracking-[-0.04em] md:text-[72px] w-fit">crave it.</span>
              </h2>
              <p className="mt-5 font-inter text-sm lg:text-[16px] font-semibold max-w-2xl leading-relaxed text-slate-300">
                Too many protein products focus on function and forget the experience. The result is a market full of ideas that look good on paper but fall short where it counts taste, texture, and real consumer appeal.
                <br />
                We take a different approach. By combining advanced food science with chef-driven development, we create protein products that deliver both performance and flavor. Every detail from ingredients to mouthfeel is engineered to meet the highest standard.
                <br />
                From idea to market, we build protein foods that people don’t just try they come back for.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:gap-16 md:grid-cols-3 max-w-6xl mx-auto z-10">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[28px] border border-white/30 bg-linear-to-b from-[#262626] to-[#1a1a1a] p-1 lg:p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
              >
                <div className="h-full rounded-[24px] bg-linear-to-b from-white to-[#1a1a1a] from-20% to-75% px-3 py-10 border-2 border-black">
                  <h3 className="font-bebas text-[24px] font-normal leading-[0.9] text-black uppercase md:text-[42px] lg:text-[58px]">
                    {card.title}
                  </h3>
                  <p className="font-inter text-[16px] font-light max-w-2xl mt-2 leading-tight text-white md:text-[24px]">
                    {card.subtitle}
                  </p>
                  <p className="font-inter text-[14px] font-light max-w-2xl mt-4 leading-tight text-white md:text-[16px]">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </FullContainer>
    </section>
  )
}

export default WhyUsSection


