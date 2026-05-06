import { Link } from 'react-router-dom'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/container'

function SloganSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-linear-to-b from-[#0b0b0b] via-black to-[#0a0a0a]" />
        <div className="absolute -left-24 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-amber-300/40 blur-[95px]" />
        <div className="absolute -right-24 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-amber-300/40 blur-[95px]" />
      </div>

      <FullContainer className="relative">
        <Container className="max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-[#1b1e22]/95 px-8 py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:px-14">
            <h2 className="font-bebas mb-5 text-[45px] font-normal leading-[1.2] text-white uppercase md:text-[72px]">
              We build <span className="font-dirty-brush text-[45px] leading-[1.2] text-primary tracking-[-0.04em] md:text-[72px]">protein brands.</span>
              <br />
              Not just products.
            </h2>

            <Link
              to="/story"
              className="font-inter bg-primary hover-bg-primary-dark rounded-full px-6 py-2 text-sm lg:text-[16px] font-medium uppercase text-black"
            >
              Work With Us
            </Link>
          </div>
        </Container>
      </FullContainer>
    </section>
  )
}

export default SloganSection
