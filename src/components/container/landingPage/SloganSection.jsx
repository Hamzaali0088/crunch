import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'

function SloganSection() {
  return (
    <section className="relative overflow-hidden bg-black">
       <div className='absolute inset-0 '>
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
      <FullContainer className="relative ">
        <Container className="max-w-4xl">
          <div className="rounded-3xl bg-[#1c1c1c] max-w-4xl mx-auto px-8 py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:px-14">
            <h2 className="font-bebas mb-5 text-[45px] font-normal leading-[1.2] text-white uppercase md:text-[72px]">
              We build <span className="font-dirty-brush text-[45px] leading-[1.2] text-primary tracking-[-0.04em] md:text-[72px]">protein brands.</span>
              <br />
              Not just products.
            </h2>

            <a
              href="#contact-cta"
              className="font-inter mt-7 w-fit inline-flex text-center flex-col items-center justify-center rounded-full bg-primary hover:bg-black! transition-all duration-300 hover:text-white border border-primary hover:border-white! hover:border px-6 py-2 text-xs lg:text-[16px] font-medium uppercase text-black"
            >
              Work With Us
            </a>
          </div>
        </Container>
      </FullContainer>
    </section>
  )
}

export default SloganSection
